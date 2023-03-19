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
                    <img class="tech-icon" src="https://squareboat.com/storage/services/sub_services/tecnology/uCmBo0x0hXAyMmMLuPWbc966EiJYLTwcK7yHiaXw.svg" alt="AWS"/>
                      <p style={{ paddingRight: "0px" }}>AWS</p>
                    </div>
                    <div className='col text-center'>
                    <img class="tech-icon" src="https://companieslogo.com/img/orig/DOCN-6eec72eb.png?t=1660638083" alt="Digital Ocean"/>
                      <p style={{ paddingRight: "0px" }}>Digital Ocean</p>
                    </div>
                    <div className='col text-center'>
                    <img class="tech-icon" src="https://swimburger.net/media/ppnn3pcl/azure.png" alt="Azure"/>
                      <p style={{ paddingRight: "0px" }}>Azure</p>
                    </div>
                    <div className='col text-center'>
                    <img class="tech-icon" src="https://squareboat.com/storage/services/sub_services/tecnology/rXOG6YXO8TcuvZ3BHBM0FNfZJ1HqQsTy6vjCeWL4.svg" alt="Firebase"/>
                      <p style={{ paddingRight: "0px" }}>Firebase</p>
                    </div>
                    <div className='col text-center'>
                    <img class="tech-icon" src="https://squareboat.com/storage/services/sub_services/tecnology/U0GicUuynPN57tx1sHEb7sY4gbqbPCWrXHo0K5sY.svg" alt="Google Cloud"/>
                      <p style={{ paddingRight: "0px" }}>Google Cloud</p>
                    </div>
                    <div className='col text-center'>
                    <img class="tech-icon" src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="Github"/>
                      <p style={{ paddingRight: "0px" }}>Github</p>
                    </div>
                    <div className="w-100"></div>
                    <div className='col text-center'>
                    <img class="tech-icon" src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Npm-logo.svg/1024px-Npm-logo.svg.png" alt="NPM"/>
                      <p style={{ paddingRight: "0px" }}>NPM</p>
                    </div>
                    <div className='col text-center'>
                    <img class="tech-icon" src="https://cdn.iconscout.com/icon/free/png-256/nginx-3628948-3030173.png" alt="Nginx"/>
                      <p style={{ paddingRight: "0px" }}>Nginx</p>
                    </div>
                    <div className='col text-center'>
                    <img class="tech-icon" src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Apache_Feather_Logo.svg/800px-Apache_Feather_Logo.svg.png" alt="Apache"/>
                      <p style={{ paddingRight: "0px" }}>Apache</p>
                    </div>
                    <div className='col text-center'>
                    <img class="tech-icon" src="https://seeklogo.com/images/D/docker-logo-CF97D0124B-seeklogo.com.png" alt="Docker"/>
                      <p style={{ paddingRight: "0px" }}>Docker</p>
                    </div>
                    <div className='col text-center'>
                    <img class="tech-icon" src="https://assets.stickpng.com/images/58480a44cef1014c0b5e4917.png" alt="Kubernetes"/>
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
                    <span style={{ paddingLeft: "15px" }}>
                        <svg width="30" height="30" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M10 9C11.3261 9 12.5979 9.52678 13.5355 10.4645C14.4732 11.4021 15 12.6739 15 14V20H5V14C5 12.6739 5.52678 11.4021 6.46447 10.4645C7.40215 9.52678 8.67392 9 10 9ZM3.288 12.006C3.12886 12.5428 3.03485 13.0968 3.008 13.656L3 14V20H9.13169e-08V15.5C-0.000196807 14.6376 0.318028 13.8054 0.893635 13.1632C1.46924 12.521 2.2617 12.1139 3.119 12.02L3.289 12.006H3.288ZM16.712 12.006C17.6019 12.0602 18.4376 12.452 19.0486 13.1012C19.6596 13.7505 19.9999 14.6084 20 15.5V20H17V14C17 13.307 16.9 12.638 16.712 12.006ZM3.5 6C4.16304 6 4.79893 6.26339 5.26777 6.73223C5.73661 7.20107 6 7.83696 6 8.5C6 9.16304 5.73661 9.79893 5.26777 10.2678C4.79893 10.7366 4.16304 11 3.5 11C2.83696 11 2.20107 10.7366 1.73223 10.2678C1.26339 9.79893 1 9.16304 1 8.5C1 7.83696 1.26339 7.20107 1.73223 6.73223C2.20107 6.26339 2.83696 6 3.5 6V6ZM16.5 6C17.163 6 17.7989 6.26339 18.2678 6.73223C18.7366 7.20107 19 7.83696 19 8.5C19 9.16304 18.7366 9.79893 18.2678 10.2678C17.7989 10.7366 17.163 11 16.5 11C15.837 11 15.2011 10.7366 14.7322 10.2678C14.2634 9.79893 14 9.16304 14 8.5C14 7.83696 14.2634 7.20107 14.7322 6.73223C15.2011 6.26339 15.837 6 16.5 6V6ZM10 0C11.0609 0 12.0783 0.421427 12.8284 1.17157C13.5786 1.92172 14 2.93913 14 4C14 5.06087 13.5786 6.07828 12.8284 6.82843C12.0783 7.57857 11.0609 8 10 8C8.93913 8 7.92172 7.57857 7.17157 6.82843C6.42143 6.07828 6 5.06087 6 4C6 2.93913 6.42143 1.92172 7.17157 1.17157C7.92172 0.421427 8.93913 0 10 0V0Z" fill="#7432ff" />
                        </svg>

                      </span>
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
                    <span style={{ paddingLeft: "15px" }}>
                    <svg width="30" height="30" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10 20C4.477 20 0 15.523 0 10C0 4.477 4.477 0 10 0C15.523 0 20 4.477 20 10C20 15.523 15.523 20 10 20ZM9.003 14L16.073 6.929L14.659 5.515L9.003 11.172L6.174 8.343L4.76 9.757L9.003 14Z" fill="#7432ff"/>
