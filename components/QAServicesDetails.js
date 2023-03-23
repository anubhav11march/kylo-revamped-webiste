import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import ServiceSidebar from './ServiceSidebar';

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const QAServicesDetails = () => {
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
              <img src="assets/images/Services/qa.jpg" alt="" />
            </div>
            <div className="services__details-content">
              <h2>Quality Assurance</h2>
              <p>
                No product is deemed a market fit without rigorous testing. We ensure that your products meet the highest quality standards by conducting comprehensive testing and quality checks so that your product is bug-free and functions optimally.

                We use a range of techniques and tools to deliver robust and top-notch products that exceed your expectations and delight your customers.
                We have the solution to this test!

              </p>
              <div className="key__benefits">
                <div
                  className="key__benefits-content"
                  style={{ display: "flex", columnGap: "12vw" }}
                >
                  <ul>
                    <li>Automation testing</li>
                    <li>API & UI/UX testing</li>
                    <li>User acceptance testing</li>
                  </ul>
                  <ul>
                  <li>Manual testing</li>
                    
                    <li>Database testing</li>
                    <li>Performance testing</li>
                  </ul>
                </div>
              </div>

              <div className="tech__stack">
                <h3 className='mb-50'>Technologies</h3>
                <div className='container'>
                  <div className='row'>
                    <div className='col text-center'>
                      <img className="tech-icon" src="https://squareboat.com/storage/services/sub_services/tecnology/NqYIxhl5s8Hk2VfmeHOFzqNjb4tiekJByhDpYLnC.svg" alt="Appium" />
                      <p style={{ paddingRight: "0px" }}>Appium</p>
                    </div>
                    <div className='col text-center'>
                      <img className="tech-icon" src="https://squareboat.com/storage/services/sub_services/tecnology/ACxSEdfx8icIKwsHJ8sJK45A97OIx7NM45RgKqpp.svg" alt="Selenium" />
                      <p style={{ paddingRight: "0px" }}>Selenium</p>
                    </div>
                    <div className='col text-center'>
                      <img className="tech-icon" src="https://squareboat.com/storage/services/sub_services/tecnology/QFjYyqpd5XO6cPqoe4F26PAwOtWBW5Wal1CnO2pu.svg" alt="Browserstack" />
                      <p style={{ paddingRight: "0px" }}>Browserstack</p>
                    </div>
                    <div className='w-100 zero-display-computer'></div>
                    <div className='col text-center'>
                      <img className="tech-icon" src="https://squareboat.com/storage/services/sub_services/tecnology/5Ke1eu1ztraXleScCkuDlOThT0YWeJRC7zrb6dIO.svg" alt="Manual Testing" />
                      <p style={{ paddingRight: "0px" }}>Manual Testing</p>
                    </div>
                    <div className='col text-center'>
                      <img className="tech-icon" src="https://squareboat.com/storage/services/sub_services/tecnology/qkh2GBCZeAYnGG6MBaCjPIZP5wlntvT0HQBs3DjQ.svg" alt="AWS Device Farm" />
                      <p style={{ paddingRight: "0px" }}>AWS Device Farm</p>
                    </div>                    
                  </div>
                </div>
              </div>

              <div className="key__factors">
                <div className="key__factors-title">
                  <h3>Key Benefits</h3>
                </div>
                <div className="key__factors-wrapper d-flex pl-30-mobile">
                  <div className="key__factors-content mb-40 d-sm-flex" style={{ width: "50%" }}>
                    <div className="key__factors-icon">
                      <span style={{ paddingLeft: "15px" }}>
                        <svg width="30" height="30" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <g clip-path="url(#clip0_601_1990)">
                            <path d="M26.8278 23.9766C26.5702 25.3615 25.462 26.3409 24.072 26.3409C23.6248 26.3409 23.1832 26.2398 22.7567 26.0403L21.3983 25.4037L20.5408 26.6338C20.4817 26.7175 20.4188 26.7948 20.3535 26.8724L24.0043 34.7007C24.0841 34.8732 24.2237 34.8764 24.3128 34.7085L26.0691 31.3924C26.1588 31.2244 26.3837 31.1193 26.5691 31.1592L30.2392 31.9452C30.4249 31.9851 30.5116 31.877 30.431 31.7045L26.8278 23.9766Z" fill="#7432FF" />
                            <path d="M14.916 25.4043L13.5576 26.0409C13.1304 26.2401 12.688 26.3415 12.2423 26.3415C10.8527 26.3415 9.74438 25.3615 9.48655 23.9766L5.88168 31.7056C5.80116 31.8781 5.88783 31.9861 6.07348 31.9463L9.74361 31.1602C9.93006 31.1204 10.154 31.2255 10.2436 31.3935L12 34.7095C12.089 34.8775 12.2284 34.8743 12.3089 34.7018L15.9597 26.8728C15.8961 26.796 15.8324 26.7187 15.7733 26.635L14.916 25.4043Z" fill="#7432FF" />
                            <path d="M30.3463 12.5544L28.8314 11.4976C28.2362 11.082 28 10.2031 28.3076 9.54435L29.0914 7.8727C29.3998 7.21474 29.0593 6.62496 28.3352 6.56292L26.4945 6.40405C25.7695 6.34119 25.127 5.69845 25.065 4.97389L24.9061 3.1351C24.844 2.41027 24.255 2.07059 23.5961 2.37816L21.9242 3.16106C21.2654 3.46944 20.3855 3.23327 19.9699 2.63736L18.9138 1.12271C18.4973 0.526804 17.8162 0.526804 17.4005 1.12271L16.3436 2.63736C15.9279 3.23327 15.0489 3.46867 14.3908 3.16106L12.7173 2.37816C12.0592 2.06977 11.4686 2.40945 11.4073 3.13428L11.2492 4.97389C11.1871 5.69791 10.5428 6.34194 9.81885 6.40405L7.97817 6.56212C7.25406 6.62417 6.91268 7.21393 7.22194 7.8719L8.00494 9.5452C8.31337 10.2032 8.0777 11.0829 7.48198 11.4985L5.96713 12.5544C5.37033 12.9701 5.37033 13.6511 5.96713 14.0675L7.4828 15.1243C8.07799 15.5399 8.31422 16.4188 8.00576 17.0776L7.22276 18.75C6.91433 19.408 7.25486 19.9978 7.97899 20.0598L9.81967 20.2179C10.5438 20.2799 11.1879 20.9235 11.25 21.6472L11.4081 23.4876C11.4702 24.2117 12.06 24.5522 12.7181 24.2438L14.3916 23.4609C15.0496 23.1533 15.9295 23.3881 16.3444 23.9846L17.4013 25.4992C17.817 26.0951 18.4981 26.0951 18.9146 25.4992L19.9715 23.9846C20.3872 23.3887 21.2662 23.1533 21.925 23.4609L23.5977 24.2438C24.2558 24.5522 24.8448 24.2117 24.9069 23.4876L25.0663 21.648C25.1284 20.924 25.7712 20.28 26.4958 20.2187L28.3357 20.0598C29.0598 19.9978 29.4012 19.408 29.0919 18.75L28.3082 17.0768C28.0005 16.4188 28.2359 15.5391 28.8327 15.1235L30.3468 14.0675C30.9422 13.6511 30.9422 12.9701 30.3463 12.5544ZM18.1561 20.9113C13.9584 20.9113 10.5554 17.5078 10.5554 13.3117C10.5554 9.11381 13.9594 5.71142 18.1561 5.71142C22.3537 5.71142 25.7574 9.1149 25.7574 13.3117C25.7574 17.5088 22.3534 20.9113 18.1561 20.9113Z" fill="#7432FF" />
                            <path d="M20.6291 11.1099C20.2685 11.0578 19.843 10.748 19.6819 10.422L18.4501 7.92657C18.2891 7.6 18.0258 7.6 17.8648 7.92657L16.633 10.422C16.4727 10.748 16.0463 11.0578 15.6858 11.1099L12.9315 11.5095C12.571 11.5625 12.4896 11.8126 12.7505 12.0664L14.7447 14.0095C15.0047 14.2641 15.1673 14.7641 15.1058 15.1222L14.6355 17.8653C14.5735 18.2242 14.7867 18.3783 15.1087 18.2095L17.5722 16.9141C17.8942 16.7446 18.4212 16.7446 18.7433 16.9141L21.2068 18.2095C21.528 18.3791 21.742 18.2239 21.68 17.8653L21.2097 15.1222C21.1477 14.764 21.3108 14.2633 21.5708 14.0095L23.5651 12.0664C23.8259 11.8126 23.7437 11.5625 23.384 11.5095L20.6291 11.1099Z" fill="#7432FF" />
                          </g>
                          <defs>
                            <clipPath id="clip0_601_1990">
                              <rect width="25.2692" height="34.458" fill="white" transform="translate(5.53906 0.6875)" />
                            </clipPath>
                          </defs>
                        </svg>

                      </span>
                    </div>
                    <div className="key__factors-text">
                      <h5>Improved Quality</h5>
                      <p>
                        Ensure products are free of bugs and errors to increase product reliability.

                      </p>
                    </div>
                  </div>
                  <div className="key__factors-content mb-40 d-sm-flex" style={{ width: "50%" }}>
                    <div className="key__factors-icon">
                      <span style={{ paddingLeft: "15px" }}>
                        <svg width="30" height="30" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <g clip-path="url(#clip0_601_1910)">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M21.0292 14.6571L28.5646 27.7092C29.1843 28.7826 29.1843 30.0774 28.5646 31.1503C27.9449 32.2237 26.8236 32.8709 25.5845 32.8709H10.5135C9.27439 32.8709 8.15286 32.2232 7.5334 31.1503C6.9137 30.0774 6.9137 28.7821 7.5334 27.7092L15.0689 14.6571C15.6886 13.5837 16.8099 12.9365 18.049 12.9365C19.2882 12.9362 20.4097 13.5836 21.0292 14.6571ZM25.1841 14.1942L28.111 10.7468C28.2286 10.6083 28.1306 10.3968 27.9491 10.3968H26.538L26.5382 3.80561H23.5069V10.3974H22.0957C21.9143 10.3974 21.8162 10.6094 21.9338 10.7475L24.8607 14.1948C24.9448 14.2948 25.0993 14.2943 25.1841 14.1943L25.1841 14.1942ZM12.758 13.15L15.6849 9.7026C15.8023 9.56406 15.7045 9.35251 15.523 9.35251H14.1118V2.76074H11.0806V9.35251H9.66939C9.48796 9.35251 9.3899 9.56454 9.50748 9.7026L12.4344 13.15C12.519 13.2502 12.6732 13.2502 12.758 13.15ZM5.21206 24.9019L8.13898 21.4545C8.25631 21.316 8.15849 21.1045 7.97707 21.1045H6.56588L6.56612 12.8461H3.53442V21.1045H2.12323C1.94181 21.1045 1.84375 21.3165 1.96132 21.4545L4.88824 24.9019C4.97281 25.0019 5.12725 25.0019 5.21206 24.9019ZM31.2109 23.7259L34.1378 20.2785C34.2554 20.14 34.1573 19.9285 33.9759 19.9285H32.5647L32.565 11.6707H29.5337V19.9291H28.1225C27.9411 19.9291 27.843 20.1411 27.9606 20.2792L30.8875 23.7265C30.9716 23.8265 31.126 23.8265 31.2109 23.7263L31.2109 23.7259ZM18.0496 28.0672C17.4121 28.0672 16.8952 28.5837 16.8952 29.2215C16.8952 29.859 17.4118 30.3758 18.0496 30.3758C18.6871 30.3758 19.2039 29.8593 19.2039 29.2215C19.2039 28.5837 18.6869 28.0672 18.0496 28.0672ZM18.0496 26.0069C18.5343 26.0069 18.9326 25.6231 18.9497 25.1388L19.1774 18.8326C19.1957 18.3192 18.7907 17.8992 18.2773 17.8992H17.8216C17.3082 17.8992 16.9027 18.3194 16.9215 18.8326L17.1492 25.1388C17.1665 25.6229 17.5648 26.0069 18.0496 26.0069Z" fill="#7432FF" />
                          </g>
                          <defs>
                            <clipPath id="clip0_601_1910">
                              <rect width="32.4747" height="30.1154" fill="white" transform="translate(1.73438 2.76562)" />
                            </clipPath>
                          </defs>
                        </svg>

                      </span>
                    </div>
                    <div className="key__factors-text">
                      <h5>Reduced Risk</h5>
                      <p>
                        Help reduce risk of product failure, leading to greater customer satisfaction and loyalty.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="key__factors-wrapper d-flex pl-30-mobile">
                  <div className="key__factors-content mb-40 d-sm-flex" style={{ width: "50%" }}>
                    <div className="key__factors-icon">
                      <span style={{ paddingLeft: "15px" }}>
                        <svg width="30" height="30" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M10 20C4.477 20 0 15.523 0 10C0 4.477 4.477 0 10 0C15.523 0 20 4.477 20 10C20 15.523 15.523 20 10 20ZM6.5 12V14H9V16H11V14H12C12.663 14 13.2989 13.7366 13.7678 13.2678C14.2366 12.7989 14.5 12.163 14.5 11.5C14.5 10.837 14.2366 10.2011 13.7678 9.73223C13.2989 9.26339 12.663 9 12 9H8C7.86739 9 7.74021 8.94732 7.64645 8.85355C7.55268 8.75979 7.5 8.63261 7.5 8.5C7.5 8.36739 7.55268 8.24021 7.64645 8.14645C7.74021 8.05268 7.86739 8 8 8H13.5V6H11V4H9V6H8C7.33696 6 6.70107 6.26339 6.23223 6.73223C5.76339 7.20107 5.5 7.83696 5.5 8.5C5.5 9.16304 5.76339 9.79893 6.23223 10.2678C6.70107 10.7366 7.33696 11 8 11H12C12.1326 11 12.2598 11.0527 12.3536 11.1464C12.4473 11.2402 12.5 11.3674 12.5 11.5C12.5 11.6326 12.4473 11.7598 12.3536 11.8536C12.2598 11.9473 12.1326 12 12 12H6.5Z" fill="#7432ff" />
                        </svg>


                      </span>
                    </div>
                    <div className="key__factors-text">
                      <h5>Cost Saving</h5>
                      <p>
                        Avoid costly rework and post-release bug fixes and customer support.

                      </p>
                    </div>
                  </div>
                  <div className="key__factors-content mb-40 d-sm-flex" style={{ width: "50%" }}>
                    <div className="key__factors-icon">
                      <span style={{ paddingLeft: "15px" }}>
                        <svg width="30" height="30" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <g clip-path="url(#clip0_601_2027)">
                            <path d="M30.9818 6.56636L29.4672 8.0463L29.8229 10.1401C29.8631 10.3581 29.7712 10.576 29.5991 10.7023C29.4959 10.7768 29.3812 10.8114 29.2606 10.8114C29.1689 10.8114 29.0769 10.7883 28.9909 10.7484L27.1265 9.76162L25.2566 10.7484C25.0673 10.8516 24.8319 10.8288 24.6542 10.7025C24.4765 10.5763 24.3905 10.3583 24.4248 10.1404L24.7805 8.04656L23.2718 6.56662C23.1169 6.41758 23.0595 6.18812 23.1284 5.98145C23.1914 5.77504 23.375 5.62011 23.5873 5.59142L25.6755 5.28745L26.6105 3.38288C26.8057 2.98696 27.4479 2.98696 27.6431 3.38288L28.5725 5.28745L30.6607 5.59142C30.8786 5.62011 31.0566 5.77504 31.1252 5.98145C31.1941 6.1876 31.1367 6.41706 30.9818 6.56636Z" fill="#7432FF" />
                            <path d="M14.346 4.18576C14.1911 4.03672 14.1337 3.80726 14.2026 3.60059C14.2715 3.39418 14.4492 3.23925 14.6615 3.21056L16.7497 2.90659L17.6848 1.00202C17.8799 0.606098 18.5221 0.606098 18.7173 1.00202L19.6523 2.90659L21.7405 3.21056C21.9528 3.23925 22.1306 3.39418 22.1994 3.60059C22.2683 3.807 22.211 4.03646 22.056 4.18576L20.5415 5.6657L20.9028 7.75954C20.9371 7.97747 20.8511 8.1954 20.6734 8.32166C20.5702 8.39618 20.4554 8.43076 20.3348 8.43076C20.2431 8.43076 20.1512 8.40771 20.0651 8.36776L18.201 7.38666L16.3366 8.37339C16.1415 8.4766 15.9064 8.45381 15.7287 8.32755C15.551 8.2013 15.4649 7.98337 15.4992 7.76544L15.8606 5.6716L14.346 4.18576Z" fill="#7432FF" />
                            <path d="M9.28139 9.76774L7.41701 10.7545C7.33096 10.7947 7.23929 10.8175 7.14735 10.8175C7.02698 10.8175 6.91226 10.7832 6.80879 10.7084C6.6367 10.5821 6.54502 10.3642 6.58496 10.1463L6.94068 8.05242L5.42612 6.57248C5.27118 6.42344 5.21382 6.19398 5.28271 5.98731C5.3516 5.7809 5.52932 5.62597 5.74726 5.59728L7.83546 5.2933L8.76483 3.38874C8.95997 2.99282 9.60222 2.99282 9.79739 3.38874L10.7324 5.2933L12.8206 5.59728C13.0329 5.62597 13.2165 5.7809 13.2795 5.98731C13.3484 6.19372 13.291 6.42318 13.1361 6.57248L11.6274 8.05242L11.9832 10.1463C12.0175 10.3642 11.9314 10.5821 11.7537 10.7084C11.576 10.8403 11.3406 10.8574 11.1514 10.7542L9.28139 9.76774Z" fill="#7432FF" />
                            <path d="M23.915 17.8155C23.915 20.9362 21.3572 23.4659 18.2017 23.4659C15.0461 23.4659 12.4883 20.9362 12.4883 17.8155C12.4883 14.695 15.0461 12.165 18.2017 12.165C21.3572 12.165 23.915 14.695 23.915 17.8155Z" fill="#7432FF" />
                            <path d="M27.3108 33.958V34.5488C27.3108 34.8643 27.0583 35.1225 26.7371 35.1225H9.66544C9.34431 35.1225 9.0918 34.8643 9.0918 34.5488V33.958C9.0918 28.9387 13.1762 24.8604 18.1895 24.8604H18.2125C23.2319 24.8601 27.3102 28.9389 27.3102 33.958H27.3108Z" fill="#7432FF" />
                          </g>
                          <defs>
                            <clipPath id="clip0_601_2027">
                              <rect width="25.9615" height="34.4187" fill="white" transform="translate(5.1875 0.6875)" />
                            </clipPath>
                          </defs>
                        </svg>

                      </span>
                    </div>
                    <div className="key__factors-text">
                      <h5>Reputation</h5>
                      <p>
                        Thoroughly tested apps increase reputation, customer trust and loyalty.
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
                        style={{ height: "100%", flexWrap: "wrap", alignContent: "center" }}
                      >
                        <i className="far fa-plus" />
                      </div>
                    }
                  >
                    <h3 className="vertical-timeline-element-title" style={{ color: "#fff" }}>Consultation & Planning</h3>
                    <p className="zero-padding-right" style={{ color: "#fff" }}>
                      We define test objectives, strategies, scope, and test cases based on requirements.
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
                        style={{ height: "100%", flexWrap: "wrap", alignContent: "center" }}
                      >
                        <i className="fas fa-plus" style={{ fontSize: "11px" }} />
                      </div>
                    }
                  >
                    <h3 className="vertical-timeline-element-title">
                      Test Execution
                    </h3>

                    <p className="zero-padding-right">
                      We run the tests (manual/automated), record the results, and report defects found.
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
                        style={{ height: "100%", flexWrap: "wrap", alignContent: "center" }}
                      >
                        <i className="far fa-plus" />
                      </div>
                    }
                  >
                    <h3 className="vertical-timeline-element-title" style={{ color: "#fff" }}>
                      Defect Management
                    </h3>

                    <p className="zero-padding-right" style={{ color: "#fff" }}>
                      We track, report, prioritise, and resolve the defects found during the testing phase.
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
                        style={{ height: "100%", flexWrap: "wrap", alignContent: "center" }}
                      >
                        <i className="fas fa-plus" style={{ fontSize: "11px" }} />
                      </div>
                    }
                  >
                    <h3 className="vertical-timeline-element-title">
                      Regression Testing
                    </h3>

                    <p className="zero-padding-right">
                      We retest the fixed defects and verify that the changes made have not introduced new issues.
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
                        style={{ height: "100%", flexWrap: "wrap", alignContent: "center" }}
                      >
                        <i className="far fa-plus" />
                      </div>
                    }
                  >
                    <h3 className="vertical-timeline-element-title" style={{ color: "#fff" }}>
                      Acceptance Testing
                    </h3>

                    <p className="zero-padding-right" style={{ color: "#fff" }}>
                      We perform user acceptance testing to ensure that the application meets business requirements and user expectations.

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
                        style={{ height: "100%", flexWrap: "wrap", alignContent: "center" }}
                      >
                        <i className="fas fa-plus" style={{ fontSize: "11px" }} />
                      </div>
                    }
                  >
                    <h3 className="vertical-timeline-element-title">
                      Test Closure
                    </h3>

                    <p className="zero-padding-right">
                      We evaluate the testing process, create a test summary report, and obtain final sign-off.
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

export default QAServicesDetails;