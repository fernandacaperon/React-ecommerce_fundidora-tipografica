import React from "react";
import { Card, CardImg, CardBody, CardTitle, CardText, CardSubtitle, Button } from "reactstrap";

export default function Item ({ id, name, cost, description, image}){
    console.log(image,"Prueba en item")
    return (
    <div> 
        <Card Key={id}>
            <CardImg
                alt="Card image cap"
                src={image.url}
                top
                width="30%"
            />
            <CardBody>
                <CardTitle tag="h5">{name}</CardTitle>
                <CardText>{cost} </CardText>
            </CardBody>
        </Card>
    </div>)
}