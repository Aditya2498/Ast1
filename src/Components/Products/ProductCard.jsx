import  React from "react";
import {Card,Button} from 'react-bootstrap';

export const WaterSealCard = ({img1,Productname,handleClickShow})=>{
      return(
        <div>
          <Card style={{ width:'14rem',height:'auto' }}>
           <Card.Img variant="top" src={img1} height='180rem' width='140rem' />
           <Card.Body>
           <Card.Title style={{textAlign:'center',color:'#284894'}}>{Productname}</Card.Title>
           <Button onClick={handleClickShow}>Know More!</Button>
           </Card.Body>
         </Card>    
         </div>
    );
}
   

export const ChemicalSealCard =({img2,Productname,handleClickShow})=>
    (<div>
     <Card style={{ width: '12rem' }}>
    <Card.Img variant="top" src={img2} height='180rem' width='140rem' />
  <Card.Body>
    <Card.Title style={{textAlign:'center',color:'#284894'}}>{Productname}</Card.Title>
    <Button onClick={handleClickShow}>Know More!</Button>
   </Card.Body>
   </Card>    
   </div>);

export const OilSealCard=({img3,Productname,Content,handleClickHide,handleClickShow,show})=>
  ( <div>
    <Card style={{ width: '12rem' }}>
    <Card.Img variant="top" src={img3} height='180rem' width='140rem' />
     <Card.Body>
    <Card.Title style={{textAlign:'center',color:'#284894'}}>{Productname}</Card.Title>
   <Button onClick={handleClickHide}>Hide.</Button>  
   </Card.Body>
   </Card>    
</div>);
 



