import React from 'react';
import {WaterSealCard,OilSealCard,ChemicalSealCard} from './ProductCard';
import './Product.css';
import {Row,Col} from 'react-bootstrap';

export const Productlist = ({WaterSealData,OilSealData,ChemicalSealData}) =>(
    <div>
    <h1 className='title-banner'>Water Seals</h1>
    <Row className='ml-auto '>
    { WaterSealData.map((WaterSealData,i)=>{
            return(
                <Col key={WaterSealData.id} className='col-md-4'>
                <WaterSealCard 
                 key={i}
                 id = {WaterSealData.id}
                 img1 = {WaterSealData.img1}
                 Productname = {WaterSealData.Productname}
                 Content = {WaterSealData.Content}
                />
                <br/>
                 </Col>
                 ) } ) 
                 }
                 </Row>
                 <h1 className='title-banner'>Chemical Seals</h1>
                 
                 <Row className='ml-auto'> { ChemicalSealData.map((ChemicalSealData,i)=>{
                     return(
                         <Col key={ChemicalSealData.id} className='col-md-4'>
                        <ChemicalSealCard
                           key={i}
                           id = {ChemicalSealData.id}
                          img2 = {ChemicalSealData.img2}
                          Productname = {ChemicalSealData.Productname}
                          Content = {ChemicalSealData.Content}
                         />
                         <br/>
                         </Col>
                         ) } ) 
                         }
                   
            </Row>
    <h1 className='title-banner'>Oil Seals</h1>
                 <Row className='ml-auto'>
                { OilSealData.map((OilSealData,i)=>{
         return(
             <Col key={OilSealData.id} className='col-md-4'>
            <OilSealCard
               key={i}
               id = {OilSealData.id}
              img3 = {OilSealData.img3}
              Productname = {OilSealData.Productname}
              Content = {OilSealData.Content}
             />
             <br/>
             </Col>
             ) } ) 
             }
        </Row>
    
 </div>
)