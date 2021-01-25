import React from 'react';
import { Container } from 'react-bootstrap';
import './about.css';

export const about = () =>(
    <Container>
     <h1 style={{ color: "#284894", fontSize: "4em", fontFamily: 'Source Sans Pro' }}>
      <b>
        ABOUT US
      </b>
      </h1>
      <p style={{ color: "#2F4F4F", fontFamily:'Source Sans Pro', fontSize: "1.5rem" }}>
        Since its inception in 2005, Advance Seals Technology has thrived and evolved under the leadership of our founder Mr. Mansuri. 
        Today with a tight knit staff that’s more family than employees, we continue to bring value,
         authenticity and strength to the table. 
         <br/>
         <br/>
        Our sourcing is done the old fashioned way with an emphasis of quality over quantity. 
        <br/>
         The material of construction of our Seal Faces include ceramic, carbon, silicon carbide, tungsten carbide, GFT and stellite. 
        Our Elastomer's construction material consists of Neoprene, Buna-N, Viton, Viton Extreme, Silicon or as per the requirement of service conditions.
         <br/>
         <br/>
        Furthermore, the material of construction of Body includes:
        M.S. Galvanized, S.S. 202, S.S. 304, S.S 316, Brass and others. Construction material of Springs is Alloy Steel, S.S. 
        304 and S.S. 316.
        <br/>
        </p>
       
        <h1 style={{ color: "#284894", fontSize: "3em", fontFamily: 'Source Sans Pro' }}>
        Quality Assurance
        </h1> 
        <p  style={{ color: "#2F4F4F", fontFamily:'Source Sans Pro', fontSize: "1.5rem" }}> 
            <ul>
                <li>Durability</li>
                <li>Dimensional accuracy</li>
                <li>Precise-engineering</li>
                <li>Corrosion & abrasion resistance</li>
            </ul>  
        </p>
    </Container>
)