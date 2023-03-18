import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import ServiceSidebar from './ServiceSidebar';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const WebServicesDetails = () => {
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
              <img src="assets/images/Services/Web dev.jpg" alt="" />
            </div>
            <div className="services__details-content">
              <h2>Web App Development</h2>
              <p>
                We specialise in creating beautiful yet powerful custom web applications that are tailored to meet your unique business needs. Our team has the skills and experience necessary to turn your ideas to reality.

                From designing and developing user-friendly interfaces to implementing secure and scalable backend systems, we're committed to delivering top-quality solutions to help you achieve your business goals.
                We’ll take your web app to the next level and help you stand out in today's competitive digital landscape!

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
                <h3 className='mb-4'>Technologies</h3>
                <div className='container'>
                  <div className='row'>
                    <div className='col text-center'>
                    <img class="tech-icon" src="https://squareboat.com/storage/services/sub_services/tecnology/TT8t0lt7ASZV8hMFQoMpAD56ynv60afbZiU131rc.svg" alt="React"/>
                      <p style={{ paddingRight: "0px" }}>ReactJS</p>
                    </div>
                    <div className='col text-center'>
                      <i className="fa-solid fa-briefcase"></i>
                      <p style={{ paddingRight: "0px" }}>NextJS</p>
                    </div>
                    <div className='col text-center'>
                    <img class="tech-icon" src="https://squareboat.com/storage/services/sub_services/tecnology/9JB5jPah24Ho6D2iqhWHAFZOvnZg38pMsYGb857s.svg" alt="jQuery"/>
                      <p style={{ paddingRight: "0px" }}>jQuery</p>
                    </div>
                    <div className='col text-center'>
                    <img class="tech-icon" src="https://squareboat.com/storage/services/sub_services/tecnology/QFllOoobIEKGYRg81hSz3phI9EQfgdLHWD3ghmhL.svg" alt="SASS"/>
                      <p style={{ paddingRight: "0px" }}>SASS</p>
                    </div>
                    <div className='col text-center'>
                    <img class="tech-icon" src="https://squareboat.com/storage/services/sub_services/tecnology/tVFKioaVRNdEnSuuxvE3t5IOYX4DbepbhpXt3BUN.svg" alt="Bootstrap"/>
                      <p style={{ paddingRight: "0px" }}>Bootstrap</p>
                    </div>
                    <div className='col text-center'>
                    <img class="tech-icon" src="https://squareboat.com/storage/services/sub_services/tecnology/EHdq0irLuXAALW4GKc5NVLCgbjGgz6Ui3oPFQhMO.svg" alt="HTML5"/>
                      <p style={{ paddingRight: "0px" }}>HTML5</p>
                    </div>
                    <div className='col text-center'>
                    <img class="tech-icon" src="https://squareboat.com/storage/services/sub_services/tecnology/JXEN6A3lJmAAoLft1PnSF1FN1fLuV8MJUzJI9A8f.svg" alt="CSS 3"/>
                      <p style={{ paddingRight: "0px" }}>CSS3</p>
                    </div>
                    <div className="w-100"></div>
                    <div className='col text-center'>
                    <img class="tech-icon" src="https://squareboat.com/storage/services/sub_services/tecnology/tfcTx2OOi78i7qTswFmj9h95VXCgAYyGZ0qDklTt.svg" alt="NodeJS"/>
                      <p style={{ paddingRight: "0px" }}>NodeJs</p>
                    </div><div className='col text-center'>
                    <img class="tech-icon" src="https://squareboat.com/storage/services/sub_services/tecnology/y4i617ADRirp4ggK7s7DQRg2zBI4EErXlMwo2057.svg" alt="MySQL"/>
                      <p style={{ paddingRight: "0px" }}>MySQL</p>
                    </div>
                    <div className='col text-center'>
                    <img class="tech-icon" src="https://squareboat.com/storage/services/sub_services/tecnology/xe5FfXEhYH7vEuCdYnSx3MdeVfG2thwP6tX8jVkO.svg" alt="MongoDB"/>
                      <p style={{ paddingRight: "0px" }}>MongoDB</p>
                    </div>
                    <div className='col text-center'>
                    <img class="tech-icon" src="https://squareboat.com/storage/services/sub_services/tecnology/uCmBo0x0hXAyMmMLuPWbc966EiJYLTwcK7yHiaXw.svg" alt="AWS"/>
                      <p style={{ paddingRight: "0px" }}>AWS</p>
                    </div>
                    <div className='col text-center'>
                    <img class="tech-icon" src="https://squareboat.com/storage/services/sub_services/tecnology/kw0X2KORtrZG3ObUSIqCECUf90xuPFbASpzSVICF.svg" alt="Redis"/>
                      <p style={{ paddingRight: "0px" }}>Redis</p>
                    </div>
                    <div className='col text-center'>
                    <img class="tech-icon" src="https://squareboat.com/storage/services/sub_services/tecnology/rXOG6YXO8TcuvZ3BHBM0FNfZJ1HqQsTy6vjCeWL4.svg" alt="Firebase"/>
                      <p style={{ paddingRight: "0px" }}>Firebase</p>
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
                      <h5>Compatibility</h5>
                      <p>
                        Operated on a wide range of devices, regardless of the operating system used.
                      </p>
                    </div>
                  </div>
                  <div className="key__factors-content mb-40 d-sm-flex">
                    <div className="key__factors-icon">
                      <i className="fa-solid fa-chart-bar"></i>
                    </div>
                    <div className="key__factors-text">
                      <h5>Improved Collaboration</h5>
                      <p>
                        Accessible by multiple users simultaneously, making them ideal for collaboration.

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
                      <h5>Data Security</h5>
                      <p>
                        Built-in security features protect user data, ensuring the safety of sensitive information.
                      </p>
                    </div>
                  </div>
                  <div className="key__factors-content mb-40 d-sm-flex">
                    <div className="key__factors-icon">
                      <i className="fa-solid fa-file-lines"></i>
                    </div>
                    <div className="key__factors-text">
                      <h5>Scalability</h5>
                      <p>
                        Accommodate growing user base with easy updates, feature additions, and integrations.
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
                    <h3 className="vertical-timeline-element-title" style={{ color : "#fff"}}>Detailed Consultation</h3>
                    <p style={{ color : "#fff"}}>
                      We start with a thorough consultation and clear your doubts by understanding your target audience, business objectives, and feature requirements.
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
                      Planning & Analysis
                    </h3>

                    <p>
                      After finalising the scope of work, our product team creates a draft which includes the entire project plan as per your vision.

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
                    <h3 className="vertical-timeline-element-title" style={{ color : "#fff"}}>
                      Design & Wireframing
                   </h3>
                    <p style={{ color : "#fff"}}>
                     We create mockups that showcase the app's layout and functionality and align with your brand and user experience expectations.
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
                      Development
                    </h3>

                    <p>
                      We build the app's back-end infrastructure and develop the front-end with agile methodologies.
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
                    <h3 className="vertical-timeline-element-title" style={{ color : "#fff"}}>
                      Testing
                   </h3>
                    <p style={{ color : "#fff"}}>
                     We rigorously test the app to ensure it meets all requirements and is compatible with various devices and platforms.
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
                      Deployment & Launch
                    </h3>

                    <p>
                      We deploy the app to the server and provide support during launch to address any issues.
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
                      Maintenance & Updates
                   </h3>

                   <p style={{ color : "#fff"}}>
                      We provide ongoing maintenance, bug fixes, performance improvements, and feature enhancements to meet your evolving needs.
                    </p>
                  </VerticalTimelineElement>

                </VerticalTimeline>
                {/* <div className="partner-section section-gap-80">
                  <div className="container">
                    <div className="section-heading text-center mb-50">

                      <h2 className="progress-title">
                        Program <span>Design</span>
                      </h2>
                    </div>
                    <div classname="row" style={{ display: "inline-flex" }}>
                      <div className="col-3 progress2">
                        <h3>Kickoff</h3>
                        <p>
                          We define your virtual care management program's objectives, and
                          together we develop goals and milestones to help you keep on
                          track to deliver superior care.
                        </p>
                        <div className="icon">
                          <img src="/assets/img/hero-img/track.png" alt="Icon" />
                        </div>
                      </div>
                      <div className="col-3 progress2">
                        <h3>Implementation</h3>
                        <p>
                          We define your virtual care management program's objectives, and
                          together we develop goals and milestones to help you keep on
                          track to deliver superior care.
                        </p>
                        <div className="icon">
                          <img src="/assets/img/hero-img/track.png" alt="Icon" />
                        </div>
                      </div>
                      <div className="col-3 progress2">
                        <h3>Enrollment</h3>
                        <p>
                          We define your virtual care management program's objectives, and
                          together we develop goals and milestones to help you keep on
                          track to deliver superior care.
                        </p>
                        <div className="icon">
                          <img src="/assets/img/hero-img/track.png" alt="Icon" />
                        </div>
                      </div>
                      <div className="col-3 progress2">
                        <h3>Care</h3>
                        <p>
                          We define your virtual care management program's objectives, and
                          together we develop goals and milestones to help you keep on
                          track to deliver superior care.
                        </p>
                        <div className="icon">
                          <img src="/assets/img/hero-img/track.png" alt="Icon" />
                        </div>
                      </div>
                    </div>
                    <div className="progress2-bottom">
                      <h3>LIFESTYLE</h3>
                      <h3>LEGACY</h3>
                    </div>
                  </div>
                </div> */}
                {/* <div className="key__benefits-content">
                  <ul>
                    <li>Sea of Tranquility dispassionate observer dream.</li>
                    <li>
                      Muse about as a patch of light brain is the seed of
                      intelligence.
                    </li>
                    <li>
                      The only home we&apos;ve ever known dream of the
                      mind&apos;s eye.
                    </li>
                  </ul>
                </div> */}
              </div>
              {/* <p>
                Kindling the energy hidden in matter the only home we&apos;ve
                ever known radio telescope decipherment descended from
                astronomers rogue. Prime number network of wormholes take
                root. Kindling the energy hidden in matter the only home
                we&apos;ve ever known radio telescope decipherment descended.
              </p> */}
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default WebServicesDetails;