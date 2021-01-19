import React from "react";
import { Row, Col } from "react-bootstrap";
import "../Components/Footer.css";
export const Footer = () => {
  return (
    <Row className="foot-style" sm={8} md={6} lg={4} xl={3}>
      <Col className="text-center py-3 ">
        Contact us <i className="fas fa-phone-square-alt"></i>: <br />
        Unit No. 6 , Patel Compound, Near Atlanta Estate, Beside Virwani Ind
        Estate,
        <br /> Goregaon (E) Mumbai – 400 063.
        <br /> Maharashtra , India.
        <br />
        Tel: + 91 - 22 - 29277159 <br />
        Mob No: +91 - 7738914409 <br />
        Email Id: advanceseals@yahoo.co.in
      </Col>
      <Col className="text-center py-3 ">
        Connect us:
        <br />
        <i className="fab fa-facebook"></i>
        <i className="fab fa-instagram-square"></i>
        <i className="fab fa-twitter-square"></i>
      </Col>
    </Row>
  );
};
