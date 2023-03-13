import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import SectionTitle from "./SectionTitle";
import ServiceItem from "./ServiceItem";
import Modal from "./Modal";

const WhyKylo = ({ extraClass }) => {
  const [showModal, setShowModal] = useState(false);
  const openModal = () => {
    setShowModal((prev) => !prev);
  };
  return (
    <section
      className={`services__area p-relative fix ${extraClass} pt-50 pb-90`}
    >
      <Modal showModal={showModal} setShowModal={setShowModal} />
      <div className="services__shape">
        <img
          className="services-s-1"
          src="/assets/images/shape/services/services-s-1.png"
          alt=""
        />
        <img
          className="services-s-2 why_kylo-s-2"
          src="/assets/images/shape/services/services-s-2.png"
          alt=""
        />
      </div>
      <Container>
        <Row className="mb-55">
          <Col>
            <div className="services__title text-center">
              <h2
                className="why-kylo_title"
                style={{ color: "white", textTransform: "uppercase" }}
              >
                Why Kylo apps?
              </h2>
              <h6
                className="why-kylo_subtitle"
                style={{ color: "white", marginTop: "20px", fontWeigt: 300 }}
              >
                Coming together is the beginning, staying together is progress,
                and working together is success.
                <br /> Here are some of the major highlights and perks of
                working at Kylo Apps.
              </h6>
            </div>
          </Col>
        </Row>
        <Row>
          <Col xs={12} xl={6}>
            <Row className="mb-20">
              <Col xs={12} md={6} className="position-relative">
                <p
                  style={{
                    position: "absolute",
                    right: "25px",
                    bottom: "5px",
                    color: "white",
                    background: "#7432ff",
                    opacity: 0.8,
                    borderRadius: "10px",
                    padding: "5px",
                  }}
                >
                  Diverse Team
                </p>
                <div
                  style={{
                    height: "200px",
                    background: "#4a4f61",
                    borderRadius: "10px",
                  }}
                >
                  <img
                    style={{
                      width: "100%",
                      height: "100%",
                      borderRadius: "10px",
                    }}
                    src="/assets/images/carrier/2.jpg"
                  />
                </div>
              </Col>
              <Col xs={12} md={6} className="position-relative mt-20 mt-md-0">
                <p
                  style={{
                    position: "absolute",
                    float: "right",
                    float: "inline-end",
                    right: "25px",
                    bottom: "5px",
                    color: "white",
                    background: "#7432ff",
                    opacity: 0.8,
                    borderRadius: "10px",
                    padding: "5px",
                  }}
                >
                  Recreational activities
                </p>
                <div
                  style={{
                    height: "200px",
                    background: "#4a4f61",
                    borderRadius: "10px",
                  }}
                >
                  <img
                    style={{
                      width: "100%",
                      height: "100%",
                      borderRadius: "10px",
                    }}
                    src="/assets/images/carrier/3(3).jpg"
                  />
                </div>
              </Col>
            </Row>

            <Row className="mb-20 mt-20 mt-md-0">
              <Col xs={12} md={6} className="position-relative">
                <p
                  style={{
                    position: "absolute",
                    right: "25px",
                    bottom: "5px",
                    color: "white",
                    background: "#7432ff",
                    opacity: 0.8,
                    borderRadius: "10px",
                    padding: "5px",
                  }}
                >
                  Frequent Parties
                </p>
                <div
                  style={{
                    height: "200px",
                    background: "#4a4f61",
                    borderRadius: "10px",
                  }}
                >
                  <img
                    style={{
                      width: "100%",
                      height: "100%",
                      borderRadius: "10px",
                    }}
                    src="/assets/images/carrier/4.png"
                  />
                </div>
              </Col>
              <Col xs={12} md={6} className="position-relative mt-20 mt-md-0">
                <p
                  style={{
                    position: "absolute",
                    right: "25px",
                    bottom: "5px",
                    color: "white",
                    background: "#7432ff",
                    opacity: 0.8,
                    borderRadius: "10px",
                    padding: "5px",
                  }}
                >
                  Work From Anywhere
                </p>
                <div
                  style={{
                    height: "200px",
                    background: "#4a4f61",
                    borderRadius: "10px",
                  }}
                >
                  <img
                    style={{
                      width: "100%",
                      height: "100%",
                      borderRadius: "10px",
                    }}
                    src="/assets/images/carrier/wfh.jpg"
                  />
                </div>
              </Col>
            </Row>

            <Row>
              <Col className="position-relative">
                <p
                  style={{
                    position: "absolute",
                    right: "25px",
                    bottom: "5px",
                    color: "white",
                    background: "#7432ff",
                    opacity: 0.8,
                    borderRadius: "10px",
                    padding: "5px",
                  }}
                >
                  Rewarding Career
                </p>
                <div
                  style={{
                    height: "300px",
                    background: "#4a4f61",
                    borderRadius: "10px",
                  }}
                >
                  <img
                    style={{
                      width: "100%",
                      height: "100%",
                      borderRadius: "10px",
                      objectFit: "cover",
                    }}
                    src="/assets/images/carrier/6.jpg"
                  />
                </div>
              </Col>
            </Row>
          </Col>

          <Col xs={12} xl={6}>
            <Row className="mb-20 mt-20 mt-xl-0">
              <Col className="position-relative">
                <div className="experience__video-btn kylo_video-btn">
                  <span onClick={openModal}>
                    <i className="fas fa-play"></i>
                  </span>
                </div>
                <div
                  style={{
                    height: "420px",
                    background: "#4a4f61",
                    borderRadius: "10px",
                  }}
                >
                  <img
                    style={{
                      // width: "100%",
                      overflowX : "hidden",
                      height: "100%",
                      borderRadius: "10px",
                      objectFit:"cover"
                    }}
                    src="/assets/images/carrier/Videothumbnail.jpg"
                  />
                </div>
              </Col>
            </Row>
            <Row>
              <Col className="position-relative">
                <p
                  style={{
                    position: "absolute",
                    right: "25px",
                    bottom: "5px",
                    color: "white",
                    background: "#7432ff",
                    opacity: 0.8,
                    borderRadius: "10px",
                    padding: "6px",
                  }}
                >
                  Happy Environment
                </p>
                <div
                  style={{
                    height: "300px",
                    background: "#4a4f61",
                    borderRadius: "10px",
                  }}
                >
                  <img
                    style={{
                      width: "100%",
                      height: "100%",
                      borderRadius: "10px",
                      objectFit: "cover",
                    }}
                    src="/assets/images/carrier/7.jpg"
                  />
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default WhyKylo;
