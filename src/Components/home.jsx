import React from "react";
import "./Font.css";
import { Link } from "react-router-dom";
import {Container} from 'react-bootstrap';
import { ProductJumbo } from "./ProductJumbo";
export const home = () => (
  <Container>
    <h1 className="header-main" style={{fontSize:"4rem"}}>
      <b>
      Welcome to AST!
      </b>
    </h1>
    <p className="content" style={{fontSize:"1.5rem"}} >
      We are one of the most trusted manufacturers, suppliers, exporters & service providers of Mechanical 
      Seals of all kinds for all kinds of pumps and equipment, serving the pump industry for the past one and a half decade.
      <br/>
      <br/>
      Since our inception we have chosen to prioritise quality over quantity and this philosophy resonates with our skilled 
      team that generates more than 2 million seals to our valued customers.
      <br/>
      Take a tour through our current inventory, however the most of our orders are those for customized seals so
       if you don't find what you're looking for - get in touch!
    </p>
    <h2 className="header" style={{fontSize:"3rem"}}>
      <b>
       Why Us ?
      </b>
    </h2>
    <p className="content" style={{fontSize:"1.5rem"}} >
    Conforming to business norms and industry standards, we bring to you:  
    <ul>
    <li>
      Customization facility
    </li>
    <li>
      Cost effectiveness
    </li>
    <li>
      Variety of sizes
    </li>
    <li>  
    	Precision and endurance
    </li>
    <li>
      Timely execution of orders
    </li>
    <li>
      Excellent after sales services
    </li>  
      </ul>
     </p>
    <div >
        <Link to="/products">
          <ProductJumbo />
        </Link>
      </div>
 </ Container>

);
