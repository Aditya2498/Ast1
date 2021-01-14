import React from "react";
import { Row, Col } from "react-bootstrap";
import { WaterSealData, ChemicalSealData, OilSealData } from "./ProductData";
import { WaterSealCard, ChemicalSealCard, OilSealCard } from "./ProductCard";

import { Data } from "../Data";

export const ProductCategory = ({ match }) => {
  const data = Data.find(d => d.id === match.params.id);
  if (data.id == 1) {
    return (
      <div class="contain">
        <h1>Water Seals</h1>

        <Row className="ml-auto ">
          {WaterSealData.map((WaterSealData, i) => (
            <Col key={WaterSealData.id} className="col-md-4">
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
  } else if (data.id == 2) {
    return (
      <div class="contain">
        <h1>Chemical Seals</h1>
        <Row className="ml-auto">
          {" "}
          {ChemicalSealData.map((ChemicalSealData, i) => {
            return (
              <Col key={ChemicalSealData.id} className="col-md-4">
                <ChemicalSealCard
                  key={i}
                  id={ChemicalSealData.id}
                  img={ChemicalSealData.img}
                  Productname={ChemicalSealData.Productname}
                  k_id={data.id}
                />
                <br />
              </Col>
            );
          })}
        </Row>
      </div>
    );
  } else if (data.id == 3) {
    return (
      <div class="contain">
        <h1>Oil Seals</h1>
        <Row className="ml-auto">
          {OilSealData.map((OilSealData, i) => {
            return (
              <Col key={OilSealData.id} className="col-md-4">
                <OilSealCard
                  key={i}
                  id={OilSealData.id}
                  img={OilSealData.img}
                  Productname={OilSealData.Productname}
                  k_id={data.id}
                />
                <br />
              </Col>
            );
          })}
        </Row>
      </div>
    );
  }
};
