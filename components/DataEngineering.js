import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ServiceSidebar from "./ServiceSidebar";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const DataEngineering = () => {
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
              <img src="assets/images/Services/DataEngineering.jpg" alt="" />
            </div>
            <div className="services__details-content">
              <h2>Data Engineering</h2>
              <p>
                We help businesses leverage their data to drive insights and improve decision-making. Our team has the expertise to design and implement efficient data pipelines that help you collect, store, process, and analyze data at scale. We use cutting-edge technologies and best practices to ensure that your data infrastructure is robust, secure, and scalable.
                We’ll help you unlock the true potential of your data and gain a competitive edge!

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
                <div className='container' style={{ paddingLeft : "0px"}}>
                  <div className='row' style={{ width:"25%"}}>
                    <div className='col text-center'>


                    <img class="tech-icon" src="https://squareboat.com/storage/services/sub_services/tecnology/y4i617ADRirp4ggK7s7DQRg2zBI4EErXlMwo2057.svg" alt="MySQL"/>
                      <p style={{ paddingRight: "0px" }}>SQL</p>
                    </div>
                    <div className='col text-center tech-title'>
                    {/* <img class="tech-icon" src="<img class="tech-icon" src="https://squareboat.com/storage/services/sub_services/tecnology/y4i617ADRirp4ggK7s7DQRg2zBI4EErXlMwo2057.svg" alt="MySQL">"/> */}
                    <img class="tech-icon" src="https://squareboat.com/storage/services/sub_services/tecnology/ZlfaTePLZzK8NqMox3xC4sjummEjK3wemtgda67Y.svg" alt="Python"/>
                      <p style={{ paddingRight: "0px" }}>Python</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="key__factors">
                <div className="key__factors-title">
                  <h3>Key Benefits</h3>
                </div>
                <div className="key__factors-wrapper d-flex">
                  <div className="key__factors-content mb-40 d-sm-flex" style={{ width : '50%'}}>
                    <div className="key__factors-icon">
                    <span style={{ paddingLeft: "15px" }}>
                    <svg width="30" height="30" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10 20C4.477 20 0 15.523 0 10C0 4.477 4.477 0 10 0C15.523 0 20 4.477 20 10C20 15.523 15.523 20 10 20ZM5 10C5 11.3261 5.52678 12.5979 6.46447 13.5355C7.40215 14.4732 8.67392 15 10 15C11.3261 15 12.5979 14.4732 13.5355 13.5355C14.4732 12.5979 15 11.3261 15 10H13C13 10.7956 12.6839 11.5587 12.1213 12.1213C11.5587 12.6839 10.7956 13 10 13C9.20435 13 8.44129 12.6839 7.87868 12.1213C7.31607 11.5587 7 10.7956 7 10H5Z" fill="#7432ff"/>
</svg>



                      </span>
                    </div>
                    <div className="key__factors-text">
                      <h5>Data Quality</h5>
                      <p>
                        Ensure data is accurate, reliable, and accessible.

                      </p>
                    </div>
                  </div>
                  <div className="key__factors-content mb-40 d-sm-flex" style={{ width : '50%'}}>
                    <div className="key__factors-icon">
                    <span style={{ paddingLeft: "15px" }}>
                      <svg width="30" height="30" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.89701 15.86L5.80701 11.95L8.63601 14.778L13.207 10.208L15 12V7H10L11.793 8.793L8.63601 11.95L5.80801 9.121L0.862008 14.067C0.291937 12.787 -0.0017877 11.4012 8.18577e-06 10C8.18577e-06 4.477 4.47701 0 10 0C15.523 0 20 4.477 20 10C20 15.523 15.523 20 10 20C8.41801 20.001 6.85839 19.6262 5.44962 18.9065C4.04084 18.1867 2.82321 17.1425 1.89701 15.86V15.86Z" fill="#7432ff"/>
</svg>

                      </span>
                    </div>
                    <div className="key__factors-text">
                      <h5>Scalability </h5>
                      <p>
                        Accommodate growing data volumes and processing needs.

                      </p>
                    </div>
                  </div>
                </div>
                <div className="key__factors-wrapper d-flex">
                  <div className="key__factors-content mb-40 d-sm-flex" style={{ width : '50%'}}>
                    <div className="key__factors-icon">
                    <span style={{ paddingLeft: "15px" }}>
                    <svg width="30" height="30" viewBox="0 0 18 22" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0.783 1.826L9 0L17.217 1.826C17.4391 1.87536 17.6377 1.99897 17.78 2.1764C17.9224 2.35384 18 2.57452 18 2.802V12.789C17.9999 13.7767 17.756 14.7492 17.2899 15.62C16.8238 16.4908 16.1499 17.2331 15.328 17.781L9 22L2.672 17.781C1.85027 17.2332 1.17646 16.4911 0.710348 15.6205C0.244236 14.7498 0.000236356 13.7776 0 12.79V2.802C3.90378e-05 2.57452 0.0776379 2.35384 0.21999 2.1764C0.362341 1.99897 0.560937 1.87536 0.783 1.826V1.826ZM9 12.5L11.939 14.045L11.378 10.773L13.755 8.455L10.469 7.977L9 5L7.53 7.977L4.245 8.455L6.622 10.773L6.062 14.045L9 12.5Z" fill="#7432ff"/>
</svg>


                      </span>
                    </div>
                    <div className="key__factors-text">
                      <h5>Efficiency </h5>
                      <p>
                        Optimize data processing and storage for faster results.

                      </p>
                    </div>
                  </div>
                  <div className="key__factors-content mb-40 d-sm-flex" style={{ width : '50%'}}>
                    <div className="key__factors-icon">
                    <span style={{ paddingLeft: "15px" }}>
                    <svg width="30" height="30" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1 0H19C19.2652 0 19.5196 0.105357 19.7071 0.292893C19.8946 0.48043 20 0.734784 20 1V17C20 17.2652 19.8946 17.5196 19.7071 17.7071C19.5196 17.8946 19.2652 18 19 18H1C0.734784 18 0.48043 17.8946 0.292893 17.7071C0.105357 17.5196 0 17.2652 0 17V1C0 0.734784 0.105357 0.48043 0.292893 0.292893C0.48043 0.105357 0.734784 0 1 0V0ZM5 10V14H7V10H5ZM9 4V14H11V4H9ZM13 7V14H15V7H13Z" fill="#7432ff"/>
</svg>


                      </span>
                    </div>
                    <div className="key__factors-text">
                      <h5>Insights </h5>
                      <p>
                        Extract insights and value from data for decision-making.
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
                    <h3 className="vertical-timeline-element-title" style={{ color: "#fff"}}>Data Collection</h3>
                    <p className="zero-padding-right" style={{ color:"#fff"}}>
                      We collect data from various sources and store it in a central repository.
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
                      Data Transformation
                    </h3>

                    <p className="zero-padding-right">
                      We transform data into a structured format and prepare it for analysis.

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
                    <h3 className="vertical-timeline-element-title" style={{ color:"#fff"}}>
                      Data Integration
                    </h3>

                    <p className="zero-padding-right" style={{ color:"#fff"}}>
                      We integrate data from multiple sources to provide a complete picture.
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
                      Data Storage
                    </h3>

                    <p className="zero-padding-right">
                      We store data in secure and scalable data warehouses or data lakes.

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
                    <h3 className="vertical-timeline-element-title" style={{ color:"#fff"}}>
                      Data Processing
                    </h3>

                    <p className="zero-padding-right" style={{ color:"#fff"}}>
                      We process and analyze data using advanced algorithms and tools.
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
                      Data Visualisation
                    </h3>

                    <p className="zero-padding-right">
                      We present the data in a way that makes it easy to understand and interpret for better decision-making.
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

export default DataEngineering;
