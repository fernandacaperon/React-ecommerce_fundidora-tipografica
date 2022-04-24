import { useContext } from "react";
import { CartContext } from "./CartContext";
import { Card, CardImg, CardBody, CardTitle, CardSubtitle } from "reactstrap";
// import { CardText, Button, CardGroup } from "reactstrap";
import { Link } from 'react-router-dom';



const Cart = () => {

    const test = useContext(CartContext);

    return (
        <Card> 
            <h3 className="title-name txt-violeta itemdetail__title">Carrito de compras </h3>
            {
                test.cartList.length > 0 && (
                    <CardBody>
                        { test.cartList.map  (
                            items => (
                                <CardBody> 
                                    <CardTitle tag="h5" className="title-card">Producto: {items.name} </CardTitle>
                                    <CardSubtitle>Precio: {items.cost}  </CardSubtitle>
                                    <CardSubtitle> Cantidad {items.qtyItem} item(s) </CardSubtitle>
                                    {/* <CardImg className="" src={items.image} />  */}
                                </CardBody>
                            )
                        )
                        }
                        <div className="count-container">
                            <button onClick={test.deleteItem} className="btn-color-verde"> Eliminar producto</button>
                            <button onClick={test.removeCart} className="btn-color-verde"> Vaciar carrito</button>
                        </div>
                        <Link to='/'><button className="btn-color-violeta">Continuar comprando</button></Link>
                    </CardBody>
                )
            }
        </Card>
    );
}

export default Cart;

{/* <ContentCart>
{
    test.cartList.length > 0 ? 
    test.cartList.map(item => 
     <Product key={item.idItem}>
            <ProductDetail>
                <ImageCart src={item.imgItem} />
                <Details>
                <span>
                    <b>Product:</b> {item.nameItem}
                </span>
                <TopButton type="filled" onClick={() => test.deleteItem(item.idItem)}>DELETE</TopButton>
                </Details>
            </ProductDetail>
            <PriceDetail>
                <ProductAmountContainer>
                <ProductAmount>{item.qtyItem} item(s)</ProductAmount>
                </ProductAmountContainer>
                <ProductPrice>$ {item.costItem} each</ProductPrice>
            </PriceDetail>
        </Product>
    )
    : <TitleCart></TitleCart>
}
</ContentCart> */}