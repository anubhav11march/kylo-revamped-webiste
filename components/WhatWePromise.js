import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import CountUp from "react-countup";
import SectionTitle from "./SectionTitle";

const WhatWePromise = () => {
  return (
    <section className="facts__area fix p-relative pt-120 pb-40 facts__pb">
      <Container>
        <Row>
          <Col xxl={6} xl={5} lg={5} md={8} sm={10}>
            <div className="facts__thumb">
              <div className="facts__thumb-shape">
                <img
                  className="facts-s-1"
                  src="/assets/images/shape/facts/facts-s-1.png"
                  alt=""
                />
                <img
                  className="facts-s-2"
                  src="/assets/images/shape/facts/facts-s-2.png"
                  alt=""
                />
                <img
                  className="facts-s-3"
                  src="/assets/images/shape/facts/facts-s-3.png"
                  alt=""
                />
                <img
                  className="facts-s-4 d-none d-md-block"
                  src="/assets/images/shape/facts/facts-s-4.png"
                  alt=""
                />
              </div>
              <div className="facts__thumb-image">
                {/* <img src="/assets/images/Home Page/H3.jpg" alt=""/> */}
                <img
                  src="https://maxdi.vercel.app/assets/images/facts/facts-img.png"
                  alt=""
                />
                {/* <img src="/assets/images/facts/facts-img.png" alt=""/> */}
              </div>
            </div>
          </Col>
          <Col xxl={6} xl={7} lg={7} md={9}>
            <div className="facts__content">
              <div className="facts__content-text">
                <SectionTitle
                  subTitle="What we promise"
                  titleFirst="Skyrocket your growth"
                  titleSecond="with us"
                  smallFont={true}
                />

                {/* <h1 style={{ color: "#7432ff" }}></h1>
                <h6 style={{ marginBottom: "40px", color: "#7432ff" }}>
                 
                </h6> */}
                <div className="about-us">
                  <ul style={{ paddingLeft: "25px" }}>
                    <li>
                      <h5>Exceeding your expectations</h5>
                      <p>
                        We don’t just like matching your expectations but rather
                        crossing the line.
                      </p>
                    </li>
                    <li>
                      <h5>Timely delivery</h5>
                      <p>
                        Well timing is crucial isn’t it? You don’t have wait for
                        long to work on your dream project.
                      </p>
                    </li>
                    <li>
                      <h5>Tech Support</h5>
                      <p>
                        All our services come with free 2 months tech support.
                        Any production bugs that shouldn’t be there would be
                        resolved free of cost.
                      </p>
                    </li>
                    <li>
                      <h5>Best pricing in the industry</h5>
                      <p>
                        Why pay someone else more, when you can get a better
                        work done for cheaper? We’ll do it for you.
                      </p>
                    </li>
                    <li>
                      <h5>Bugs free applications</h5>
                      <p>
                        Who likes bugs? We don’t either. We make sure to squish
                        even the tiniest bugs.
                      </p>
                    </li>
                    <li>
                      <h5>Innovation</h5>
                      <p>
                        We keep coming up with new and innovative features to
                        make your business stand out.
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default WhatWePromise;
