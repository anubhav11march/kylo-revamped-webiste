import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import Accordion from 'react-bootstrap/Accordion';
import SectionTitle from './SectionTitle';

const Faq = () => {
    return (
      <section className="faq__area fix p-relative pt-105 pb-60 faq__rs">
        <div className="faq__shape">
          <img
            className="faq-shape-1 d-none d-lg-block"
            src="/assets/images/shape/faq/faq-s-1.png"
            alt=""
          />
          <img
            className="faq-shape-2"
            src="/assets/images/shape/faq/faq-s-2.png"
            alt=""
          />
          <img
            className="faq-shape-3 d-none d-lg-block"
            src="/assets/images/shape/faq/faq-s-3.png"
            alt=""
          />
          <img
            className="faq-shape-4 d-none d-lg-block"
            src="/assets/images/shape/faq/faq-s-4.png"
            alt=""
          />
        </div>
        <Container>
          <div className="faq__bg">
            <Row className="align-items-center">
              <Col xl={6} lg={5}>
                <div className="faq__thumb">
                  <div className="faq__thumb-image">
                    <img src="/assets/images/Home Page/H5.jpg" alt="" />
                  </div>
                </div>
              </Col>
              <Col xl={6} lg={7} md={10}>
                <div className="faq__content">
                  <SectionTitle
                    subTitle="Faq"
                    titleFirst="Frequently asked"
                    titleSecond="questions"
                  />
                  <div className="faq__wrapper">
                    <Accordion  flush>
                      <Accordion.Item eventKey="0">
                        <Accordion.Header>
                          How much will I be charged for the services?
                        </Accordion.Header>
                        <Accordion.Body>
                          After understanding the product and your requirements,
                          we will give you the best quotation for the service.
                          You don’t have to pay full fees upfront and should
                          only pay after the satisfactory completion of the
                          project.
                        </Accordion.Body>
                      </Accordion.Item>
                      <Accordion.Item eventKey="1">
                        <Accordion.Header>
                          What will be the process of hiring?
                        </Accordion.Header>
                        <Accordion.Body>
                          First we will setup a meeting with our product
                          designers to fully understand your features
                          requirements. Our product managers will come to you
                          with a product solution pitch along with the
                          quotation. Upon the approval of the proposal and
                          pricing, our team will start working on it and come up
                          with the complete project matching your exact needs.
                        </Accordion.Body>
                      </Accordion.Item>
                      <Accordion.Item eventKey="3">
                        <Accordion.Header>
                          What will be the mode of work?
                        </Accordion.Header>
                        <Accordion.Body>
                          All our developers are working remotely as of now and
                          will be working from our office once the pandemic
                          loosens up.
                        </Accordion.Body>
                      </Accordion.Item>
                      <Accordion.Item eventKey="4">
                        <Accordion.Header>
                          Will you provide tech support after the delivery of 
                          the project?
                        </Accordion.Header>
                        <Accordion.Body>
                          We will provide free support for 2 months for 
                          the deliverables promised by us
                        </Accordion.Body>
                      </Accordion.Item>
                      <Accordion.Item eventKey="5">
                        <Accordion.Header>
                          What are the modes of payment accepted?
                        </Accordion.Header>
                        <Accordion.Body>
                          All electronic modes of payment are accepted. (RTGS,
                          NEFT, Credit and Debit Cards, UPI, T/T, L/C, Paypal)
                        </Accordion.Body>
                      </Accordion.Item>
                    </Accordion>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </section>
    );
};

export default Faq;