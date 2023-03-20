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
                <h3 className='mb-50'>Technologies</h3>
                <div className='container'>
                  <div className='row'>
                    <div className='col text-center'>
                      <img class="tech-icon tech-icon-spacing" src="https://squareboat.com/storage/services/sub_services/tecnology/TT8t0lt7ASZV8hMFQoMpAD56ynv60afbZiU131rc.svg" alt="React" />
                      <p style={{ paddingRight: "0px" }}>ReactJS</p>
                    </div>
                    <div className='col text-center'>
                      <img class="tech-icon tech-icon-spacing" src="https://cdn.cdnlogo.com/logos/n/80/next-js.svg" alt="React" />
                      <p style={{ paddingRight: "0px" }}>NextJS</p>
                    </div>
                    <div className='col text-center'>
                      <img class="tech-icon tech-icon-spacing" src="https://squareboat.com/storage/services/sub_services/tecnology/9JB5jPah24Ho6D2iqhWHAFZOvnZg38pMsYGb857s.svg" alt="jQuery" />
                      <p style={{ paddingRight: "0px" }}>jQuery</p>
                    </div>
                    <div className='col text-center'>
                      <img class="tech-icon tech-icon-spacing" src="https://squareboat.com/storage/services/sub_services/tecnology/QFllOoobIEKGYRg81hSz3phI9EQfgdLHWD3ghmhL.svg" alt="SASS" />
                      <p style={{ paddingRight: "0px" }}>SASS</p>
                    </div>
                    <div className='col text-center'>
                      <img class="tech-icon tech-icon-spacing" src="https://squareboat.com/storage/services/sub_services/tecnology/tVFKioaVRNdEnSuuxvE3t5IOYX4DbepbhpXt3BUN.svg" alt="Bootstrap" />
                      <p style={{ paddingRight: "0px" }}>Bootstrap</p>
                    </div>
                    <div className='col text-center'>
                      <img class="tech-icon tech-icon-spacing" src="https://squareboat.com/storage/services/sub_services/tecnology/EHdq0irLuXAALW4GKc5NVLCgbjGgz6Ui3oPFQhMO.svg" alt="HTML5" />
                      <p style={{ paddingRight: "0px" }}>HTML5</p>
                    </div>
                    <div className='col text-center'>
                      <img class="tech-icon tech-icon-spacing" src="https://squareboat.com/storage/services/sub_services/tecnology/JXEN6A3lJmAAoLft1PnSF1FN1fLuV8MJUzJI9A8f.svg" alt="CSS 3" />
                      <p style={{ paddingRight: "0px" }}>CSS3</p>
                    </div>
                    <div className="w-100"></div>
                    <div className='col text-center'>
                      <img class="tech-icon tech-icon-spacing" src="https://squareboat.com/storage/services/sub_services/tecnology/tfcTx2OOi78i7qTswFmj9h95VXCgAYyGZ0qDklTt.svg" alt="NodeJS" />
                      <p style={{ paddingRight: "0px" }}>NodeJs</p>
                    </div><div className='col text-center'>
                      <img class="tech-icon tech-icon-spacing" src="https://squareboat.com/storage/services/sub_services/tecnology/y4i617ADRirp4ggK7s7DQRg2zBI4EErXlMwo2057.svg" alt="MySQL" />
                      <p style={{ paddingRight: "0px" }}>MySQL</p>
                    </div>
                    <div className='col text-center'>
                      <img class="tech-icon tech-icon-spacing" src="https://squareboat.com/storage/services/sub_services/tecnology/xe5FfXEhYH7vEuCdYnSx3MdeVfG2thwP6tX8jVkO.svg" alt="MongoDB" />
                      <p style={{ paddingRight: "0px" }}>MongoDB</p>
                    </div>
                    <div className='col text-center'>
                      <img class="tech-icon tech-icon-spacing" src="https://squareboat.com/storage/services/sub_services/tecnology/uCmBo0x0hXAyMmMLuPWbc966EiJYLTwcK7yHiaXw.svg" alt="AWS" />
                      <p style={{ paddingRight: "0px" }}>AWS</p>
                    </div>
                    <div className='col text-center'>
                      <img class="tech-icon tech-icon-spacing" src="https://squareboat.com/storage/services/sub_services/tecnology/kw0X2KORtrZG3ObUSIqCECUf90xuPFbASpzSVICF.svg" alt="Redis" />
                      <p style={{ paddingRight: "0px" }}>Redis</p>
                    </div>
                    <div className='col text-center'>
                      <img class="tech-icon tech-icon-spacing" src="https://squareboat.com/storage/services/sub_services/tecnology/rXOG6YXO8TcuvZ3BHBM0FNfZJ1HqQsTy6vjCeWL4.svg" alt="Firebase" />
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
                  <div className="key__factors-content mb-50 d-sm-flex">
                    <div className="key__factors-icon">
                      <span style={{ paddingLeft: "15px" }}>
                        <svg width="30" height="30" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M8.189 10.157L9.57 18H1C0.448 18 0 17.552 0 17V11.602L8.189 10.157ZM17 0C17.552 0 18 0.448 18 1V17C18 17.552 17.552 18 17 18H11.602L8.428 0H17ZM6.397 0L7.841 8.188L0 9.57V1C0 0.448 0.448 0 1 0H6.397Z" fill="#7432ff" />
                        </svg>
                      </span>
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
                      <span style={{ paddingLeft: "15px" }}>
                        <svg width="30" height="30" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M10 9C11.3261 9 12.5979 9.52678 13.5355 10.4645C14.4732 11.4021 15 12.6739 15 14V20H5V14C5 12.6739 5.52678 11.4021 6.46447 10.4645C7.40215 9.52678 8.67392 9 10 9ZM3.288 12.006C3.12886 12.5428 3.03485 13.0968 3.008 13.656L3 14V20H9.13169e-08V15.5C-0.000196807 14.6376 0.318028 13.8054 0.893635 13.1632C1.46924 12.521 2.2617 12.1139 3.119 12.02L3.289 12.006H3.288ZM16.712 12.006C17.6019 12.0602 18.4376 12.452 19.0486 13.1012C19.6596 13.7505 19.9999 14.6084 20 15.5V20H17V14C17 13.307 16.9 12.638 16.712 12.006ZM3.5 6C4.16304 6 4.79893 6.26339 5.26777 6.73223C5.73661 7.20107 6 7.83696 6 8.5C6 9.16304 5.73661 9.79893 5.26777 10.2678C4.79893 10.7366 4.16304 11 3.5 11C2.83696 11 2.20107 10.7366 1.73223 10.2678C1.26339 9.79893 1 9.16304 1 8.5C1 7.83696 1.26339 7.20107 1.73223 6.73223C2.20107 6.26339 2.83696 6 3.5 6V6ZM16.5 6C17.163 6 17.7989 6.26339 18.2678 6.73223C18.7366 7.20107 19 7.83696 19 8.5C19 9.16304 18.7366 9.79893 18.2678 10.2678C17.7989 10.7366 17.163 11 16.5 11C15.837 11 15.2011 10.7366 14.7322 10.2678C14.2634 9.79893 14 9.16304 14 8.5C14 7.83696 14.2634 7.20107 14.7322 6.73223C15.2011 6.26339 15.837 6 16.5 6V6ZM10 0C11.0609 0 12.0783 0.421427 12.8284 1.17157C13.5786 1.92172 14 2.93913 14 4C14 5.06087 13.5786 6.07828 12.8284 6.82843C12.0783 7.57857 11.0609 8 10 8C8.93913 8 7.92172 7.57857 7.17157 6.82843C6.42143 6.07828 6 5.06087 6 4C6 2.93913 6.42143 1.92172 7.17157 1.17157C7.92172 0.421427 8.93913 0 10 0V0Z" fill="#7432ff" />
                        </svg>

                      </span>
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
                      <i className="fa-solid fa-lock"></i>
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
                      <span style={{ paddingLeft: "15px" }}>
                      <svg width="30" height="30" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.89701 15.86L5.80701 11.95L8.63601 14.778L13.207 10.208L15 12V7H10L11.793 8.793L8.63601 11.95L5.80801 9.121L0.862008 14.067C0.291937 12.787 -0.0017877 11.4012 8.18577e-06 10C8.18577e-06 4.477 4.47701 0 10 0C15.523 0 20 4.477 20 10C20 15.523 15.523 20 10 20C8.41801 20.001 6.85839 19.6262 5.44962 18.9065C4.04084 18.1867 2.82321 17.1425 1.89701 15.86V15.86Z" fill="#7432ff"/>
