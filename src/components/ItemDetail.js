import React from "react";
import { useState } from "react";
import { Link } from 'react-router-dom';
import ItemCount from "./ItemCount";
import { getProducts } from "../utils/products";
import Item from "./Item";
import { Container, Row } from "reactstrap";


const ItemDetail = ({ items }) => {

    const [tipografias, setTipografias] = useState(0);
    
    return (
        <> 
        <Container>
            <Row> 
            {items.name ? (
                <div className="itemdetail_container"> 
                    <img src={items.image} alt="" className="itemdetail_image"/>
                        <div className="itemdetail_info"> 
                        <h3 class="title-name txt-violeta" className="itemdetail__title">{items.name} </h3>
                        <p className="itemdetail_desc">{items.description} </p>
                        <p className="itemdetail_price" class="txt-violeta">Precio: {items.cost} </p>
                        <ItemCount initial={1} stock={items.stock} />
                </div>
            </div>
        ) : (<h1> cargando</h1>
        )}
        </Row> 
        </Container>
        </>
    );
}


export default ItemDetail;