import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import SectionTitle from "./SectionTitle";
import TeamMemberCard from "./TeamMemberCard";

const MEMBER_DATA = [
  {
    memberImg: "https://www.kyloapps.com/anubhav.jpeg",
    memberLink: "/single-team",
    memberName: "Anubhav Mittal",
    memberPosition: "Head - Research & Technology",
  },
  {
    memberImg: "https://www.kyloapps.com/saumya.jpeg",
    memberLink: "/single-team",
    memberName: "Saumya Thakur",
    memberPosition: "Head - Marketing & Operations",
  },
  {
    memberImg: "https://www.kyloapps.com/saumya.jpeg",
    memberLink: "/single-team",
    memberName: "Saumya Thakur",
    memberPosition: "Head - Marketing & Operations",
  },
  {
    memberImg: "https://www.kyloapps.com/saumya.jpeg",
    memberLink: "/single-team",
    memberName: "Saumya Thakur",
    memberPosition: "Head - Marketing & Operations",
  },
  {
    memberImg: "https://www.kyloapps.com/saumya.jpeg",
    memberLink: "/single-team",
    memberName: "Saumya Thakur",
    memberPosition: "Head - Marketing & Operations",
  },
  {
    memberImg: "https://www.kyloapps.com/saumya.jpeg",
    memberLink: "/single-team",
    memberName: "Saumya Thakur",
    memberPosition: "Head - Marketing & Operations",
  },
  {
    memberImg: "https://www.kyloapps.com/saumya.jpeg",
    memberLink: "/single-team",
    memberName: "Saumya Thakur",
    memberPosition: "Head - Marketing & Operations",
  },
  {
    memberImg: "https://www.kyloapps.com/saumya.jpeg",
    memberLink: "/single-team",
    memberName: "Saumya Thakur",
    memberPosition: "Head - Marketing & Operations",
  },
];

const TeamMember = ({ subTitle }) => {
  return (
    <section className="team__area pt-115 pb-80 mb-150 fix p-relative">
      <div className="team__shape">
        <img
          className="t-shape-1"
          src="/assets/images/shape/testimonials/t-shape-1.png"
          alt=""
        />
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
            ({ memberImg, memberLink, memberName, memberPosition }, index) => (
              <TeamMemberCard
                key={index}
                memberImg={memberImg}
                memberLink={memberLink}
                memberName={memberName}
                memberPosition={memberPosition}
              />
            )
          )}
        </Row>
      </Container>
    </section>
  );
};

export default TeamMember;
