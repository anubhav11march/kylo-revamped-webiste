import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import SectionTitle from "./SectionTitle";

const LifeAtKylo = () => {
  return (
    <section className="about__area fix p-relative pt-100 pb-100 about__pb">
      <div className="text-center">
        <SectionTitle
          subTitle="Work Culture"
          titleFirst="Life At Kylo Apps"
          titleSecond=""
        />
      </div>

      <div className="mt-60 d-flex justify-content-between flex-wrap lifeKylo_container">
        <div className="lifeKylo_item lifeKylo_item-2">
          <img
            style={{
              width: "100%",
              height: "100%",
              borderTopLeftRadius: "0",
              borderBottomLeftRadius: "0",
              objectFit: "cover",
            }}
            src="/assets/images/carrier/8.jpg"
          />
        </div>

        <div className="lifeKylo_middleParent">
          <div className="lifeKylo_item lifeKylo_item-3">
            <img
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
              src="/assets/images/carrier/9.jpg"
            />
          </div>

          <div className="lifeKylo_item lifeKylo_item_big">
            <img
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
              src="/assets/images/carrier/10.jpg"
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
              objectFit: "cover",
            }}
            src="/assets/images/carrier/11.jpg"
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
              objectFit: "cover",
            }}
            src="/assets/images/carrier/12.jpg"
          />
        </div>

        <div className="lifeKylo_item lifeKylo_item_big">
          <img
            style={{ width: "100%", height: "100%" }}
            src="/assets/images/carrier/13.png"
          />
        </div>

        <div className="lifeKylo_item lifeKylo_item-3">
          <img
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
            src="/assets/images/carrier/14.jpg"
          />
        </div>

        <div className="lifeKylo_item lifeKylo_item-2">
          <img
            style={{
              width: "100%",
              height: "100%",
              borderTopRightRadius: "0",
              borderBottomRightRadius: "0",
              objectFit: "cover",
            }}
            src="/assets/images/carrier/15.jpg"
          />
        </div>
      </div>
    </section>
  );
};

export default LifeAtKylo;
