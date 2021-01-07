import React,{Component} from 'react';
import{Row,Col}from 'react-bootstrap';
import {WaterSealCard,ChemicalSealCard,OilSealCard} from './ProductCard';
import './Product.css';
export class ProductShow extends Component{
  constructor(){
     super();
    this.state={
        show:false
    }
     
}
handleClickShow=()=>{
    this.setState({show:true});
      }
handleClickHide=()=>{
          this.setState({show:false})
      }
 
 render(){
     const {WaterSealData,OilSealData,ChemicalSealData} = this.props;
     return(
         <div>
           <h1 className='title-banner'>Water Seals</h1>
           <Row className='ml-auto '>  
           {  WaterSealData.map((WaterSealData,i)=>(
            <Col key={WaterSealData.id} className='col-md-4'>
           <WaterSealCard 
                  key={i}
                 id = {WaterSealData.id}
                 img1 = {WaterSealData.img1}
                 Productname = {WaterSealData.Productname}
                 Content = {WaterSealData.Content}
                 show={this.state.show} 
                  handleClickShow={this.handleClickShow} 
                  handleClickHide={this.handleClickHide}
                           />
                <br/>
                </Col>
                 ))}
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
                          show={this.state.show} 
                          handleClickShow={this.handleClickShow} 
                          handleClickHide={this.handleClickHide}
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
              show={this.state.show} 
              handleClickShow={this.handleClickShow} 
              handleClickHide={this.handleClickHide}
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
