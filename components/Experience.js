import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Link from "next/link";
import SectionTitle from "./SectionTitle";
import Modal from "./Modal";

const Experience = ({ extraClass }) => {
  const [showModal, setShowModal] = useState(false);
  const openModal = () => {
    setShowModal((prev) => !prev);
  };
  return (
    <section
      className={`experience__area fix p-relative pt-80 pb-80 ${extraClass} mt-40`}
    >
      <>
        <Modal showModal={showModal} setShowModal={setShowModal} />
        <div className="experience__shape">
          <img
            className="experience-s-1"
            src="/assets/images/shape/experience/experience-s-1.png"
            alt=""
          />
          <img
            className="experience-s-2"
            src="/assets/images/shape/experience/experience-s-2.png"
            alt=""
          />
          <img
            className="experience-s-3 d-none d-lg-block"
            src="/assets/images/shape/experience/experience-s-3.png"
            alt=""
          />
          <img
            className="experience-s-4"
            src="/assets/images/shape/experience/experience-s-4.png"
            alt=""
          />
        </div>
        <Container>
          <Row className="align-items-center">
            <Col xl={6} lg={6} md={9} sm={10}>
              <div className="experience__content">
                <SectionTitle
                  subTitle="Engineered for excellence"
                  titleFirst="Planning to transform"
                  titleSecond=" your business?"
                />
                <p>
                  We can help you with the Estimation, Prototype, Minimum Viable
                  Product and Complete Solution for your new or existing
                  venture.
                </p>
                <Link href="/contact">
                  <a className="m-btn mt-35">Let's Connect</a>
                </Link>
              </div>
            </Col>
            <Col xl={6} lg={6} md={9}>
              <div className="experience__video-btn">
                {/* <span onClick={openModal}>
                  <i className="fas fa-play"></i>
                </span> */}
              </div>
              <div className="experience__thumb text-end">
                {/* <img src="/assets/images/Home Page/H4.jpg" alt="" /> */}
                <img
                  src="/assets/images/experience/experience-img.png"
                  alt=""
                />
              </div>
            </Col>
          </Row>
        </Container>
      </>
    </section>
  );
};

export default Experience;
