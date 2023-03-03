import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import SectionTitle from "./SectionTitle";
import TeamMemberCard from "./TeamMemberCard";

const MEMBER_DATA = [
  {
    memberImg: "/assets/images/team/kyloteamupdated/Anubhav Mittal.png",
    memberName: "Anubhav Mittal",
    memberPosition: "Founder",
  },
  {
    memberImg: "/assets/images/team/kyloteamupdated/Saumya Thakur.png",
    memberName: "Saumya Thakur",
    memberPosition: "Founder",
  },
  {
    memberImg: "/assets/images/team/kyloteamupdated/Arzoo Sirohi.png",
    memberName: "Arzoo Sirohi",
    memberPosition: "HR Team",
  },
  {
    memberImg: "/assets/images/team/kyloteamupdated/Amit Sharma.png",
    memberName: "Amit Sharma",
    memberPosition: "Tech Team",
  },
  {
    memberImg: "/assets/images/team/kyloteamupdated/Chaitanya Kumar Chandra.png",
    memberName: "Chaitanya Kumar",
    memberPosition: "Tech Team",
  },
  {
    memberImg: "/assets/images/team/kyloteamupdated/MahfujarRahman.png",
    memberName: "Mahfujar Rahman",
    memberPosition: "Tech Team",
  },
  {
    memberImg: "/assets/images/team/kyloteamupdated/Vikalp Kaushik.png",
    memberName: "Vikalp Kaushik",
    memberPosition: "Tech Team",
  },
  {
    memberImg: "/assets/images/team/kyloteamupdated/Priya Verma.png",
    memberName: "Priya Verma",
    memberPosition: "UI/UX Team",
  },
  {
    memberImg: "/assets/images/team/kyloteamupdated/Rohit Pal.png",
    memberName: "Rohit Pal",
    memberPosition: "UI/UX Team",
  },
  {
    memberImg: "/assets/images/team/kyloteamupdated/Sameer Khatri.png",
    memberName: "Sameer Khatri",
    memberPosition: "UI/UX Team",
  },
  {
    memberImg: "/assets/images/team/kyloteamupdated/Mansha RajpalU.png",
    memberName: "Mansha Rajpal",
    memberPosition: "Marketing Team",
  },
  {
    memberImg: "/assets/images/team/kyloteamupdated/Nidhi Singh.png",
    memberName: "Nidhi Singh",
    memberPosition: "Marketing Team",
  },
  {
    memberImg: "/assets/images/team/kyloteamupdated/Pearl Singhal.png",
    memberName: "Pearl Singhal",
    memberPosition: "Content Team",
  },
  {
    memberImg: "/assets/images/team/kyloteamupdated/Resham TolaniU.png",
    memberName: "Resham Tolani",
    memberPosition: "Content Team",
  },
  {
    memberImg: "/assets/images/team/kyloteamupdated/Sulekha BansalU.png",
    memberName: "Sulekha Bansal",
    memberPosition: "Graphic Design Team",
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
