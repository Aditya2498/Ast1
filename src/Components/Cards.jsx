import React from "react";
import { Card, Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

export const Cards = ({ cdata }) => (
  <Card style={{ color: "#284894", fontSize: "3em", fontFamily: "Oswald" }}>
    <Card.Img variant="top" src={cdata.img} height="300rem" />
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
      <Card.Text style={{ textAlign: "center", color: "#284894" }} as="div">
        {cdata.text}
      </Card.Text>

      <Card.Text style={{ textAlign: "center" }}>
        <Link to={`products/${cdata.id}`}>
          <Button>Explore!</Button>
        </Link>
      </Card.Text>
    </Card.Body>
  </Card>
);
