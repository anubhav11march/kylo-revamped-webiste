import React from "react";
import { Col } from "react-bootstrap";
import Link from "next/link";

const PortfolioItem = ({
  portfolioImg,
  portfolioCat,
  portfolioTitle,
  portfolioLink,
}) => {
  return (
    <Col xl={4} lg={4} md={6}>
      <div
        className="portfolio__item mb-30  p-3"
      >
        <div className="portfolio__image">
          <img src={portfolioImg} alt="portfolio" />
          <div className="portfolio__text">
            <p>{portfolioCat}</p>
            <h6 className="text-center">
              {/* <Link href={portfolioLink}> */}
              <a style={{ fontSize : "20px"}}>{portfolioTitle.slice(0, 11) + (portfolioTitle.length > 11 ? ".." : "")}</a>
              <span style={{ fontSize: "18px", background: "#c3f318", borderRadius: "50%", marginLeft: "5px", padding: "5px 7px", color:"white" }}>
                <i className="fas fa-plus"></i>
              </span>
              {/* </Link> */}
            </h6>
            {/* <div className="portfolio__link">
              <Link href={portfolioLink}>
              <a>
                <i className="fas fa-plus"></i>
              </a>
              </Link>
            </div> */}
          </div>
        </div>
      </div>
    </Col >
  );
};

export default PortfolioItem;
