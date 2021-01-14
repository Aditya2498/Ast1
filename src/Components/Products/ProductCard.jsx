import React from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export const WaterSealCard = ({ img, Productname, id, k_id }) => {
  return (
    <div>
      <Card style={{ width: "14rem", height: "auto" }}>
        <Card.Img variant="top" src={img} height="180rem" width="140rem" />
        <Card.Body
          style={{
            borderRadius: "0.5rem",
            boxSizing: "border-box",
            backgroundColor: "#c0c0c0"
          }}
        >
          <Card.Title style={{ textAlign: "center", color: "#284894" }}>
            {Productname}
          </Card.Title>
          <Link to={`/${k_id}/${id}`}>
            <Button>Know More!</Button>
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export const ChemicalSealCard = ({ img, Productname, id, k_id }) => (
  <div>
    <Card style={{ width: "12rem" }}>
      <Card.Img variant="top" src={img} height="180rem" width="140rem" />
      <Card.Body
        style={{
          borderRadius: "0.5rem",
          boxSizing: "border-box",
          backgroundColor: "#c0c0c0"
        }}
      >
        <Card.Title style={{ textAlign: "center", color: "#284894" }}>
          {Productname}
        </Card.Title>
        <Link to={`/${k_id}/${id}`}>
          <Button>Know More!</Button>
        </Link>
      </Card.Body>
    </Card>
  </div>
);

export const OilSealCard = ({ img, Productname, id, k_id }) => (
  <div>
    <Card style={{ width: "12rem" }}>
      <Card.Img variant="top" src={img} height="180rem" width="140rem" />
      <Card.Body
        style={{
          borderRadius: "0.5rem",
          boxSizing: "border-box",
          backgroundColor: "#c0c0c0"
        }}
      >
        <Card.Title style={{ textAlign: "center", color: "#284894" }}>
          {Productname}
        </Card.Title>
        <Link to={`/${k_id}/${id}`}>
          <Button>Know More!</Button>
        </Link>
      </Card.Body>
    </Card>
  </div>
);
