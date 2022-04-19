import React from "react";
import { Container, Row } from "reactstrap";
import ItemCount from "./ItemCount";


const ItemDetail = ({ items }) => {
    
    return (
        <> 
        <Container>
            <Row> 
            {items.name ? (
                <div className="itemdetail_container"> 
                    <img src={items.image} alt="" className="itemdetail_image"/>
                        <div className="itemdetail_info"> 
                        <h3 className="title-name txt-violeta itemdetail__title">{items.name} </h3>
                        <p className="itemdetail_desc">{items.description} </p>
                        <p className="itemdetail_price txt-violeta">Precio: {items.cost} </p>
                        <ItemCount initial={1} stock={items.stock} />
                </div>
            </div>
        ) : (<h2 className="txt-violeta"> Cargando...</h2>
        )}
        </Row> 
        </Container>
        </>
    );
}


export default ItemDetail;