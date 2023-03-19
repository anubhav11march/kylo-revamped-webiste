import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import ServiceSidebar from './ServiceSidebar';

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const AiMlServicesDetails = () => {
  return (
    <section className="services__details p-relative pt-120 pb-230">
      <div className="services__details-shape">
        <img
          className="s-details-s-1"
          src="assets/images/shape/services/s-details-s-1.png"
          alt=""
        />
        <img
          className="s-details-s-2 d-none d-sm-block"
          src="assets/images/shape/services/s-details-s-2.png"
          alt=""
        />
        <img
          className="s-details-s-3"
          src="assets/images/shape/services/s-details-s-3.png"
          alt=""
        />
      </div>
      <Container>
        <Row>
          <Col xl={4} lg={{ span: 4, order: "first" }} xs={{ order: "last" }}>
            <ServiceSidebar />
          </Col>
          <Col xl={8} lg={8}>
            <div className="services__details-thumb mb-60">
              <img src="assets/images/Services/ai ml chatbot.webp" alt="" />
            </div>
            <div className="services__details-content">
              <h2>AI/ML/Chatbot</h2>
              <p>
                We have expertise in AI/ML and chatbot development, and we're passionate about helping businesses leverage the latest technologies to enhance their operations and fulfil their unique business needs.

                We use cutting-edge technologies to deliver intelligent solutions that improve your business processes and customer engagement.
                We’ll help you create an AI-powered future for your business today!
              </p>
              <div className="key__benefits">
                <div
                  className="key__benefits-content"
                  style={{ display: "flex", columnGap: "40px" }}
                >
                  <ul>
                    <li>Machine Learning Chatbots</li>
                    <li>Responsive Chatbots</li>
                    <li>Conversational Chatbot</li>
                    <li>Appointment Scheduling</li>
                  </ul>
                </div>
              </div>

              <div className="tech__stack">
                <h4>Technologies</h4>
                <div className='container' style={{ paddingLeft : "0px"}}>
                  <div className='row' style={{ width : "50%"}}>
                    <div className='col text-center'>
                    <img class="tech-icon" src="https://creazilla-store.fra1.digitaloceanspaces.com/icons/3254442/tensorflow-icon-md.png" alt="Tensor Flow"/>
                      <p style={{ paddingRight: "0px" }}>TensorFlow</p>
                    </div>
                    <div className='col text-center'>
                    <img class="tech-icon" src="https://squareboat.com/storage/services/sub_services/tecnology/44SvHAhucqlRgvk2wrG0LrDgtNGaONggc3MdH6Og.svg" alt="Dialogflow"/>
                      <p style={{ paddingRight: "0px" }}>DialogFlow</p>
                    </div>
                    <div className='col text-center'>
                    <img class="tech-icon" src="https://squareboat.com/storage/services/sub_services/tecnology/U0GicUuynPN57tx1sHEb7sY4gbqbPCWrXHo0K5sY.svg" alt="Google Assistant"/>
                      <p style={{ paddingRight: "0px" }}>Google Assistant</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="key__factors">
                <div className="key__factors-title">
                  <h3>Key Benefits</h3>
                </div>
                <div className="key__factors-wrapper d-flex">
                  <div className="key__factors-content mb-40 d-sm-flex" style={{ width : "50%"}}>
                    <div className="key__factors-icon">
                      <i className="fa-solid fa-briefcase"></i>
                    </div>
                    <div className="key__factors-text">
                      <h5>Automation</h5>
                      <p>
                        Automates repetitive tasks for increased efficiency and accuracy.
                      </p>
                    </div>
                  </div>
                  <div className="key__factors-content mb-40 d-sm-flex" style={{ width : "50%"}}>
                    <div className="key__factors-icon">
                      <i className="fa-solid fa-chart-bar"></i>
                    </div>
                    <div className="key__factors-text">
                      <h5>Cost-Effective</h5>
                      <p>
                        Reduces labor costs, improves productivity and ROI.

                      </p>
                    </div>
                  </div>
                </div>
                <div className="key__factors-wrapper d-flex">
                  <div className="key__factors-content mb-40 d-sm-flex" style={{ width : "50%"}}>
                    <div className="key__factors-icon">
                      <i className="fa-solid fa-unlock-keyhole"></i>
                    </div>
                    <div className="key__factors-text">
                      <h5>24/7 Availability</h5>
                      <p>
                        Provides round-the-clock support to enhance customer experience.

                      </p>
                    </div>
                  </div>
                  <div className="key__factors-content mb-40 d-sm-flex" style={{ width : "50%"}}>
                    <div className="key__factors-icon">
                      <i className="fa-solid fa-file-lines"></i>
                    </div>
                    <div className="key__factors-text">
                      <h5>Scalability</h5>
                      <p>
                        Can handle high volumes of data and tasks with personalised experience.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="key__benefits">
                <div className="key__benefits-title">
                  <h3>Process We Follow</h3>
                </div>
                <VerticalTimeline lineColor={"#A1A1A1"}>
                  <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: "rgb(116, 50, 255)", color: "#fff" }}
                    contentArrowStyle={{ borderRight: "7px solid  rgb(116, 50, 255)" }}
                    // date="2011 - present"
                    iconStyle={{ background: "rgb(116, 50, 255)", color: "#fff" }}
                    icon={
                      <div
                        className="d-flex justify-content-center"
                        style={{ height: "100%", translate: "0% 35%" }}
                      >
                        <i className="far fa-plus" />
                      </div>
                    }
                  >
                    <h3 className="vertical-timeline-element-title" style={{ color : "#fff"}}>Consultation & Identification</h3>
                    <p className="zero-padding-right" style={{ color : "#fff"}}>
                      We understand your business needs, define project scope, and select appropriate tools and technologies.
                    </p>
                  </VerticalTimelineElement>
                  <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{
                      background: "rgb(227, 220, 255)",
                      color: "#fff",
                      border: "1px solid #fff",
                    }}
                    contentArrowStyle={{ borderRight: "7px solid  rgb(227, 220, 255)" }}
                    // date="2011 - present"
                    iconStyle={{ background: "rgb(227, 220, 255)" }}
                    icon={
                      <div
                        className="d-flex justify-content-center"
                        style={{ height: "100%", translate: "0% 35%" }}
                      >
                        <i className="far fa-plus" />
                      </div>
                    }
                  >
                    <h3 className="vertical-timeline-element-title">
                      Data Colletion & Preparation
                    </h3>

                    <p className="zero-padding-right">
                      We gather, clean and preprocess data for machine learning models and chatbot training.
                    </p>
                  </VerticalTimelineElement>
                </VerticalTimeline>
                {/* <h2>
                  One Time <span>Per Patient</span>
                </h2> */}
                <VerticalTimeline lineColor={"#A1A1A1"}>
                  <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: "rgb(116, 50, 255)", color: "#fff" }}
                    contentArrowStyle={{ borderRight: "7px solid  rgb(116, 50, 255)" }}
                    // date="2011 - present"
                    iconStyle={{ background: "rgb(116, 50, 255)", color: "#fff" }}
                    icon={
                      <div
                        className="d-flex justify-content-center"
                        style={{ height: "100%", translate: "0% 35%" }}
                      >
                        <i className="far fa-plus" />
                      </div>
                    }
                  >
                    <h3 className="vertical-timeline-element-title" style={{ color: "#fff"}}>
                      Model Selection & Training
                    </h3>
                    <p className="zero-padding-right" style={{ color: "#fff"}}>
                      We select AI/ML models, train the models on preprocessed data, test the models for performance, and refine the models based on results.

                    </p>
                  </VerticalTimelineElement>
                  <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{
                      background: "rgb(227, 220, 255)",
                      color: "#fff",
                      border: "1px solid #fff",
                    }}
                    contentArrowStyle={{ borderRight: "7px solid  rgb(227, 220, 255)" }}
                    // date="2011 - present"
                    iconStyle={{ background: "rgb(227, 220, 255)" }}
                    icon={
                      <div
                        className="d-flex justify-content-center"
                        style={{ height: "100%", translate: "0% 35%" }}
                      >
                        <i className="far fa-plus" />
                      </div>
                    }
                  >
                    <h3 className="vertical-timeline-element-title">
                      Development
                    </h3>

                    <p className="zero-padding-right">
                      We design the UI, define the conversational flow and train the chatbot on natural language processing capabilities.
                    </p>
                  </VerticalTimelineElement>
                </VerticalTimeline>
                {/* <h2>
                  Ongoing
                  <span>&nbsp;Every Month</span>
                </h2> */}
                <VerticalTimeline lineColor={"#A1A1A1"}>
                  <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: "rgb(116, 50, 255)", color: "#fff" }}
                    contentArrowStyle={{ borderRight: "7px solid  rgb(116, 50, 255)" }}
                    // date="2011 - present"
                    iconStyle={{ background: "rgb(116, 50, 255)", color: "#fff" }}
                    icon={
                      <div
                        className="d-flex justify-content-center"
                        style={{ height: "100%", translate: "0% 35%" }}
                      >
                        <i className="far fa-plus" />
                      </div>
                    }
                  >
                    <h3 className="vertical-timeline-element-title" style={{ color: "#fff"}}>
                      Integration & Deployment
                    </h3>
                    <p className="zero-padding-right" style={{ color: "#fff"}}>
                      We integrate AI/ML models or chatbots with your application or website, deploy to a cloud environment and ensure security.
                    </p>
                  </VerticalTimelineElement>
                  <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{
                      background: "rgb(227, 220, 255)",
                      color: "#fff",
                      border: "1px solid #fff",
                    }}
                    contentArrowStyle={{ borderRight: "7px solid  rgb(227, 220, 255)" }}
                    // date="2011 - present"
                    iconStyle={{ background: "rgb(227, 220, 255)"}}
                    icon={
                      <div
                        className="d-flex justify-content-center"
                        style={{ height: "100%", translate: "0% 35%" }}
                      >
                        <i className="far fa-plus" />
                      </div>
                    }
                  >
                    <h3 className="vertical-timeline-element-title">
                      Testing & Maintenance
                    </h3>

                    <p className="zero-padding-right">
                      Performance and provide ongoing maintenance and improvements.
                    </p>
                  </VerticalTimelineElement>

                </VerticalTimeline>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AiMlServicesDetails;