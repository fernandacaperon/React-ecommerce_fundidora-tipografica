import { Link } from 'react-router-dom';
import { useContext} from "react";
import { CartContext } from "./CartContext";
import { Card, CardBody, CardTitle, CardSubtitle } from "reactstrap";
import { collection, doc, serverTimestamp } from "firebase/firestore";
import db from '../utils/firebaseConfig';
import { setDoc } from 'firebase/firestore';

export default Cart;

const Cart = () => {

    const test = useContext(CartContext);

    const checkout = () => {
        let order = {
            buyer : {
                name: "Nombre",
                email: "email@gmail.com",
                phone: "1162946866"
            },
            date: serverTimestamp(),
            items: test.tipografias.map (item => ({
                id: item.idItem,
                title: item.nameItem,
                price: item.costItem,
                qty: item.qtyItem                
            }) ),
            total: test.calcTotal(),
        };

        console.log(order);

        const createOrderinFirestore = async () => {
            const newOrderRef = doc(collection(db, "orders"));
            await setDoc (newOrderRef, order);
            return newOrderRef;
        }

        createOrderinFirestore () 
                .then (result => alert('Tu orden fue creada. Id orden '+ result.id + '\n\n'))
                .catch (err=> console.log(err));

        test.removeList();
    }

    const createOrder = () => {
        const itemsForDB = test.tipografias.map(item => ({
          id: item.idItem,
          title: item.nameItem,
          price: item.costItem,
          qty: item.qtyItem
        }));

  
    return (
        <Card> 
            <h3 className="title-name txt-violeta itemdetail__title">Carrito de compras </h3>
            {
                test.tipografias.length > 0 && (
                    <CardBody>
                        { test.tipografias.map  (
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
                test.tipografias.length > 0 &&  (
                    <Card> 
                        <CardBody> 
                            <CardSubtitle> Total: <p number={test.calcTotal()}> </p></CardSubtitle>
                            <button className="btn-color-violeta" onClick={createOrder}>checkout now </button>
                        </CardBody>
                    </Card>  
                )
            }
            <CardBody>
            {
                (test.tipografias.length > 0)
                ? <button onClick={test.removeCart} className="btn-color-violeta"> Vaciar carrito</button>
                : <p> Tu carrito esta vacio <br></br>
                <Link to='/'><button className="btn-color-violeta">Continuar comprando</button></Link>
                </p>                       
            }
            </CardBody>
        </Card>
    );
}}