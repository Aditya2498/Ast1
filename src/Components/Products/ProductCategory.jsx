import React from "react";
import { Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { WaterSealData, ChemicalSealData, OilSealData } from "./ProductData";
import { WaterSealCard, ChemicalSealCard, OilSealCard } from "./ProductCard";

import { Data } from "../Data";

export const ProductCategory = ({ match }) => {
  const data = Data.find(d => d.id === match.params.id);
  if (data.id === "1") {
    return (
      <div className="contain">
        <Link to="/products">
          <Button>Back</Button>
        </Link>
        <h1>Water Seals</h1>

        <Row>
          {WaterSealData.map((WaterSealData, i) => (
            <Col key={WaterSealData.id} sm={12} md={6} lg={4} xl={3}>
              <WaterSealCard
                key={i}
                id={WaterSealData.id}
                img={WaterSealData.img}
                Productname={WaterSealData.Productname}
                k_id={data.id}
              />
              <br />
            </Col>
          ))}
        </Row>
      </div>
    );
  } else if (data.id === "2") {
    return (
      <div class="contain">
        <Link to="/products">
          <Button>Back</Button>
        </Link>
        <h1>Chemical Seals</h1>
        <Row>
          {ChemicalSealData.map((ChemicalSealData, i) => (
            <Col key={ChemicalSealData.id} sm={12} md={6} lg={4} xl={3}>
              <ChemicalSealCard
                key={i}
                id={ChemicalSealData.id}
                img={ChemicalSealData.img}
                Productname={ChemicalSealData.Productname}
                k_id={data.id}
              />
              <br />
            </Col>
          ))}
        </Row>
      </div>
    );
  } else if (data.id === "3") {
    return (
      <div class="contain">
        <Link to="/products">
          <Button>Back</Button>
        </Link>
        <h1>Oil Seals</h1>
        <Row>
          {OilSealData.map((OilSealData, i) => (
            <Col key={OilSealData.id} sm={12} md={6} lg={4} xl={3}>
              <OilSealCard
                key={i}
                id={OilSealData.id}
                img={OilSealData.img}
                Productname={OilSealData.Productname}
                k_id={data.id}
              />
              <br />
            </Col>
          ))}
        </Row>
      </div>
    );
  }
};
