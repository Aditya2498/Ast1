import React from 'react';
import './Font.css';
import {Container} from 'react-bootstrap';



export const contact = () =>(
    <div>
     <Container>
     <h2 className="header-main" style={{fontSize:"3rem"}} >Contact Us  <i className="fas fa-phone-square-alt"></i></h2>
     <div className="content" style={{fontSize:"1.5rem"}}> <b>
     A. H. Mansuri (Proprietor)
         </b></div>
     <p className="content" style={{fontSize:"1.5rem"}}>
     Unit No. 6 , Patel Compound,                      
     Near Atlanta Estate,                              
     Beside Virwani  Ind Estate,                   
     Goregaon (E) Mumbai – 400 063.                 
     Maharashtra , India. 
     <br/>
     Tel:  + 91 - 22 - 29277159
     Mob No: +91 - 7738914409
     <br/>  
     Email Id:   advanceseals@yahoo.co.in  
   </p>
     </Container>
    </div>
)