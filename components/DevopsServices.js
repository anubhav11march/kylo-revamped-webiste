import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ServiceSidebar from "./ServiceSidebar";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const Devops = () => {
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
              <img src="assets/images/Services/devops.jpg" alt="devops" />
            </div>
            <div className="services__details-content">
              <h2>DevOps</h2>
              <p>
                Our team is dedicated to helping businesses streamline their software development and deployment processes. We design and implement efficient and automated DevOps pipelines that help you deliver high-quality software products faster and more reliably.

                We use cutting-edge technologies and best practices to ensure that your software development life cycle is smooth and efficient.
                We’ll help your development and operations teams achieve seamless collaboration and accelerate your business growth!
              </p>
              {/* <div className="key__benefits">
                <div
                  className="key__benefits-content"
                  style={{ display: "flex", columnGap: "40px" }}
                >
                  <ul>
                    <li>Single page apps</li>
                    <li>Enterprise web apps</li>
                    <li>Microservices architecture</li>
                    <li>APIs & Integrations</li>
                  </ul>
                  <ul>
                    <li>Progressive web apps</li>
                    <li>Responsive web apps</li>
                    <li>Cloud-Native applications</li>
                    <li>Upgradation & Migration</li>
                  </ul>
                </div>
              </div> */}

              <div className="tech__stack">
                <h4>Technologies</h4>
                <div className='container'>
                  <div className='row'>
                    <div className='col text-center'>
                      <i className="fa-solid fa-briefcase"></i>
                      <p style={{ paddingRight: "0px" }}>AWS</p>
                    </div>
                    <div className='col text-center'>
                      <i className="fa-solid fa-briefcase"></i>
                      <p style={{ paddingRight: "0px" }}>Digital Ocean</p>
                    </div>
                    <div className='col text-center'>
                      <i className="fa-solid fa-briefcase"></i>
                      <p style={{ paddingRight: "0px" }}>Azure</p>
                    </div>
                    <div className='col text-center'>
                      <i className="fa-solid fa-briefcase"></i>
                      <p style={{ paddingRight: "0px" }}>Firebase</p>
                    </div>
                    <div className='col text-center'>
                      <i className="fa-solid fa-briefcase"></i>
                      <p style={{ paddingRight: "0px" }}>Google Cloud</p>
                    </div>
                    <div className='col text-center'>
                      <i className="fa-solid fa-briefcase"></i>
                      <p style={{ paddingRight: "0px" }}>Github</p>
                    </div>
                    <div className="w-100"></div>
                    <div className='col text-center'>
                      <i className="fa-solid fa-briefcase"></i>
                      <p style={{ paddingRight: "0px" }}>NPM</p>
                    </div>
                    <div className='col text-center'>
                      <i className="fa-solid fa-briefcase"></i>
                      <p style={{ paddingRight: "0px" }}>Nginx</p>
                    </div>
                    <div className='col text-center'>
                      <i className="fa-solid fa-briefcase"></i>
                      <p style={{ paddingRight: "0px" }}>Apache</p>
                    </div>
                    <div className='col text-center'>
                      <i className="fa-solid fa-briefcase"></i>
                      <p style={{ paddingRight: "0px" }}>Docker</p>
                    </div>
                    <div className='col text-center'>
                      <i className="fa-solid fa-briefcase"></i>
                      <p style={{ paddingRight: "0px" }}>Kubernetes</p>
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
                      <h5>Collaboration</h5>
                      <p>
                        Aligns teams and improves communication and collaboration.
                      </p>
                    </div>
                  </div>
                  <div className="key__factors-content mb-40 d-sm-flex" style={{ width : "50%"}}>
                    <div className="key__factors-icon">
                      <i className="fa-solid fa-chart-bar"></i>
                    </div>
                    <div className="key__factors-text">
                      <h5>Continuous Delivery</h5>
                      <p>
                        Faster and more frequent releases and updates.

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
                      <h5>Scalability</h5>
                      <p>
                        Easily scale and accommodate growing user base and traffic.

                      </p>
                    </div>
                  </div>
                  <div className="key__factors-content mb-40 d-sm-flex" style={{ width : "50%"}}>
                    <div className="key__factors-icon">
                      <i className="fa-solid fa-file-lines"></i>
                    </div>
                    <div className="key__factors-text">
                      <h5>Efficiency</h5>
                      <p>
                        Automate processes for quicker and more efficient development.
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
                    <h3 className="vertical-timeline-element-title" style={{ color : "#fff"}}>Planning</h3>
                    <p className="zero-padding-right" style={{ color : "#fff"}}>
                      We identify the project requirements, define the project scope, and establish a development plan.
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
                      Continuous Integration
                    </h3>

                    <p className="zero-padding-right">
                      We integrate code changes into a shared repository, test the changes, and detect and fix issues early in the development process.
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
                        style={{ height: "100%", translate: "0% 35%" }}
                      >
                        <i className="far fa-plus" />
                      </div>
                    }
                  >
                    <h3 className="vertical-timeline-element-title" style={{ color : "#fff"}}>Continuous Delivery</h3>
                    <p className="zero-padding-right" style={{ color : "#fff"}}>
                      We deploy code changes to the production environment automatically, ensuring that the changes are stable and functional.
                    </p>
                  </VerticalTimelineElement>
                  <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: "rgb(227, 220, 255)", color: "#fff" }}
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
                    <h3 className="vertical-timeline-element-title">Continuous Deployment</h3>
                    <p className="zero-padding-right">
                      We automatically release code changes to the production environment after successful testing and verification
                    </p>
                  </VerticalTimelineElement>
                  <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: "rgb(116, 50, 255)", color: "#fff" }}
                    contentArrowStyle={{ borderRight: "7px solid  rgb(227, 220, 255)" }}
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
                    <h3 className="vertical-timeline-element-title">Monitoring & Logging</h3>
                    <p className="zero-padding-right">
                      We monitor the application and infrastructure performance, log and analyse errors and issues, and identify areas for improvement.
                    </p>
                  </VerticalTimelineElement>
                  <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: "rgb(227, 220, 255)", color: "#fff" }}
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
                    <h3 className="vertical-timeline-element-title">Collaboration</h3>
                    <p className="zero-padding-right">
                      We foster collaboration between development, operations, and other stakeholders to streamline the development process and improve application quality.
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

export default Devops;
