import React from "react";
import { Data } from "../Components/Data.jsx";
import { Cardlist } from "../Components/Cardlist.jsx";
import { Link } from "react-router-dom";
import { ProductJumbo } from "./ProductJumbo";
export const home = () => (
  <>
    <h2 style={{ color: "#284894", fontSize: "3em", fontFamily: "Oswald" }}>
      Welcome to AST!
    </h2>
    <p style={{ color: "#2F4F4F", fontFamily: "Oswald", fontSize: "2rem" }}>
      Advance seals technology, are one of the most trusted manufacturers,
      importers , suppliers , exporters & service providers of Mechanical Seals.
    </p>
    <div>
      <br />
      <p style={{ fontSize: "2rem", color: "#2F4F4F", fontFamily: "Oswald" }}>
        We take the privilege of introducing ourselves as one of the leading
        Manufactures Mechanical Seals Faces Components from various materials.
      </p>
      <br />
      <div
        style={{
          fontSize: "1.8rem",
          color: "#2F4F4F",
          fontFamily: "Oswald ",
          fontStyle: "italic"
        }}
      >
        " Stainless Steel, Carbon , TC , Ceramic , Silicon Carbide , PTFE , CFT
        , Stellite , GFT parts used for various Industries i.e. Waste Water,
        Onshore, Offshore, Chemical & Petrochemical, Refinery, Pulp & Paper ,
        Compressor , Hot Water , Marine , Sugar , Pharmaceutical, Textiles
        Compressor , Quarrying & Coal Mining etc. as per Client Drawings and
        requirement."
      </div>
      <br />
      <h1 style={{ fontSize: "3rem", color: "#284894", fontFamily: "Oswald" }}>
        Why Us ?
      </h1>
      <div style={{ fontSize: "2rem", color: "#2F4F4F", fontFamily: "Oswald" }}>
        We have occupied a commendable position in the industry because of our
        excellent grade products. Moreover, we also have a good will across the
        globe owing to our transparent and ethical business dealings. The
        products we offer are also in tandem with industry norms and standards.
        A number of other factors can be sited for which we have become the
        preferred choice of our clients. These factors are mentioned below :
        <br />
        <br />
        <i>.Customization facility</i>
        <br />
        <br />
        <i>.Cost effectiveness</i>
        <br />
        <br style={{ fontSize: "1.2rem" }} />
        <i>
          .Mechanical seals available in a variety of sizes ranging from 8 mm to
          100 mm
        </i>
        <br />
        <br />
        <i>
          .Precision seal offered having endurance to temperatures as high as
          200°C
        </i>
        <br />
        <br style={{ fontSize: "1.2rem" }} />
        <i>.Timely execution of orders</i>
        <br />
        <br style={{ fontSize: "1.2rem" }} />
        <i>.Excellent after sales services</i>
      </div>
      <br />
      <div style={{ marginBottom: "12em" }}>
        <Link to="/products">
          <ProductJumbo />
        </Link>
      </div>
    </div>
  </>
);
