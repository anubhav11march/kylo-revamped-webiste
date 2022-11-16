import React, {useState} from "react";
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
      className={`services__area p-relative fix ${extraClass} pt-120 pb-90`}
    >
      <Modal showModal={showModal} setShowModal={setShowModal} />
      <div className="services__shape">
        <img
          className="services-s-1"
          src="/assets/images/shape/services/services-s-1.png"
          alt=""
        />
        <img
          className="services-s-2"
          src="/assets/images/shape/services/services-s-2.png"
          alt=""
        />
        <img
          className="services-s-3"
          src="/assets/images/shape/services/services-s-3.png"
          alt=""
        />
      </div>
      <Container>
        <Row className="mb-55">
          <Col xl={6}>
            <div className="services__title">
              <SectionTitle
                subTitle="Why Kylo Apps ?"
                // titleFirst="Here are some of the major highlights and perks of working at Kylo Apps."
              />
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <Row className="mb-20">
              <Col>
                <img src="https://images.unsplash.com/photo-1663524789638-a576264a7f53?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTF8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=330&h=200" />
              </Col>
              <Col>
                <img src="https://images.unsplash.com/photo-1663524789638-a576264a7f53?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTF8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=330&h=200" />
              </Col>
            </Row>
            <Row className="mb-20">
              <Col>
                <img src="https://images.unsplash.com/photo-1663524789638-a576264a7f53?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTF8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=330&h=200" />
              </Col>
              <Col>
                <img src="https://images.unsplash.com/photo-1663524789638-a576264a7f53?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTF8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=330&h=200" />
              </Col>
            </Row>
            <Row>
              <Col>
                <img src="https://images.unsplash.com/photo-1663524789638-a576264a7f53?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTF8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=660&h=220" />
              </Col>
            </Row>
          </Col>

          <Col>
            <Row className="mb-20">
              <Col>
                <div className="experience__video-btn kylo_video-btn">
                  <span onClick={openModal}>
                    <i className="fas fa-play"></i>
                  </span>
                </div>
                <img src="https://images.unsplash.com/photo-1663524789638-a576264a7f53?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTF8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=600&h=390" />
              </Col>
            </Row>
            <Row>
              <Col>
                <img src="https://images.unsplash.com/photo-1663524789638-a576264a7f53?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTF8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=600&h=212" />
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default WhyKylo;
