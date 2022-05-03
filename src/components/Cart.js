import { useContext } from "react";
import { CartContext } from "./CartContext";
import { Card, CardBody, CardTitle, CardSubtitle } from "reactstrap";
// import { CardText, Button, CardGroup, CardImg, } from "reactstrap";
import { Link } from 'react-router-dom';
// import { products } from "../utils/products";


// {
//     stock && contador
//     ? <button className="btn-color-violeta" onClick={ () => onAdd (contador)}> Add to cart </button>
//     : <button className="btn-color-violeta"> Agregar al carrito</button>
// }



const Cart = () => {

    const test = useContext(CartContext);
  
    return (
        <Card> 
            <h3 className="title-name txt-violeta itemdetail__title">Carrito de compras </h3>
            <CardBody>
            {
                (test.cartList.length > 0)
                ? <button onClick={test.removeCart} className="btn-color-violeta"> Vaciar carrito</button>
                : <p> Tu carrito esta vacio <br></br>
                <Link to='/'><button className="btn-color-violeta">Continuar comprando</button></Link>
                </p>                       
            }
            </CardBody>
        
            {
                test.cartList.length > 0 && (
                    <CardBody>
                        { test.cartList.map  (
                            item => (
                                <CardBody key={item.idItem}> 
                                    <CardTitle tag="h5" className="title-card">Producto: {item.nameItem} </CardTitle>
                                    <CardSubtitle>Precio: {item.costItem}  </CardSubtitle>
                                    <CardSubtitle> Cantidad: {item.qtyItem} item(s) </CardSubtitle>
                                    <CardSubtitle> Subtotal: $ {test.calcTotalPerItem(item.idItem)}  </CardSubtitle>
                                    {/* <CardImg className="" src={items.image} />  */}
                                    <div className="count-container">
                                        <button onClick={()=> test.deleteItem(item.idItem)} className="btn-color-verde"> Eliminar producto</button>
                                    </div>
                                </CardBody>
                            )
                        )
                        }
                        <Link to='/'><button className="btn-color-violeta">Continuar comprando</button></Link>
                    </CardBody>
                )
            }

            {
                test.cartList.length > 0 &&  (
                    <CardBody> 
                    <CardSubtitle> Subtotal: <p number={test.calcSubTotal()}> </p> </CardSubtitle>
                    <CardSubtitle> Total: <p number={test.calcTotal()}> </p></CardSubtitle>
                </CardBody>
                )
            }
        </Card>
    );
}


export default Cart;