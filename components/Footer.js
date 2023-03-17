import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import SectionTitle from "./SectionTitle";
import Link from "next/link";

const Footer = () => {

  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(null);

  const emailObj = { email : email}

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("email: ", email);

    const res = await fetch("/api/emails", {
      method: "POST",
      body: JSON.stringify(emailObj),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await res.json();
    console.log(`Form DATA : `, data)
    if (data.success) {
      alert("Subscribed to the Newsletter!");
      setEmail("");
    } else {
      setSubmitted(false);
      // alert("Something went wrong!!");
    }
  };

  useEffect(() => {
    <></>
  }, [submitted])
  return (
    <footer>
      <div className="footer__area fix p-relative pt-150 pb-40">
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
          <Row className="mb-80">
            <Col xxl={6} xl={7} lg={8} md={10}>
              <div className="footer__newsletter">
                <SectionTitle
                  smallFont={true}
                  subTitle="Join Our Community"
                  titleFirst="Subscribe for newsletter"
                />
              </div>
            </Col>
            <Col xxl={{ span: 5, offset: 1 }} xl={5} lg={4} md={4}>
              <div className="footer__subscribe">
                <form onSubmit={handleSubmit}>
                  <div className="footer__subscribe-input">
                    <div className="form-group">
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Email address"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                    {
                      submitted == false ? 
                      
                      <button type="disabled">Subscribed !</button>
                      :
                      <button type="submit">Subscribe</button>

                    }
                  </div>
                </form>
              </div>
            </Col>
          </Row>
          <Row className="mb-30">
            <Col xl={4} lg={3} md={10} sm={10}>
              <div className="footer__widget wow fadeIn" data-wow-delay=".5s">
                <div className="footer__widget-logo">
                  <img src="assets/images/logo/logo_footer.jpg" alt="logo" />
                  <p>
                    A Software Development company that builds top notch web
                    applications, mobile applications and other custom software
                    for startups, SMBs and well-established enterprises.
                  </p>
                </div>
                <div className="footer__widget-social">
                  <Link href="https://www.linkedin.com/company/kylo-apps">
                    <a target={"_blank"}>
                      <i className="fa-brands fa-linkedin"></i>
                    </a>
                  </Link>
                  <Link href="https://www.instagram.com/kyloappsglobal/">
                    <a target={"_blank"}>
                      <i className="fa-brands fa-instagram"></i>
                    </a>
                  </Link>
                  <Link href="https://twitter.com/kyloapps">
                    <a target={"_blank"}>
                      <i className="fa-brands fa-twitter"></i>
                    </a>
                  </Link>
                  <Link href="https://www.youtube.com/@kyloapps">
                    <a target={"_blank"}>
                      <i className="fa-brands fa-youtube"></i>
                    </a>
                  </Link>
                  <Link href="https://www.facebook.com/kyloapps">
                    <a target={"_blank"}>
                      <i className="fa-brands fa-facebook-f"></i>
                    </a>
                  </Link>
                </div>
              </div>
            </Col>
            <Col xl={3} lg={3} md={4} sm={8}>
              <div className="footer__widget">
                <div className="footer__widget-title">
                  <h5>Our Services</h5>
                </div>
                <div className="footer__widget-link">
                  <ul>
                    <li>
                      <Link href="/web-app-development">
                        <a id="footer_link">Web App Development</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/mobile-app-development">
                        <a id="footer_link">Mobile App Development</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/uiux-designing">
                        <a id="footer_link">UI/UX Designing</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/aiml-development">
                        <a id="footer_link">AI/ML/Chatbot</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/growth-hacking">
                        <a id="footer_link">Growth Hacking</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/quality-assurance">
                        <a id="footer_link">Quality Assurance</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/devops">
                        <a id="footer_link">DevOps</a>
                      </Link>
                    </li> 
                    <li>
                      <Link href="/data-engineering">
                        <a id="footer_link">Data Engineering</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/branding">
                        <a id="footer_link">Branding</a>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </Col>
            <Col xl={2} lg={3} md={3} sm={6}>
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
                      <Link href="/careers">
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

            <Col xl={2} lg={3} md={3} sm={2}>
              <div className="footer__widget footer__widget-mt">
                <div className="footer__widget-title">
                  <h5>Stay Connected</h5>
                </div>
                <div className="footer__widget-info">
                  <div className="footer__widget-address">
                    <p>
                      203-204, NDM 1, Netaji Subhash Place, Pitampura, Delhi,
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
                      <i className="fa-solid fa-paper-plane green"></i>
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
            <Col xl={1} lg={3} md={3} sm={6}></Col>
          </Row>
          <Row>
            <Col xl={12}>
              <div className="footer__copyright">
                <p>
                  © {new Date().getFullYear()} Kylo Technologies LLP
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
