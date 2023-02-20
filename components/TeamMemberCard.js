import React from "react";
import { Col } from "react-bootstrap";
import Link from "next/link";

const TeamMemberCard = ({
  memberImg,
  memberLink,
  memberName,
  memberPosition,
  joinus,
}) => {
  return (
    <Col xl={3} lg={3} md={6} className="mb-40">
      {!joinus ? (
        <>
          <div className="team__thumb">
            <img src={memberImg} alt="member" />
          </div>
          <div className="team__content text-center">
            {/* <Link href={memberLink}> */}
            <a>
              <h3 className="team__title">{memberName}</h3>
            </a>
            {/* </Link> */}
            <span className="team__position">{memberPosition}</span>
          </div>
        </>
      ) : (
        <>
          <div className="join-us">
            <h3>Careers</h3>
            <h4>This could be you ! Come work with us at Kylo Apps</h4>
            <Link href="/careers">
              <p>see open positions</p>
            </Link>
          </div>
        </>
      )}
    </Col>
  );
};

export default TeamMemberCard;
