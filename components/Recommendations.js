import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import CountUp from "react-countup";
import SectionTitle from "./SectionTitle";

const Recommendations = ({ subTitle, titleFirst, titleSecond }) => {
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
      </Container>
    </section>
  );
};

export default Recommendations;
