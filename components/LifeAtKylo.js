import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';

const LifeAtKylo = () => {
  return (
    <section className="about__area fix p-relative pt-60 pb-120 about__pb">
      <Container>
        <h1 className="text-center">Life At Kylo Apps</h1>
        <Row className='mt-60'>
          <Col>
            <Row className="pb-10">
              <Col>
                <div
                  style={{
                    width: "250px",
                    height: "300px",
                    background: "#4a4f61",
                  }}
                ></div>
              </Col>
            </Row>
            <Row>
              <Col>
                <div
                  style={{
                    width: "250px",
                    height: "300px",
                    background: "#4a4f61",
                  }}
                ></div>
              </Col>
            </Row>
          </Col>

          <Col xl={6}>
            <Row className="pb-10">
              <Col xl={4}>
                <div
                  style={{
                    width: "200px",
                    height: "300px",
                    background: "#4a4f61",
                  }}
                ></div>
              </Col>
              <Col xl={8}>
                <div
                  style={{
                    width: "300px",
                    height: "300px",
                    background: "#4a4f61",
                  }}
                ></div>
              </Col>
            </Row>

            <Row>
              <Col xl={8}>
                <div
                  style={{
                    width: "300px",
                    height: "300px",
                    background: "#4a4f61",
                  }}
                ></div>
              </Col>
              <Col xl={4}>
                <div
                  style={{
                    width: "200px",
                    height: "300px",
                    background: "#4a4f61",
                  }}
                ></div>
              </Col>
            </Row>
          </Col>

          <Col>
            <Row className="pb-10">
              <Col>
                <div
                  style={{
                    width: "250px",
                    height: "300px",
                    background: "#4a4f61",
                  }}
                ></div>
              </Col>
            </Row>
            <Row>
              <Col>
                <div
                  style={{
                    width: "250px",
                    height: "300px",
                    background: "#4a4f61",
                  }}
                ></div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default LifeAtKylo