import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import BlogSingleCard from './BlogSingleCard';
import BlogSidebar from './BlogSidebar';
import BlogPagination from './BlogPagination';
import { useState, useEffect } from "react";
import { useRouter } from 'next/router';
import BlogSidebarKeyword from './BlogSidebarKeyword';


// const BLOG_DATA = [   
//     {
//       blogImg:"/assets/images/blog/blog-1.jpg",
//       blogLink:"/single-blog",
//       catLink:"/blog",
//       blogCat:"Digital Marketing",
//       blogAuthor:"Andrew Smith",
//       blogDate:"23 Mar 2022",
//       blogTitle:"Prim umber network ormholes take hidden musics",
//       blogText:"Kindling the energy hidden in matter the only home we've ever known radio telescope decipherment descended from astronomers rogue."
//     },   
//     {
//       blogImg:"/assets/images/blog/blog-2.jpg",
//       blogLink:"/single-blog",
//       catLink:"/blog",
//       blogCat:"Digital Marketing",
//       blogAuthor:"Andrew Smith",
//       blogDate:"23 Mar 2022",
//       blogTitle:"Prim umber network ormholes take hidden musics",
//       blogText:"Kindling the energy hidden in matter the only home we've ever known radio telescope decipherment descended from astronomers rogue."
//     },   
//     {
//       blogImg:"/assets/images/blog/blog-3.jpg",
//       blogLink:"/single-blog",
//       catLink:"/blog",
//       blogCat:"Digital Marketing",
//       blogAuthor:"Andrew Smith",
//       blogDate:"23 Mar 2022",
//       blogTitle:"Prim umber network ormholes take hidden musics",
//       blogText:"Kindling the energy hidden in matter the only home we've ever known radio telescope decipherment descended from astronomers rogue."
//     },   
//     {
//       blogImg:"/assets/images/blog/blog-4.jpg",
//       blogLink:"/single-blog",
//       catLink:"/blog",
//       blogCat:"Digital Marketing",
//       blogAuthor:"Andrew Smith",
//       blogDate:"23 Mar 2022",
//       blogTitle:"Prim umber network ormholes take hidden musics",
//       blogText:"Kindling the energy hidden in matter the only home we've ever known radio telescope decipherment descended from astronomers rogue."
//     } 

//   ];

const Blog = () => {

  const { query } = useRouter();

  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [recordsPerPage] = useState(2);

  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;

  useEffect(() => {
    setLoading(true);
    if (query.keyword && query.keyword !== "" && query.keyword !== "undefined") {
      fetch(`/api/blogs?keyword=${query.keyword}`)
        .then((res) => res.json())
        .then((data) => {
          setData(data?.data);
          setLoading(false);
        });
    }
    fetch(`/api/blogs?category=${query.category}`)
      .then((res) => res.json())
      .then((data) => {
        setData(data?.data);
        setLoading(false);
      });

  }, [query.keyword, query.category]);


  console.log(data)

  if (isLoading) return <p>Loading...</p>;
  if (!data) return <p>No blog data</p>;

  const currentRecords = data.slice(indexOfFirstRecord, indexOfLastRecord);
  const nPages = Math.ceil(data.length / recordsPerPage);

  return (
    <>
      {/* <section className="">
      </section> */}
      <section className="blog__area blog__area-pb p-relative pt-120 pt-40-blogs-md pb-260">

        <Container>
          <Row className='zero-display-computer-lg' style={{paddingTop:"0px"}}>
            <Col xl={8} lg={8}>
              <BlogSidebarKeyword />
            </Col>

          </Row>
          <Row>
            <Col xl={8} lg={8}>
              <div className="blog__wrapper">
                {currentRecords?.map(
                  (
                    {
                      _id,
                      thumbnail,
                      category,
                      author,
                      date,
                      title,
                      description,
                    },
                    index
                  ) => (
                    <BlogSingleCard
                      key={index}
                      blogLink={`blog/${_id}`}
                      blogImg={thumbnail}
                      catLink={category}
                      blogCat={category}
                      blogAuthor={author}
                      blogDate={date}
                      blogTitle={title}
                      blogText={description}
                    />
                  )
                )}
                <BlogPagination
                  nPages={nPages}
                  currentPage={currentPage}
                  setCurrentPage={setCurrentPage}
                />
              </div>
            </Col>
            <Col xl={4} lg={4}>
              <BlogSidebar />
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};


export default Blog;
