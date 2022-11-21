import Link from "next/link";
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import CountUp from "react-countup";
import SectionTitle from "./SectionTitle";

const KyloDes = ({ subTitle, titleFirst, titleSecond }) => {
  return (
    <section className="about__area fix p-relative pt-120 pb-120 about__pb">
      <Container>
        <Row>
          <Col xxl={7} xl={8} lg={10} md={10}>
            <div className="about__title mb-80">
              <SectionTitle
                subTitle={subTitle}
                titleFirst={titleFirst}
                titleSecond={titleSecond}
              />
            </div>
          </Col>
        </Row>
        <Row>
          <Col xl={6} lg={6}>
            <div className="about__thumb">
              <div className="about__thumb-shape">
                <img
                  className="about-s-1 d-none d-lg-block"
                  src="/assets/images/shape/about/about-s-1.png"
                  alt=""
                />
                <img
                  className="about-s-2 d-block kyloDes_circle"
                  src="/assets/images/shape/about/about-s-2.png"
                  alt=""
                />
              </div>
              <div className="about__thumb-image">
                <img src="/assets/images/Home Page/H2.jpg" alt="" />
              </div>
            </div>
          </Col>
          <Col xl={{ span: 5, offset: 1 }} lg={6}>
            <div className="about__content">
              <p>
                Work with us to be a part of something that creates value for
                its clients all over the world and to experience what a
                collaborative team and work environment feels like. We value our
                employees for who they are and believe that everyone is special
                in their own unique way. We help in bringing out the best in our
                employees, by giving them the finest opportunities and
                challenges required for growth. With clear transparency in
                structure, everyone in the team right from an intern to a senior
                executive gets an equal chance to work and make an impact.
                Flexible work timings and clear growth trajectory just add to
                the perks of working at Kylo Apps.
              </p>
              {/* <ul>
                <li>Sea of Tranquility dispassionate observer dream.</li>
                <li>
                  Muse about as a patch of light brain is the seed of
                  intelligence.
                </li>
                <li>The only home we`ve ever known dream of the mind`s eye.</li>
              </ul> */}
            </div>
            <Link href="#apply_form">
              <a className="m-btn">Apply Now</a>
            </Link>
            {/* <div className="about__counter-bg d-none d-sm-block">
              <div className="about__counter-content d-flex">
                <div className="about__counter-text text-center">
                  <h2>
                    <CountUp end={280} duration={5} />+
                  </h2>
                  <p>Project Delivered</p>
                </div>
                <div className="about__counter-text text-center">
                  <h2>
                    <CountUp end={500} duration={5} />+
                  </h2>
                  <p>Happy Clients</p>
                </div>
                <div className="about__counter-text text-center">
                  <h2>
                    <CountUp end={3500} duration={5} />+
                  </h2>
                  <p>Total Coffees</p>
                </div>
              </div>
            </div> */}
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default KyloDes;
