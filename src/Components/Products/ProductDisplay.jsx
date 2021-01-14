import React from "react";
import "./ProductDisplay.css";
import Image from "../../1.jpg";
import { WaterSealData, ChemicalSealData, OilSealData } from "./ProductData";

export const ProductDisplay = ({ match }) => {
  const key_id = match.params.k_id;
  if (key_id == 1) {
    const data = WaterSealData.find(d => d.id === match.params.id);
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
  } else if (key_id == 2) {
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
  } else if (key_id == 3) {
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
