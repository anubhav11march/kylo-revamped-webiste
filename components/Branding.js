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
                <h4 className='mb-50'>Technologies</h4>
                <div className='container'>
                  <div className='row'>
                    <div className='col text-center'>
                    <img class="tech-icon" src="https://s3-alpha.figma.com/hub/file/1481185752/fa4cd070-6a79-4e1b-b079-8b9b76408595-cover.png" alt="Figma"/>
                      <p style={{ paddingRight: "0px" }}>Figma</p>
                    </div>
                    <div className='col text-center'>
                    <img class="tech-icon" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Canva_icon_2021.svg/2048px-Canva_icon_2021.svg.png" alt="Canva"/>
                      <p style={{ paddingRight: "0px" }}>Canva</p>
                    </div>
                    <div className='col text-center'>
                    <img class="tech-icon" src="https://squareboat.com/storage/services/sub_services/tecnology/R47oTgf8OzT1OfxzokaafIZsatwLH16r1b1BqGsY.svg" alt="Premiere Pro"/>
                      <p style={{ paddingRight: "0px" }}>Premiere Pro</p>
                    </div>
                    <div className='col text-center'>
                    <img class="tech-icon" src="https://squareboat.com/storage/services/sub_services/tecnology/aZ9Fyl4WjRPhEfJLYE5WS7NjNCySaV3tSxYxbXp6.svg" alt="Illustrator"/>
                      <p style={{ paddingRight: "0px" }}>Illustrator</p>
                    </div>
                    <div className='col text-center'>
                    <img class="tech-icon" src="https://squareboat.com/storage/services/sub_services/tecnology/7bydjJQ90VbcbTRJjaDZcRl7Rq3oMxnAHzG5Tk6Z.svg" alt="Photoshop"/>
                      <p style={{ paddingRight: "0px" }}>Photoshop</p>
                    </div>
                    <div className='col text-center'>
                    <img class="tech-icon" src="https://squareboat.com/storage/services/sub_services/tecnology/ZQhnednfJqDpLlIDPBA7s6YTfB4pTvTegKGQ9axF.svg" alt="Adobe XD"/>
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
                  <div className="key__factors-content mb-40 d-sm-flex" style={{ width : "50%"}}>
                    <div className="key__factors-icon">
                    <span style={{ paddingLeft: "15px" }}>
                    <svg width="30" height="30" viewBox="0 0 22 21" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.9 0.0999999L19.799 1.515L21.213 11.415L12.021 20.607C11.8335 20.7945 11.5792 20.8998 11.314 20.8998C11.0488 20.8998 10.7945 20.7945 10.607 20.607L0.707002 10.707C0.519531 10.5195 0.414215 10.2652 0.414215 10C0.414215 9.73484 0.519531 9.48053 0.707002 9.293L9.9 0.0999999ZM12.728 8.586C12.9138 8.77169 13.1343 8.91897 13.3769 9.01944C13.6196 9.11991 13.8797 9.1716 14.1424 9.17155C14.405 9.17151 14.6651 9.11973 14.9077 9.01917C15.1504 8.91862 15.3708 8.77126 15.5565 8.5855C15.7422 8.39975 15.8895 8.17923 15.9899 7.93656C16.0904 7.69388 16.1421 7.4338 16.1421 7.17115C16.142 6.9085 16.0902 6.64843 15.9897 6.40579C15.8891 6.16315 15.7418 5.94269 15.556 5.757C15.3702 5.57131 15.1497 5.42403 14.9071 5.32356C14.6644 5.22309 14.4043 5.1714 14.1416 5.17145C13.6112 5.17154 13.1025 5.38235 12.7275 5.7575C12.3525 6.13265 12.1419 6.64141 12.142 7.17185C12.142 7.7023 12.3529 8.21098 12.728 8.586Z" fill="#7432ff"/>
</svg>



                      </span>
                    </div>
                    <div className="key__factors-text">
                      <h5>Recognition</h5>
                      <p>
                        Build awareness and attract target audience.
                      </p>
                    </div>
                  </div>
                  <div className="key__factors-content mb-40 d-sm-flex" style={{ width : "50%"}}>
                    <div className="key__factors-icon">
                    <span style={{ paddingLeft: "15px" }}>
                    <svg width="30" height="30" viewBox="0 0 19 22" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13.841 14.659L14.017 14.836L14.195 14.659C14.4039 14.4501 14.652 14.2843 14.925 14.1713C15.1979 14.0582 15.4905 14 15.786 14C16.0815 14 16.3741 14.0582 16.647 14.1713C16.92 14.2843 17.1681 14.4501 17.377 14.659C17.5859 14.8679 17.7517 15.116 17.8647 15.389C17.9778 15.6619 18.036 15.9545 18.036 16.25C18.036 16.5455 17.9778 16.8381 17.8647 17.111C17.7517 17.384 17.5859 17.6321 17.377 17.841L14.017 21.2L10.659 17.841C10.237 17.419 9.99999 16.8467 9.99999 16.25C9.99999 15.6533 10.237 15.081 10.659 14.659C11.081 14.237 11.6533 14 12.25 14C12.8467 14 13.419 14.237 13.841 14.659V14.659ZM8 13V21H0C2.41087e-05 18.9216 0.808937 16.9247 2.25547 15.4323C3.702 13.9398 5.67259 13.069 7.75 13.004L8 13ZM8 0C11.315 0 14 2.685 14 6C14 9.315 11.315 12 8 12C4.685 12 2 9.315 2 6C2 2.685 4.685 0 8 0Z" fill="#7432ff"/>
