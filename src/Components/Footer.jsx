import React from "react";
import { Row, Col, Container} from "react-bootstrap";
import "../Components/Footer.css";
export const Footer = () => {
  return (
    <Container fluid style={{paddingTop:"60px"}}>
    <Row  style={{ backgroundColor: "#284894", color: "white"}}>
      <Col style={{padding:"3rem", fontSize:"1.2rem"}} xs={12} lg={9} md={8}>
      Get in touch!
      <br/>
      We are always happy to hear from you.
      <br/>
      Help us serve you better.
      </Col>
      <Col   style={{marginTop:"0.5rem"}} >
      &emsp;&emsp; Contact Us :
          <br />
          <i class="fas fa-map-marker-alt" style={{ padding: "0.5rem" }}></i>
            &ensp; Unit No. 6 , Patel Compound, 
            <br/>
            &emsp;&emsp;&ensp;Near Atlanta Estate, 
            <br/>
            &ensp;&ensp;&ensp;&ensp;&nbsp; Beside Virwani Ind Estate,
            <br />
            &ensp;&ensp;&ensp;&ensp;&nbsp; Goregaon (E)  Mumbai – 400 063.
            <br />
            &ensp;&ensp;&ensp;&ensp;&nbsp;  Maharashtra , India.
            <br/>
          <i className="fas fa-phone-square-alt" style={{ padding: "0.5rem" }}></i>
          &nbsp;&nbsp;&nbsp;+ 91 - 22 - 29277159 <br />
          <i className="fas fa-phone-square-alt" style={{ padding: "0.5rem" }}></i>
          &nbsp;&nbsp;&nbsp;+ 91 - 7208441467
          <br/>
          <i class="fas fa-envelope-square" style={{ padding: "0.5rem" }}></i>
          &nbsp;&nbsp;&nbsp;advanceseals@yahoo.co.in
          <br />
          &emsp; &emsp; Join us on:
        <a href="https/www.google.com" alt="link">
        <i class="fab fa-linkedin" style={{ padding: "0.5rem"}}></i>
        </a>
      </Col>
    </Row>
    </Container>
  );
};
