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
                <h3 className='mb-50'>Technologies</h3>
                <div className='container' style={{ paddingLeft : "0px"}}>
                  <div className='row' style={{ width:"25%"}}>
                    <div className='col text-center' style={{ paddingRight:"50px"}}>


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
                    <svg width="30" height="30" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_601_1990)">
<path d="M26.8278 23.9766C26.5702 25.3615 25.462 26.3409 24.072 26.3409C23.6248 26.3409 23.1832 26.2398 22.7567 26.0403L21.3983 25.4037L20.5408 26.6338C20.4817 26.7175 20.4188 26.7948 20.3535 26.8724L24.0043 34.7007C24.0841 34.8732 24.2237 34.8764 24.3128 34.7085L26.0691 31.3924C26.1588 31.2244 26.3837 31.1193 26.5691 31.1592L30.2392 31.9452C30.4249 31.9851 30.5116 31.877 30.431 31.7045L26.8278 23.9766Z" fill="#7432FF"/>
<path d="M14.916 25.4043L13.5576 26.0409C13.1304 26.2401 12.688 26.3415 12.2423 26.3415C10.8527 26.3415 9.74438 25.3615 9.48655 23.9766L5.88168 31.7056C5.80116 31.8781 5.88783 31.9861 6.07348 31.9463L9.74361 31.1602C9.93006 31.1204 10.154 31.2255 10.2436 31.3935L12 34.7095C12.089 34.8775 12.2284 34.8743 12.3089 34.7018L15.9597 26.8728C15.8961 26.796 15.8324 26.7187 15.7733 26.635L14.916 25.4043Z" fill="#7432FF"/>
<path d="M30.3463 12.5544L28.8314 11.4976C28.2362 11.082 28 10.2031 28.3076 9.54435L29.0914 7.8727C29.3998 7.21474 29.0593 6.62496 28.3352 6.56292L26.4945 6.40405C25.7695 6.34119 25.127 5.69845 25.065 4.97389L24.9061 3.1351C24.844 2.41027 24.255 2.07059 23.5961 2.37816L21.9242 3.16106C21.2654 3.46944 20.3855 3.23327 19.9699 2.63736L18.9138 1.12271C18.4973 0.526804 17.8162 0.526804 17.4005 1.12271L16.3436 2.63736C15.9279 3.23327 15.0489 3.46867 14.3908 3.16106L12.7173 2.37816C12.0592 2.06977 11.4686 2.40945 11.4073 3.13428L11.2492 4.97389C11.1871 5.69791 10.5428 6.34194 9.81885 6.40405L7.97817 6.56212C7.25406 6.62417 6.91268 7.21393 7.22194 7.8719L8.00494 9.5452C8.31337 10.2032 8.0777 11.0829 7.48198 11.4985L5.96713 12.5544C5.37033 12.9701 5.37033 13.6511 5.96713 14.0675L7.4828 15.1243C8.07799 15.5399 8.31422 16.4188 8.00576 17.0776L7.22276 18.75C6.91433 19.408 7.25486 19.9978 7.97899 20.0598L9.81967 20.2179C10.5438 20.2799 11.1879 20.9235 11.25 21.6472L11.4081 23.4876C11.4702 24.2117 12.06 24.5522 12.7181 24.2438L14.3916 23.4609C15.0496 23.1533 15.9295 23.3881 16.3444 23.9846L17.4013 25.4992C17.817 26.0951 18.4981 26.0951 18.9146 25.4992L19.9715 23.9846C20.3872 23.3887 21.2662 23.1533 21.925 23.4609L23.5977 24.2438C24.2558 24.5522 24.8448 24.2117 24.9069 23.4876L25.0663 21.648C25.1284 20.924 25.7712 20.28 26.4958 20.2187L28.3357 20.0598C29.0598 19.9978 29.4012 19.408 29.0919 18.75L28.3082 17.0768C28.0005 16.4188 28.2359 15.5391 28.8327 15.1235L30.3468 14.0675C30.9422 13.6511 30.9422 12.9701 30.3463 12.5544ZM18.1561 20.9113C13.9584 20.9113 10.5554 17.5078 10.5554 13.3117C10.5554 9.11381 13.9594 5.71142 18.1561 5.71142C22.3537 5.71142 25.7574 9.1149 25.7574 13.3117C25.7574 17.5088 22.3534 20.9113 18.1561 20.9113Z" fill="#7432FF"/>
<path d="M20.6291 11.1099C20.2685 11.0578 19.843 10.748 19.6819 10.422L18.4501 7.92657C18.2891 7.6 18.0258 7.6 17.8648 7.92657L16.633 10.422C16.4727 10.748 16.0463 11.0578 15.6858 11.1099L12.9315 11.5095C12.571 11.5625 12.4896 11.8126 12.7505 12.0664L14.7447 14.0095C15.0047 14.2641 15.1673 14.7641 15.1058 15.1222L14.6355 17.8653C14.5735 18.2242 14.7867 18.3783 15.1087 18.2095L17.5722 16.9141C17.8942 16.7446 18.4212 16.7446 18.7433 16.9141L21.2068 18.2095C21.528 18.3791 21.742 18.2239 21.68 17.8653L21.2097 15.1222C21.1477 14.764 21.3108 14.2633 21.5708 14.0095L23.5651 12.0664C23.8259 11.8126 23.7437 11.5625 23.384 11.5095L20.6291 11.1099Z" fill="#7432FF"/>
</g>
<defs>
<clipPath id="clip0_601_1990">
<rect width="25.2692" height="34.458" fill="white" transform="translate(5.53906 0.6875)"/>
</clipPath>
</defs>
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
                    <svg width="30" height="30" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_601_2248)">
<path d="M13.8906 9.50098H17.6217V21.9377H13.8906V9.50098Z" fill="#7432FF"/>
<path d="M19.4863 13.2324H23.2174V21.9385H19.4863V13.2324Z" fill="#7432FF"/>
<path d="M8.29297 16.9639H12.0241V21.9387H8.29297V16.9639Z" fill="#7432FF"/>
<path d="M29.4357 15.7198C29.4357 8.16386 23.3106 2.03906 15.7549 2.03906C8.19902 2.03906 2.07422 8.16418 2.07422 15.7198C2.07422 23.2757 8.19934 29.4005 15.7549 29.4005C19.0851 29.4005 22.1348 28.2086 24.5073 26.2309L32.2872 34.0108L34.0458 32.2521L26.2659 24.4723C28.2434 22.0999 29.4353 19.0499 29.4353 15.7199L29.4357 15.7198ZM15.7549 26.9132C9.58301 26.9132 4.56157 21.8918 4.56157 15.7198C4.56157 9.54786 9.58295 4.52641 15.7549 4.52641C21.9269 4.52641 26.9483 9.5478 26.9483 15.7198C26.9483 21.8917 21.9267 26.9132 15.7549 26.9132Z" fill="#7432FF"/>
</g>
<defs>
<clipPath id="clip0_601_2248">
<rect width="32.3051" height="31.972" fill="white" transform="translate(1.75781 2.02344)"/>
</clipPath>
</defs>
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
                        <i className="fas fa-plus" style={{ fontSize:"11px"}} />
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
                        <i className="fas fa-plus" style={{ fontSize:"11px"}}/>
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
                        <i className="fas fa-plus" style={{ fontSize:"11px"}} />
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
