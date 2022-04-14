import React from "react";
import { Link } from 'react-router-dom';
import { Card, CardImg, CardBody, CardTitle, CardText, CardSubtitle, Button, CardGroup, Container } from "reactstrap";

export default function Item ({ id, name, cost, description, image}){
    console.log(image,"Prueba en item")
    return (
    <container> 
        <CardGroup>
            <Card Key={id}>
                <CardImg alt="Card image" src={image} top width="30%"/>
                <CardBody>
                    <CardTitle tag="h5" class="title-card">{name}</CardTitle>
                    <CardSubtitle className="mb-2 text-muted" tag="h6" class="txt-violeta"> {cost} </CardSubtitle>
                    <CardText>{description} </CardText>
                    <Button class="btn-color-verde" > Comprar</Button>
                 </CardBody>
            </Card>  
        </CardGroup>
    </container>
    )
}