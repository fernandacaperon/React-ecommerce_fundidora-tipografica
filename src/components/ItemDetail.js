import React, { useContext , useState } from "react";
import { Container, Row } from "reactstrap";
import ItemCount from "./ItemCount";
import { Link } from "react-router-dom";
import { CartContext } from "./CartContext";

const ItemDetail = ({ items }) => {

    const [itemCount, setItemCount] = useState (0); 
    const test = useContext (CartContext)

    const onAdd = (qty) => {
        alert ("Seleccionaste " + qty +  " items.")
        setItemCount(qty);
        test.addToCart(items, qty);
    }
    
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
                    </div>
                    {
                        itemCount === 0 
                        ? <ItemCount stock={items.stock} initial={itemCount} onAdd={onAdd}/> 
                        : <Link to='/cart'><button className="btn-color-verde">CheckOut</button> </Link>
                    }
                    <Link to='/'><button className="btn-color-violeta">Continuar comprando</button></Link>

                </div>
        ) : (<h2 className="txt-violeta"> Cargando...</h2>
        )}
        </Row> 
        </Container>
        </>
    );
}


export default ItemDetail;