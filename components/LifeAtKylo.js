import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';

const LifeAtKylo = () => {
  return (
    <section className="about__area fix p-relative pt-60 pb-120 about__pb">
      <h1 className="text-center">Life At Kylo Apps</h1>

      <div
        className="mt-60 d-flex justify-content-between flex-wrap lifeKylo_container"
        style={{ minHeight: "330px" }}
      >
        <div
          className="lifeKylo_item lifeKylo_item-2"
          style={{
            minWidth: "250px",
            height: "300px",
            background: "#4a4f61",
            // alignSelf: "flex-end",
          }}
        ></div>

        <div
          className="lifeKylo_item"
          style={{
            minWidth: "250px",
            height: "300px",
            background: "#4a4f61",
          }}
        ></div>

        <div
          className="lifeKylo_item"
          style={{
            minWidth: "570px",
            height: "300px",
            background: "#4a4f61",
          }}
        ></div>

        <div
          className="lifeKylo_item lifeKylo_item-2"
          style={{
            minWidth: "250px",
            height: "300px",
            background: "#4a4f61",
            // alignSelf: "flex-end",
          }}
        ></div>
      </div>
      <div
        className="d-flex justify-content-between flex-wrap lifeKylo_container"
        style={{ minHeight: "330px" }}
      >
        <div
          className="lifeKylo_item lifeKylo_item-2"
          style={{
            minWidth: "250px",
            height: "300px",
            background: "#4a4f61",
            // alignSelf: "flex-end",
          }}
        ></div>

        <div
          className="lifeKylo_item"
          style={{
            minWidth: "570px",
            height: "300px",
            background: "#4a4f61",
          }}
        ></div>

        <div
          className="lifeKylo_item"
          style={{
            minWidth: "250px",
            height: "300px",
            background: "#4a4f61",
          }}
        ></div>

        <div
          className="lifeKylo_item lifeKylo_item-2"
          style={{
            minWidth: "250px",
            height: "300px",
            background: "#4a4f61",
            // alignSelf: "flex-end",
          }}
        ></div>
      </div>
    </section>
  );
}

export default LifeAtKylo