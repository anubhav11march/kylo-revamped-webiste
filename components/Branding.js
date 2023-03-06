import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ServiceSidebar from "./ServiceSidebar";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const Branding = () => {
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
              <img src="assets/images/Services/Branding.jpg" alt="" />
            </div>
            <div className="services__details-content">
              <h2>Branding</h2>
              <p>
                We specialise in branding and are passionate about helping businesses establish a strong and memorable brand identity. Our team of experts has the creativity and expertise to develop brand strategies that align with your business goals and resonate with your target audience.

                From developing brand guidelines and designing marketing collateral to creating a unique brand voice and message, we use cutting-edge tools and design principles to ensure that your brand stands out and captures the attention of your customers.
                We’ll help you create a brand that communicates your value and vision to the world!

              </p>
              <div className="key__benefits">
                <div
                  className="key__benefits-content"
                  style={{ display: "flex", columnGap: "40px" }}
                >
                  <ul>
                    <li>Social Media / Email Marketing</li>
                    <li>Brochure Designing</li>
                    <li>Presentation/ Deck Designing</li>
                  </ul>
                  <ul>
                    <li>Logo Designing</li>
                    <li>Envelope / Letterhead Designing</li>
                    <li>Business Card Designing</li>
                  </ul>
                </div>
              </div>

              <div className="tech__stack">
                <h4>Technologies</h4>
                <div className='container'>
                  <div className='row'>
                    <div className='col text-center'>
                      <i className="fa-solid fa-briefcase"></i>
                      <p style={{ paddingRight: "0px" }}>Figma</p>
                    </div>
                    <div className='col text-center'>
                      <i className="fa-solid fa-briefcase"></i>
                      <p style={{ paddingRight: "0px" }}>Canva</p>
                    </div>
                    <div className='col text-center'>
                      <i className="fa-solid fa-briefcase"></i>
                      <p style={{ paddingRight: "0px" }}>Premiere Pro</p>
                    </div>
                    <div className='col text-center'>
                      <i className="fa-solid fa-briefcase"></i>
                      <p style={{ paddingRight: "0px" }}>Illustrator</p>
                    </div>
                    <div className='col text-center'>
                      <i className="fa-solid fa-briefcase"></i>
                      <p style={{ paddingRight: "0px" }}>Photoshop</p>
                    </div>
                    <div className='col text-center'>
                      <i className="fa-solid fa-briefcase"></i>
                      <p style={{ paddingRight: "0px" }}>AdobeXD</p>
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
                      <h5>Recognition</h5>
                      <p>
                        Build awareness and attract target audience.
                      </p>
                    </div>
                  </div>
                  <div className="key__factors-content mb-40 d-sm-flex">
                    <div className="key__factors-icon">
                      <i className="fa-solid fa-chart-bar"></i>
                    </div>
                    <div className="key__factors-text">
                      <h5>Loyalty</h5>
                      <p>
                        Create emotional connections which increase repeat sales.
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
                      <h5>Differentiation </h5>
                      <p>
                        Stand out in crowded markets and differentiate from competitors.
                      </p>
                    </div>
                  </div>
                  <div className="key__factors-content mb-40 d-sm-flex">
                    <div className="key__factors-icon">
                      <i className="fa-solid fa-file-lines"></i>
                    </div>
                    <div className="key__factors-text">
                      <h5>Credibility</h5>
                      <p>
                        Build trust and reputation with customers and stakeholders.
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
                    <h3 className="vertical-timeline-element-title">Discovery</h3>
                    <p>
                      We understand your brand and target audience to create a design that reflects your values and resonates with your customers.

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
                      Research & Ideation
                    </h3>

                    <p>
                      We brainstorm design concepts and present several options for your review and feedback.
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
                      Design
                    </h3>

                    <p>
                      We develop the chosen concept into a polished design that is visually appealing and functional.
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
                      Refinement
                    </h3>

                    <p>
                      We refine the design based on your feedback and make any necessary revisions.
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
                      Finalisation
                    </h3>

                    <p>
                      We deliver the final design files in multiple formats for various applications.
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
                      Implementation
                    </h3>

                    <p>
                      We can also assist with the implementation of the design in various mediums, such as brochures, websites, and social media.
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

export default Branding;
