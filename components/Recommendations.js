import React from "react";
import { Container, Row } from "react-bootstrap";
import SectionTitle from "./SectionTitle";
import BrandCard from "./BrandCard";

const MEMBER_DATA = [
  {
    memberImg: "../assets/images/badges/1.png",
  },
  {
    memberImg: "../assets/images/badges/2.svg",
  },
  {
    memberImg: "../assets/images/badges/3.png",
  },
  {
    memberImg: "../assets/images/badges/4.png",
  },
  {
    memberImg: "../assets/images/badges/5.png",
  },
  {
    memberImg: "../assets/images/badges/6.png",
  },
  {
    memberImg: "../assets/images/badges/7.svg",
  },
  {
    memberImg: "../assets/images/badges/8.svg",
  },
  {
    memberImg: "../assets/images/badges/9.png",
  },
  {
    memberImg: "../assets/images/badges/10.svg",
  },
  {
    memberImg: "../assets/images/badges/11.svg",
  },
  {
    memberImg: "../assets/images/badges/12.png",
  },
];
const Recommendations = () => {
  return (
    <section className="about__area  p-relative pt-120 pb-120 about__pb">
      <Container>
        <div className="about__title mb-80 text-center">
          <SectionTitle
            subTitle="RECOMMENDATIONS"
            titleFirst="Globally trusted for"
            titleSecond="innovative development"
          />
        </div>
        <Row className="d-flex justify-content-around">
          {MEMBER_DATA.map(({ memberImg }, index) => (
            <BrandCard key={index} Img={memberImg} />
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Recommendations;
