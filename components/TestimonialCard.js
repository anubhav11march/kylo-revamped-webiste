import React from "react";

const TestimonialCard = ({
  clientLogo,
  clientText,
  clientImg,
  clientName,
  clientPosition,
  company,
}) => {
  return (
    <div className="testimonials__item">
      <div className="testimonials__item-content">
        <div className="testimonials__logo">
          <img src={clientLogo} alt="logo" />
        </div>
        <div className="testimonials__text">
          <h6>{company}</h6>
          <p>{clientText}</p>
        </div>
        <div className="testimonials__client d-flex align-items-center">
          <div className="testimonials__client-text">
            <div>
              <img src={clientImg} alt="client" width="70px" />
            </div>
            <div style={{ marginLeft: "20px", marginTop: "10px" }}>
              <h4>{clientName}</h4>
              <span>{clientPosition}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
