import { React} from "react";
import {Card,Button} from 'react-bootstrap';

export const WaterSealCard = ({show,handleClickShow,handleClickHide})=>{
    const{img1,Productname,Content}=this.props;   
    (
    <div>
      <Card style={{ width:'12rem' }}>
       <Card.Img variant="top" src={img1} height='180rem' width='140rem' />
       <Card.Body>
       <Card.Title style={{textAlign:'center',color:'#284894'}}>{Productname}</Card.Title>
       {show?
       <Card.Text>{Content}
       </Card.Text>:null}
       { !show ?
       <Button onClick={handleclickShow}>Know More!</Button>:
       <Button onClick={handleclickHide}>Hide.</Button>}
       </Card.Body>
     </Card>    
     </div>
)} 

export const ChemicalSealCard =({show,handleClickShow,handleClickHide})=>{
    const{img2,Productname,Content}= this.props;

    (<div>
     <Card style={{ width: '12rem' }}>
    <Card.Img variant="top" src={img2} height='180rem' width='140rem' />
  <Card.Body>
    <Card.Title style={{textAlign:'center',color:'#284894'}}>{Productname}</Card.Title>
    {this.state.show?
    <Card.Text>{Content}
    </Card.Text>:null}
    { !this.state.show ?
    <Button onClick={this.handleclickShow}>Know More!</Button>:
    <Button onClick={this.handleclickHide}>Hide.</Button>}
   </Card.Body>
   </Card>    
   </div>);}

export const OilSealCard=({img3,Productname,Content,show,handleclickShow,handleclickHide})=>
  {
  ( <div>
    <Card style={{ width: '12rem' }}>
    <Card.Img variant="top" src={img3} height='180rem' width='140rem' />
     <Card.Body>
    <Card.Title style={{textAlign:'center',color:'#284894'}}>{Productname}</Card.Title>
    {show?
    <Card.Text>{Content}
    </Card.Text>:null}
    { !show ?
   <Button onClick={this.handleclickShow}>Know More!</Button>:
   <Button onClick={this.handleclickHide}>Hide.</Button>}   
   </Card.Body>
   </Card>    
</div>);
 }



