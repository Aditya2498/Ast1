import React from "react";
import { Cards } from "./Cards.jsx";
import {Container} from 'react-bootstrap';
import "./Font.css";
import { Row, Col } from "react-bootstrap";
export const Cardlist = ({ Data }) => (
  <Container>
    <h1
     className="header-main"
     style={{fontSize:"4rem"}}
    >
      {" "}
      <b>OUR PRODUCTS</b>
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
  </Container>
);
