import React from "react";
import "./ProductDisplay.css";
import Image from "../../1.jpg";

export const ProductDisplay = () => (
  <div className="center">
    <img src={Image} alt="imsge" className="center" />
    <div className="box">
      <div className="content">
        <p>
          <b>Title:</b>
        </p>
        <p>
          <b>Application:</b> Water, Sewage, Oil Pump, Generators, Muddy Water.
        </p>
        <p>
          <b>Features:</b> Internal mounting, Single acting,Independent of
          direction of rotation.
        </p>
        <p>
          <b>Operating Conditions:</b> temperature upto 200 °C
        </p>
        <p>
          <b>Pressure:</b> Upto 10 Bars
        </p>
        <p>
          <b>AvailableSize:</b> 10 mm to 60 mm
        </p>
      </div>
    </div>
  </div>
);
