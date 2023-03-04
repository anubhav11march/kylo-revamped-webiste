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
                We build beautiful and responsive frontend and backend supported
                web applications to fulfill real world client requirements.
              </p>
              <div className="key__benefits">
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
              </div>

              <div className="tech__stack">
                <h4>Tech Stack:</h4>
                <div>
                  <p>
                    Angular, React, React, Vue.js, jQuery, SASS, Bootstrap,
                    HTML5, CSS3, NodeJS, PHP, Python, MySQL, MongoDB, AWS,
                    Redis, Firebase
                  </p>
                </div>
              </div>

              <div className="key__factors">
                <div className="key__factors-title">
                  <h3>Key Factors</h3>
                </div>
                <div className="key__factors-wrapper d-flex">
                  <div className="key__factors-content mb-40 d-sm-flex">
                    <div className="key__factors-icon">
                      <i className="fa-solid fa-briefcase"></i>
                    </div>
                    <div className="key__factors-text">
                      <h5>Business Automation</h5>
                      <p>
                        Energy only home we&apos;ve ever known deciphe scended
                        from rogue.
                      </p>
                    </div>
                  </div>
                  <div className="key__factors-content mb-40 d-sm-flex">
                    <div className="key__factors-icon">
                      <i className="fa-solid fa-chart-bar"></i>
                    </div>
                    <div className="key__factors-text">
                      <h5>Critical Analysis</h5>
                      <p>
                        Energy only home we&apos;ve ever known deciphe scended
                        from rogue.
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
                      <h5>Risk Protection</h5>
                      <p>
                        Energy only home we&apos;ve ever known deciphe scended
                        from rogue.
                      </p>
                    </div>
                  </div>
                  <div className="key__factors-content mb-40 d-sm-flex">
                    <div className="key__factors-icon">
                      <i className="fa-solid fa-file-lines"></i>
                    </div>
                    <div className="key__factors-text">
                      <h5>Annual Report</h5>
                      <p>
                        Energy only home we&apos;ve ever known deciphe scended
                        from rogue.
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
                    contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
                    contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
                    // date="2011 - present"
                    iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
                    icon={
                      <div
                        className="d-flex justify-content-center"
                        style={{ height: "100%", translate: "0% 35%" }}
                      >
                        <i className="far fa-plus" />
                      </div>
                    }
                  >
                    <h3 className="vertical-timeline-element-title">Kickoff</h3>
                    <p>
                      We define your virtual care management program's objectives, and
                      together we develop goals and milestones to help you keep on track
                      to deliver superior care. By pairing together a deep understanding
                      of your policies and processes with our in-depth knowledge of
                      Medicare program requirements, we create a clinical design that
                      works for your organization.
                    </p>
                  </VerticalTimelineElement>
                  <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{
                      background: "#3051a5",
                      color: "#fff",
                      border: "1px solid #fff",
                    }}
                    contentArrowStyle={{ borderRight: "7px solid  #3051a5" }}
                    // date="2011 - present"
                    iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
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
                      Implementation & Training
                    </h3>

                    <p>
                      We conduct an install of our software to integrate directly into
                      your electronic health record system during this step. Once
                      implementation is complete, we will train your full team on the
                      clinical design and software functionality to ensure they are
                      fully prepared at launch.
                    </p>
                  </VerticalTimelineElement>
                </VerticalTimeline>
                {/* <h2>
                  One Time <span>Per Patient</span>
                </h2> */}
                <VerticalTimeline lineColor={"#A1A1A1"}>
                  <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
                    contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
                    // date="2011 - present"
                    iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
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
                      Patient Education & Enrollment
                    </h3>
                    <p>
                      Patient enrollment can be one of the largest challenges to any
                      virtual care management program, so we devise in-person and
                      telephone-based enrollment workflows. We help identify the best
                      patients for your program and streamline the enrollment process by
                      automatically uploading all eligible patients to the software.
                    </p>
                  </VerticalTimelineElement>
                  <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{
                      background: "#3051a5",
                      color: "#fff",
                      border: "1px solid #fff",
                    }}
                    contentArrowStyle={{ borderRight: "7px solid  #3051a5" }}
                    // date="2011 - present"
                    iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
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
                      Care Plan Development & Exchange
                    </h3>

                    <p>
                      Care planning is a crucial but time-consuming component of virtual
                      care management. We offer care plans created by physicians that
                      use evidence-based protocol or work with your clinical staff to
                      create your own templates for upload. By automating the care
                      planning process, we save your clinical staff hours of work.
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
                    contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
                    contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
                    // date="2011 - present"
                    iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
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
                      Monthly Care Coordination
                    </h3>
                    <p>
                      We help you establish a continuity of care through a designated
                      care manager who regularly engages with patients through proven
                      workflows that include a twelve-month patient engagement plan.
                    </p>
                  </VerticalTimelineElement>
                  <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{
                      background: "#3051a5",
                      color: "#fff",
                      border: "1px solid #fff",
                    }}
                    contentArrowStyle={{ borderRight: "7px solid  #3051a5" }}
                    // date="2011 - present"
                    iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
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
                      Time Tracking & Billing Documentation
                    </h3>

                    <p>
                      We implement a process to push charges into your electronic health
                      record system automatically. This allows for quick review and
                      submission that saves billing teams hours at the end of the month
                      while tracking reimbursement and compliance requirements.
                    </p>
                  </VerticalTimelineElement>
                  <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{
                      background: "rgb(33, 150, 243)",
                      color: "#fff",
                      border: "1px solid #fff",
                    }}
                    contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
                    // date="2011 - present"
                    iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
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
                      Ongoing Client Success
                    </h3>

                    <p>
                      After a successful launch, we meet on a quarterly cadence to
                      review your care management program's performance. We dig deep
                      into financial impact and org
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
