import React,{Component} from 'react';
import{Row,Col}from 'react-bootstrap';
import {WaterSealCard,ChemicalSealCard,OilSealCard} from './ProductCard';
import './Product.css';
export class ProductShow extends Component{

handleClickShow=()=>{
    
      } 
 render(){
     const {WaterSealData,OilSealData,ChemicalSealData} = this.props;
     return(
         <div className='contain'>
           <h1>Water Seals</h1>
           <Row className='ml-auto '>  
           {  WaterSealData.map((WaterSealData,i)=>(
            <Col key={WaterSealData.id} className='col-md-4'>
           <WaterSealCard 
                  key={i}
                 id = {WaterSealData.id}
                 img1 = {WaterSealData.img1}
                 Productname = {WaterSealData.Productname}
                  handleClickShow={this.handleClickShow} 
                           />
                <br/>
                </Col>
                 ))}
            </Row>
            <h1 >Chemical Seals</h1>
            <Row className='ml-auto'> { ChemicalSealData.map((ChemicalSealData,i)=>{
                     return(
                         <Col key={ChemicalSealData.id} className='col-md-4'>
                        <ChemicalSealCard
                           key={i}
                           id = {ChemicalSealData.id}
                          img2 = {ChemicalSealData.img2}
                          Productname = {ChemicalSealData.Productname}
                          handleClickShow={this.handleClickShow} 
                          />
                         <br/>
                         </Col>
                         ) } ) 
                         }
            </Row>
        <h1>Oil Seals</h1>
                 <Row className='ml-auto'>
                { OilSealData.map((OilSealData,i)=>{
         return(
             <Col key={OilSealData.id} className='col-md-4'>
            <OilSealCard
               key={i}
               id = {OilSealData.id}
              img3 = {OilSealData.img3}
              Productname = {OilSealData.Productname}
              handleClickShow={this.handleClickShow}
             />
             <br/>
             </Col>
             ) } ) 
             }
        </Row>
         </div>
          );
      }
}; 