</svg>

                      </span>
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
                        style={{ height: "100%", flexWrap:"wrap", alignContent:"center" }}
                      >
                        <i className="far fa-plus" />
                      </div>
                    }
                  >
                    <h3 className="vertical-timeline-element-title" style={{ color: "#fff" }}>Detailed Consultation</h3>
                    <p style={{ color: "#fff" }}>
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
                        style={{ height: "100%",flexWrap:"wrap", alignContent:"center" }}
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
                        style={{ height: "100%",flexWrap:"wrap", alignContent:"center" }}
                      >
                        <i className="far fa-plus" />
                      </div>
                    }
                  >
                    <h3 className="vertical-timeline-element-title" style={{ color: "#fff" }}>
                      Design & Wireframing
                    </h3>
                    <p style={{ color: "#fff" }}>
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
                    iconStyle={{ background: "rgb(227, 220, 255)" }}
                    icon={
                      <div
                        className="d-flex justify-content-center"
                        style={{ height: "100%",flexWrap:"wrap", alignContent:"center" }}
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
                        style={{ height: "100%",flexWrap:"wrap", alignContent:"center" }}
                      >
                        <i className="far fa-plus" />
                      </div>
                    }
                  >
                    <h3 className="vertical-timeline-element-title" style={{ color: "#fff" }}>
                      Testing
                    </h3>
                    <p style={{ color: "#fff" }}>
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
                        style={{ height: "100%",flexWrap:"wrap", alignContent:"center" }}
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
                        style={{ height: "100%",flexWrap:"wrap", alignContent:"center" }}
                      >
                        <i className="far fa-plus" />
                      </div>
                    }
                  >
                    <h3 className="vertical-timeline-element-title" style={{ color: "#fff" }}>
                      Maintenance & Updates
                    </h3>

                    <p style={{ color: "#fff" }}>
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