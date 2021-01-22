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
  Card,
  Container,
  Button
} from "react-bootstrap";
import { Link } from "react-router-dom";

export const ProductDisplay = ({ match }) => {
  const key_id = match.params.k_id;
  if (key_id === "1") {
    const data = WaterSealData.find(d => d.id === match.params.id);
    return (
      <Container >
        <Row  className="justify-content-md-center">
          <Link to={`/products/${key_id}`}>
            <Button>back</Button>
          </Link>{" "}
          <Col sm={12} md={5} lg={4} >
            <Card>
              <img className="single-image" src={data.img} alt="image" />
            </Card>
            <ListGroup variant="flush">
              <ListGroupItem
                style={{
                  backgroundColor: "rgb(72, 105, 155)",
                  color: "white"
                }}
              >
                <strong> Title: {data.Productname} </strong>
              </ListGroupItem>
              <ListGroupItem
                style={{
                  backgroundColor: "rgb(72, 105, 155)",
                  color: "white"
                }}
              >
                <strong>Application: {data.Content.Application}</strong>
              </ListGroupItem>
              <ListGroupItem
                style={{
                  backgroundColor: "rgb(72, 105, 155)",
                  color: "white"
                }}
              >
                <strong>Features: {data.Content.Features}</strong>
              </ListGroupItem>
              <ListGroupItem
                style={{
                  backgroundColor: "rgb(72, 105, 155)",
                  color: "white"
                }}
              >
                <strong>
                  Operating Conditions: {data.Content.OperatingConditions}
                </strong>
              </ListGroupItem>
              <ListGroupItem
                style={{
                  backgroundColor: "rgb(72, 105, 155)",
                  color: "white"
                }}
              >
                <strong>Pressure:{data.Content.Pressure}</strong>
              </ListGroupItem>
              <ListGroupItem
                style={{
                  backgroundColor: "rgb(72, 105, 155)",
                  color: "white"
                }}
              >
                <strong> AvailableSize:{data.Content.AvailableSize}</strong>
              </ListGroupItem>
            </ListGroup>
           </Col>
        </Row>
      </Container>
    );
  } else if (key_id === "2") {
    const data = ChemicalSealData.find(d => d.id === match.params.id);
    return (
      <Container className="justify-content-md-center">
        <Row style={{ backgroundColor: "rgb(72, 105, 155)", padding: "2rem" }}>
          <Link to={`/products/${key_id}`}>
            <Button>back</Button>
          </Link>{" "}
          <Col sm={12} md={5} lg={4}>
            <Card>
              <img className="single-image" src={data.img} alt="image" />
            </Card>
          </Col>
          <Col sm={12} md={7} lg={6}>
            <ListGroup variant="flush">
              <ListGroupItem
                style={{
                  backgroundColor: "rgb(72, 105, 155)",
                  color: "white"
                }}
              >
                <strong> Title: {data.Productname} </strong>
              </ListGroupItem>
              <ListGroupItem
                style={{
                  backgroundColor: "rgb(72, 105, 155)",
                  color: "white"
                }}
              >
                <strong>Application: {data.Content.Application}</strong>
              </ListGroupItem>
              <ListGroupItem
                style={{
                  backgroundColor: "rgb(72, 105, 155)",
                  color: "white"
                }}
              >
                <strong>Features: {data.Content.Features}</strong>
              </ListGroupItem>
              <ListGroupItem
                style={{
                  backgroundColor: "rgb(72, 105, 155)",
                  color: "white"
                }}
              >
                <strong>
                  Operating Conditions: {data.Content.OperatingConditions}
                </strong>
              </ListGroupItem>
              <ListGroupItem
                style={{
                  backgroundColor: "rgb(72, 105, 155)",
                  color: "white"
                }}
              >
                <strong>Pressure:{data.Content.Pressure}</strong>
              </ListGroupItem>
              <ListGroupItem
                style={{
                  backgroundColor: "rgb(72, 105, 155)",
                  color: "white"
                }}
              >
                <strong> AvailableSize:{data.Content.AvailableSize}</strong>
              </ListGroupItem>
            </ListGroup>
          </Col>
        </Row>
      </Container>
    );
  } else if (key_id === "3") {
    const data = OilSealData.find(d => d.id === match.params.id);
    return (
      <Container className="justify-content-md-center">
        <Link to={`/products/${key_id}`}>
          <Button>back</Button>
        </Link>{" "}
        <Row style={{ backgroundColor: "rgb(72, 105, 155)", padding: "2rem" }}>
          <Col sm={12} md={5} lg={4}>
            <Card>
              <img className="single-image" src={data.img} alt="image" />
            </Card>
          </Col>
          <Col sm={12} md={7} lg={6}>
            <ListGroup variant="flush">
              <ListGroupItem
                style={{
                  backgroundColor: "rgb(72, 105, 155)",
                  color: "white"
                }}
              >
                <strong> Title: {data.Productname} </strong>
              </ListGroupItem>
              <ListGroupItem
                style={{
                  backgroundColor: "rgb(72, 105, 155)",
                  color: "white"
                }}
              >
                <strong>Application: {data.Content.Application}</strong>
              </ListGroupItem>
              <ListGroupItem
                style={{
                  backgroundColor: "rgb(72, 105, 155)",
                  color: "white"
                }}
              >
                <strong>Features: {data.Content.Features}</strong>
              </ListGroupItem>
              <ListGroupItem
                style={{
                  backgroundColor: "rgb(72, 105, 155)",
                  color: "white"
                }}
              >
                <strong>
                  Operating Conditions: {data.Content.OperatingConditions}
                </strong>
              </ListGroupItem>
              <ListGroupItem
                style={{
                  backgroundColor: "rgb(72, 105, 155)",
                  color: "white"
                }}
              >
                <strong>Pressure:{data.Content.Pressure}</strong>
              </ListGroupItem>
              <ListGroupItem
                style={{
                  backgroundColor: "rgb(72, 105, 155)",
                  color: "white"
                }}
              >
                <strong> AvailableSize:{data.Content.AvailableSize}</strong>
              </ListGroupItem>
            </ListGroup>
          </Col>
        </Row>
      </Container>
    );
  }
};
