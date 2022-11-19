import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import SectionTitle from './SectionTitle';
import ServiceItem from './ServiceItem';


const SERVICE_DATA = [
  {
    serviceIcon: "/assets/images/icon/laptop.png",
    serviceTitle: "Web App Development",
    serviceDesc:
      "We build beautiful and responsive frontend and backend supported web applications to fulfill real world client requirements.",
    serviceLink: "/web-details",
  },
  {
    serviceIcon: "/assets/images/icon/s-icon-3.png",
    serviceTitle: "Mobile App Development",
    serviceDesc:
      "We build Native and Cross Platform applications that work dynamically with all devices, screen sizes and resolutions.",
    serviceLink: "/mobile-details",
  },
  {
    serviceIcon: "/assets/images/icon/s-icon-1.png",
    serviceTitle: "UI/UX Design",
    serviceDesc:
      "Everything great built seems futile, if it does not have a likeable design.",
    serviceLink: "/uiux-details",
  },
  {
    serviceIcon: "/assets/images/icon/ai.png",
    serviceTitle: "AI / ML / Chatbot",
    serviceDesc:
      "We’re always innovating and stay updated with upcoming trends in technology and will take you along on this journey.",
    serviceLink: "/aiml-details",
  },
  {
    serviceIcon: "/assets/images/icon/growth-w.png",
    serviceTitle: "Growth Hacking",
    serviceDesc:
      "We build products and ensure they reach the desired customers.",
    serviceLink: "/growth-details",
  },
  {
    serviceIcon: "/assets/images/icon/qa.png",
    serviceTitle: "Quality Assurance",
    serviceDesc:
      "No product is deemed a market fit without rigorous testing, we have the solution to this test.",
    serviceLink: "/qa-details",
  },
  {
    serviceIcon: "/assets/images/icon/devops.png",
    serviceTitle: "DevOps",
    serviceDesc:
      "No product is deemed a market fit without rigorous testing, we have the solution to this test.",
    serviceLink: "/devops",
  },
  {
    serviceIcon: "/assets/images/icon/data.png",
    serviceTitle: "Data Engineering",
    serviceDesc:
      "No product is deemed a market fit without rigorous testing, we have the solution to this test.",
    serviceLink: "/data-engineering",
  },
  {
    serviceIcon: "/assets/images/icon/brand.png",
    serviceTitle: "Branding",
    serviceDesc:
      "No product is deemed a market fit without rigorous testing, we have the solution to this test.",
    serviceLink: "/branding",
  },
];

const Services = ({extraClass}) => {
    return (
        <section className={`services__area p-relative fix ${extraClass} pt-120 pb-90`}>
                <div className="services__shape">
                    <img className="services-s-1" src="/assets/images/shape/services/services-s-1.png" alt=""/>
                    <img className="services-s-2" src="/assets/images/shape/services/services-s-2.png" alt=""/>
                    <img className="services-s-3" src="/assets/images/shape/services/services-s-3.png" alt=""/>
                </div>
                <Container>
                    <Row className="mb-55">
                        <Col xl={6}>
                            <div className="services__title">
                                <SectionTitle subTitle="Services"
                                titleFirst="What we do"/> 
                            </div>
                        </Col>
                    </Row>  
                    <Row>                                         
                          {SERVICE_DATA.map(
                              ({serviceIcon, serviceTitle, serviceDesc, serviceLink }, index) => (
                                  <ServiceItem
                                  key={index}
                                  serviceIcon={serviceIcon}
                                  serviceTitle={serviceTitle}
                                  serviceDesc={serviceDesc}
                                  serviceLink={serviceLink}
                                  />
                              )
                            )}                                
                    </Row>
                </Container>
            </section>
    );
};

export default Services;