import React from "react";
import { Cards } from "./Cards.jsx";
import { Row, Col, Container } from "react-bootstrap";
export const Cardlist = ({ Data }) => (
  <>
    <h1
      style={{
        color: "#284894",
        fontSize: "3em",
        fontFamily: "Oswald",
        textAlign: "center"
      }}
    >
      {" "}
      OUR PRODUCTS
    </h1>
    <Row>
      {Data.map(data => {
        return (
          <Col key={data.id} sm={12} md={6} lg={5} xl={4}>
            {" "}
            <Cards key={data.id} cdata={data} />
          </Col>
        );
      })}
    </Row>
  </>
);
