import React from "react";
import { Cards } from "./Cards.jsx";
import { Row, Col, Container } from "react-bootstrap";
export const Cardlist = ({ Data }) => (
  <div className="outer-container">
    <h1>Our Products</h1>{" "}
    {Data.map((Data, i) => {
      return (
        <Row key={Data.id} sm={8} md={6} lg={4} xl={3}>
          <Cards key={i} cdata={Data} />
        </Row>
      );
    })}
  </div>
);
