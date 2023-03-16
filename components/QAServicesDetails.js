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
                <h4>Technologies</h4>
                <div className='container'>
                  <div className='row'>
                    <div className='col text-center'>
                      <i className="fa-solid fa-briefcase"></i>
                      <p style={{ paddingRight: "0px" }}>Manual Testing</p>
                    </div>
                    <div className='col text-center'>
                      <i className="fa-solid fa-briefcase"></i>
                      <p style={{ paddingRight: "0px" }}>Appium</p>
                    </div>
                    <div className='col text-center'>
                      <i className="fa-solid fa-briefcase"></i>
                      <p style={{ paddingRight: "0px" }}>Selenium</p>
                    </div>
                    <div className='col text-center'>
                      <i className="fa-solid fa-briefcase"></i>
                      <p style={{ paddingRight: "0px" }}>AWS Device Farm</p>
                    </div>                    <div className='col text-center'>
                      <i className="fa-solid fa-briefcase"></i>
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
                  <div className="key__factors-content mb-40 d-sm-flex">
                    <div className="key__factors-icon">
                      <i className="fa-solid fa-briefcase"></i>
                    </div>
                    <div className="key__factors-text">
                      <h5>Improved Quality</h5>
                      <p>
                        Ensure products are free of bugs and errors to increase product reliability.

                      </p>
                    </div>
                  </div>
                  <div className="key__factors-content mb-40 d-sm-flex">
                    <div className="key__factors-icon">
                      <i className="fa-solid fa-chart-bar"></i>
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
                  <div className="key__factors-content mb-40 d-sm-flex">
                    <div className="key__factors-icon">
                      <i className="fa-solid fa-unlock-keyhole"></i>
                    </div>
                    <div className="key__factors-text">
                      <h5>Cost Saving</h5>
                      <p>
                        Avoid costly rework and post-release bug fixes and customer support.

                      </p>
                    </div>
                  </div>
                  <div className="key__factors-content mb-40 d-sm-flex">
                    <div className="key__factors-icon">
                      <i className="fa-solid fa-file-lines"></i>
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
                    <h3 className="vertical-timeline-element-title" style={{ color : "#fff"}}>Consultation & Planning</h3>
                    <p style={{ color : "#fff"}}>
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
                      Test Execution
                    </h3>

                    <p>
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
                    <h3 className="vertical-timeline-element-title" style={{ color : "#fff"}}>
                      Defect Management
                    </h3>

                    <p style={{ color : "#fff"}}>
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

                    <p>
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
                    <h3 className="vertical-timeline-element-title" style={{ color : "#fff"}}>
                      Acceptance Testing
                    </h3>

                    <p style={{ color : "#fff"}}>
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

                    <p>
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