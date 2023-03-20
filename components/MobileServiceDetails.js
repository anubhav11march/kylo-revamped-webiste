import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ServiceSidebar from "./ServiceSidebar";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const MobileServicesDetails = () => {
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
              <img src="assets/images/Services/Mob dev.jpg" alt="" />
            </div>
            <div className="services__details-content">
              <h2>Mobile App Development</h2>
              <p>
                We specialise in mobile app development and are passionate about building native and cross platform apps that are not only aesthetically pleasing but also highly functional.

                From ideation and design to testing and deployment, we provide end-to-end services that cater to your specific business needs.
                We’ll help you create a mobile app that delivers a seamless user experience and boosts your business growth!

              </p>
              <div className="key__benefits">
                <div
                  className="key__benefits-content"
                  style={{ display: "flex", columnGap: "40px" }}
                >
                  <ul>
                    <li>Android & iOS</li>
                    <li>Native + React Native</li>
                    <li>Hybrid & Progressive</li>
                    <li>Wearables</li>
                  </ul>
                  <ul>
                    <li>Geo tracking</li>
                    <li>Game Development</li>
                    <li>Mobile-enabled IoT solutions</li>
                    <li>Augmented & Virtual reality</li>
                  </ul>
                </div>
              </div>

              <div className="tech__stack">
                <h4 className="mb-50">Technologies</h4>
                <div className='container'>
                  <div className='row'>
                    <div className='col text-center'>
                      <img class="tech-icon" src="https://squareboat.com/storage/services/sub_services/tecnology/9qDqySCBRpar1bUkZFiY84gtY64odCKXKNeDkLjh.svg" alt="Android" />
                      <p style={{ paddingRight: "0px" }}>Android</p>
                    </div>
                    <div className='col text-center'>
                      <img class="tech-icon" src="https://squareboat.com/storage/services/sub_services/tecnology/H0DelwCzrjRhrivBEvPHfBILzVWzSmjSUwiHtNUo.svg" alt="iOS" />
                      <p style={{ paddingRight: "0px" }}>iOS</p>
                    </div>
                    <div className='col text-center'>
                      <img class="tech-icon" src="https://squareboat.com/storage/services/sub_services/tecnology/KNQ8WrzJzRZB3dHTTFQsXsGgkG9YIVuYye4VHu5r.svg" alt="React Native" />
                      <p style={{ paddingRight: "0px" }}>React Native</p>
                    </div>
                    <div className='col text-center'>
                      <img class="tech-icon" src="https://squareboat.com/storage/services/sub_services/tecnology/bMiZS7h8gKjmuS2X1BeywnVNPPvKXRgAEi3pM64j.svg" alt="PWA" />
                      <p style={{ paddingRight: "0px" }}>PWA</p>
                    </div>
                    <div className='col text-center'>
                      <img class="tech-icon" src="https://squareboat.com/storage/services/sub_services/tecnology/hnF3dWwBYf3QRKa1Q9I3mh0IKtJU6jDfewt3Td0H.webp" alt="Flutter" />
                      <p style={{ paddingRight: "0px" }}>Flutter</p>
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
                          <path d="M10 20C4.477 20 0 15.523 0 10C0 4.477 4.477 0 10 0C15.523 0 20 4.477 20 10C20 15.523 15.523 20 10 20ZM9.003 14L16.073 6.929L14.659 5.515L9.003 11.172L6.174 8.343L4.76 9.757L9.003 14Z" fill="#7432ff" />
                        </svg>



                      </span>
                    </div>
                    <div className="key__factors-text">
                      <h5>Convenience</h5>
                      <p>
                        Accessible on-the-go, even without internet connection.
                      </p>
                    </div>
                  </div>
                  <div className="key__factors-content mb-50 d-sm-flex" style={{ width: "50%" }}>
                    <div className="key__factors-icon">
                      <span style={{ paddingLeft: "15px" }}>
                        <svg width="30" height="30" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M10 20C4.477 20 0 15.523 0 10C0 4.477 4.477 0 10 0C15.523 0 20 4.477 20 10C20 15.523 15.523 20 10 20ZM5 10C5 11.3261 5.52678 12.5979 6.46447 13.5355C7.40215 14.4732 8.67392 15 10 15C11.3261 15 12.5979 14.4732 13.5355 13.5355C14.4732 12.5979 15 11.3261 15 10H13C13 10.7956 12.6839 11.5587 12.1213 12.1213C11.5587 12.6839 10.7956 13 10 13C9.20435 13 8.44129 12.6839 7.87868 12.1213C7.31607 11.5587 7 10.7956 7 10H5Z" fill="#7432ff" />
                        </svg>


                      </span>
                    </div>
                    <div className="key__factors-text">
                      <h5>User Engagement</h5>
                      <p>
                        Increase engagement and interaction with easy access to device hardware.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="key__factors-wrapper d-flex">
                  <div className="key__factors-content mb-40 d-sm-flex" style={{ width: "50%" }}>
                    <div className="key__factors-icon">
                      <span style={{ paddingLeft: "15px" }}>
                        <svg width="30" height="30" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M8.416 0.623979L15.482 11.223C15.5321 11.2983 15.5608 11.3857 15.5652 11.4761C15.5695 11.5664 15.5492 11.6562 15.5065 11.736C15.4639 11.8157 15.4003 11.8824 15.3228 11.9289C15.2452 11.9754 15.1564 11.9999 15.066 12H0.934C0.843558 11.9999 0.754822 11.9754 0.677243 11.9289C0.599664 11.8824 0.536148 11.8157 0.493459 11.736C0.45077 11.6562 0.430508 11.5664 0.434829 11.4761C0.439151 11.3857 0.467895 11.2983 0.518 11.223L7.584 0.623979C7.62966 0.5555 7.69152 0.499353 7.76409 0.460519C7.83666 0.421685 7.91769 0.401367 8 0.401367C8.08231 0.401367 8.16334 0.421685 8.23591 0.460519C8.30848 0.499353 8.37034 0.5555 8.416 0.623979V0.623979ZM1 14H15C15.2652 14 15.5196 14.1053 15.7071 14.2929C15.8946 14.4804 16 14.7348 16 15C16 15.2652 15.8946 15.5196 15.7071 15.7071C15.5196 15.8946 15.2652 16 15 16H1C0.734784 16 0.48043 15.8946 0.292893 15.7071C0.105357 15.5196 0 15.2652 0 15C0 14.7348 0.105357 14.4804 0.292893 14.2929C0.48043 14.1053 0.734784 14 1 14Z" fill="#7432ff" />
                        </svg>


                      </span>

                    </div>
                    <div className="key__factors-text">
                      <h5>High Performance</h5>
                      <p>
                        Offer fast load times, perform smoothly and store data locally.

                      </p>
                    </div>
                  </div>
                  <div className="key__factors-content mb-40 d-sm-flex" style={{ width: "50%" }}>
                    <div className="key__factors-icon">
                      <i className="fa-solid fa-lock"></i>
                    </div>
                    <div className="key__factors-text">
                      <h5>Data Security</h5>
                      <p>
                        Can be designed with enhanced security features to protect user data.

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
                        style={{ height: "100%",flexWrap:"wrap", alignContent:"center" }}
                      >
                        <i className="far fa-plus" />
                      </div>
                    }
                  >
                    <h3 className="vertical-timeline-element-title" style={{ color: "#fff" }}>Detailed Consultation</h3>
                    <p style={{ color: "#fff" }} className="zero-padding-right">
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

                    <p className="zero-padding-right">
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
                    <p className="zero-padding-right" style={{ color: "#fff" }} >
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

                    <p className="zero-padding-right">
                      We  build the app's back-end infrastructure and develop the front-end with agile methodologies.
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
                    <p className="zero-padding-right" style={{ color: "#fff" }} >
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

                    <p className="zero-padding-right">
                      We  deploy the app to the server and provide support during launch to address any issues.
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

                    <p className="zero-padding-right" style={{ color: "#fff" }} >
                      We provide ongoing maintenance, bug fixes, performance improvements, and feature enhancements to meet your evolving needs.
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

export default MobileServicesDetails;
