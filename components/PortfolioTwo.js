import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import SectionTitle from "./SectionTitle";
import PortfolioTwoItem from "./PortfolioTwoItem";
import PORTFOLIO_ALL from "../utils/portfolioData.json";

const PortfolioTwo = ({ extraClass }) => {
  return (
    <section className={`portfolio__area fix p-relative pt-115 ${extraClass}`}>
      <div className="portfolio__shape-2">
        <img
          className="p-s-1  d-none d-sm-block"
          src="/assets/images/shape/portfolio/p-s-1.png"
          alt=""
        />
        <img
          className="p-s-2"
          src="/assets/images/shape/portfolio/p-s-2.png"
          alt=""
        />
        <img
          className="p-s-3 d-none d-sm-block"
          src="/assets/images/shape/portfolio/p-s-3.png"
          alt=""
        />
        <img
          className="p-s-4"
          src="/assets/images/shape/portfolio/p-s-4.png"
          alt=""
        />
        <img
          className="p-s-5 d-none d-xxl-block"
          src="/assets/images/shape/portfolio/p-s-5.png"
          alt=""
        />
        <img
          className="p-s-6  d-none d-sm-block"
          src="/assets/images/shape/portfolio/p-s-1.png"
          alt=""
        />
        <img
          className="p-s-7"
          src="/assets/images/shape/portfolio/p-s-2.png"
          alt=""
        />
        <img
          className="p-s-8 d-none d-sm-block"
          src="/assets/images/shape/portfolio/p-s-3.png"
          alt=""
        />
        <img
          className="p-s-9"
          src="/assets/images/shape/portfolio/p-s-4.png"
          alt=""
        />
        <img
          className="p-s-10 d-none d-xxl-block"
          src="/assets/images/shape/portfolio/p-s-5.png"
          alt=""
        />
        <img
          className="p-s-11  d-none d-sm-block"
          src="/assets/images/shape/portfolio/p-s-1.png"
          alt=""
        />
        <img
          className="p-s-12"
          src="/assets/images/shape/portfolio/p-s-2.png"
          alt=""
        />
        <img
          className="p-s-13 d-none d-sm-block"
          src="/assets/images/shape/portfolio/p-s-3.png"
          alt=""
        />
        <img
          className="p-s-14"
          src="/assets/images/shape/portfolio/p-s-4.png"
          alt=""
        />
        <img
          className="p-s-15 d-none d-xxl-block"
          src="/assets/images/shape/portfolio/p-s-5.png"
          alt=""
        />
        <img
          className="p-s-16  d-none d-sm-block"
          src="/assets/images/shape/portfolio/p-s-1.png"
          alt=""
        />
        <img
          className="p-s-17"
          src="/assets/images/shape/portfolio/p-s-2.png"
          alt=""
        />
        <img
          className="p-s-18 d-none d-sm-block"
          src="/assets/images/shape/portfolio/p-s-3.png"
          alt=""
        />
        <img
          className="p-s-19"
          src="/assets/images/shape/portfolio/p-s-4.png"
          alt=""
        />
        <img
          className="p-s-20 d-none d-xxl-block"
          src="/assets/images/shape/portfolio/p-s-5.png"
          alt=""
        />
        <img
          className="p-s-21  d-none d-sm-block"
          src="/assets/images/shape/portfolio/p-s-1.png"
          alt=""
        />
        <img
          className="p-s-22"
          src="/assets/images/shape/portfolio/p-s-2.png"
          alt=""
        />
        <img
          className="p-s-23 d-none d-sm-block"
          src="/assets/images/shape/portfolio/p-s-3.png"
          alt=""
        />
        <img
          className="p-s-24"
          src="/assets/images/shape/portfolio/p-s-4.png"
          alt=""
        />
      </div>
      <Container>
        <Row>
          <Col xl={12}>
            <div className="portfolio__title-2 text-center">
              <SectionTitle
                subTitle="Portfolio"
                titleFirst="Some of our amazing works"
              />
            </div>
          </Col>
        </Row>
        <div className="portfolio-2">
          {/* <Tabs
                        defaultActiveKey="all"
                        transition={false}
                        id="noanim-tab-example"
                        className="portfolio__menu portfolio__menu-2"
                        >
                          <Tab eventKey="all" title="Show All"> */}
          <Row className="mt-70">
            {/* //TODO: + icon and SOS trim */}
            {PORTFOLIO_ALL.map(
              (
                { portfolioImg, portfolioLink, portfolioTitle, portfolioText },
                index
              ) => (
                <PortfolioTwoItem
                  key={index}
                  id={index}
                  portfolioImg={portfolioImg}
                  portfolioLink={portfolioLink}
                  portfolioTitle={portfolioTitle}
                  portfolioText={portfolioText}
                />
              )
            )}
          </Row>
          {/* </Tab>  
                          <Tab eventKey="ui" title="UI/UX Design">
                            <Row className="mt-70">
                            {PORTFOLIO_UI.map(
                                ({portfolioImg, portfolioLink, portfolioTitle, portfolioText}, index) => (
                                  <PortfolioTwoItem
                                    key={index}
                                    portfolioImg={portfolioImg}
                                    portfolioLink={portfolioLink}
                                    portfolioTitle={portfolioTitle}
                                    portfolioText={portfolioText}
                                  />
                              )
                            )} 
                            </Row>
                          </Tab>
                          <Tab eventKey="marketing" title="Marketing">
                            <Row className="mt-70">
                            {PORTFOLIO_MARKETING.map(
                                ({portfolioImg, portfolioLink, portfolioTitle, portfolioText}, index) => (
                                  <PortfolioTwoItem
                                    key={index}
                                    portfolioImg={portfolioImg}
                                    portfolioLink={portfolioLink}
                                    portfolioTitle={portfolioTitle}
                                    portfolioText={portfolioText}
                                  />
                              )
                            )} 
                            </Row>
                          </Tab>
                          <Tab eventKey="development" title="Development">
                            <Row className="mt-70">
                            {PORTFOLIO_DEVELOPMENT.map(
                                ({portfolioImg, portfolioLink, portfolioTitle, portfolioText}, index) => (
                                  <PortfolioTwoItem
                                  key={index}
                                  portfolioImg={portfolioImg}
                                  portfolioLink={portfolioLink}
                                  portfolioTitle={portfolioTitle}
                                  portfolioText={portfolioText}
                                  />
                              )
                            )} 
                            </Row>
                          </Tab>
                      </Tabs>   */}

          {/* {
  "id": "24",
  "portfolioImg": "/assets/images/portfolio/updated/Glocal.png",
  "portfolioLink": "/portfolio/24",
  "portfolioTitle": "Glocal CareX",
  "portfolioText": "Glocal CareX is a Singapore based listing + leads sourcing + advertising + ecommerce + CRM platform where companies can list and promote their services, exhibitions etc, host live events and sell their physical or virtual products. Buyers can book tickets or demand quotations for the products from the listed companies. These are stored as leads on the platform which companies can use for their business development. Companies can also analyse the performance of their listings and join multiple communities on the platform."
}, */}
        </div>
      </Container>
    </section>
  );
};

export default PortfolioTwo;
