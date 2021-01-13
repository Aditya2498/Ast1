import React from "react";
import { ProductShow } from "./ProductShow";
import {
  OilSealData,
  WaterSealData,
  ChemicalSealData
} from "./ProductData.jsx";
import { Data } from "../Data";
import { Cardlist } from "../Cardlist";
import { Card, Button, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

export const Products = () => {
  return <Cardlist Data={Data} />;
};
