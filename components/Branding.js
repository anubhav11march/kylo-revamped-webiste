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
                  style={{ display: "flex", columnGap: "12vw" }}
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
                <h3 className='mb-50'>Technologies</h3>
                <div className='container'>
                  <div className='row'>
                    <div className='col text-center'>
                      <img class="tech-icon" src="https://s3-alpha.figma.com/hub/file/1481185752/fa4cd070-6a79-4e1b-b079-8b9b76408595-cover.png" alt="Figma" />
                      <p style={{ paddingRight: "0px" }}>Figma</p>
                    </div>
                    <div className='col text-center' style={{ paddingLeft: "0px" }}>
                      <img class="tech-icon" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Canva_icon_2021.svg/2048px-Canva_icon_2021.svg.png" alt="Canva" />
                      <p style={{ paddingRight: "0px" }}>Canva</p>
                    </div>
                    <div className='col text-center'>
                      <img class="tech-icon" src="https://squareboat.com/storage/services/sub_services/tecnology/R47oTgf8OzT1OfxzokaafIZsatwLH16r1b1BqGsY.svg" alt="Premiere Pro" />
                      <p style={{ paddingRight: "0px" }}>Premiere Pro</p>
                    </div>
                    <div className='col text-center'>
                      <img class="tech-icon" src="https://squareboat.com/storage/services/sub_services/tecnology/aZ9Fyl4WjRPhEfJLYE5WS7NjNCySaV3tSxYxbXp6.svg" alt="Illustrator" />
                      <p style={{ paddingRight: "0px" }}>Illustrator</p>
                    </div>
                    {/* <div className="d-flex"> */}
                    <div className='col text-center pr-zero-tech-icon-mobile pl-65-tech-icon-mobile'>
                      <img class="tech-icon" src="https://squareboat.com/storage/services/sub_services/tecnology/7bydjJQ90VbcbTRJjaDZcRl7Rq3oMxnAHzG5Tk6Z.svg" alt="Photoshop" />
                      <p style={{ paddingRight: "0px" }}>Photoshop</p>
                    </div>
                    <div className='col text-center pl-zero-tech-icon-mobile pr-65-tech-icon-mobile'>
                      <img class="tech-icon" src="https://squareboat.com/storage/services/sub_services/tecnology/ZQhnednfJqDpLlIDPBA7s6YTfB4pTvTegKGQ9axF.svg" alt="Adobe XD" />
                      <p style={{ paddingRight: "0px" }}>AdobeXD</p>
                    {/* </div> */}
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
                      <span style={{ paddingLeft: "12px" }}>
                        <svg width="40" height="40" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <g clip-path="url(#clip0_601_1027)">
                            <path d="M18.1573 9.4115V14.0762L20.3117 12.6732C20.4323 12.5958 20.5815 12.6032 20.6914 12.6772L22.8405 14.0762V9.41153L18.1573 9.4115ZM27.4274 22.2301C27.8785 22.2301 27.8785 22.9177 27.4274 22.9177H24.9366C24.4836 22.9177 24.4836 22.2301 24.9366 22.2301H27.4274ZM27.4274 24.4091C27.8785 24.4091 27.8785 25.0967 27.4274 25.0967H24.9366C24.4836 25.0967 24.4836 24.4091 24.9366 24.4091H27.4274ZM21.0109 3.49539L20.4991 1.90918L19.9876 3.49539C19.9309 3.67454 19.763 3.80326 19.5664 3.80326L17.897 3.79921L19.2493 4.77708C19.4006 4.88843 19.4718 5.08685 19.4099 5.2741L18.8903 6.86031L20.2312 5.88439C20.3844 5.76924 20.5976 5.75972 20.7601 5.87844L22.1084 6.86033L21.5948 5.29075C21.5267 5.10945 21.5855 4.8977 21.7513 4.77708L23.1017 3.79921L21.4549 3.80325C21.2579 3.81253 21.0746 3.69191 21.0109 3.49539ZM14.0029 3.49539L13.4911 1.90918L12.9796 3.49539C12.9229 3.67454 12.755 3.80326 12.5584 3.80326L10.889 3.79921L12.2413 4.77708C12.3926 4.88843 12.4638 5.08685 12.4019 5.2741L11.8842 6.86031L13.2232 5.88439C13.3764 5.76924 13.5915 5.75972 13.7521 5.87844L15.1004 6.86033L14.5867 5.29075C14.5187 5.10945 14.5774 4.8977 14.7433 4.77708L16.0937 3.79921L14.4468 3.80325C14.2505 3.81253 14.0673 3.69191 14.0029 3.49539ZM28.0182 3.49539L27.5065 1.90918L26.995 3.49539C26.9383 3.67454 26.7704 3.80326 26.5738 3.80326L24.9044 3.79921L26.2567 4.77708C26.408 4.88843 26.4791 5.08685 26.4173 5.2741L25.8977 6.86031L27.2386 5.88439C27.3918 5.76924 27.605 5.75972 27.7675 5.87844L29.1158 6.86033L28.6021 5.29075C28.5341 5.10945 28.5929 4.8977 28.7587 4.77708L30.1091 3.79921L28.4623 3.80325C28.2655 3.81253 28.0827 3.69191 28.0182 3.49539ZM16.137 21.5696C13.888 19.3227 10.2414 19.3227 7.99434 21.5696C5.74528 23.8187 5.74528 27.4653 7.99434 29.7124C10.2413 31.9614 13.8881 31.9614 16.137 29.7124C18.384 27.4647 18.384 23.8186 16.137 21.5696ZM12.0653 20.9839C15.5874 20.9839 17.8662 24.7664 16.133 27.9121C15.3395 29.3491 13.7799 30.2989 12.0653 30.2989C9.49315 30.2989 7.40683 28.2124 7.40683 25.6405C7.40683 23.0457 9.51599 20.9839 12.0653 20.9839ZM12.0653 19.1952C16.3521 19.1952 19.4296 23.3062 18.265 27.4055H29.4951V9.41167H23.5276V14.7085C23.5276 14.9769 23.2271 15.1448 22.9966 14.9956L20.4984 13.3695L18.0228 14.9802C17.7663 15.1615 17.4692 14.9688 17.4692 14.7085V9.41167H11.5021V19.2196C11.6877 19.2048 11.8747 19.1948 12.0653 19.1948L12.0653 19.1952ZM8.72511 34.5518L10.2925 31.8386C9.43717 31.5947 8.65512 31.1798 7.9849 30.6301L7.96016 30.6187L6.2207 33.6305L7.57114 33.4174C7.69034 33.3948 7.81691 33.4359 7.89757 33.538L8.72511 34.5518ZM13.8387 31.8378L15.4042 34.5511L16.2317 33.5371C16.315 33.4352 16.4415 33.3938 16.56 33.4164L17.9105 33.6296L16.1691 30.6159L16.1444 30.6293C15.4742 31.1791 14.6921 31.5948 13.8387 31.8379L13.8387 31.8378ZM14.8732 22.8321C14.0064 21.9675 12.7733 21.5289 11.5023 21.7081V27.4054H15.6226C16.3841 25.8746 16.0722 24.0333 14.8731 22.8321H14.8732Z" fill="#7432FF" />
                          </g>
                          <defs>
                            <clipPath id="clip0_601_1027">
                              <rect width="23.8909" height="32.9356" fill="white" transform="translate(6.21094 1.63281)" />
                            </clipPath>
                          </defs>
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
                  <div className="key__factors-content mb-40 d-sm-flex" style={{ width: "50%" }}>
                    <div className="key__factors-icon">
                      <span style={{ paddingLeft: "15px" }}>
                        <svg width="30" height="40" viewBox="0 0 19 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M13.841 14.659L14.017 14.836L14.195 14.659C14.4039 14.4501 14.652 14.2843 14.925 14.1713C15.1979 14.0582 15.4905 14 15.786 14C16.0815 14 16.3741 14.0582 16.647 14.1713C16.92 14.2843 17.1681 14.4501 17.377 14.659C17.5859 14.8679 17.7517 15.116 17.8647 15.389C17.9778 15.6619 18.036 15.9545 18.036 16.25C18.036 16.5455 17.9778 16.8381 17.8647 17.111C17.7517 17.384 17.5859 17.6321 17.377 17.841L14.017 21.2L10.659 17.841C10.237 17.419 9.99999 16.8467 9.99999 16.25C9.99999 15.6533 10.237 15.081 10.659 14.659C11.081 14.237 11.6533 14 12.25 14C12.8467 14 13.419 14.237 13.841 14.659V14.659ZM8 13V21H0C2.41087e-05 18.9216 0.808937 16.9247 2.25547 15.4323C3.702 13.9398 5.67259 13.069 7.75 13.004L8 13ZM8 0C11.315 0 14 2.685 14 6C14 9.315 11.315 12 8 12C4.685 12 2 9.315 2 6C2 2.685 4.685 0 8 0Z" fill="#7432ff" />
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
                <div className="key__factors-wrapper d-flex pl-30-mobile">
                  <div className="key__factors-content mb-40 d-sm-flex" style={{ width: "50%" }}>
                    <div className="key__factors-icon">
                      <span style={{ paddingLeft: "12px" }}>
                        <svg width="40" height="40" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <g clip-path="url(#clip0_601_2467)">
                            <path d="M23.1853 18.2887C22.9383 18.0418 22.4798 18.0418 22.2328 18.2887L20.363 20.157C20.116 20.4039 20.116 20.862 20.363 21.1089C20.6101 21.3558 21.0685 21.3558 21.3156 21.1089L22.0566 20.3685V25.0921C22.0566 25.4799 22.374 25.762 22.7269 25.762C23.0798 25.762 23.3973 25.4448 23.3973 25.0921V20.4037L24.1382 21.1441C24.2792 21.285 24.4557 21.3555 24.5969 21.3555C24.7734 21.3555 24.9498 21.285 25.0556 21.1441C25.3027 20.8972 25.3027 20.4391 25.0556 20.1922L23.1853 18.2887Z" fill="#7432FF" />
                            <path d="M26.4317 11.4143L24.4208 11.2028C24.2798 11.2028 24.1737 11.0971 24.1033 10.9914L23.2566 9.15822C23.0449 8.66471 22.3394 8.66471 22.0924 9.15822L21.2457 10.9914C21.175 11.1323 21.0692 11.2028 20.9282 11.2383L18.9172 11.4497C18.3882 11.5203 18.1763 12.1901 18.5644 12.5425L20.046 13.8821C20.1519 13.9878 20.1871 14.129 20.1519 14.2699L19.7638 16.2439C19.658 16.7726 20.2225 17.1958 20.681 16.9138L22.4449 15.9267C22.5507 15.8561 22.7271 15.8561 22.8329 15.9267L24.5968 16.9138C25.0555 17.1958 25.6198 16.7729 25.514 16.2439L25.1259 14.2699C25.0907 14.129 25.1611 13.9878 25.2317 13.8821L26.7134 12.5073C27.1726 12.1195 26.961 11.4497 26.4319 11.4143L26.4317 11.4143Z" fill="#7432FF" />
                            <path d="M8.93231 23.1527C8.93231 25.2359 7.24224 26.9247 5.15769 26.9247C3.07288 26.9247 1.38281 25.2359 1.38281 23.1527C1.38281 21.0697 3.07288 19.3809 5.15769 19.3809C7.24224 19.3809 8.93231 21.0697 8.93231 23.1527Z" fill="#7432FF" />
                            <path d="M18.0358 23.1527C18.0358 25.2359 16.3458 26.9247 14.261 26.9247C12.1764 26.9247 10.4863 25.2359 10.4863 23.1527C10.4863 21.0697 12.1764 19.3809 14.261 19.3809C16.3458 19.3809 18.0358 21.0697 18.0358 23.1527Z" fill="#7432FF" />
                            <path d="M34.8972 23.1527C34.8972 25.2359 33.2071 26.9247 31.1223 26.9247C29.0377 26.9247 27.3477 25.2359 27.3477 23.1527C27.3477 21.0697 29.0377 19.3809 31.1223 19.3809C33.2071 19.3809 34.8972 21.0697 34.8972 23.1527Z" fill="#7432FF" />
                          </g>
                          <defs>
                            <clipPath id="clip0_601_2467">
                              <rect width="33.5929" height="18.1295" fill="white" transform="translate(1.28906 8.79688)" />
                            </clipPath>
                          </defs>
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
                  <div className="key__factors-content mb-40 d-sm-flex" style={{ width: "50%" }}>
                    <div className="key__factors-icon">
                      <span style={{ paddingLeft: "10px" }}>
                        <svg width="38" height="38" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <g clip-path="url(#clip0_601_2555)">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M18.157 1.56543L19.1183 4.544L22.248 4.53783L19.7126 6.37229L20.6855 9.34685L18.157 7.50317L15.6285 9.34782L16.6014 6.37229L14.066 4.53716L17.1957 4.54333L18.157 1.56543ZM6.48943 5.23622L7.45076 8.21479L10.5804 8.20862L8.045 10.0437L9.01793 13.0183L6.48943 11.1737L3.96093 13.0183L4.93386 10.0437L2.39844 8.20862L5.5281 8.21479L6.48943 5.23622ZM29.8252 5.23622L30.7865 8.21479L33.9162 8.20862L31.3807 10.0437L32.3537 13.0183L29.8252 11.1737L27.2967 13.0183L28.2696 10.0437L25.7342 8.20862L28.8638 8.21479L29.8252 5.23622ZM15.3075 21.1465L15.3177 27.8429H21.8945C22.1428 27.8429 22.3697 27.7592 22.5466 27.615C22.7233 27.4708 22.8513 27.2655 22.9009 27.0236L23.8575 22.3663C23.8902 22.2087 23.8881 22.0564 23.8534 21.9134C23.8181 21.7707 23.7493 21.6346 23.6474 21.5096C23.5461 21.3851 23.4271 21.2907 23.2952 21.2274C23.1634 21.1648 23.0145 21.1328 22.852 21.1328H19.4715C19.2763 21.1328 19.1179 20.9744 19.1179 20.7792C19.1179 20.7283 19.1288 20.6799 19.1478 20.6365L19.2585 20.3204C19.8141 18.7383 20.1091 17.8986 19.2967 17.1438C19.2049 17.0589 19.103 17.0003 18.9963 16.9712C18.8888 16.942 18.7712 16.9399 18.6482 16.9664C18.5251 16.993 18.4191 17.0433 18.3332 17.1146C18.2476 17.186 18.1789 17.2806 18.1307 17.3961L16.8028 20.5753C16.5498 21.1805 15.8718 21.1743 15.3077 21.1466L15.3075 21.1465ZM14.6146 28.1488L14.603 20.812C14.5622 20.5706 14.4059 20.4053 14.2167 20.3313C14.1256 20.296 14.0277 20.2803 13.9305 20.2872C13.8366 20.2934 13.7462 20.3204 13.6661 20.3688C13.4832 20.4802 13.3471 20.7169 13.3471 21.1025V27.9233C13.3471 28.2809 13.4695 28.5256 13.6421 28.6556C13.7197 28.7141 13.8086 28.7495 13.8999 28.7608C13.9931 28.7725 14.0882 28.7601 14.1759 28.7234C14.3616 28.6451 14.529 28.4569 14.6146 28.1488ZM21.895 28.5494H15.2216C15.0531 28.9655 14.7687 29.2375 14.4493 29.372C14.2425 29.459 14.0244 29.4882 13.8143 29.4616C13.602 29.435 13.3962 29.3535 13.2174 29.2183C12.8809 28.9648 12.6409 28.5261 12.6409 27.9224V21.1021C12.6409 20.4339 12.921 19.9966 13.299 19.7661C13.4799 19.6561 13.681 19.5961 13.8837 19.5826C14.0836 19.5691 14.2862 19.6004 14.474 19.6737C14.8064 19.8043 15.0919 20.064 15.2307 20.4358L15.2598 20.4372C15.6203 20.4562 16.077 20.4802 16.1505 20.304L17.4784 17.1248C17.5709 16.9038 17.7082 16.7176 17.8823 16.5727C18.057 16.4271 18.265 16.3259 18.4976 16.2756C18.7302 16.2253 18.9612 16.2315 19.1803 16.2913C19.3992 16.351 19.6012 16.4639 19.7767 16.627C20.9005 17.6706 20.5938 18.641 19.9678 20.4256H22.8506C23.1171 20.4256 23.3673 20.4813 23.5952 20.5895C23.8224 20.6976 24.0242 20.8567 24.1935 21.0647C24.3628 21.2719 24.4776 21.5005 24.5376 21.7445C24.5973 21.9885 24.6016 22.2448 24.5478 22.5067L23.5912 27.1639C23.5075 27.5706 23.2907 27.9165 22.9908 28.1613C22.6905 28.4065 22.3083 28.5492 21.895 28.5492L21.895 28.5494ZM18.1576 13.2801C20.9283 13.2801 23.4364 14.4034 25.2516 16.2186C27.0669 18.0339 28.1901 20.5423 28.1901 23.3127C28.1901 26.0833 27.0668 28.5914 25.2516 30.4067C23.4364 32.222 20.928 33.3452 18.1576 33.3452C15.387 33.3452 12.8788 32.2219 11.0636 30.4067C9.2483 28.5915 8.12507 26.0831 8.12507 23.3127C8.12507 20.542 9.24837 18.0339 11.0636 16.2186C12.8788 14.4027 15.387 13.2801 18.1576 13.2801ZM24.752 16.7186C26.4394 18.406 27.4833 20.7374 27.4833 23.313C27.4833 25.8885 26.4397 28.2199 24.752 29.9074C23.0646 31.5948 20.7331 32.6386 18.1576 32.6386C15.5821 32.6386 13.2507 31.5951 11.5632 29.9074C9.87576 28.22 8.83193 25.8885 8.83193 23.313C8.83193 20.7374 9.87551 18.406 11.5632 16.7186C13.2506 15.0311 15.5821 13.9873 18.1576 13.9873C20.7331 13.9866 23.0645 15.0309 24.752 16.7186ZM26.2125 15.258C24.1512 13.1967 21.303 11.9219 18.1575 11.9219C15.0115 11.9219 12.1643 13.1967 10.1026 15.258C8.04118 17.3194 6.76637 20.1676 6.76637 23.313C6.76637 26.459 8.04118 29.3063 10.1026 31.368C12.1639 33.4294 15.0121 34.7042 18.1575 34.7042C21.3035 34.7042 24.1508 33.4294 26.2125 31.368C28.2739 29.3067 29.5487 26.4592 29.5487 23.313C29.5487 20.1669 28.2739 17.3196 26.2125 15.258Z" fill="#7432FF" />
                          </g>
                          <defs>
                            <clipPath id="clip0_601_2555">
                              <rect width="31.5971" height="33.1451" fill="white" transform="translate(2.32812 1.54688)" />
                            </clipPath>
                          </defs>
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
                        style={{ height: "100%", flexWrap: "wrap", alignContent: "center" }}
                      >
                        <i className="far fa-plus" />
                      </div>
                    }
                  >
                    <h3 className="vertical-timeline-element-title" style={{ color: "#fff" }}>Discovery</h3>
                    <p style={{ color: "#fff" }}>
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
                        style={{ height: "100%", flexWrap: "wrap", alignContent: "center" }}
                      >
                        <i className="fas fa-plus" style={{ fontSize: "11px" }} />
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
                        style={{ height: "100%", flexWrap: "wrap", alignContent: "center" }}
                      >
                        <i className="far fa-plus" />
                      </div>
                    }
                  >
                    <h3 className="vertical-timeline-element-title" style={{ color: "#fff" }}>
                      Design
                    </h3>

                    <p style={{ color: "#fff" }}>
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
                        style={{ height: "100%", flexWrap: "wrap", alignContent: "center" }}
                      >
                        <i className="fas fa-plus" style={{ fontSize: "11px" }} />
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
                        style={{ height: "100%", flexWrap: "wrap", alignContent: "center" }}
                      >
                        <i className="far fa-plus" />
                      </div>
                    }
                  >
                    <h3 className="vertical-timeline-element-title" style={{ color: "#fff" }}>
                      Finalisation
                    </h3>

                    <p style={{ color: "#fff" }}>
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
                        style={{ height: "100%", flexWrap: "wrap", alignContent: "center" }}
                      >
                        <i className="fas fa-plus" style={{ fontSize: "11px" }} />
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
