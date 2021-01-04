import { React,Component } from "react";
import {Card,Button} from 'react-bootstrap';

export class ProductCard extends Component{
    constructor(){
        super();
        this.state={show:false}}
    handleclickmore=()=>{
        this.setState({
            show:true
        })
    }
    handleclickless=()=>{
      this.setState({
         show:false
      })
   }
  render(){
     const{img1,Productname,Content}= this.props;
    return(<div>
        <Card style={{ width:'10rem' }}>
        <Card.Img variant="top" src={img1} height='160rem' width='140rem' />
         <Card.Body>
       <Card.Title style={{textAlign:'center',color:'#284894'}}>{Productname}</Card.Title>
       {this.state.show?
        <Card.Text>{Content}
        </Card.Text>:null}
        { !this.state.show ?
    <Button onClick={this.handleclickmore}>Know More!</Button>:
    <Button onClick={this.handleclickless}>Hide.</Button>}
    </Card.Body>
   </Card>    
    </div>);
     
}}

export class OilsealCard extends Component{
    constructor(){
        super();
        this.state={show:false}}
    handleclickmore=()=>{
        this.setState({
            show:true
        })
    }
    handleclickless=()=>{
      this.setState({
         show:false
      })
   }
render(){
   const{img3,Productname,Content}= this.props;
    return(<div>
        <Card style={{ width: '10rem' }}>
        <Card.Img variant="top" src={img3} height='160rem' width='140rem' />
         <Card.Body>
       <Card.Title style={{textAlign:'center',color:'#284894'}}>{Productname}</Card.Title>
       {this.state.show?
        <Card.Text>{Content}
        </Card.Text>:null}
        { !this.state.show ?
    <Button onClick={this.handleclickmore}>Know More!</Button>:
    <Button onClick={this.handleclickless}>Hide.</Button>}   
    </Card.Body>
   </Card>    
    </div>);
     
}}

export class ChemicalCard extends Component{
    constructor(){
        super();
        this.state={show:false}}
    handleclickmore=()=>{
        this.setState({
            show:true
        })
    }
    handleclickless=()=>{
       this.setState({
          show:false
       })
    }
render(){
   const{img2,Productname,Content}= this.props;
    return(<div>
        <Card style={{ width: '10rem' }}>
        <Card.Img variant="top" src={img2} height='160rem' width='140rem' />
         <Card.Body>
       <Card.Title style={{textAlign:'center',color:'#284894'}}>{Productname}</Card.Title>
       {this.state.show?
        <Card.Text>{Content}
        </Card.Text>:null}
        { !this.state.show ?
    <Button onClick={this.handleclickmore}>Know More!</Button>:
    <Button onClick={this.handleclickless}>Hide.</Button>}
    </Card.Body>
   </Card>    
    </div>);
     
}}
