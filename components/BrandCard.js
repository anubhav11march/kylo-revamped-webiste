import React from "react";
import { Col } from "react-bootstrap";

const TeamMemberCard = ({ Img }) => {
  return (
    <Col xl={3} lg={3} md={6} className="mb-40">
      <div>
        <img src={Img} alt="brand" />
      </div>
    </Col>
  );
};

export default TeamMemberCard;
