import React from "react";
import "./ProductDisplay.css";
// import Image from "../../1.jpg";
import { WaterSealData, ChemicalSealData, OilSealData } from "./ProductData";
import {
  Row,
  Col,
  Image,
  ListGroup,
  ListGroupItem,
  Card
} from "react-bootstrap";

export const ProductDisplay = ({ match }) => {
  const key_id = match.params.k_id;
  if (key_id === "1") {
    const data = WaterSealData.find(d => d.id === match.params.id);
    return (
      <div
        className="row  "
        style={{
          backgroundColor: "rgb(72, 105, 155)",

          borderRadius: "1.5rem"
        }}
        height="auto"
      >
        <Image src={data.img} alt="image " width="300rem" fluid />

        <ListGroup variant="flush">
          <ListGroupItem
            style={{
              backgroundColor: "gray",
              color: "white"
            }}
          >
            <strong> Title: {data.Productname} </strong>
          </ListGroupItem>
          <ListGroupItem
            style={{
              backgroundColor: "gray",
              color: "white"
            }}
          >
            <strong>Application: {data.Content.Application}</strong>
          </ListGroupItem>
          <ListGroupItem
            style={{
              backgroundColor: "gray",
              color: "white"
            }}
          >
            <strong>Features: {data.Content.Features}</strong>
          </ListGroupItem>
          <ListGroupItem
            style={{
              backgroundColor: "gray",
              color: "white"
            }}
          >
            <strong>
              Operating Conditions: {data.Content.OperatingConditions}
            </strong>
          </ListGroupItem>
          <ListGroupItem
            style={{
              backgroundColor: "gray",
              color: "white"
            }}
          >
            <strong>Pressure:{data.Content.Pressure}</strong>
          </ListGroupItem>
          <ListGroupItem
            style={{
              backgroundColor: "gray",
              color: "white"
            }}
          >
            <strong> AvailableSize:{data.Content.AvailableSize}</strong>
          </ListGroupItem>
        </ListGroup>
      </div>
    );
  } else if (key_id === "2") {
    const data = ChemicalSealData.find(d => d.id === match.params.id);
    return (
      <div className="center">
        <img src={data.img} alt="image" className="center" />
        <div className="box">
          <div className="content">
            <p>
              <b>Title:{data.Productname}</b>
            </p>
            <p>
              <b>Application:</b> {data.Content.Application}
            </p>
            <p>
              <b>Features:</b> {data.Content.Features}
            </p>
            <p>
              <b>Operating Conditions:</b> {data.Content.OperatingConditions}
            </p>
            <p>
              <b>Pressure:</b> {data.Content.Pressure}
            </p>
            <p>
              <b>AvailableSize:</b> {data.Content.AvailableSize}
            </p>
          </div>
        </div>
      </div>
    );
  } else if (key_id === "3") {
    const data = OilSealData.find(d => d.id === match.params.id);
    return (
      <div className="center">
        <img src={data.img} alt="image" className="center" />
        <div className="box">
          <div className="content">
            <p>
              <b>Title:{data.Productname}</b>
            </p>
            <p>
              <b>Application:</b> {data.Content.Application}
            </p>
            <p>
              <b>Features:</b> {data.Content.Features}
            </p>
            <p>
              <b>Operating Conditions:</b> {data.Content.OperatingConditions}
            </p>
            <p>
              <b>Pressure:</b> {data.Content.Pressure}
            </p>
            <p>
              <b>AvailableSize:</b> {data.Content.AvailableSize}
            </p>
          </div>
        </div>
      </div>
    );
  }
};
