import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import SectionTitle from "./SectionTitle";
import ServiceItem from "./ServiceItem";

const SERVICE_DATA = [
  {
    serviceIcon: "/assets/images/icon/laptop.png",
    serviceTitle: "Web App Development",
    serviceDesc:
      "We build beautiful and responsive frontend and backend supported web applications to fulfill real world client requirements.",
    serviceLink: "/web-app-development",
  },
  {
    serviceIcon: "/assets/images/icon/s-icon-3.png",
    serviceTitle: "Mobile App Development",
    serviceDesc:
      "We build Native and Cross Platform applications that will work dynamically and will perform well on all devices, screen sizes and resolutions.",
    serviceLink: "/mobile-app-development",
  },
  {
    serviceIcon: "/assets/images/icon/s-icon-1.png",
    serviceTitle: "UI/UX Designing",
    serviceDesc:
      "Everything great built seems futile, if it does not have a likable design. We create amazing user-friendly products and help your business stand out from the crowd using our UI/UX expertise.",
    serviceLink: "/uiux-designing",
  },
  {
    serviceIcon: "/assets/images/icon/ai.png",
    serviceTitle: "AI / ML / Chatbot",
    serviceDesc:
      "We’re always innovating and stay updated with upcoming trends in technology and will take you along on this journey.",
    serviceLink: "/aiml-development",
  },
  {
    serviceIcon: "/assets/images/icon/growth-w.png",
    serviceTitle: "Growth Hacking",
    serviceDesc:
      " We build products and ensure they reach the target audience which ultimately helps accelerate their company growth.",
    serviceLink: "/growth-hacking",
  },
  {
    serviceIcon: "/assets/images/icon/qa.png",
    serviceTitle: "Quality Assurance",
    serviceDesc:
      "No product is deemed a market fit without rigorous testing, we have the solution to this test, our manual plus automation testing. ",
    serviceLink: "/qa-assurance",
  },
  {
    serviceIcon: "/assets/images/icon/devops.png",
    serviceTitle: "DevOps",
    serviceDesc:
      "We combine development and ops to unite people, processes, and technology in application planning, development, delivery, and operations.",
    serviceLink: "/devops",
  },
  {
    serviceIcon: "/assets/images/icon/data.png",
    serviceTitle: "Data Engineering",
    serviceDesc:
      "Our team of data engineers designs and builds systems for collecting, storing, and analyzing data at scale and converting it into usable form.",
    serviceLink: "/data-engineering",
  },
  {
    serviceIcon: "/assets/images/icon/brand.png",
    serviceTitle: "Branding",
    serviceDesc:
      "We give a specific name and image to your company’s products and services by creating and shaping the brand from the scratch.",
    serviceLink: "/branding",
  },
];

const Services = ({ extraClass }) => {
  return (
    <section
      id="service"
      className={`services__area p-relative fix ${extraClass} pt-120 pb-90`}
    >
      <div className="services__shape">
        <img
          className="services-s-1"
          src="/assets/images/shape/services/services-s-1.png"
          alt=""
        />
        <img
          className="services-s-2"
          src="/assets/images/shape/services/services-s-2.png"
          alt=""
        />
        <img
          className="services-s-3"
          src="/assets/images/shape/services/services-s-3.png"
          alt=""
        />
      </div>
      <Container>
        <Row className="mb-55">
          <Col xl={6}>
            <div className="services__title">
              <SectionTitle subTitle="Services" titleFirst="What we do" />
            </div>
          </Col>
        </Row>
        <Row>
          {SERVICE_DATA.map(
            (
              { serviceIcon, serviceTitle, serviceDesc, serviceLink },
              index
            ) => (
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
