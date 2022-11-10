import React  from "react";
import { Container, Row, Col } from "react-bootstrap";
import Link from "next/link";
import Typical from "react-typical";


const Hero = () => {
  return (
    <section className="hero__area hero__height fix p-relative d-flex align-items-center">
      <div className="hero__shape">
        <img
          className="hero-shape-1"
          src="/assets/images/shape/hero/hero-shape-1.png"
          alt=""
        />
        <img
          className="hero-shape-2 d-none d-md-block"
          src="/assets/images/shape/hero/hero-shape-2.png"
          alt=""
        />
        <img
          className="hero-shape-3"
          src="/assets/images/shape/hero/hero-shape-3.png"
          alt=""
        />
        <img
          className="hero-shape-4 d-none d-sm-block"
          src="/assets/images/shape/hero/hero-shape-4.png"
          alt=""
        />
        <img
          className="hero-shape-5 d-none d-sm-block"
          src="/assets/images/shape/hero/hero-shape-5.png"
          alt=""
        />
        {/* <img
            className="hero-shape-6 d-none d-xl-block"
            src="/assets/images/shape/hero/hero-shape-6.png"
            alt=""
          /> */}
        <img
          className="hero-shape-7 d-none d-sm-block"
          src="/assets/images/shape/hero/hero-shape-7.png"
          alt=""
        />
      </div>
      <Container>
        <Row className="align-items-center">
          <Col xxl={6} xl={6} lg={7} md={7} sm={10}>
            <div className="hero__content-shape">
              <img
                className="hero-c-shape-1"
                src="/assets/images/shape/hero/hero-c-shape-1.png"
                alt=""
              />
            </div>
            <div className="hero__content">
              <h4 className="section__sub-title">Kylo Apps</h4>
              <h2 className="hero__title">
                <span>We build creative</span>
              </h2>
              <div>
                <Typical
                  steps={[
                    "Websites",
                    3000,
                    "Mobile Apps",
                    3000,
                    "AI/ML/Chatbots",
                    3000,
                  ]}
                  wrapper="h3"
                  loop={Infinity}
                />
              </div>
              <p>
                We are an IT services company providing robust, reliable and
                attractive mobile and web applications across the globe.
              </p>
              <Link href="/contact">
                <a className="m-btn mt-35">Get Started</a>
              </Link>
            </div>
          </Col>
          <Col xxl={6} xl={6} lg={5} md={5} sm={7}>
            <div className="hero__thumb text-end">
              <div className="hero__thumb-shape">
                <img
                  className="hero-t-shape-1 d-none d-xl-block"
                  src="/assets/images/shape/hero/hero-t-shape-1.png"
                  alt=""
                />
                <img
                  className="hero-t-shape-2"
                  src="/assets/images/shape/hero/hero-t-shape-2.png"
                  alt=""
                />
                <img
                  className="hero-t-shape-3"
                  src="/assets/images/shape/hero/hero-t-shape-3.png"
                  alt=""
                />
              </div>
              <div className="hero__thumb-image">
                <img src="/assets/images/Home Page/H1.jpg" alt="" />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Hero;
