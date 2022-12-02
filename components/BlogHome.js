import React, {useState, useEffect} from 'react';
import { Container, Row, Col } from "react-bootstrap";
import SectionTitle from './SectionTitle';
import BlogHomeCard from './BlogHomeCard';

const BLOG_DATA = [
  {
    blogImg: "https://maxdi.vercel.app/assets/images/blog/blog-img-1.jpg",
    blogLink: "/single-blog",
    blogDate: "22 March, 2022",
    blogCat: "Marketing",
    catLink: "/blog",
    blogTitle: "Post launch shower initiative forward",
  },
  {
    blogImg: "https://maxdi.vercel.app/assets/images/blog/blog-img-2.jpg",
    blogLink: "/single-blog",
    blogDate: "22 March, 2022",
    blogCat: "Marketing",
    catLink: "/blog",
    blogTitle: "Delivering the best digital marketing",
  },
  {
    blogImg: "https://maxdi.vercel.app/assets/images/blog/blog-img-3.jpg",
    blogLink: "/single-blog",
    blogDate: "22 March, 2022",
    blogCat: "Marketing",
    catLink: "/blog",
    blogTitle: "This is our north star design baseline",
  },
];

const BlogHome = ({ extraClass }) => {

    const [data, setData] = useState(null);
    const [isLoading, setLoading] = useState(false);

     useEffect(() => {
       setLoading(true);
       fetch("/api/blogs")
         .then((res) => res.json())
         .then((data) => {
           setData(data?.data);
           setLoading(false);
         });
     }, []);

     if (isLoading) return <p>Loading...</p>;
    if (!data) return <p>No blog data</p>;

    const topBlog = data.slice(0,3);
    
    return (
      <section className={`blog__area fix p-relative ${extraClass} pb-225`}>
        <div className="blog__shape">
          <img
            className="blog-shape-1"
            src="assets/images/shape/blog/blog-s-1.png"
            alt=""
          />
          <img
            className="blog-shape-2"
            src="assets/images/shape/blog/blog-s-2.png"
            alt=""
          />
          <img
            className="blog-shape-3 d-none d-sm-block"
            src="assets/images/shape/blog/blog-s-3.png"
            alt=""
          />
          <img
            className="blog-shape-4"
            src="assets/images/shape/blog/blog-s-4.png"
            alt=""
          />
          {/* <img className="blog-shape-5 d-none d-sm-block" src="assets/images/shape/blog/blog-s-5.png" alt=""/> */}
        </div>
        <Container>
          <Row className="mb-65">
            <Col xl={12}>
              <div className="blog__title text-center">
                <SectionTitle
                  subTitle="Our Blog"
                  titleFirst="Our latest updates"
                />
                <p>
                  High turnaround rate and loop back vec but we want to empower
                  the team with the right tools and guidance.
                </p>
              </div>
            </Col>
          </Row>
          <Row>
            {topBlog?.map(
              (
                { _id, thumbnail, category, author, date, title, description },
                index
              ) => (
                <BlogHomeCard
                  key={index}
                  blogLink={`blog/${_id}`}
                  blogImg={thumbnail}
                  blogDate={date}
                  blogCat={category}
                  catLink={category}
                  blogTitle={title}
                />
              )
            )}
          </Row>
        </Container>
      </section>
    );
};

export default BlogHome;