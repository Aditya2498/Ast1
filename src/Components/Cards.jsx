import React from "react";
import { Card, Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

export const Cards = ({ cdata }) => (
  <Card>
    <Card.Img variant="top" src={cdata.img} />
    <Card.Body
    // style={{
    //   borderRadius: "0.5rem",
    //   boxSizing: "border-box",
    //   backgroundColor: "#c0c0c0"
    // }}
    >
      {/* <Card.Title style={{ textAlign: "center", color: "#284894" }}> */}
      <Card.Title>{cdata.title}</Card.Title>
      <Card.Text as="div">{cdata.text}</Card.Text>
      {/* <div style={{ textAlign: "center" }}> */}
      <Card.Text>
        <Link to={`products/${cdata.id}`}>
          <Button>Explore!</Button>
        </Link>
      </Card.Text>
      {/* </div> */}
    </Card.Body>
  </Card>
);
