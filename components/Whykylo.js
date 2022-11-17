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
              <h2 style={{ color: "white", textTransform: "uppercase" }}>Why Kylo apps ?</h2>
              <h6 style={{ color: "white",marginTop: "20px" }}>
                Alone we can do so little, together we can achieve so much. Here
                are some of the major highlights and perks of working at Kylo
                Apps.
              </h6>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <Row className="mb-20">
              <Col className="position-relative">
                <p style={{position: "absolute", right: "25px", bottom: "5px", color: "white"}}>Diverse Team</p>
                <img src="https://images.unsplash.com/photo-1622675363311-3e1904dc1885?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZGl2ZXJzZSUyMHRlYW18ZW58MHx8MHx8&auto=format&fit=crop&w=330&h=200" />
              </Col>
              <Col className="position-relative">
                <p style={{position: "absolute", right: "25px", bottom: "5px", color: "white"}}>Recreational activities</p>
                <img src="https://images.unsplash.com/photo-1467139701929-18c0d27a7516?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8dHJla2tpbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=330&h=200" />
              </Col>
            </Row>
            <Row className="mb-20">
              <Col className="position-relative">
                <p style={{position: "absolute", right: "25px", bottom: "5px", color: "white"}}>Frequent Parties</p>
                <img src="https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8b2ZmaWNlJTIwcGFydHl8ZW58MHx8MHx8&auto=format&fit=crop&w=330&h=200" />
              </Col>
              <Col className="position-relative">
                <p style={{position: "absolute", right: "25px", bottom: "5px", color: "white"}}>Work From Anywhere</p>
                <img src="https://images.unsplash.com/photo-1628872451522-017302a793a5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8d29yayUyMGZyb20lMjBhbnl3aGVyZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=330&h=200" />
              </Col>
            </Row>
            <Row>
              <Col className="position-relative">
                <p style={{position: "absolute", right: "25px", bottom: "5px", color: "white"}}>Rewarding Career</p>
                <img src="https://images.unsplash.com/photo-1523287562758-66c7fc58967f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fHJld2FyZGluZyUyMGNhcmVlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=660&h=220" />
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
                <img src="https://images.unsplash.com/photo-1663524789638-a576264a7f53?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTF8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=660&h=405" />
              </Col>
            </Row>
            <Row>
              <Col className="position-relative">
                <p style={{position: "absolute", right: "65px", bottom: "5px", color: "white"}}>Happy Environment</p>
                <img src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aGFwcHklMjBlbnZpcm9ubWVudHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=660&h=220" />
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default WhyKylo;
