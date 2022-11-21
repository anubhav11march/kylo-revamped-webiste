import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';

const LifeAtKylo = () => {
  return (
    <section className="about__area fix p-relative pt-60 pb-120 about__pb">
      <h1 className="text-center">Life At Kylo Apps</h1>

      <div className="mt-60 d-flex justify-content-between flex-wrap lifeKylo_container">
        <div className="lifeKylo_item lifeKylo_item-2">
          <img
            style={{ width: "100%", height: "100%", borderTopLeftRadius: "0", borderBottomLeftRadius: "0" }}
            src="https://images.unsplash.com/photo-1515169067868-5387ec356754?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y29ycG9yYXRlJTIwZXZlbnR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
          />
        </div>

        <div className="lifeKylo_middleParent">
          <div className="lifeKylo_item lifeKylo_item-3">
            <img
              style={{ width: "100%", height: "100%" }}
              src="https://images.unsplash.com/photo-1558008258-3256797b43f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Y29ycG9yYXRlJTIwZXZlbnR8ZW58MHx8MHx8&auto=format&fit=crop&w=900&q=60"
            />
          </div>

          <div className="lifeKylo_item lifeKylo_item_big">
            <img
              style={{ width: "100%", height: "100%" }}
              src="https://images.unsplash.com/photo-1561489396-888724a1543d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Y29ycG9yYXRlJTIwZXZlbnR8ZW58MHx8MHx8&auto=format&fit=crop&w=900&q=60"
            />
          </div>
        </div>

        <div className="lifeKylo_item lifeKylo_item-2">
          <img
            style={{ width: "100%", height: "100%", borderTopRightRadius: "0", borderBottomRightRadius: "0" }}
            src="https://images.unsplash.com/photo-1527529482837-4698179dc6ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8Y29ycG9yYXRlJTIwZXZlbnR8ZW58MHx8MHx8&auto=format&fit=crop&w=900&q=60"
          />
        </div>
      </div>
      <div className="d-flex justify-content-between flex-wrap lifeKylo_container">
        <div className="lifeKylo_item lifeKylo_item-2">
          <img
            style={{ width: "100%", height: "100%", borderTopLeftRadius: "0", borderBottomLeftRadius: "0" }}
            src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGNvcnBvcmF0ZSUyMGV2ZW50fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=900&q=60"
          />
        </div>

        <div className="lifeKylo_item lifeKylo_item_big">
          <img
            style={{ width: "100%", height: "100%" }}
            src="https://images.unsplash.com/photo-1561489413-985b06da5bee?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGNvcnBvcmF0ZSUyMGV2ZW50fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=900&q=60"
          />
        </div>

        <div className="lifeKylo_item lifeKylo_item-3">
          <img
            style={{ width: "100%", height: "100%" }}
            src="https://images.unsplash.com/photo-1516600164266-f3b8166ae679?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGNvcnBvcmF0ZSUyMGV2ZW50fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=900&q=60"
          />
        </div>

        <div className="lifeKylo_item lifeKylo_item-2">
          <img
            style={{ width: "100%", height: "100%", borderTopRightRadius: "0", borderBottomRightRadius: "0" }}
            src="https://images.unsplash.com/photo-1528605248644-14dd04022da1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGNvcnBvcmF0ZSUyMGV2ZW50fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=900&q=60"
          />
        </div>
      </div>
    </section>
  );
}

export default LifeAtKylo