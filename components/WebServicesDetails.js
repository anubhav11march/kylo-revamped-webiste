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
                  style={{ display: "flex", columnGap: "12vw" }}
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
                        <svg width="30" height="30" viewBox="0 0 29 28" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13.2922 27.0854C5.95131 27.0854 0 21.1346 0 13.7932C0 6.45178 5.95131 0.500977 13.2922 0.500977V9.35595H7.80017V18.2238H13.2922V27.0854ZM15.5077 27.0854C22.8491 27.0854 28.7999 21.1346 28.7999 13.7932C28.7999 6.45178 22.8491 0.500977 15.5077 0.500977V11.5869H9.97601V15.9933H15.5077V27.0854Z" fill="#7432FF"/>
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
                     <span style={{ paddingLeft: "15px" }}>
                        <svg width="28" height="34" viewBox="0 0 28 34" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14.1867 11.4923C14.5942 11.4927 14.9849 11.6549 15.273 11.9428C15.561 12.231 15.7231 12.6216 15.7236 13.0292V14.566H12.6498V13.0292C12.6503 12.6216 12.8124 12.231 13.1004 11.9428C13.3885 11.6549 13.7791 11.4927 14.1867 11.4923ZM14.1867 17.6398C13.9795 17.6398 13.7926 17.7646 13.7135 17.9561C13.6341 18.1475 13.6778 18.3677 13.8244 18.5143C13.971 18.6609 14.1913 18.7046 14.3827 18.6252C14.5741 18.5461 14.699 18.3593 14.699 18.1521C14.6985 17.8694 14.4694 17.6402 14.1867 17.6398ZM14.1867 4.10764C17.2618 6.63912 20.9929 8.24509 24.9448 8.73888V20.4139C24.9398 21.9574 24.5014 23.4687 23.6792 24.775C22.8573 26.0815 21.6847 27.1308 20.2951 27.8035L14.1868 30.7352L8.07853 27.8035C6.68896 27.1309 5.51636 26.0816 4.69441 24.775C3.87223 23.4687 3.43382 21.9574 3.42878 20.4139V8.73829C7.38099 8.24475 11.112 6.63883 14.1869 4.10728L14.1867 4.10764ZM14.1867 10.4677C13.5077 10.4684 12.8565 10.7387 12.3763 11.2187C11.8962 11.699 11.6259 12.3501 11.6252 13.0291V14.566H11.1129C10.7054 14.5665 10.3148 14.7286 10.0266 15.0166C9.73865 15.3047 9.5765 15.6954 9.57604 16.1029V21.2258C9.5765 21.6334 9.73865 22.024 10.0266 22.3122C10.3148 22.6001 10.7054 22.7623 11.1129 22.7627H17.2604C17.668 22.7623 18.0586 22.6001 18.3468 22.3122C18.6347 22.024 18.7969 21.6334 18.7973 21.2258V16.1029C18.7969 15.6954 18.6347 15.3047 18.3468 15.0166C18.0586 14.7286 17.668 14.5665 17.2604 14.566H16.7482V13.0291C16.7475 12.3501 16.4771 11.699 15.9971 11.2187C15.5168 10.7387 14.8657 10.4684 14.1867 10.4677ZM27.5063 6.88163V20.4143C27.4997 22.4402 26.924 24.4235 25.8452 26.1383C24.7662 27.8531 23.2273 29.2303 21.4036 30.1129L14.4084 33.4705C14.2684 33.538 14.1051 33.538 13.9651 33.4705L6.96985 30.1129C5.14621 29.2304 3.60722 27.8531 2.52824 26.1383C1.44944 24.4235 0.873803 22.4402 0.867188 20.4143V6.88163C0.867188 6.61039 1.07874 6.38626 1.34952 6.37025C9.73355 5.87716 13.747 0.975837 13.7868 0.926482C13.884 0.80527 14.0311 0.734603 14.1864 0.734375H14.1873C14.3423 0.734604 14.4892 0.804814 14.5864 0.925797C14.6261 0.975425 18.6668 5.87858 27.0242 6.3705V6.37027C27.2948 6.38628 27.5063 6.61039 27.5063 6.88163ZM25.9694 8.28794C25.9694 8.02837 25.7753 7.80972 25.5175 7.77908C21.456 7.3649 17.62 5.71323 14.5281 3.04726C14.3337 2.87321 14.0396 2.87321 13.8452 3.04726C10.7533 5.71323 6.91724 7.36491 2.85579 7.77908C2.59804 7.80973 2.40387 8.02837 2.40387 8.28794V20.4138C2.40936 22.1503 2.90267 23.8504 3.82752 25.3201C4.7524 26.79 6.07153 27.9706 7.6347 28.7269L13.9649 31.7654C14.1048 31.8329 14.2681 31.8329 14.4081 31.7654L20.7383 28.7269C22.3012 27.9706 23.6204 26.79 24.5452 25.3203C25.4701 23.8505 25.9637 22.1505 25.9691 20.414L25.9694 8.28794ZM17.2604 15.5906C17.5431 15.5911 17.7723 15.8202 17.7727 16.1029V21.2258C17.7723 21.5085 17.5431 21.7377 17.2604 21.7381H11.1129C10.8303 21.7376 10.6011 21.5085 10.6006 21.2258V16.1029C10.6011 15.8202 10.8303 15.5911 11.1129 15.5906H17.2604ZM15.7236 18.1521C15.7252 17.7742 15.5875 17.409 15.3368 17.1261C15.0862 16.8435 14.7402 16.6628 14.3648 16.6191C13.9893 16.5752 13.611 16.6712 13.3021 16.8887C12.9931 17.1065 12.7749 17.4301 12.6896 17.7983C12.6041 18.1663 12.6574 18.553 12.8392 18.8844C13.0208 19.2158 13.3181 19.4685 13.6744 19.5945V20.2012C13.6744 20.4842 13.9038 20.7135 14.1867 20.7135C14.4696 20.7135 14.699 20.4842 14.699 20.2012V19.5945C14.9979 19.4893 15.2568 19.2942 15.4402 19.0358C15.6236 18.7776 15.7227 18.4688 15.7236 18.1521Z" fill="#7432FF"/>
</svg>



                      </span>
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
                        <i className="fas fa-plus" style={{ fontSize:"11px"}}/>
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
                        <i className="fas fa-plus" style={{ fontSize:"11px"}}/>
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
                        <i className="fas fa-plus" style={{ fontSize:"11px"}} />
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