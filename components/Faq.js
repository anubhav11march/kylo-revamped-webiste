import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Accordion from "react-bootstrap/Accordion";
import SectionTitle from "./SectionTitle";

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
                  <Accordion flush>
                    <Accordion.Item eventKey="0">
                      <Accordion.Header>
                        How much will I be charged for the services?
                      </Accordion.Header>
                      <Accordion.Body>
                        We understand the product and your requirements in the
                        first place and then give you the best quotation based
                        on it. You need not pay the full amount upfront, you can
                        pay as per the schedule we mutually agree on. Feel free
                        to contact us and set up a call with the experts.
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                      <Accordion.Header>
                        What types of companies do you work with?
                      </Accordion.Header>
                      <Accordion.Body>
                        We work with all types of companies from SMBs to large
                        enterprises across all industries and countries. Our
                        team is very professional and you would experience
                        seamless communication irrespective of the time zone.
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="3">
                      <Accordion.Header>
                        What is the process of getting into a project agreement
                        with Kylo?
                      </Accordion.Header>
                      <Accordion.Body>
                        Firstly, we will have to set up a meeting with you along
                        with our product designers to completely understand your
                        vision. This would be a consultation session. Next, our
                        product managers will come up with a product solution
                        along with a suitable quotation. Once the proposal and
                        the price are approved, our team will start working on
                        it and the final product will be delivered as per your
                        needs.
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="4">
                      <Accordion.Header>
                        What is Kylo’s current mode of work?
                      </Accordion.Header>
                      <Accordion.Body>
                        At Kylo, we follow the Hybrid mode of work. Some of our
                        teammates work from the office, and the rest of our team
                        works remotely as we have a few foreign mates working
                        with us as well.
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="5">
                      <Accordion.Header>
                        What is the procedure of tech support after the delivery
                        of the project?
                      </Accordion.Header>
                      <Accordion.Body>
                        We will provide you with 2 months of free maintenance
                        services on all the deliverables deployed by us.
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