</svg>




                      </span>
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
                  <div className="key__factors-content mb-40 d-sm-flex" style={{ width : "50%"}}>
                    <div className="key__factors-icon">
                    <span style={{ paddingLeft: "15px" }}>
                    <svg width="30" height="30" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1 7.99999H4V20H1C0.734784 20 0.48043 19.8946 0.292893 19.7071C0.105357 19.5196 0 19.2652 0 19V8.99999C0 8.73477 0.105357 8.48042 0.292893 8.29288C0.48043 8.10535 0.734784 7.99999 1 7.99999V7.99999ZM6.293 6.70699L12.693 0.306989C12.7781 0.221683 12.8911 0.169956 13.0112 0.161321C13.1314 0.152686 13.2506 0.187723 13.347 0.259989L14.2 0.899989C14.4369 1.07783 14.6158 1.32184 14.7143 1.60125C14.8127 1.88065 14.8262 2.18293 14.753 2.46999L13.6 6.99999H20C20.5304 6.99999 21.0391 7.2107 21.4142 7.58578C21.7893 7.96085 22 8.46956 22 8.99999V11.104C22.0003 11.3654 21.9493 11.6242 21.85 11.866L18.755 19.381C18.6795 19.5642 18.5513 19.7209 18.3866 19.8311C18.2219 19.9413 18.0282 20.0001 17.83 20H7C6.73478 20 6.48043 19.8946 6.29289 19.7071C6.10536 19.5196 6 19.2652 6 19V7.41399C6.00006 7.14879 6.10545 6.89448 6.293 6.70699Z" fill="#7432ff"/>
</svg>



                      </span>
                    </div>
                    <div className="key__factors-text">
                      <h5>Differentiation </h5>
                      <p>
                        Stand out in crowded markets and differentiate from competitors.
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
                    contentStyle={{ background: "rgb(116,50,255)", color: "#fff" }}
                    contentArrowStyle={{ borderRight: "7px solid  rgb(116,50,255)" }}
                    // date="2011 - present"
                    iconStyle={{ background: "rgb(116,50,255)", color: "#fff" }}
                    icon={
                      <div
                        className="d-flex justify-content-center"
                        style={{ height: "100%", flexWrap:"wrap", alignContent:"center" }}
                      >
                        <i className="far fa-plus" />
                      </div>
                    }
                  >
                    <h3 className="vertical-timeline-element-title" style={{ color : "#fff"}}>Discovery</h3>
                    <p style={{ color : "#fff"}}>
                      We understand your brand and target audience to create a design that reflects your values and resonates with your customers.

                    </p>
                  </VerticalTimelineElement>
                  <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{
                      background: "rgb(227,220,255)",
                      color: "#fff",
                      border: "1px solid #fff",
                    }}
                    contentArrowStyle={{ borderRight: "7px solid  rgb(227,220,255)" }}
                    // date="2011 - present"
                    iconStyle={{ background: "rgb(227,220,255)" }}
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
                      Research & Ideation
                    </h3>

                    <p>
                      We brainstorm design concepts and present several options for your review and feedback.
                    </p>
                  </VerticalTimelineElement>
                  <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{
                      background: "rgb(116,50,255)",
                      color: "#fff",
                      border: "1px solid #fff",
                    }}
                    contentArrowStyle={{ borderRight: "7px solid  rgb(116,50,255)" }}
                    // date="2011 - present"
                    iconStyle={{ background: "rgb(116,50,255)", color: "#fff" }}
                    icon={
                      <div
                        className="d-flex justify-content-center"
                        style={{ height: "100%", flexWrap:"wrap", alignContent:"center" }}
                      >
                        <i className="far fa-plus" />
                      </div>
                    }
                  >
                    <h3 className="vertical-timeline-element-title" style={{ color : "#fff"}}>
                      Design
                    </h3>

                    <p style={{ color : "#fff"}}>
                      We develop the chosen concept into a polished design that is visually appealing and functional.
                    </p>
                  </VerticalTimelineElement>
                  <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{
                      background: "rgb(227,220,255)",
                      color: "#fff",
                      border: "1px solid #fff",
                    }}
                    contentArrowStyle={{ borderRight: "7px solid  rgb(227,220,255)" }}
                    // date="2011 - present"
                    iconStyle={{ background: "rgb(227,220,255)" }}
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
                      Refinement
                    </h3>

                    <p>
                      We refine the design based on your feedback and make any necessary revisions.
                    </p>
                  </VerticalTimelineElement>
                  <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{
                      background: "rgb(116,50,255)",
                      color: "#fff",
                      border: "1px solid #fff",
                    }}
                    contentArrowStyle={{ borderRight: "7px solid  rgb(116,50,255)" }}
                    // date="2011 - present"
                    iconStyle={{ background: "rgb(116,50,255)", color: "#fff" }}
                    icon={
                      <div
                        className="d-flex justify-content-center"
                        style={{ height: "100%", flexWrap:"wrap", alignContent:"center" }}
                      >
                        <i className="far fa-plus" />
                      </div>
                    }
                  >
                    <h3 className="vertical-timeline-element-title" style={{ color : "#fff"}}>
                      Finalisation
                    </h3>

                    <p style={{ color : "#fff"}}>
                      We deliver the final design files in multiple formats for various applications.
                    </p>
                  </VerticalTimelineElement>
                  <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{
                      background: "rgb(227,220,255)",
                      color: "#fff",
                      border: "1px solid #fff",
                    }}
                    contentArrowStyle={{ borderRight: "7px solid  rgb(227,220,255)" }}
                    // date="2011 - present"
                    iconStyle={{ background: "rgb(227,220,255)" }}
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
