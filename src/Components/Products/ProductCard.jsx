import React from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export const WaterSealCard = ({ img, Productname, id, k_id }) => {
  return (
    <Card style={{ backgroundColor: "#c0c0c0", textAlign: "center" }}>
      <Card.Img variant="top" src={img} height="200rem" width="140rem" />
      <Card.Body
        style={{
          borderRadius: "0.5rem",
          boxSizing: "border-box",

          height: "10rem"
        }}
      >
        <Card.Title style={{ textAlign: "center", color: "#284894" }}>
          {Productname}
        </Card.Title>
      </Card.Body>
      <Link to={`/${k_id}/${id}`}>
        <Button>Know More!</Button>
      </Link>
    </Card>
  );
};

export const ChemicalSealCard = ({ img, Productname, id, k_id }) => {
  return (
    <Card style={{ backgroundColor: "#c0c0c0", textAlign: "center" }}>
      <Card.Img variant="top" src={img} height="200rem" width="140rem" />
      <Card.Body
        style={{
          borderRadius: "0.5rem",
          boxSizing: "border-box",

          height: "10rem"
        }}
      >
        <Card.Title style={{ textAlign: "center", color: "#284894" }}>
          {Productname}
        </Card.Title>
      </Card.Body>
      <Link to={`/${k_id}/${id}`}>
        <Button>Know More!</Button>
      </Link>
    </Card>
  );
};

export const OilSealCard = ({ img, Productname, id, k_id }) => {
  return (
    <Card style={{ backgroundColor: "#c0c0c0", textAlign: "center" }}>
      <Card.Img variant="top" src={img} height="200rem" width="140rem" />
      <Card.Body
        style={{
          borderRadius: "0.5rem",
          boxSizing: "border-box",

          height: "10rem"
        }}
      >
        <Card.Title style={{ textAlign: "center", color: "#284894" }}>
          {Productname}
        </Card.Title>
      </Card.Body>
      <Link to={`/${k_id}/${id}`}>
        <Button>Know More!</Button>
      </Link>
    </Card>
  );
};