</svg>


                      </span>
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
                    <span style={{ paddingLeft: "15px" }}>
                      <svg width="30" height="30" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.89701 15.86L5.80701 11.95L8.63601 14.778L13.207 10.208L15 12V7H10L11.793 8.793L8.63601 11.95L5.80801 9.121L0.862008 14.067C0.291937 12.787 -0.0017877 11.4012 8.18577e-06 10C8.18577e-06 4.477 4.47701 0 10 0C15.523 0 20 4.477 20 10C20 15.523 15.523 20 10 20C8.41801 20.001 6.85839 19.6262 5.44962 18.9065C4.04084 18.1867 2.82321 17.1425 1.89701 15.86V15.86Z" fill="#7432ff"/>
</svg>

                      </span>
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
                    <span style={{ paddingLeft: "15px" }}>
                    <svg width="30" height="30" viewBox="0 0 18 22" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0.783 1.826L9 0L17.217 1.826C17.4391 1.87536 17.6377 1.99897 17.78 2.1764C17.9224 2.35384 18 2.57452 18 2.802V12.789C17.9999 13.7767 17.756 14.7492 17.2899 15.62C16.8238 16.4908 16.1499 17.2331 15.328 17.781L9 22L2.672 17.781C1.85027 17.2332 1.17646 16.4911 0.710348 15.6205C0.244236 14.7498 0.000236356 13.7776 0 12.79V2.802C3.90378e-05 2.57452 0.0776379 2.35384 0.21999 2.1764C0.362341 1.99897 0.560937 1.87536 0.783 1.826V1.826ZM9 12.5L11.939 14.045L11.378 10.773L13.755 8.455L10.469 7.977L9 5L7.53 7.977L4.245 8.455L6.622 10.773L6.062 14.045L9 12.5Z" fill="#7432ff"/>
</svg>


                      </span>
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
