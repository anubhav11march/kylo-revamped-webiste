import React from "react";
import { Col } from "react-bootstrap";
import Link from "next/link";
import logo from "../public/assets/images/logo/favicon.png"

import Image from "next/image";

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
              <h3 className="team__title text-left" style={{ marginRight: "5px" }}>{memberName}</h3>
            </a>
            {/* </Link> */}
            <span className="team__position">{memberPosition}</span>
          </div>
        </>
      ) : (
        <>
          <div className="join-us">
            <div style={{ display: "flex" }}>
              <Image src={logo} width={"35px"} height={"1px"} alt="kylo-logo" />
              <h3 style={{ marginBottom: "0px", marginLeft: "12px" }}>

                Careers
              </h3>
            </div>
            <p>You could be next! Come join our amazing team.</p>
            <Link href="/careers">
              <h6 style={{ fontSize : "18px", color: "#7432ff" }}>View Openings</h6>
            </Link>
          </div>
        </>
      )}
    </Col>
  );
};

export default TeamMemberCard;
