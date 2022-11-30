import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import Link from 'next/link';
import PostAuthor from './PostAuthor';
import PostComment from './PostComment';
import CommentForm from './CommentForm';
import BlogSidebar from './BlogSidebar';
import parse from 'html-react-parser';

const months = ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"];

const BlogDetails = ({ data }) => {
    const content = parse(data.content);
    return (
      <section className="blog__area blog__area-pb-2 p-relative pt-120 pb-260">
        <Container>
          <Row>
            <Col xl={8} lg={8}>
              <div className="blog__wrapper">
                <div className="blog__single">
                  <div className="blog__single-thumb">
                    <img src={data.thumbnail} alt="blog" />
                  </div>
                  <div className="blog__single-content blog__single-details">
                    <div className="blog__single-content-tag">
                      <Link href="/blog">
                        <a>{data.category}</a>
                      </Link>
                    </div>
                    <div className="blog__single-content-meta">
                      <ul>
                        <li>
                          <Link href="/single-blog">
                            <a>
                              <i className="far fa-user"></i>
                              {data.author}
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/single-blog">
                            <a>
                              <i className="far fa-calendar-alt"></i>
                              {new Date(data.date).getDate()}{" "}
                              {months[new Date(data.date).getMonth()]}{" "}
                              {new Date(data.date).getFullYear()}
                            </a>
                          </Link>
                        </li>
                      </ul>
                    </div>
                    <h2>{data.title}</h2>

                    <div>{content}</div>
                    {/* <PostAuthor/>
                                        <PostComment/>
                                        <CommentForm/> */}
                  </div>
                </div>
              </div>
            </Col>
            <Col xl={4} lg={4}>
              <BlogSidebar />
            </Col>
          </Row>
        </Container>
      </section>
    );
};

export default BlogDetails;