import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import "../Components/Footer.css";
export const Footer = () => {
  return (

    <Row className="footer" style={{ backgroundColor: "#284894", color: "white" }}>
      <Col md={12} lg={12} className="text-center" >
        <i className="fas fa-phone-square-alt" style={{ padding: "0.5rem" }}></i>
          + 91 - 22 - 29277159 <br />
        <i className="fas fa-phone-square-alt" style={{ padding: "0.5rem" }}></i>
          + 91 - 7738914409
          <br />
        <i class="fas fa-map-marker-alt" style={{ padding: "0.5rem" }}></i>
          Unit No. 6 , Patel Compound, Near Atlanta Estate, Beside Virwani Ind
          Estate,
          <br />
          Goregaon (E) Mumbai – 400 063.
          <br />
           Maharashtra , India.
          <br />
        <i class="fas fa-envelope-square" style={{ padding: "0.5rem" }}></i>
        advanceseals@yahoo.co.in
          <br />
        <i className="fab fa-facebook" style={{ padding: "0.5rem" }}></i>
        <i className="fab fa-instagram-square" style={{ padding: "0.5rem" }}></i>
        <i className="fab fa-twitter-square" style={{ padding: "0.5rem" }}></i>
      </Col>
    </Row>

  );
};
