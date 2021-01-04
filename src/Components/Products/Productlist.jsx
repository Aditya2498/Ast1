import React from 'react';
import {ProductCard,OilsealCard,ChemicalCard} from './ProductCard';
import './Product.css';
import {Row,Col} from 'react-bootstrap';

export const Productlist = ({ProductData,OilsealData,ChemicalData}) =>(
    <div>
    <h1 className='title-banner'>Water Seals</h1>
    <Row className='ml-auto '>
    { ProductData.map((ProductData,i)=>{
            return(
                <Col key={ProductData.id} className='col-md-4'>
                <ProductCard 
                 key={i}
                 id = {ProductData.id}
                 img1 = {ProductData.img1}
                 Productname = {ProductData.Productname}
                 Content = {ProductData.Content}
                />
                <p> </p>
                 </Col>
                 ) } ) 
                 }
                 </Row>
                 <h1 className='title-banner'>Chemical Seals</h1>
                 
                 <Row className='ml-auto'> { ChemicalData.map((ChemicalData,i)=>{
                     return(
                         <Col key={ChemicalData.id} className='col-md-4'>
                        <ChemicalCard
                           key={i}
                           id = {ChemicalData.id}
                          img2 = {ChemicalData.img2}
                          Productname = {ChemicalData.Productname}
                          Content = {ChemicalData.Content}
                         />
                         </Col>
                         ) } ) 
                         }
                    </Row>




 <h1 className='title-banner'>Oil Seals</h1>
                 <Row className='ml-auto'>
                   { OilsealData.map((OilsealData,i)=>{
         return(
             <Col key={OilsealData.id} className='col-md-4'>
            <OilsealCard
               key={i}
               id = {OilsealData.id}
              img3 = {OilsealData.img3}
              Productname = {OilsealData.Productname}
              Content = {OilsealData.Content}
             />
             </Col>
             ) } ) 
             }
        </Row>
        

    </div>
)