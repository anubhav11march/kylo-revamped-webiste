import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const LifeAtKylo = () => {
  return (
    <section className="about__area fix p-relative pt-60 pb-60 about__pb">
      <h1 className="text-center">Life At Kylo Apps</h1>

      <div className="mt-60 d-flex justify-content-between flex-wrap lifeKylo_container">
        <div className="lifeKylo_item lifeKylo_item-2">
          <img
            style={{
              width: "100%",
              height: "100%",
              borderTopLeftRadius: "0",
              borderBottomLeftRadius: "0",
            }}
            src="/assets/images/carrier/IMG_9906.jpg"
          />
        </div>

        <div className="lifeKylo_middleParent">
          <div className="lifeKylo_item lifeKylo_item-3">
            <img
              style={{ width: "100%", height: "100%" }}
              src="/assets/images/carrier/IMG_2452.jpeg"
            />
          </div>

          <div className="lifeKylo_item lifeKylo_item_big">
            <img
              style={{ width: "100%", height: "100%" }}
              src="/assets/images/carrier/13.png"
            />
          </div>
        </div>

        <div className="lifeKylo_item lifeKylo_item-2">
          <img
            style={{
              width: "100%",
              height: "100%",
              borderTopRightRadius: "0",
              borderBottomRightRadius: "0",
            }}
            src="/assets/images/carrier/4.jpg"
          />
        </div>
      </div>
      <div className="d-flex justify-content-between flex-wrap lifeKylo_container">
        <div className="lifeKylo_item lifeKylo_item-2">
          <img
            style={{
              width: "100%",
              height: "100%",
              borderTopLeftRadius: "0",
              borderBottomLeftRadius: "0",
            }}
            src="/assets/images/carrier/10.jpg"
          />
        </div>

        <div className="lifeKylo_item lifeKylo_item_big">
          <img
            style={{ width: "100%", height: "100%" }}
            src="/assets/images/carrier/1.jpg"
          />
        </div>

        <div className="lifeKylo_item lifeKylo_item-3">
          <img
            style={{ width: "100%", height: "100%" }}
            src="/assets/images/carrier/3(3).jpg"
          />
        </div>

        <div className="lifeKylo_item lifeKylo_item-2">
          <img
            style={{
              width: "100%",
              height: "100%",
              borderTopRightRadius: "0",
              borderBottomRightRadius: "0",
            }}
            src="/assets/images/carrier/6.jpg"
          />
        </div>
      </div>
    </section>
  );
};

export default LifeAtKylo;
