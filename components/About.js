import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import CountUp from "react-countup";
import SectionTitle from "./SectionTitle";

const About = ({ subTitle, titleFirst, titleSecond }) => {
  return (
    <section className="about__area  p-relative pt-120 pb-120 about__pb">
      <Container>
        <Row>
          <Col xxl={7} xl={8} lg={10} md={10}>
            <div className="about__title mb-80">
              <SectionTitle
                subTitle={subTitle}
                titleFirst={titleFirst}
                titleSecond={titleSecond}
              />
            </div>
          </Col>
        </Row>
        <Row>
          <Col xl={6} lg={6}>
            <div className="about__thumb">
              <div className="about__thumb-shape">
                <img
                  className="about-s-1 d-none d-lg-block"
                  src="/assets/images/shape/about/about-s-1.png"
                  alt=""
                />
                <img
                  className="about-s-2 d-none d-md-block"
                  src="/assets/images/shape/about/about-s-2.png"
                  alt=""
                />
              </div>
              <div className="about__thumb-image">
                <img src="/assets/images/Home Page/H2.jpg" alt="" />
              </div>
            </div>
          </Col>
          <Col xl={{ span: 5, offset: 1 }} lg={6}>
            <div className="about__content">
              <p>
                By bringing together our team’s expertise and modern IT
                advancements, we deliver custom applications that fit the needs
                and behavior of end users
              </p>
              <p>
                With innovation, passion, accountability and customer focus as
                our core values, our mission is to enhance growth of our clients
                with innovative design and development and to deliver top notch
                solutions that create value and competitive advantage for them
                around the globe
              </p>
              <ul>
                <li>Sea of Tranquility dispassionate observer dream.</li>
                <li>
                  Muse about as a patch of light brain is the seed of
                  intelligence.
                </li>
                <li>The only home we`ve ever known dream of the mind`s eye.</li>
                <li>The only home we`ve ever known dream of the mind`s eye.</li>
              </ul>
            </div>
            <div className="about__counter-bg d-none d-sm-block">
              <div className="about__counter-content d-flex">
                <div className="about__counter-text text-center">
                  <h2>
                    <CountUp end={200} duration={5} />+
                  </h2>
                  <p>Project Delivered</p>
                </div>
                <div className="about__counter-text text-center">
                  <h2>
                    <CountUp end={1} duration={5} />
                    M+
                  </h2>
                  <p>Happy Users</p>
                </div>
                <div className="about__counter-text text-center">
                  <h2>
                    <CountUp end={80} duration={5} />%
                  </h2>
                  <p>Repeat Clients</p>
                </div>
                <div className="about__counter-text text-center">
                  <h2>
                    <CountUp end={20} duration={5} />+
                  </h2>
                  <p>Countries Served</p>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
