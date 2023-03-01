import React, { useState } from "react";
import { Col } from "react-bootstrap";
import Link from "next/link";
import { STATES } from "mongoose";

const PortfolioTwoItem = ({
  portfolioImg,
  // portfolioLink,
  portfolioTitle,
  portfolioText,
  id,
}) => {
  const shortText = portfolioText.slice(0, 90);
  const [state, setState] = useState("");
  return (
    <Col xl={6} lg={6}>
      <div
        className="portfolio__item-2 mb-30"
        onMouseLeave={() => setState("")}
      >
        <div className="portfolio__image-2">
          <img src={portfolioImg} alt="portfolio" />
        </div>
        <div className="portfolio__text-2">
          <h3>
            <a>{portfolioTitle}</a>
          </h3>
          <p onClick={() => setState(id)}>
            {state === id ? portfolioText : `${shortText}...`}
            {state !== id && (
              <a style={{ color: "#7432ff ", cursor: "pointer" }}>
                <b>Know More</b>
              </a>
            )}
          </p>
        </div>
      </div>
    </Col>
  );
};

export default PortfolioTwoItem;
