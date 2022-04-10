import React from "react";
import Item from './Item'
import { Container, Row } from "reactstrap";

export default function ItemList ({objetos}) {
    console.log (objetos)
    return (
        <>
           <Container>
               <Row>
                  { objetos.map ((object) => 
                  <Item key={object.id} {...object} />)}
               </Row>
           </Container>
        </>
    )
}

