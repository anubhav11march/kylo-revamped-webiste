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
                <NavMenu />
              </nav>
              <div className="sidebar__contact mb-30">
                <div className="contact-list mb-30">
                  <ul>
                    <li>
                      <i className="fas fa-map-marker-alt"></i>203-204, NDM 1,
                      Netaji Subash Place, Pitampura, Delhi, India 110034
                    </li>
                    <li>
                      <i className="far fa-paper-plane"></i>
                      <Link href="mailto:info@kyloapps.com">
                        <a>info@kyloapps.com</a>
                      </Link>
                    </li>
                    <li>
                      <i className="fas fa-phone"></i>
                      <Link href="tel:+918860732624">
                        <a>+91-8860732624</a>
                      </Link>
                    </li>
                  </ul>
                  <div className="sidebar__social">
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