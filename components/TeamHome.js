import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import SectionTitle from "./SectionTitle";
import TeamMemberCard from "./TeamMemberCard";

const MEMBER_DATA = [
  {
    memberImg: "../assets/images/team/Anubhav Mittal.png",
    memberName: "Anubhav Mittal",
    memberPosition: "Head - Research & Technology",
  },
  {
    memberImg: "../assets/images/team/Saumyaxyz.png",
    memberName: "Saumya Thakur",
    memberPosition: "Head - Marketing & Operations",
  },
  {
    memberImg: "../assets/images/team/Amit Sharma.png",
    memberName: "Amit Sharma",
    memberPosition: "Head - Marketing & Operations",
  },
  {
    memberImg: "../assets/images/team/Arzoo Sirohi.png",
    memberName: "Arzoo Sirohi",
    memberPosition: "Head - Marketing & Operations",
  },
  {
    memberImg: "../assets/images/team/Chaitanya Kumar Chandra.png",
    memberName: "Chaitanya Kumar",
    memberPosition: "Head - Marketing & Operations",
  },
  {
    memberImg: "../assets/images/team/Mansha Rajpal.png",
    memberName: "Mansha Rajpal",
    memberPosition: "Head - Marketing & Operations",
  },
  {
    memberImg: "../assets/images/team/MahfujarRahman.jpg",
    memberName: "Mahfujar Rahman",
    memberPosition: "Head - Marketing & Operations",
  },
  {
    memberImg: "../assets/images/team/Nidhi Singh.png",
    memberName: "Nidhi Singh",
    memberPosition: "Head - Marketing & Operations",
  },
  {
    memberImg: "../assets/images/team/Pearl Singhal.png",
    memberName: "Pearl Singhal",
    memberPosition: "Head - Marketing & Operations",
  },
  {
    memberImg: "../assets/images/team/Priya Verma.png",
    memberName: "Priya Verma",
    memberPosition: "Head - Marketing & Operations",
  },
  {
    memberImg: "../assets/images/team/Resham Tolani.png",
    memberName: "Resham Tolani",
    memberPosition: "Head - Marketing & Operations",
  },
  {
    memberImg: "../assets/images/team/Rohit Pal.png",
    memberName: "Rohit Pal",
    memberPosition: "Head - Marketing & Operations",
  },
  {
    memberImg: "../assets/images/team/Sameer Khatri.png",
    memberName: "Sameer Khatri",
    memberPosition: "Head - Marketing & Operations",
  },
  {
    memberImg: "../assets/images/team/Sulekha Bansal.png",
    memberName: "Sulekha Bansal",
    memberPosition: "Head - Marketing & Operations",
  },
  {
    memberImg: "../assets/images/team/Vikalp Kaushik.png",
    memberName: "Vikalp Kaushik",
    memberPosition: "Head - Marketing & Operations",
  },
  {
    joinus: true,
  },
];

const TeamMember = ({ subTitle }) => {
  return (
    <section className="team__area pt-115 pb-80 mb-150 fix p-relative">
      <div className="team__shape">
        {/* <img
          className="t-shape-1"
          src="/assets/images/shape/testimonials/t-shape-1.png"
          alt=""
        /> */}
        <img
          className="t-shape-2"
          src="/assets/images/shape/testimonials/t-shape-2.png"
          alt=""
        />
        <img
          className="t-shape-3"
          src="/assets/images/shape/testimonials/t-shape-3.png"
          alt=""
        />
        {/* <img
            className="t-shape-4"
            src="/assets/images/shape/testimonials/t-shape-4.png"
            alt=""
          /> */}
      </div>
      <Container>
        <Row className="mb-65">
          <Col xl={12}>
            <div className="team__heading text-center">
              <SectionTitle
                subTitle={subTitle}
                titleFirst="Meet our go-getter team"
              />
              <p>
                We strive for perfection through collaboration. Together, we
                build amazing products while emptying our cups of coffee.
              </p>
            </div>
          </Col>
        </Row>
        <Row className="d-flex justify-content-around">
          {MEMBER_DATA.map(
            (
              { memberImg, memberLink, memberName, memberPosition, joinus },
              index
            ) => (
              <TeamMemberCard
                key={index}
                memberImg={memberImg}
                memberLink={memberLink}
                memberName={memberName}
                memberPosition={memberPosition}
                joinus={joinus}
              />
            )
          )}
        </Row>
      </Container>
    </section>
  );
};

export default TeamMember;
