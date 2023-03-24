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
                  style={{ display: "flex", columnGap: "12vw" }}
                >
                  <ul>
                    <li>Machine Learning Chatbots</li>
                    <li>Responsive Chatbots</li>
                  </ul>
                  <ul>
                    <li>Conversational Chatbot</li>
                    <li>Appointment Scheduling</li>
                  </ul>
                </div>
              </div>

              <div className="tech__stack">
                <h3 className='mb-50'>Technologies</h3>
                <div className='container' style={{ paddingLeft: "0px" }}>
                  <div className='row w-50p-medium' style={{ width: "100%" }}>
                    <div className='col text-center'>
                      <img class="tech-icon" src="https://creazilla-store.fra1.digitaloceanspaces.com/icons/3254442/tensorflow-icon-md.png" alt="Tensor Flow" />
                      <p style={{ paddingRight: "0px" }}>TensorFlow</p>
                    </div>
                    <div className='col text-center'>
                      <img class="tech-icon" src="https://squareboat.com/storage/services/sub_services/tecnology/44SvHAhucqlRgvk2wrG0LrDgtNGaONggc3MdH6Og.svg" alt="Dialogflow" />
                      <p style={{ paddingRight: "0px" }}>DialogFlow</p>
                    </div>
                    <div className='col text-center'>
                      <img class="tech-icon" src="https://squareboat.com/storage/services/sub_services/tecnology/U0GicUuynPN57tx1sHEb7sY4gbqbPCWrXHo0K5sY.svg" alt="Google Assistant" />
                      <p style={{ paddingRight: "0px" }}>Google Assistant</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="key__factors">
                <div className="key__factors-title">
                  <h3>Key Benefits</h3>
                </div>
                <div className="key__factors-wrapper d-flex pl-30-mobile">
                  <div className="key__factors-content mb-40 d-sm-flex" style={{ width: "50%" }}>
                    <div className="key__factors-icon">
                      {/* <span style={{ paddingLeft: "15px" }}>
                      <svg width="30" height="30" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.89701 15.86L5.80701 11.95L8.63601 14.778L13.207 10.208L15 12V7H10L11.793 8.793L8.63601 11.95L5.80801 9.121L0.862008 14.067C0.291937 12.787 -0.0017877 11.4012 8.18577e-06 10C8.18577e-06 4.477 4.47701 0 10 0C15.523 0 20 4.477 20 10C20 15.523 15.523 20 10 20C8.41801 20.001 6.85839 19.6262 5.44962 18.9065C4.04084 18.1867 2.82321 17.1425 1.89701 15.86V15.86Z" fill="#7432ff"/>
</svg>

                      </span> */}
                      <i class="fa-solid fa-robot"></i>
                    </div>
                    <div className="key__factors-text">
                      <h5>Automation</h5>
                      <p>
                        Automates repetitive tasks for increased efficiency and accuracy.
                      </p>
                    </div>
                  </div>
                  <div className="key__factors-content mb-40 d-sm-flex" style={{ width: "50%" }}>
                    <div className="key__factors-icon">
                      <span style={{ paddingLeft: "15px" }}>
                        <svg width="30" height="30" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M10 20C4.477 20 0 15.523 0 10C0 4.477 4.477 0 10 0C15.523 0 20 4.477 20 10C20 15.523 15.523 20 10 20ZM6.5 12V14H9V16H11V14H12C12.663 14 13.2989 13.7366 13.7678 13.2678C14.2366 12.7989 14.5 12.163 14.5 11.5C14.5 10.837 14.2366 10.2011 13.7678 9.73223C13.2989 9.26339 12.663 9 12 9H8C7.86739 9 7.74021 8.94732 7.64645 8.85355C7.55268 8.75979 7.5 8.63261 7.5 8.5C7.5 8.36739 7.55268 8.24021 7.64645 8.14645C7.74021 8.05268 7.86739 8 8 8H13.5V6H11V4H9V6H8C7.33696 6 6.70107 6.26339 6.23223 6.73223C5.76339 7.20107 5.5 7.83696 5.5 8.5C5.5 9.16304 5.76339 9.79893 6.23223 10.2678C6.70107 10.7366 7.33696 11 8 11H12C12.1326 11 12.2598 11.0527 12.3536 11.1464C12.4473 11.2402 12.5 11.3674 12.5 11.5C12.5 11.6326 12.4473 11.7598 12.3536 11.8536C12.2598 11.9473 12.1326 12 12 12H6.5Z" fill="#7432ff" />
                        </svg>


                      </span>
                    </div>
                    <div className="key__factors-text">
                      <h5>Cost-Effective</h5>
                      <p>
                        Reduces labor costs, improves productivity and ROI.

                      </p>
                    </div>
                  </div>
                </div>
                <div className="key__factors-wrapper d-flex pl-30-mobile">
                  <div className="key__factors-content mb-40 d-sm-flex" style={{ width: "50%" }}>
                    <div className="key__factors-icon">
                      <span style={{ paddingLeft: "15px" }}>
                        <svg width="30" height="30" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M20 7.00002C20.5304 7.00002 21.0391 7.21074 21.4142 7.58581C21.7893 7.96088 22 8.46959 22 9.00002V13C22 13.5305 21.7893 14.0392 21.4142 14.4142C21.0391 14.7893 20.5304 15 20 15H18.938C18.6942 16.9333 17.7533 18.7112 16.2917 20C14.8302 21.2888 12.9486 22 11 22V20C12.5913 20 14.1174 19.3679 15.2426 18.2427C16.3679 17.1174 17 15.5913 17 14V8.00002C17 6.40872 16.3679 4.8826 15.2426 3.75738C14.1174 2.63216 12.5913 2.00002 11 2.00002C9.4087 2.00002 7.88258 2.63216 6.75736 3.75738C5.63214 4.8826 5 6.40872 5 8.00002V15H2C1.46957 15 0.960859 14.7893 0.585786 14.4142C0.210714 14.0392 0 13.5305 0 13V9.00002C0 8.46959 0.210714 7.96088 0.585786 7.58581C0.960859 7.21074 1.46957 7.00002 2 7.00002H3.062C3.30603 5.06692 4.24708 3.2893 5.70857 2.0007C7.17007 0.712101 9.05155 0.00109863 11 0.00109863C12.9484 0.00109863 14.8299 0.712101 16.2914 2.0007C17.7529 3.2893 18.694 5.06692 18.938 7.00002H20ZM6.76 14.785L7.82 13.089C8.77308 13.6861 9.87537 14.0018 11 14C12.1246 14.0018 13.2269 13.6861 14.18 13.089L15.24 14.785C13.9693 15.5812 12.4995 16.0023 11 16C9.50046 16.0023 8.03074 15.5812 6.76 14.785Z" fill="#7432ff" />
                        </svg>


                      </span>
                    </div>
                    <div className="key__factors-text">
                      <h5>24/7 Availability</h5>
                      <p>
                        Provides round-the-clock support to enhance customer experience.

                      </p>
                    </div>
                  </div>
                  <div className="key__factors-content mb-40 d-sm-flex" style={{ width: "50%" }}>
                    <div className="key__factors-icon">
                      <span style={{ paddingLeft: "15px" }}>
                        <svg width="30" height="30" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M1.89701 15.86L5.80701 11.95L8.63601 14.778L13.207 10.208L15 12V7H10L11.793 8.793L8.63601 11.95L5.80801 9.121L0.862008 14.067C0.291937 12.787 -0.0017877 11.4012 8.18577e-06 10C8.18577e-06 4.477 4.47701 0 10 0C15.523 0 20 4.477 20 10C20 15.523 15.523 20 10 20C8.41801 20.001 6.85839 19.6262 5.44962 18.9065C4.04084 18.1867 2.82321 17.1425 1.89701 15.86V15.86Z" fill="#7432ff" />
                        </svg>

                      </span>
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
                        style={{ height: "100%", flexWrap: "wrap", alignContent: "center" }}
                      >
                        <i className="far fa-plus" />
                      </div>
                    }
                  >
                    <h3 className="vertical-timeline-element-title" style={{ color: "#fff" }}>Consultation & Identification</h3>
                    <p className="zero-padding-right" style={{ color: "#fff" }}>
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
                        style={{ height: "100%", flexWrap: "wrap", alignContent: "center" }}
                      >
                        <i className="fas fa-plus" style={{ fontSize:"11px"}}/>
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

                  <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: "rgb(116, 50, 255)", color: "#fff" }}
                    contentArrowStyle={{ borderRight: "7px solid  rgb(116, 50, 255)" }}
                    // date="2011 - present"
                    iconStyle={{ background: "rgb(116, 50, 255)", color: "#fff" }}
                    icon={
                      <div
                        className="d-flex justify-content-center"
                        style={{ height: "100%", flexWrap: "wrap", alignContent: "center" }}
                      >
                        <i className="far fa-plus" />
                      </div>
                    }
                  >
                    <h3 className="vertical-timeline-element-title" style={{ color: "#fff" }}>
                      Model Selection & Training
                    </h3>
                    <p className="zero-padding-right" style={{ color: "#fff" }}>
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
                        style={{ height: "100%", flexWrap: "wrap", alignContent: "center" }}
                      >
                        <i className="fas fa-plus" style={{ fontSize:"11px"}}/>
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

                  <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: "rgb(116, 50, 255)", color: "#fff" }}
                    contentArrowStyle={{ borderRight: "7px solid  rgb(116, 50, 255)" }}
                    // date="2011 - present"
                    iconStyle={{ background: "rgb(116, 50, 255)", color: "#fff" }}
                    icon={
                      <div
                        className="d-flex justify-content-center"
                        style={{ height: "100%", flexWrap: "wrap", alignContent: "center" }}
                      >
                        <i className="far fa-plus" />
                      </div>
                    }
                  >
                    <h3 className="vertical-timeline-element-title" style={{ color: "#fff" }}>
                      Integration & Deployment
                    </h3>
                    <p className="zero-padding-right" style={{ color: "#fff" }}>
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
                    iconStyle={{ background: "rgb(227, 220, 255)" }}
                    icon={
                      <div
                        className="d-flex justify-content-center"
                        style={{ height: "100%", flexWrap: "wrap", alignContent: "center" }}
                      >
                        <i className="fas fa-plus" style={{ fontSize:"11px"}}/>
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
                {/* <h2>
                  One Time <span>Per Patient</span>
                </h2> */}
                
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AiMlServicesDetails;