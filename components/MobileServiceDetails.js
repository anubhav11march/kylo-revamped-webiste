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
                  style={{ display: "flex", columnGap: "150px" }}
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
                <h3 className="mb-50">Technologies</h3>
                <div className='container'>
                  <div className='row'>
                    <div className='col text-center'>
                      <img class="tech-icon" src="https://squareboat.com/storage/services/sub_services/tecnology/9qDqySCBRpar1bUkZFiY84gtY64odCKXKNeDkLjh.svg" alt="Android" />
                      <p style={{ paddingRight: "0px" }}>Android</p>
                    </div>
                    <div className='col text-center' style={{ paddingLeft : "0px"}}>
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
                      <span style={{ paddingLeft: "10px" }}>
                      <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_601_664)">
<path d="M15.9771 18.7968C11.9541 18.5869 8.73543 15.2286 8.73543 11.1703C8.73543 6.97233 12.1638 3.54386 16.3619 3.54386C20.5599 3.54386 23.9883 6.9722 23.9883 11.1703C23.9883 12.9195 23.3936 14.5289 22.4141 15.8231C22.5539 16.1731 22.624 16.5579 22.624 16.9427V18.6919C24.7929 16.9078 26.1573 14.1792 26.1573 11.1704C26.1573 5.78307 21.7843 1.375 16.3618 1.375C10.9394 1.375 6.56641 5.74796 6.56641 11.1704C6.56641 16.418 10.7295 20.721 15.942 20.9309L15.9425 18.7966L15.9771 18.7968Z" fill="#7432FF"/>
<path d="M18.8104 8.33657L15.4521 11.6949L13.9127 10.1555C13.493 9.7358 12.8283 9.7358 12.4086 10.1555C11.9888 10.5753 11.9888 11.24 12.4086 11.6597L14.6824 13.9335C14.8922 14.1434 15.1721 14.2483 15.452 14.2483C15.7319 14.2483 16.0118 14.1434 16.2216 13.9335L20.3147 9.84043C20.7345 9.4207 20.7345 8.756 20.3147 8.33626C19.895 7.91651 19.2303 7.91653 18.8103 8.3365L18.8104 8.33657Z" fill="#7432FF"/>
<path d="M29.761 24.9187C29.761 24.0441 29.0263 23.3093 28.1517 23.3093C27.5919 23.3093 27.0672 23.6241 26.7873 24.079V24.0441C26.7873 23.1695 26.0525 22.4347 25.1779 22.4347C24.6181 22.4347 24.0935 22.7495 23.8136 23.1695V23.1346C23.8136 22.26 23.0788 21.5252 22.2042 21.5252C21.6444 21.5252 21.1198 21.84 20.8398 22.26L20.8401 16.9075C20.8401 16.4877 20.6651 16.0678 20.3852 15.7879C20.0704 15.4731 19.6856 15.333 19.2656 15.333C18.391 15.333 17.6562 16.0678 17.6562 16.9424V26.8428C17.6562 26.9477 17.6213 27.0177 17.5164 27.0526C17.4464 27.0875 17.3414 27.0875 17.2714 27.0177L15.6974 25.3386C15.1377 24.7788 14.2982 24.709 13.6335 25.1287C13.2486 25.3737 13.0039 25.7935 12.9339 26.2483C12.8638 26.7032 13.0039 27.1578 13.2838 27.5077L17.342 32.4053C18.4964 33.8045 20.1756 34.5742 21.9599 34.5742H24.4785C25.8777 34.5742 27.2072 34.0145 28.2219 33.0349C29.2363 32.0205 29.7612 30.7259 29.7612 29.2915L29.761 24.9187Z" fill="#7432FF"/>
</g>
<defs>
<clipPath id="clip0_601_664">
<rect width="23.1923" height="33.172" fill="white" transform="translate(6.57812 1.39062)"/>
</clipPath>
</defs>
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
                      <svg width="30" height="30" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4.41322 4.50812C4.41322 2.92589 5.67081 1.6683 7.25303 1.6683C8.83525 1.6683 10.0928 2.92589 10.0928 4.50812C10.0928 6.09034 8.83525 7.34793 7.25303 7.34793C5.67081 7.34821 4.41322 6.09034 4.41322 4.50812ZM7.25303 8.97094C3.80445 8.97094 0.96464 11.6486 0.761719 15.0564H13.7441C13.5414 11.6486 10.7013 8.97094 7.25303 8.97094ZM22.2639 19.9248C22.2639 21.507 23.5215 22.7646 25.1037 22.7646C26.6859 22.7646 27.9435 21.507 27.9435 19.9248C27.9435 18.3426 26.6859 17.085 25.1037 17.085C23.5215 17.085 22.2639 18.3426 22.2639 19.9248ZM25.1037 24.3876C21.6551 24.3876 18.8153 27.0653 18.6124 30.4731H31.5947C31.3918 27.0653 28.552 24.3876 25.1034 24.3876H25.1037ZM20.2354 8.15969C20.4383 8.15969 20.6412 8.07847 20.8033 7.91631C21.1279 7.59172 21.1279 7.10499 20.8033 6.78036L18.937 4.914H24.2923V12.2166C24.2923 12.6628 24.6574 13.0279 25.1037 13.0279C25.5499 13.0279 25.915 12.6628 25.915 12.2166V4.30546V4.22424V4.14302C25.915 3.69673 25.5499 3.33169 25.1037 3.33169H18.937L20.8033 1.46534C21.1279 1.14074 21.1279 0.654014 20.8033 0.329383C20.4787 0.00478884 19.992 0.00478884 19.6674 0.329383L16.4217 3.57504C16.3813 3.61551 16.3405 3.65626 16.3405 3.69673C16.3405 3.69673 16.3 3.7372 16.3 3.77795C16.3 3.81841 16.2596 3.81841 16.2596 3.85917C16.2596 3.89963 16.2596 3.89963 16.2191 3.94039C16.2191 3.98085 16.2191 3.98085 16.1786 4.0216C16.1382 4.14329 16.1382 4.22451 16.1786 4.3462C16.1786 4.38667 16.1786 4.38667 16.2191 4.42742C16.2191 4.46789 16.2191 4.46789 16.2596 4.50864C16.2596 4.54911 16.3 4.54911 16.3 4.58986C16.3 4.63032 16.3405 4.63032 16.3405 4.67108C16.381 4.71154 16.4217 4.7523 16.4217 4.79276L19.6674 8.03842C19.8295 8.07832 20.0324 8.15954 20.2353 8.15954L20.2354 8.15969ZM12.8922 27.7955C12.8922 27.755 12.8922 27.755 12.8518 27.7143C12.8518 27.6738 12.8113 27.6738 12.8113 27.633C12.8113 27.633 12.8113 27.5926 12.7708 27.5926C12.7304 27.5521 12.6896 27.5113 12.6896 27.4709L9.44396 24.2252C9.11936 23.9006 8.63263 23.9006 8.308 24.2252C7.98341 24.5498 7.98341 25.0365 8.308 25.3612L10.1744 27.2275H4.81871V19.925C4.81871 19.4787 4.45364 19.1136 4.00738 19.1136C3.56112 19.1136 3.19606 19.4787 3.19606 19.925V27.8361V27.9173V27.9985C3.19606 28.4448 3.56112 28.8098 4.00738 28.8098H10.1741L8.30771 30.6762C7.98312 31.0008 7.98312 31.4875 8.30771 31.8122C8.46987 31.9743 8.67277 32.0555 8.87567 32.0555C9.07857 32.0555 9.28149 31.9743 9.44364 31.8122L12.6893 28.5665C12.7298 28.526 12.7705 28.4853 12.7705 28.4448L12.811 28.4043C12.811 28.3639 12.8514 28.3639 12.8514 28.3231C12.8514 28.2827 12.8514 28.2827 12.8919 28.2419C12.8919 28.2014 12.8919 28.2014 12.9324 28.1607C12.9728 28.039 12.9728 27.9578 12.9324 27.8361C12.8922 27.8361 12.8922 27.8361 12.8922 27.7956L12.8922 27.7955Z" fill="#7432FF"/>
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
                      <svg width="30" height="30" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M31.576 1.18549C31.4647 0.962853 31.4647 0.962853 31.3534 0.851532C31.3534 0.851532 31.3534 0.740212 31.242 0.740212C31.1307 0.628891 31.0194 0.628891 31.0194 0.517571C30.9081 0.40625 30.6854 0.40625 30.5741 0.40625H26.1213C25.4534 0.40625 25.0081 0.851532 25.0081 1.51946C25.0081 2.18738 25.4534 2.63266 26.1213 2.63266H27.7911C20.6666 9.08925 12.0949 11.9836 1.63078 11.5383C1.07417 11.5383 0.517571 11.9836 0.40625 12.5402C0.40625 13.2081 0.851532 13.6534 1.51946 13.7647C2.2987 13.7647 2.96662 13.876 3.74587 13.876C13.2081 14.0987 22.4477 10.6477 29.3496 4.19115V5.97228C29.3496 6.6402 29.7949 7.08548 30.4628 7.08548C31.1307 7.08548 31.576 6.6402 31.576 5.97228V1.51946C31.6873 1.40813 31.6873 1.29681 31.576 1.18549ZM31.6873 30.4628C31.6873 31.1307 31.242 31.576 30.5741 31.576H1.63078C0.962853 31.576 0.517571 31.1307 0.517571 30.4628C0.517571 29.7949 0.962853 29.3496 1.63078 29.3496H3.85719V21.5572C3.85719 21.1119 4.07983 20.7779 4.52511 20.5553L8.97793 18.3289C9.53453 17.9949 10.2025 18.2175 10.4251 18.7741C10.5364 18.9968 10.5364 19.1081 10.5364 19.3307V29.3496H12.7628V17.1043C12.7628 16.659 12.9855 16.3251 13.4308 16.1024L17.8836 13.876C18.4402 13.5421 19.1081 13.7647 19.3307 14.3213C19.4421 14.544 19.4421 14.6553 19.4421 14.8779V29.3496H21.6685V12.6515C21.6685 12.2062 21.8911 11.8723 22.2251 11.6496L26.6779 9.42321C27.2345 9.08925 27.9024 9.31189 28.1251 9.8685C28.3477 10.0911 28.3477 10.2025 28.3477 10.4251V29.3496H30.5741C31.242 29.3496 31.6873 29.7949 31.6873 30.4628Z" fill="#7432FF"/>
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
                      <span style={{ paddingLeft: "15px" }}>
                        <svg width="30" height="30" viewBox="0 0 28 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M14.1867 11.4923C14.5942 11.4927 14.9849 11.6549 15.273 11.9428C15.561 12.231 15.7231 12.6216 15.7236 13.0292V14.566H12.6498V13.0292C12.6503 12.6216 12.8124 12.231 13.1004 11.9428C13.3885 11.6549 13.7791 11.4927 14.1867 11.4923ZM14.1867 17.6398C13.9795 17.6398 13.7926 17.7646 13.7135 17.9561C13.6341 18.1475 13.6778 18.3677 13.8244 18.5143C13.971 18.6609 14.1913 18.7046 14.3827 18.6252C14.5741 18.5461 14.699 18.3593 14.699 18.1521C14.6985 17.8694 14.4694 17.6402 14.1867 17.6398ZM14.1867 4.10764C17.2618 6.63912 20.9929 8.24509 24.9448 8.73888V20.4139C24.9398 21.9574 24.5014 23.4687 23.6792 24.775C22.8573 26.0815 21.6847 27.1308 20.2951 27.8035L14.1868 30.7352L8.07853 27.8035C6.68896 27.1309 5.51636 26.0816 4.69441 24.775C3.87223 23.4687 3.43382 21.9574 3.42878 20.4139V8.73829C7.38099 8.24475 11.112 6.63883 14.1869 4.10728L14.1867 4.10764ZM14.1867 10.4677C13.5077 10.4684 12.8565 10.7387 12.3763 11.2187C11.8962 11.699 11.6259 12.3501 11.6252 13.0291V14.566H11.1129C10.7054 14.5665 10.3148 14.7286 10.0266 15.0166C9.73865 15.3047 9.5765 15.6954 9.57604 16.1029V21.2258C9.5765 21.6334 9.73865 22.024 10.0266 22.3122C10.3148 22.6001 10.7054 22.7623 11.1129 22.7627H17.2604C17.668 22.7623 18.0586 22.6001 18.3468 22.3122C18.6347 22.024 18.7969 21.6334 18.7973 21.2258V16.1029C18.7969 15.6954 18.6347 15.3047 18.3468 15.0166C18.0586 14.7286 17.668 14.5665 17.2604 14.566H16.7482V13.0291C16.7475 12.3501 16.4771 11.699 15.9971 11.2187C15.5168 10.7387 14.8657 10.4684 14.1867 10.4677ZM27.5063 6.88163V20.4143C27.4997 22.4402 26.924 24.4235 25.8452 26.1383C24.7662 27.8531 23.2273 29.2303 21.4036 30.1129L14.4084 33.4705C14.2684 33.538 14.1051 33.538 13.9651 33.4705L6.96985 30.1129C5.14621 29.2304 3.60722 27.8531 2.52824 26.1383C1.44944 24.4235 0.873803 22.4402 0.867188 20.4143V6.88163C0.867188 6.61039 1.07874 6.38626 1.34952 6.37025C9.73355 5.87716 13.747 0.975837 13.7868 0.926482C13.884 0.80527 14.0311 0.734603 14.1864 0.734375H14.1873C14.3423 0.734604 14.4892 0.804814 14.5864 0.925797C14.6261 0.975425 18.6668 5.87858 27.0242 6.3705V6.37027C27.2948 6.38628 27.5063 6.61039 27.5063 6.88163ZM25.9694 8.28794C25.9694 8.02837 25.7753 7.80972 25.5175 7.77908C21.456 7.3649 17.62 5.71323 14.5281 3.04726C14.3337 2.87321 14.0396 2.87321 13.8452 3.04726C10.7533 5.71323 6.91724 7.36491 2.85579 7.77908C2.59804 7.80973 2.40387 8.02837 2.40387 8.28794V20.4138C2.40936 22.1503 2.90267 23.8504 3.82752 25.3201C4.7524 26.79 6.07153 27.9706 7.6347 28.7269L13.9649 31.7654C14.1048 31.8329 14.2681 31.8329 14.4081 31.7654L20.7383 28.7269C22.3012 27.9706 23.6204 26.79 24.5452 25.3203C25.4701 23.8505 25.9637 22.1505 25.9691 20.414L25.9694 8.28794ZM17.2604 15.5906C17.5431 15.5911 17.7723 15.8202 17.7727 16.1029V21.2258C17.7723 21.5085 17.5431 21.7377 17.2604 21.7381H11.1129C10.8303 21.7376 10.6011 21.5085 10.6006 21.2258V16.1029C10.6011 15.8202 10.8303 15.5911 11.1129 15.5906H17.2604ZM15.7236 18.1521C15.7252 17.7742 15.5875 17.409 15.3368 17.1261C15.0862 16.8435 14.7402 16.6628 14.3648 16.6191C13.9893 16.5752 13.611 16.6712 13.3021 16.8887C12.9931 17.1065 12.7749 17.4301 12.6896 17.7983C12.6041 18.1663 12.6574 18.553 12.8392 18.8844C13.0208 19.2158 13.3181 19.4685 13.6744 19.5945V20.2012C13.6744 20.4842 13.9038 20.7135 14.1867 20.7135C14.4696 20.7135 14.699 20.4842 14.699 20.2012V19.5945C14.9979 19.4893 15.2568 19.2942 15.4402 19.0358C15.6236 18.7776 15.7227 18.4688 15.7236 18.1521Z" fill="#7432FF" />
                        </svg>
                      </span>
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
                        style={{ height: "100%", flexWrap: "wrap", alignContent: "center" }}
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
                        style={{ height: "100%", flexWrap: "wrap", alignContent: "center" }}
                      >
                        <i className="fas fa-plus" style={{ fontSize:"11px"}} />
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
                        style={{ height: "100%", flexWrap: "wrap", alignContent: "center" }}
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
                        style={{ height: "100%", flexWrap: "wrap", alignContent: "center" }}
                      >
                        <i className="fas fa-plus" style={{ fontSize:"11px"}}/>
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
                        style={{ height: "100%", flexWrap: "wrap", alignContent: "center" }}
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
                        style={{ height: "100%", flexWrap: "wrap", alignContent: "center" }}
                      >
                        <i className="fas fa-plus" style={{ fontSize:"11px"}}/>
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
                        style={{ height: "100%", flexWrap: "wrap", alignContent: "center" }}
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
