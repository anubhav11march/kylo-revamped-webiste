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
                  style={{ display: "flex", columnGap: "150px" }}
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
                <h3 className='mb-50'>Technologies</h3>
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
                          <svg width="30" height="30" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4.41322 4.50812C4.41322 2.92589 5.67081 1.6683 7.25303 1.6683C8.83525 1.6683 10.0928 2.92589 10.0928 4.50812C10.0928 6.09034 8.83525 7.34793 7.25303 7.34793C5.67081 7.34821 4.41322 6.09034 4.41322 4.50812ZM7.25303 8.97094C3.80445 8.97094 0.96464 11.6486 0.761719 15.0564H13.7441C13.5414 11.6486 10.7013 8.97094 7.25303 8.97094ZM22.2639 19.9248C22.2639 21.507 23.5215 22.7646 25.1037 22.7646C26.6859 22.7646 27.9435 21.507 27.9435 19.9248C27.9435 18.3426 26.6859 17.085 25.1037 17.085C23.5215 17.085 22.2639 18.3426 22.2639 19.9248ZM25.1037 24.3876C21.6551 24.3876 18.8153 27.0653 18.6124 30.4731H31.5947C31.3918 27.0653 28.552 24.3876 25.1034 24.3876H25.1037ZM20.2354 8.15969C20.4383 8.15969 20.6412 8.07847 20.8033 7.91631C21.1279 7.59172 21.1279 7.10499 20.8033 6.78036L18.937 4.914H24.2923V12.2166C24.2923 12.6628 24.6574 13.0279 25.1037 13.0279C25.5499 13.0279 25.915 12.6628 25.915 12.2166V4.30546V4.22424V4.14302C25.915 3.69673 25.5499 3.33169 25.1037 3.33169H18.937L20.8033 1.46534C21.1279 1.14074 21.1279 0.654014 20.8033 0.329383C20.4787 0.00478884 19.992 0.00478884 19.6674 0.329383L16.4217 3.57504C16.3813 3.61551 16.3405 3.65626 16.3405 3.69673C16.3405 3.69673 16.3 3.7372 16.3 3.77795C16.3 3.81841 16.2596 3.81841 16.2596 3.85917C16.2596 3.89963 16.2596 3.89963 16.2191 3.94039C16.2191 3.98085 16.2191 3.98085 16.1786 4.0216C16.1382 4.14329 16.1382 4.22451 16.1786 4.3462C16.1786 4.38667 16.1786 4.38667 16.2191 4.42742C16.2191 4.46789 16.2191 4.46789 16.2596 4.50864C16.2596 4.54911 16.3 4.54911 16.3 4.58986C16.3 4.63032 16.3405 4.63032 16.3405 4.67108C16.381 4.71154 16.4217 4.7523 16.4217 4.79276L19.6674 8.03842C19.8295 8.07832 20.0324 8.15954 20.2353 8.15954L20.2354 8.15969ZM12.8922 27.7955C12.8922 27.755 12.8922 27.755 12.8518 27.7143C12.8518 27.6738 12.8113 27.6738 12.8113 27.633C12.8113 27.633 12.8113 27.5926 12.7708 27.5926C12.7304 27.5521 12.6896 27.5113 12.6896 27.4709L9.44396 24.2252C9.11936 23.9006 8.63263 23.9006 8.308 24.2252C7.98341 24.5498 7.98341 25.0365 8.308 25.3612L10.1744 27.2275H4.81871V19.925C4.81871 19.4787 4.45364 19.1136 4.00738 19.1136C3.56112 19.1136 3.19606 19.4787 3.19606 19.925V27.8361V27.9173V27.9985C3.19606 28.4448 3.56112 28.8098 4.00738 28.8098H10.1741L8.30771 30.6762C7.98312 31.0008 7.98312 31.4875 8.30771 31.8122C8.46987 31.9743 8.67277 32.0555 8.87567 32.0555C9.07857 32.0555 9.28149 31.9743 9.44364 31.8122L12.6893 28.5665C12.7298 28.526 12.7705 28.4853 12.7705 28.4448L12.811 28.4043C12.811 28.3639 12.8514 28.3639 12.8514 28.3231C12.8514 28.2827 12.8514 28.2827 12.8919 28.2419C12.8919 28.2014 12.8919 28.2014 12.9324 28.1607C12.9728 28.039 12.9728 27.9578 12.9324 27.8361C12.8922 27.8361 12.8922 27.8361 12.8922 27.7956L12.8922 27.7955Z" fill="#7432FF" />
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
                      <span style={{ paddingLeft: "12px" }}>
                        <svg width="35" height="35" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
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
                      <span style={{ paddingLeft: "12px" }}>
                        <svg width="35" height="35" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <g clip-path="url(#clip0_601_1183)">
                            <path d="M2.33069 22.7429C2.37861 22.8634 2.49745 22.9408 2.62697 22.9356H3.44085C3.59125 22.9356 3.73547 22.9953 3.84175 23.1016C3.94802 23.2079 4.0078 23.3521 4.0078 23.5023C3.99262 26.1883 5.04327 28.7707 6.92911 30.6833C8.81501 32.5958 11.3824 33.6825 14.0683 33.7048H16.8212C17.2565 33.7027 17.6088 33.3504 17.6109 32.9153C17.6071 32.5379 17.3402 32.2141 16.9704 32.1389L16.2953 32.0085C14.31 31.6166 12.5171 30.5609 11.211 29.0152C9.90508 27.4695 9.16377 25.5255 9.109 23.5026C9.109 23.1897 9.36258 22.9358 9.67571 22.9358H10.7157C10.8454 22.9411 10.9643 22.8637 11.0122 22.7432C11.0615 22.6312 11.0333 22.5003 10.9425 22.4185L6.89835 18.4944C6.77072 18.3704 6.56743 18.3704 6.4398 18.4944L2.39928 22.4194C2.30914 22.5015 2.28162 22.6317 2.33073 22.7432L2.33069 22.7429ZM5.70819 22.9356C5.85835 22.9356 6.00258 22.9953 6.10885 23.1016C6.21512 23.2079 6.2749 23.3521 6.2749 23.5023C6.2768 26.0104 7.45102 28.3736 9.4489 29.8896C9.6994 30.0773 9.75017 30.4326 9.56229 30.6831C9.37441 30.9334 9.0193 30.9841 8.76883 30.7965C6.48558 29.066 5.14344 26.3671 5.14131 23.5025C5.14131 23.1896 5.39513 22.9358 5.70826 22.9358L5.70819 22.9356Z" fill="#7432FF" />
                            <path d="M15.9091 15.0003C15.9091 15.3134 15.6552 15.5673 15.3421 15.5673C15.0292 15.5673 14.7754 15.3134 14.7754 15.0003C14.7754 14.6874 15.0292 14.4336 15.3421 14.4336C15.6552 14.4336 15.9091 14.6874 15.9091 15.0003Z" fill="#7432FF" />
                            <path d="M21.577 20.6685C21.577 20.9814 21.3232 21.2352 21.0103 21.2352C20.6972 21.2352 20.4434 20.9814 20.4434 20.6685C20.4434 20.3554 20.6972 20.1016 21.0103 20.1016C21.3232 20.1016 21.577 20.3554 21.577 20.6685Z" fill="#7432FF" />
                            <path d="M10.2422 17.8337C10.2422 18.8054 10.4222 19.7684 10.7733 20.6744L11.7369 21.6067V21.6069C12.0984 21.9523 12.2493 22.4637 12.1338 22.9503C13.7582 24.8734 16.2001 25.91 18.7118 25.7428C21.2239 25.5758 23.5069 24.2248 24.8629 22.1034C26.2183 19.9819 26.4852 17.3426 25.5814 14.9927L24.6179 14.0605V14.0602C24.2564 13.7148 24.1055 13.2034 24.221 12.7169C22.8155 11.0511 20.7856 10.0377 18.6094 9.91579C16.4334 9.79362 14.3029 10.5733 12.7198 12.0714C11.1366 13.5697 10.2404 15.6538 10.2423 17.8334L10.2422 17.8337ZM13.6429 14.9997C13.6429 14.5487 13.8223 14.1163 14.1411 13.7974C14.4599 13.4786 14.8924 13.2993 15.3433 13.2993C15.7943 13.2993 16.227 13.4786 16.5458 13.7974C16.8646 14.1163 17.0437 14.5487 17.0437 14.9997C17.0437 15.4506 16.8646 15.8833 16.5458 16.2021C16.227 16.521 15.7943 16.7001 15.3433 16.7001C14.8924 16.7001 14.4599 16.521 14.1411 16.2021C13.8223 15.8833 13.6429 15.4506 13.6429 14.9997ZM22.712 20.6678C22.712 21.1187 22.5327 21.5512 22.2139 21.87C21.8951 22.1888 21.4626 22.3682 21.0116 22.3682C20.5607 22.3682 20.128 22.1888 19.8092 21.87C19.4904 21.5512 19.3113 21.1187 19.3113 20.6678C19.3113 20.2168 19.4904 19.7841 19.8092 19.4653C20.128 19.1465 20.5607 18.9674 21.0116 18.9674C21.4626 18.9674 21.8951 19.1465 22.2139 19.4653C22.5327 19.7841 22.712 20.2168 22.712 20.6678ZM21.979 14.032C22.2004 14.2534 22.2004 14.612 21.979 14.8333L15.1775 21.6349C14.9553 21.8498 14.6016 21.8467 14.3831 21.628C14.1644 21.4095 14.1613 21.0558 14.3762 20.8335L21.1777 14.032C21.399 13.8107 21.7577 13.8107 21.979 14.032Z" fill="#7432FF" />
                            <path d="M19.5338 1.96387C19.0985 1.966 18.7463 2.31827 18.7441 2.75333C18.7479 3.13074 19.0148 3.45455 19.3846 3.52973L20.059 3.65902H20.0593C22.0445 4.05137 23.8374 5.10725 25.1436 6.65296C26.4495 8.1989 27.191 10.1432 27.246 12.1661C27.246 12.3163 27.1865 12.4605 27.0802 12.5668C26.9737 12.6731 26.8297 12.7328 26.6793 12.7328H25.6403C25.5108 12.7276 25.3917 12.805 25.344 12.9255C25.2947 13.0374 25.3227 13.1684 25.4138 13.2502L29.4567 17.1743C29.5843 17.2983 29.7876 17.2983 29.9152 17.1743L33.9581 13.2481C34.048 13.166 34.0758 13.0358 34.0267 12.9245C33.9787 12.8038 33.8599 12.7267 33.7301 12.7317H32.9141C32.6009 12.7317 32.3471 12.4779 32.3471 12.165C32.3621 9.47916 31.3112 6.89731 29.4253 4.98512C27.5394 3.07292 24.9723 1.98644 22.2868 1.96415L19.5338 1.96387ZM26.7926 4.98605C26.9805 4.73554 27.3356 4.68478 27.5861 4.87266C29.8691 6.60291 31.2113 9.30153 31.2136 12.1661C31.2136 12.479 30.9598 12.7328 30.6467 12.7328C30.3338 12.7328 30.08 12.479 30.08 12.1661C30.0781 9.65794 28.9038 7.29478 26.906 5.77871C26.6559 5.59108 26.6052 5.2362 26.7926 4.98591L26.7926 4.98605Z" fill="#7432FF" />
                          </g>
                          <defs>
                            <clipPath id="clip0_601_1183">
                              <rect width="31.7455" height="31.7455" fill="white" transform="translate(2.29688 1.96875)" />
                            </clipPath>
                          </defs>
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
                        <svg width="30" height="30" viewBox="0 0 30 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path fill-rule="evenodd" clip-rule="evenodd" d="M5.23169 4.54647H2.95518C1.92032 4.54647 0.9375 5.52953 0.9375 6.56415C0.9375 11.2722 2.2827 14.0142 6.47335 16.6007C7.97359 19.8601 10.5087 22.3952 13.5096 24.1544L12.8371 25.7064H17.183L16.5105 24.1544C19.5113 22.3953 22.0464 19.8602 23.5467 16.6007C27.7374 14.0139 29.0826 11.2719 29.0826 6.56415C29.0826 5.52929 28.0995 4.54647 27.0649 4.54647H24.7884C24.7884 -0.213407 5.23205 -0.213407 5.23205 4.54647H5.23169ZM15.0099 13.8072L11.4917 16.3423L12.7334 12.0481L9.21519 9.56477H13.768L15.0096 5.27057L16.2513 9.56477H20.8041L17.2859 12.0481L18.5276 16.3423L15.0094 13.8072H15.0099ZM17.2864 25.9135C18.0106 25.9135 18.2177 26.8448 18.2694 27.4656H11.7507C11.8024 26.8446 12.0093 25.9135 12.7337 25.9135H17.2864ZM19.0455 27.6726C19.6146 27.6726 20.1318 28.8108 20.3907 29.2247H9.62943C9.88803 28.8108 10.4055 27.6726 10.9746 27.6726H19.0457H19.0455ZM20.5457 29.4317C20.8043 29.4317 20.8043 29.6903 20.8043 29.6903V33.9327C20.8043 34.1913 20.2869 34.7088 20.0283 34.7088H9.99169C9.7331 34.7088 9.21567 34.1913 9.21567 33.9327V29.6903C9.21567 29.6903 9.21567 29.4317 9.47426 29.4317H20.5457ZM24.7882 6.04672H27.0647C27.3233 6.04672 27.5821 6.30532 27.5821 6.56414C27.5821 9.77173 27.1682 11.9447 24.3228 14.066C24.3228 14.066 24.7884 6.71955 24.7884 6.04671L24.7882 6.04672ZM5.23181 6.04672H2.9553C2.6967 6.04672 2.43788 6.30532 2.43788 6.56414C2.43788 9.77173 2.85177 11.9447 5.69721 14.066C5.69721 14.066 5.23155 6.71955 5.23155 6.04671L5.23181 6.04672Z" fill="#7432FF" />
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
                        style={{ height: "100%", flexWrap: "wrap", alignContent: "center" }}
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
                        style={{ height: "100%", flexWrap: "wrap", alignContent: "center" }}
                      >
                        <i className="fas fa-plus" style={{ fontSize:"11px"}}/>
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
                        style={{ height: "100%", flexWrap: "wrap", alignContent: "center" }}
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
                        style={{ height: "100%", flexWrap: "wrap", alignContent: "center" }}
                      >
                        <i className="fas fa-plus" style={{ fontSize:"11px"}}/>
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
                        style={{ height: "100%", flexWrap: "wrap", alignContent: "center" }}
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
                        style={{ height: "100%", flexWrap: "wrap", alignContent: "center" }}
                      >
                        <i className="fas fa-plus" style={{ fontSize:"11px"}} />
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
                        style={{ height: "100%", flexWrap: "wrap", alignContent: "center" }}
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