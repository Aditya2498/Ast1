import React from 'react'
import {Card,Button} from 'react-bootstrap';



export const Cards = ({title,img,text}) =>(
  <div >
   <Card style={{ width: '12rem' }}>
     <Card.Img variant="top" src={img} height='180rem' width='140rem' />
      <Card.Body>
    <Card.Title style={{textAlign:'center',color:'#284894'}}>{title}</Card.Title>
    <Card.Text>{text}
    </Card.Text><div style={{textAlign:'center'}}>
    <Button >Know More!</Button>
    </div>
    </Card.Body>
</Card>
</div>

)