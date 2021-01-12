import React from 'react'
import {Card,Button} from 'react-bootstrap';



export const Cards = ({title,img,text}) =>(
  <div >
   <Card style={{ width: '15rem' }}>
     <Card.Img variant="top" src={img} height='200rem' width='80rem' />
      <Card.Body style={{borderRadius:'0.5rem',boxSizing:'border-box',backgroundColor:'#c0c0c0'}}>
    <Card.Title style={{textAlign:'center',color:'#284894'}}>{title}</Card.Title>
    <Card.Text>{text}
    </Card.Text><div style={{textAlign:'center'}}>
    <Button >Know More!</Button>
    </div>
    </Card.Body>
</Card>
</div>

)