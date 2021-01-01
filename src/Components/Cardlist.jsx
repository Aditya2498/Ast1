import React from 'react';
import {Cards} from './Cards.jsx';
import {Row, Col} from "react-bootstrap"
export const Cardlist = ({Data})=>(
    <div >
    <Row>
        { Data.map((Data,i)=>{
                return(
                    <Col key={Data.id}>
                    <Cards 
                     key={i}
                     id = {Data.id}
                     title = {Data.title}
                     img = {Data.img}
                     text = {Data.text}/>
                     </Col>
                     ) } ) 
                     }
                     </Row>
    </div>
)