import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import ServiceSidebar from './ServiceSidebar';

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const QAServicesDetails = () => {
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
              <img src="assets/images/Services/qa.jpg" alt="" />
            </div>
            <div className="services__details-content">
              <h2>Quality Assurance</h2>
              <p>
                No product is deemed a market fit without rigorous testing. We ensure that your products meet the highest quality standards by conducting comprehensive testing and quality checks so that your product is bug-free and functions optimally.

                We use a range of techniques and tools to deliver robust and top-notch products that exceed your expectations and delight your customers.
                We have the solution to this test!

              </p>
              <div className="key__benefits">
                <div
                  className="key__benefits-content"
                  style={{ display: "flex", columnGap: "40px" }}
                >
                  <ul>
                    <li>Automation testing</li>
                    <li>Manual testing</li>
                    <li>User acceptance testing</li>
                  </ul>
                  <ul>
                    <li>API & UI/UX testing</li>
                    <li>Performance testing</li>
                    <li>Database testing</li>
                  </ul>
                </div>
              </div>

              <div className="tech__stack">
                <h4 className='mb-50'>Technologies</h4>
                <div className='container'>
                  <div className='row'>
                    <div className='col text-center'>
                      <img class="tech-icon" src="https://squareboat.com/storage/services/sub_services/tecnology/5Ke1eu1ztraXleScCkuDlOThT0YWeJRC7zrb6dIO.svg" alt="Manual Testing" />
                      <p style={{ paddingRight: "0px" }}>Manual Testing</p>
                    </div>
                    <div className='col text-center'>
                      <img class="tech-icon" src="https://squareboat.com/storage/services/sub_services/tecnology/NqYIxhl5s8Hk2VfmeHOFzqNjb4tiekJByhDpYLnC.svg" alt="Appium" />
                      <p style={{ paddingRight: "0px" }}>Appium</p>
                    </div>
                    <div className='col text-center'>
                      <img class="tech-icon" src="https://squareboat.com/storage/services/sub_services/tecnology/ACxSEdfx8icIKwsHJ8sJK45A97OIx7NM45RgKqpp.svg" alt="Selenium" />
                      <p style={{ paddingRight: "0px" }}>Selenium</p>
                    </div>
                    <div className='col text-center'>
                      <img class="tech-icon" src="https://squareboat.com/storage/services/sub_services/tecnology/qkh2GBCZeAYnGG6MBaCjPIZP5wlntvT0HQBs3DjQ.svg" alt="AWS Device Farm" />
                      <p style={{ paddingRight: "0px" }}>AWS Device Farm</p>
                    </div>                    <div className='col text-center'>
                      <img class="tech-icon" src="https://squareboat.com/storage/services/sub_services/tecnology/QFjYyqpd5XO6cPqoe4F26PAwOtWBW5Wal1CnO2pu.svg" alt="Browserstack" />
                      <p style={{ paddingRight: "0px" }}>Browserstack</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="key__factors">
                <div className="key__factors-title">
                  <h3>Key Benefits</h3>
                </div>
                <div className="key__factors-wrapper d-flex">
                  <div className="key__factors-content mb-40 d-sm-flex" style={{ width: "50%" }}>
                    <div className="key__factors-icon">
                      <span style={{ paddingLeft: "15px" }}>
                        <svg width="30" height="30" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M10 20C4.477 20 0 15.523 0 10C0 4.477 4.477 0 10 0C15.523 0 20 4.477 20 10C20 15.523 15.523 20 10 20ZM5 10C5 11.3261 5.52678 12.5979 6.46447 13.5355C7.40215 14.4732 8.67392 15 10 15C11.3261 15 12.5979 14.4732 13.5355 13.5355C14.4732 12.5979 15 11.3261 15 10H13C13 10.7956 12.6839 11.5587 12.1213 12.1213C11.5587 12.6839 10.7956 13 10 13C9.20435 13 8.44129 12.6839 7.87868 12.1213C7.31607 11.5587 7 10.7956 7 10H5Z" fill="#7432ff" />
                        </svg>



                      </span>
                    </div>
                    <div className="key__factors-text">
                      <h5>Improved Quality</h5>
                      <p>
                        Ensure products are free of bugs and errors to increase product reliability.

                      </p>
                    </div>
                  </div>
                  <div className="key__factors-content mb-40 d-sm-flex" style={{ width: "50%" }}>
                    <div className="key__factors-icon">
                      <span style={{ paddingLeft: "15px" }}>
                        <svg width="30" height="30" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M10 0C15.52 0 20 4.48 20 10C20 15.52 15.52 20 10 20C4.48 20 0 15.52 0 10C0 4.48 4.48 0 10 0ZM10 4C7.239 4 5 6.686 5 10C5 13.314 7.239 16 10 16C12.761 16 15 13.314 15 10C15 6.686 12.761 4 10 4ZM12.325 7.472C12.747 8.162 13 9.042 13 10C13 12.21 11.657 14 10 14C9.622 14 9.26 13.907 8.927 13.737L8.763 13.645L12.325 7.472ZM10 6C10.378 6 10.74 6.093 11.073 6.263L11.237 6.355L7.675 12.528C7.253 11.838 7 10.958 7 10C7 7.79 8.343 6 10 6Z" fill="#7432ff" />
                        </svg>



                      </span>
                    </div>
                    <div className="key__factors-text">
                      <h5>Reduced Risk</h5>
                      <p>
                        Help reduce risk of product failure, leading to greater customer satisfaction and loyalty.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="key__factors-wrapper d-flex">
                  <div className="key__factors-content mb-40 d-sm-flex" style={{ width: "50%" }}>
                    <div className="key__factors-icon">
                      <span style={{ paddingLeft: "15px" }}>
                        <svg width="30" height="30" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M10 20C4.477 20 0 15.523 0 10C0 4.477 4.477 0 10 0C15.523 0 20 4.477 20 10C20 15.523 15.523 20 10 20ZM6.5 12V14H9V16H11V14H12C12.663 14 13.2989 13.7366 13.7678 13.2678C14.2366 12.7989 14.5 12.163 14.5 11.5C14.5 10.837 14.2366 10.2011 13.7678 9.73223C13.2989 9.26339 12.663 9 12 9H8C7.86739 9 7.74021 8.94732 7.64645 8.85355C7.55268 8.75979 7.5 8.63261 7.5 8.5C7.5 8.36739 7.55268 8.24021 7.64645 8.14645C7.74021 8.05268 7.86739 8 8 8H13.5V6H11V4H9V6H8C7.33696 6 6.70107 6.26339 6.23223 6.73223C5.76339 7.20107 5.5 7.83696 5.5 8.5C5.5 9.16304 5.76339 9.79893 6.23223 10.2678C6.70107 10.7366 7.33696 11 8 11H12C12.1326 11 12.2598 11.0527 12.3536 11.1464C12.4473 11.2402 12.5 11.3674 12.5 11.5C12.5 11.6326 12.4473 11.7598 12.3536 11.8536C12.2598 11.9473 12.1326 12 12 12H6.5Z" fill="#7432ff" />
                        </svg>


                      </span>
                    </div>
                    <div className="key__factors-text">
                      <h5>Cost Saving</h5>
                      <p>
                        Avoid costly rework and post-release bug fixes and customer support.

                      </p>
                    </div>
                  </div>
                  <div className="key__factors-content mb-40 d-sm-flex" style={{ width: "50%" }}>
                    <div className="key__factors-icon">
                      <span style={{ paddingLeft: "15px" }}>
                        <svg width="30" height="30" viewBox="0 0 16 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M13 14.245V21.117C13 21.2054 12.9766 21.2923 12.932 21.3688C12.8875 21.4452 12.8235 21.5085 12.7465 21.5521C12.6696 21.5957 12.5824 21.6181 12.4939 21.617C12.4055 21.616 12.3189 21.5914 12.243 21.546L8 19L3.757 21.546C3.68104 21.5915 3.59436 21.616 3.50581 21.617C3.41727 21.6181 3.33004 21.5956 3.25304 21.5518C3.17605 21.5081 3.11205 21.4447 3.06759 21.3681C3.02313 21.2915 2.9998 21.2045 3 21.116V14.246C1.70615 13.2101 0.765992 11.7979 0.309459 10.2045C-0.147074 8.61117 -0.0974441 6.91536 0.451491 5.35145C1.00043 3.78753 2.02156 2.43272 3.37378 1.47425C4.726 0.515784 6.34254 0.000976563 8 0.000976562C9.65746 0.000976562 11.274 0.515784 12.6262 1.47425C13.9784 2.43272 14.9996 3.78753 15.5485 5.35145C16.0974 6.91536 16.1471 8.61117 15.6905 10.2045C15.234 11.7979 14.2939 13.2101 13 14.246V14.245ZM8 14C9.5913 14 11.1174 13.3678 12.2426 12.2426C13.3679 11.1174 14 9.59127 14 7.99997C14 6.40868 13.3679 4.88255 12.2426 3.75733C11.1174 2.63212 9.5913 1.99997 8 1.99997C6.4087 1.99997 4.88258 2.63212 3.75736 3.75733C2.63214 4.88255 2 6.40868 2 7.99997C2 9.59127 2.63214 11.1174 3.75736 12.2426C4.88258 13.3678 6.4087 14 8 14V14ZM8 12C6.93913 12 5.92172 11.5785 5.17157 10.8284C4.42143 10.0783 4 9.06084 4 7.99997C4 6.93911 4.42143 5.92169 5.17157 5.17155C5.92172 4.4214 6.93913 3.99997 8 3.99997C9.06087 3.99997 10.0783 4.4214 10.8284 5.17155C11.5786 5.92169 12 6.93911 12 7.99997C12 9.06084 11.5786 10.0783 10.8284 10.8284C10.0783 11.5785 9.06087 12 8 12Z" fill="#7432ff" />
                        </svg>


                      </span>
                    </div>
                    <div className="key__factors-text">
                      <h5>Reputation</h5>
                      <p>
                        Thoroughly tested apps increase reputation, customer trust and loyalty.
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
                    <h3 className="vertical-timeline-element-title" style={{ color: "#fff" }}>Consultation & Planning</h3>
                    <p className="zero-padding-right" style={{ color: "#fff" }}>
                      We define test objectives, strategies, scope, and test cases based on requirements.
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
                      Test Execution
                    </h3>

                    <p className="zero-padding-right">
                      We run the tests (manual/automated), record the results, and report defects found.
                    </p>
                  </VerticalTimelineElement>
                  <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{
                      background: "rgb(116, 50, 255)",
                      color: "#fff",
                      border: "1px solid #fff",
                    }}
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
                    <h3 className="vertical-timeline-element-title" style={{ color: "#fff" }}>
                      Defect Management
                    </h3>

                    <p className="zero-padding-right" style={{ color: "#fff" }}>
                      We track, report, prioritise, and resolve the defects found during the testing phase.
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
                      Regression Testing
                    </h3>

                    <p className="zero-padding-right">
                      We retest the fixed defects and verify that the changes made have not introduced new issues.
                    </p>
                  </VerticalTimelineElement>
                  <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{
                      background: "rgb(116, 50, 255)",
                      color: "#fff",
                      border: "1px solid #fff",
                    }}
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
                    <h3 className="vertical-timeline-element-title" style={{ color: "#fff" }}>
                      Acceptance Testing
                    </h3>

                    <p className="zero-padding-right" style={{ color: "#fff" }}>
                      We perform user acceptance testing to ensure that the application meets business requirements and user expectations.

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
                      Test Closure
                    </h3>

                    <p className="zero-padding-right">
                      We evaluate the testing process, create a test summary report, and obtain final sign-off.
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

export default QAServicesDetails;