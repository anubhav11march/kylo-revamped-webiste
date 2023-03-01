import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import Link from 'next/link';

const PageHeader = ({title, crumbTitle}) => {
    return (
      <section className="page__title-area page__title-height fix d-flex align-items-center p-relative">
        <div className="page__title-shape">
          <img
            className="page-title-s-1 d-none d-md-block"
            src="/assets/images/shape/page-title/page-title-s-1.png"
            alt=""
          />
          <img
            className="page-title-s-2"
            src="/assets/images/shape/page-title/page-title-s-2.png"
            alt=""
          />
          <img
            className="page-title-s-3"
            src="/assets/images/shape/page-title/page-title-s-3.png"
            alt=""
          />
          <img
            className="page-title-s-4"
            src="/assets/images/shape/page-title/page-title-s-4.png"
            alt=""
          />
          <img
            className="page-title-s-5"
            src="/assets/images/shape/page-title/page-title-s-5.png"
            alt=""
          />
          <img
            className="page-title-s-6"
            src="/assets/images/shape/page-title/page-title-s-6.png"
            alt=""
          />
          <img
            className="page-title-s-7 d-none d-md-block"
            src="/assets/images/shape/page-title/page-title-s-7.png"
            alt=""
          />
        </div>
        <Container>
          <Row className="align-items-center">
            <Col xl={6} lg={6} md={6} sm={10}>
              <div className="page__title-wrapper">
                <h2 className="page__title-heading"><nobr>{title}</nobr></h2>
              </div>
              {title === "Careers" ? (
                <Link href="/careers/jobs">
                  <a
                    className="m-btn mb-20 mb-md-0 mt-10 mt-md-50 job-btn"
                    style={{
                      background: "transparent",
                      border: "2px solid white",
                      fontSize: "21px",
                      fontWeight : "550",
                      padding: "8px 30px",
                      borderRadius: "5px",
                      // marginLeft: "10px",
                    }}
                  >
                    Job Openings &nbsp;
                    <span>
                      <svg
                        className='arrow_svg'
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth="0"
                        viewBox="0 0 16 16"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10.146 4.646a.5.5 0 01.708 0l3 3a.5.5 0 010 .708l-3 3a.5.5 0 01-.708-.708L12.793 8l-2.647-2.646a.5.5 0 010-.708z"
                          clipRule="evenodd"
                        ></path>
                        <path
                          fillRule="evenodd"
                          d="M2 8a.5.5 0 01.5-.5H13a.5.5 0 010 1H2.5A.5.5 0 012 8z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </span>
                  </a>
                </Link>
              ) : (
                ""
              )}
            </Col>
            <Col xl={6} lg={6} md={6} sm={10}>
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link href="/">
                      <a>Home</a>
                    </Link>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    {crumbTitle}
                  </li>
                </ol>
              </nav>
            </Col>
          </Row>
        </Container>
      </section>
    );
};

export default PageHeader;