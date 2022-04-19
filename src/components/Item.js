import React from "react";
import { Link } from 'react-router-dom';
import { Card, CardImg, CardBody, CardTitle, CardText, CardSubtitle, Button, CardGroup } from "reactstrap";

export default function Item ({ id, name, cost, description, image}){
    console.log(image,"Prueba en item")
    return (
        <CardGroup >
            <Card key={id}>
                <CardImg alt="Card image" src={image} top width="30%"/>
                <CardBody>
                    <CardTitle tag="h5" className="title-card">{name}</CardTitle>
                    <CardSubtitle className="mb-2 text-muted txt-violeta" tag="h6"> {cost} </CardSubtitle>
                    <CardText>{description} </CardText>
                    <Link to={`/item/${id}`}><Button className="btn-color-verde" > Comprar</Button> </Link>
                </CardBody>
            </Card>  
        </CardGroup>            
    )
}