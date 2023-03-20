import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import ServiceSidebar from './ServiceSidebar';

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const UiUxServicesDetails = () => {
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
              <img src="assets/images/Services/ui ux.jpg" alt="" />
            </div>
            <div className="services__details-content">
              <h2>UI/UX Designing</h2>
              <p>
                Everything great built seems futile, if it does not have a likable design. We are dedicated to creating beautiful and intuitive interfaces that function seamlessly and enhance user experience.

                We include all your business goals, expectations, objectives and resources into our own creative and imaginative visual representation.
                We’ll help you create a user interface that will captivate your audience and elevate your brand's identity!
              </p>
              <div className="key__benefits">
                <div
                  className="key__benefits-content"
                  style={{ display: "flex", columnGap: "40px" }}
                >
                  <ul>
                    <li>User research</li>
                    <li>Prototyping</li>
                    <li>Apple&apos;s Flat Design</li>
                  </ul>
                  <ul>
                    <li>Wireframing</li>
                    <li>Responsive design</li>
                    <li>Google&apos;s Material Design</li>
                  </ul>
                </div>
              </div>

              <div className="tech__stack">
                <h4 className='mb-50'>Technologies</h4>
                <div className='container'>
                  <div className='row'>
                    <div className='col text-center'>
                      <img class="tech-icon" src="https://s3-alpha.figma.com/hub/file/1481185752/fa4cd070-6a79-4e1b-b079-8b9b76408595-cover.png" alt="Figma" />
                      <p style={{ paddingRight: "0px" }}>Figma</p>
                    </div>
                    <div className='col text-center'>
                      <img class="tech-icon" src="https://squareboat.com/storage/services/sub_services/tecnology/PT7M1xymH5E3Jh1d1a2FBWVUHjPeGqYRn9eF2gKg.svg" alt="After Effects" />
                      <p style={{ paddingRight: "0px" }}>After Effects</p>
                    </div>
                    <div className='col text-center'>
                      <img class="tech-icon" src="https://squareboat.com/storage/services/sub_services/tecnology/R47oTgf8OzT1OfxzokaafIZsatwLH16r1b1BqGsY.svg" alt="Premiere Pro" />
                      <p style={{ paddingRight: "0px" }}>Premiere Pro</p>
                    </div>
                    <div className='col text-center'>
                      <img class="tech-icon" src="https://squareboat.com/storage/services/sub_services/tecnology/ZLCJoLGgoFcdRae5t2rfo11BShD2NFvyhFjP5AZB.svg" alt="Blender" />
                      <p style={{ paddingRight: "0px" }}>Blender</p>
                    </div>
                    <div className='col text-center'>
                      <img class="tech-icon" src="https://squareboat.com/storage/services/sub_services/tecnology/5vON9eoHLRYiMgy3V9OaWPt44GniilO2cPybFijX.png" alt="Lottie" />
                      <p style={{ paddingRight: "0px" }}>Lottie</p>
                    </div>
                    <div className='col text-center'>
                      <img class="tech-icon" src="https://squareboat.com/storage/services/sub_services/tecnology/cLCZaVkGxPvdxl9rsMtExn4TV3Ng2LVT2SiFVd0L.svg" alt="Sketch" />
                      <p style={{ paddingRight: "0px" }}>Sketch</p>
                    </div>
                    <div className="w-100"></div>

                    <div className='col text-center'>
                      <img class="tech-icon" src="https://squareboat.com/storage/services/sub_services/tecnology/aZ9Fyl4WjRPhEfJLYE5WS7NjNCySaV3tSxYxbXp6.svg" alt="Illustrator" />
                      <p style={{ paddingRight: "0px" }}>Illustrator</p>
                    </div>
                    <div className='col text-center'>
                      <img class="tech-icon" src="https://squareboat.com/storage/services/sub_services/tecnology/7bydjJQ90VbcbTRJjaDZcRl7Rq3oMxnAHzG5Tk6Z.svg" alt="Photoshop" />
                      <p style={{ paddingRight: "0px" }}>Photoshop</p>
                    </div>
                    <div className='col text-center'>
                      <img class="tech-icon" src="https://squareboat.com/storage/services/sub_services/tecnology/T09UuXtKy0hJPs90VkFHDzgme4PvesWJfOJXYuNf.svg" alt="Framer" />
                      <p style={{ paddingRight: "0px" }}>Framer</p>
                    </div>
                    <div className='col text-center'>
                      <img class="tech-icon" src="https://squareboat.com/storage/services/sub_services/tecnology/xEdgJnpp90k6eBF3IP1eH4rU2hPli4eLBlbVxDrb.svg" alt="Marvel" />
                      <p style={{ paddingRight: "0px" }}>Marvel</p>
                    </div>
                    <div className='col text-center'>
                      <img class="tech-icon" src="https://squareboat.com/storage/services/sub_services/tecnology/vgYCJ8g5pDhRZdp1vzSJ5tnU04rVIuJg2cD8WGfO.svg" alt="Invision" />
                      <p style={{ paddingRight: "0px" }}>Invision</p>
                    </div>
                    <div className='col text-center'>
                      <img class="tech-icon" src="https://squareboat.com/storage/services/sub_services/tecnology/ZQhnednfJqDpLlIDPBA7s6YTfB4pTvTegKGQ9axF.svg" alt="Adobe XD" />
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
                  <div className="key__factors-content mb-40 d-sm-flex" style={{ width: "50%" }}>
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
                        Intuitive and appealing design improves user experience and satisfaction.
                      </p>
                    </div>
                  </div>
                  <div className="key__factors-content mb-40 d-sm-flex" style={{ width: "50%" }}>
                    <div className="key__factors-icon">
                      <span style={{ paddingLeft: "15px" }}>
                        <svg width="30" height="30" viewBox="0 0 22 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M9.9 0.0999999L19.799 1.515L21.213 11.415L12.021 20.607C11.8335 20.7945 11.5792 20.8998 11.314 20.8998C11.0488 20.8998 10.7945 20.7945 10.607 20.607L0.707002 10.707C0.519531 10.5195 0.414215 10.2652 0.414215 10C0.414215 9.73484 0.519531 9.48053 0.707002 9.293L9.9 0.0999999ZM12.728 8.586C12.9138 8.77169 13.1343 8.91897 13.3769 9.01944C13.6196 9.11991 13.8797 9.1716 14.1424 9.17155C14.405 9.17151 14.6651 9.11973 14.9077 9.01917C15.1504 8.91862 15.3708 8.77126 15.5565 8.5855C15.7422 8.39975 15.8895 8.17923 15.9899 7.93656C16.0904 7.69388 16.1421 7.4338 16.1421 7.17115C16.142 6.9085 16.0902 6.64843 15.9897 6.40579C15.8891 6.16315 15.7418 5.94269 15.556 5.757C15.3702 5.57131 15.1497 5.42403 14.9071 5.32356C14.6644 5.22309 14.4043 5.1714 14.1416 5.17145C13.6112 5.17154 13.1025 5.38235 12.7275 5.7575C12.3525 6.13265 12.1419 6.64141 12.142 7.17185C12.142 7.7023 12.3529 8.21098 12.728 8.586Z" fill="#7432ff" />
                        </svg>



                      </span>
                    </div>
                    <div className="key__factors-text">
                      <h5>Brand Recognition</h5>
                      <p>
                        Establish a distinct identity, increase brand recognition and customer loyalty.

                      </p>
                    </div>
                  </div>
                </div>
                <div className="key__factors-wrapper d-flex">
                  <div className="key__factors-content mb-40 d-sm-flex" style={{ width: "50%" }}>
                    <div className="key__factors-icon">
                      <span style={{ paddingLeft: "15px" }}>
                        <svg width="30" height="30" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M18.375 14.103C19.0239 12.5613 19.1732 10.855 18.8021 9.22403C18.431 7.59305 17.558 6.11939 16.3059 5.01025C15.0539 3.90111 13.4857 3.21227 11.8218 3.04056C10.158 2.86886 8.48219 3.22293 7.03001 4.053L6.03801 2.316C7.55564 1.44862 9.2742 0.994368 11.0222 0.998579C12.7702 1.00279 14.4866 1.46531 16 2.34C20.49 4.932 22.21 10.482 20.117 15.11L21.459 15.884L17.294 18.098L17.129 13.384L18.375 14.103V14.103ZM3.62501 7.897C2.97615 9.4387 2.82679 11.145 3.19793 12.776C3.56906 14.407 4.44202 15.8806 5.69408 16.9897C6.94614 18.0989 8.51433 18.7877 10.1782 18.9594C11.842 19.1311 13.5178 18.7771 14.97 17.947L15.962 19.684C14.4444 20.5514 12.7258 21.0056 10.9778 21.0014C9.22979 20.9972 7.51344 20.5347 6.00001 19.66C1.51001 17.068 -0.209991 11.518 1.88301 6.89L0.540009 6.117L4.70501 3.903L4.87001 8.617L3.62401 7.898L3.62501 7.897ZM12.415 13.828L9.58401 11L6.75601 13.828L5.34201 12.414L9.58501 8.172L12.414 11L15.243 8.172L16.657 9.586L12.414 13.828H12.415Z" fill="#7432ff" />
                        </svg>


                      </span>
                    </div>
                    <div className="key__factors-text">
                      <h5>Conversion Rates</h5>
                      <p>
                        Clear calls-to-action and navigation increase conversions/ sales.

                      </p>
                    </div>
                  </div>
                  <div className="key__factors-content mb-40 d-sm-flex" style={{ width: "50%" }}>
                    <div className="key__factors-icon">
                      <span style={{ paddingLeft: "15px" }}>
                        <svg width="30" height="30" viewBox="0 0 18 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M1 0H17C17.2652 0 17.5196 0.105357 17.7071 0.292893C17.8946 0.48043 18 0.734784 18 1V20.276C18.0001 20.3594 17.9793 20.4416 17.9395 20.5149C17.8997 20.5882 17.8422 20.6505 17.7722 20.6959C17.7023 20.7413 17.622 20.7685 17.5388 20.775C17.4557 20.7815 17.3722 20.767 17.296 20.733L9 17.03L0.704 20.732C0.627903 20.766 0.544512 20.7805 0.46141 20.774C0.378309 20.7676 0.298133 20.7405 0.228176 20.6952C0.158219 20.6499 0.1007 20.5878 0.0608497 20.5146C0.0209992 20.4414 8.18259e-05 20.3593 0 20.276V1C0 0.734784 0.105357 0.48043 0.292893 0.292893C0.48043 0.105357 0.734784 0 1 0V0ZM9 11.5L11.939 13.045L11.378 9.773L13.755 7.455L10.469 6.977L9 4L7.53 6.977L4.245 7.455L6.622 9.773L6.062 13.045L9 11.5Z" fill="#7432ff" />
                        </svg>

                      </span>
                    </div>
                    <div className="key__factors-text">
                      <h5>Competitive Advantage</h5>
                      <p>
                        Well-designed products stand out in crowded markets.

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
                    <p className="zero-padding-right" style={{ color: "#fff" }}>
                      We start with a thorough consultation, clear doubts and finalise the project scope by understanding your business requirements.

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
                    iconStyle={{ background: "rgb(227,220, 255)" }}
                    icon={
                      <div
                        className="d-flex justify-content-center"
                        style={{ height: "100%", flexWrap:"wrap", alignContent:"center" }}
                      >
                        <i className="far fa-plus" />
                      </div>
                    }
                  >
                    <h3 className="vertical-timeline-element-title">
                      Research
                    </h3>

                    <p className="zero-padding-right">
                      We understand user needs and gather information on competitors to create a competitive design.
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
                        style={{ height: "100%", flexWrap:"wrap", alignContent:"center" }}
                      >
                        <i className="far fa-plus" />
                      </div>
                    }
                  >
                    <h3 className="vertical-timeline-element-title" style={{ color: "#fff" }}>
                      Ideation
                    </h3>
                    <p className="zero-padding-right" style={{ color: "#fff" }}>
                      We create concepts based on research and your vision for the project.

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
                    iconStyle={{ background: "rgb(227,220, 255)" }}
                    icon={
                      <div
                        className="d-flex justify-content-center"
                        style={{ height: "100%", flexWrap:"wrap", alignContent:"center" }}
                      >
                        <i className="far fa-plus" />
                      </div>
                    }
                  >
                    <h3 className="vertical-timeline-element-title">
                      Wireframing
                    </h3>

                    <p className="zero-padding-right">
                      We create low-fidelity wireframes to explore layout and functionality options.
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
                        style={{ height: "100%", flexWrap:"wrap", alignContent:"center" }}
                      >
                        <i className="far fa-plus" />
                      </div>
                    }
                  >
                    <h3 className="vertical-timeline-element-title" style={{ color: "#fff" }}>
                      Prototyping
                    </h3>
                    <p className="zero-padding-right" style={{ color: "#fff" }}>
                      We develop interactive prototypes for testing and iteration.

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
                    iconStyle={{ background: "rgb(227,220, 255)" }}
                    icon={
                      <div
                        className="d-flex justify-content-center"
                        style={{ height: "100%", flexWrap:"wrap", alignContent:"center" }}
                      >
                        <i className="far fa-plus" />
                      </div>
                    }
                  >
                    <h3 className="vertical-timeline-element-title">
                      Visual Design
                    </h3>

                    <p className="zero-padding-right">
                      We create high-fidelity designs with branding and user interface elements.

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
                        style={{ height: "100%", flexWrap:"wrap", alignContent:"center" }}
                      >
                        <i className="far fa-plus" />
                      </div>
                    }
                  >
                    <h3 className="vertical-timeline-element-title" style={{ color: "#fff" }}>
                      Testing & Refinement
                    </h3>

                    <p className="zero-padding-right" style={{ color: "#fff" }}>
                      We test the design with users to ensure usability and make necessary improvements.

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

export default UiUxServicesDetails;