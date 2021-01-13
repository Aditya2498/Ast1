import React from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export const Cards = ({ cdata }) => (
  <div>
    <Card style={{ width: "15rem" }}>
      <Card.Img variant="top" src={cdata.img} height="200rem" width="80rem" />
      <Card.Body
        style={{
          borderRadius: "0.5rem",
          boxSizing: "border-box",
          backgroundColor: "#c0c0c0"
        }}
      >
        <Card.Title style={{ textAlign: "center", color: "#284894" }}>
          {cdata.title}
        </Card.Title>
        <Card.Text>{cdata.text}</Card.Text>
        <div style={{ textAlign: "center" }}>
          <Link to={`products/${cdata.id}`}>
            <Button>Explore!</Button>
          </Link>
        </div>
      </Card.Body>
    </Card>
  </div>
);
