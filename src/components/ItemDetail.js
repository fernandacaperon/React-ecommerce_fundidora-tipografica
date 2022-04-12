import React from "react";
import Item from "./Item";
import { Container, Row } from "reactstrap";

export default function ItemDetail ({detail}){
    console.log (detail)
    return (
        <>
            <Container>
                <Row>
                    {detail.map((item) => <Item key={item.id}{...item}/>)}
                </Row>
            </Container>
        </>
    )
}