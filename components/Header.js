import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Link from 'next/link';
import NavMenu from './NavMenu';


const Header = ({headerClass, menuClass, sideMenuClass, heroLogo}) => {    

    const [sidebar, setSidebar] = useState(false);
    const showSidebar = () => setSidebar(!sidebar);

    const [sticky, setSticky] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 100) {
      setSticky(true);
    } else if (window.scrollY < 100) {
      setSticky(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });
    
    return (
      <>
        <header>
          <div
            id="header-sticky"
            className={`header__area header__transparent ${headerClass} ${
              sticky === true ? "sticky" : " "
            }`}
          >
            <Container>
              <Row className="align-items-center">
                <Col xxl={3} xl={2} lg={1} md={3} xs={4}>
                  <div className="logo">
                    <Link href="/">
                      <a>
                        <img src={heroLogo} alt="logo" />
                      </a>
                    </Link>
                  </div>
                </Col>
                <Col
                  xxl={9}
                  xl={10}
                  lg={11}
                  md={9}
                  xs={8}
                  className="d-lg-block"
                >
                  <div
                    className={`main-menu d-flex justify-content-end ${menuClass}`}
                  >
                    <nav id="mobile-menu" className="d-none d-xl-block">
                      <NavMenu />
                    </nav>
                    <div className="header__right d-flex align-items-center">
                      <div className="d-none d-md-block">
                        <Link href="/contact">
                          <a className="m-btn">Get A Quote</a>
                        </Link>
                      </div>
                      <div
                        className={`side-menu-icon d-xl-none ${sideMenuClass}`}
                      >
                        <button onClick={showSidebar} className="side-toggle">
                          <i className="fa-solid fa-bars"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
        </header>

        <div className="fix">
          <div className={sidebar ? "side-info info-open" : "side-info"}>
            <button onClick={showSidebar} className="side-info-close">
              <i className="fas fa-times"></i>
            </button>
            <div className="side-info-content">
              <nav className="mobile-menu">
                <NavMenu mobile={true} />
              </nav>
              <div className="sidebar__contact mb-30">
                <div className="contact-list mb-30">
                  <ul>
                    <div className="contact__info-content d-flex">
                      <div className="contact__info-icon">
                        <i
                          style={{ color: "#8b61ff" }}
                          className="fas fa-map-marker-alt"
                        ></i>
                      </div>
                      <div className="contact__info-title">
                        <h5>Address</h5>
                        <p>
                        203-204, NDM 1, Netaji Subhash Place, Pitampura, Delhi, India 110034
                        </p>
                      </div>
                    </div>
                    <div className="contact__info-content d-flex">
                      <div className="contact__info-icon">
                        <i
                          style={{ color: "#8b61ff" }}
                          className="far fa-paper-plane"
                        ></i>
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

                    <div className="contact__info-content d-flex mb-30">
                      <div className="contact__info-icon">
                        <i
                          style={{ color: "#8b61ff" }}
                          className="fas fa-phone"
                        ></i>
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
                  </ul>
                  <div className="sidebar__social">
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
              </div>
            </div>
          </div>
        </div>
        <div
          className={
            sidebar ? "offcanvas-overlay overlay-open" : "offcanvas-overlay"
          }
        ></div>
      </>
    );
};

export default Header;