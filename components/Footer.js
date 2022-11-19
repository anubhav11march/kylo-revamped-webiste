import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import SectionTitle from './SectionTitle';
import Link from 'next/link'; 

const Footer = () => {
    return (
      <footer>
        <div className="footer__area fix p-relative pt-200 pb-60">
          <div className="footer__shape">
            <img
              className="footer-shape-1"
              src="/assets/images/shape/footer/footer-s-1.png"
              alt=""
            />
            <img
              className="footer-shape-2"
              src="/assets/images/shape/footer/footer-s-2.png"
              alt=""
            />
          </div>
          <Container>
            <Row className="mb-110">
              <Col xxl={6} xl={7} lg={8} md={10}>
                <div className="footer__newsletter">
                  <SectionTitle
                    subTitle="Join Our Community"
                    titleFirst="Subscribe for newsletter"
                  />
                </div>
              </Col>
              <Col xxl={{ span: 5, offset: 1 }} xl={5} lg={4} md={4}>
                <div className="footer__subscribe">
                  <form action="#">
                    <div className="footer__subscribe-input">
                      <div className="form-group">
                        <input
                          type="email"
                          className="form-control"
                          placeholder="Email address"
                        />
                      </div>
                      <button type="submit">Subscribe</button>
                    </div>
                  </form>
                </div>
              </Col>
            </Row>
            <Row className="mb-50">
              <Col xl={4} lg={4} md={10} sm={10}>
                <div className="footer__widget wow fadeIn" data-wow-delay=".5s">
                  <div className="footer__widget-logo">
                    <img src="assets/images/logo/logo_footer.jpg" alt="logo" />
                    <p>
                      Core object made kolor adipisci elit sed diam nonummy nibh
                      euismod tincidunt laoreet dolore magna grinjon.
                    </p>
                  </div>
                  <div className="footer__widget-social">
                    <Link href="https://www.linkedin.com/company/kylo-apps">
                      <a>
                        <i className="fa-brands fa-linkedin"></i>
                      </a>
                    </Link>
                    <Link href="https://www.instagram.com/kyloappsglobal/">
                      <a>
                        <i className="fa-brands fa-instagram"></i>
                      </a>
                    </Link>
                    <Link href="https://twitter.com/kyloapps">
                      <a>
                        <i className="fa-brands fa-twitter"></i>
                      </a>
                    </Link>
                    <Link href="https://www.facebook.com/kyloapps">
                      <a>
                        <i className="fa-brands fa-facebook-f"></i>
                      </a>
                    </Link>
                  </div>
                </div>
              </Col>
              <Col xl={2} lg={2} md={2} sm={8}>
                <div className="footer__widget">
                  <div className="footer__widget-title">
                    <h5>Our Services</h5>
                  </div>
                  <div className="footer__widget-link">
                    <ul>
                      <li>
                        <Link href="/web-details">
                          <a id="footer_link">Web App Development</a>
                        </Link>
                      </li>
                      <li>
                        <Link href="/mobile-details">
                          <a id="footer_link">Mobile App Development</a>
                        </Link>
                      </li>
                      <li>
                        <Link href="/uiux-details">
                          <a id="footer_link">UI/UX Design</a>
                        </Link>
                      </li>
                      <li>
                        <Link href="/aiml-details">
                          <a id="footer_link">AI/ML/Chatbot</a>
                        </Link>
                      </li>
                      <li>
                        <Link href="/growth-details">
                          <a id="footer_link">Growth Hacking</a>
                        </Link>
                      </li>
                      <li>
                        <Link href="/qa-details">
                          <a id="footer_link">Quality Assurance</a>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </Col>
              <Col xl={2} lg={2} md={2} sm={6} className="footer_padding">
                <div className="footer__widget footer__widget-mt-2">
                  <div className="footer__widget-title">
                    <h5>Company</h5>
                  </div>
                  <div className="footer__widget-link">
                    <ul>
                      <li>
                        <Link href="/about">
                          <a id="footer_link">About us</a>
                        </Link>
                      </li>
                      <li>
                        <Link href="/portfolio">
                          <a id="footer_link">Portfolio</a>
                        </Link>
                      </li>
                      <li>
                        <Link href="/career">
                          <a id="footer_link">Careers</a>
                        </Link>
                      </li>
                      <li>
                        <Link href="/blog">
                          <a id="footer_link">Blog</a>
                        </Link>
                      </li>
                      <li>
                        <Link href="/contact">
                          <a id="footer_link">Contact</a>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </Col>
              <Col xl={4} lg={4} md={4} sm={4} className="footer_padding">
                <div className="footer__widget footer__widget-mt">
                  <div className="footer__widget-title">
                    <h5>Stay Connected</h5>
                  </div>
                  <div className="footer__widget-info">
                    <div className="footer__widget-address">
                      <p>
                        203-204, NDM 1, Netaji Subash Place, Pitampura, Delhi,
                        India 110034
                      </p>
                    </div>
                    <div className="contact__info-content d-flex mb-30">
                      <div className="contact__info-icon">
                        <i className="fa-solid fa-phone green"></i>
                      </div>
                      <div className="contact__info-title">
                        <h5>Phone</h5>
                        <p>
                          <Link href="tel:+918860732624">
                            <a>+91-8860732624</a>
                          </Link>
                        </p>
                        <p>
                          <Link href="tel:+918920607430">
                            <a>+91-8920607430</a>
                          </Link>
                        </p>
                      </div>
                    </div>

                    <div className="contact__info-content d-flex">
                      <div className="contact__info-icon">
                        <i className="fa-solid fa-paper-plane blue"></i>
                      </div>
                      <div className="contact__info-title">
                        <h5>Email us</h5>
                        <p>
                          <Link href="mailto:info@kyloapps.com">
                            <a>info@kyloapps.com</a>
                          </Link>
                        </p>
                        <p>
                          <Link href="mailto:sales@kyloapps.com">
                            <a>sales@kyloapps.com</a>
                          </Link>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
            <Row>
              <Col xl={12}>
                <div className="footer__copyright">
                  <p>
                    © 2022 Kylo Technologies LLP
                    {/* <Link href="https://alimasha.net/">
                      <a>Alimasha</a>
                    </Link> */}
                  </p>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </footer>
    );
};

export default Footer;