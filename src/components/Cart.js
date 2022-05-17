import { Link } from 'react-router-dom';
import { useContext, useEffect } from "react";
import { CartContext } from "./CartContext";
import { Card, CardBody, CardTitle, CardSubtitle } from "reactstrap";
import { async } from "@firebase/util";
import FormatNumber from '../utils/FormatNumber';
import { collection, doc, setDoc, serverTimestamp, updateDoc, increment } from "firebase/firestore";
import db from '../utils/firebaseConfig';


const Cart = () => {

    const test = useContext(CartContext);

    const createOrder = () => {
        const itemsForDB = test.cartList.map(item => ({
          id: item.idItem,
          title: item.nameItem,
          price: item.costItem
        }));
    
        test.cartList.forEach(async (item) => {
          const itemRef = doc(db, "products", item.idItem);
          await updateDoc(itemRef, {
            stock: increment(-item.qtyItem)
          });
        });

        let order = {
            buyer : {
                name: "Nombre",
                email: "email@gmail.com",
                phone: "1162946866"
            },
            total: test.calcTotal(),
            items: itemsForDB,
            date: serverTimestamp()
          };

          console.log(order);

        }

        const createOrderinFirestore = async () => {
            const newOrderRef = doc(collection(db, "orders"));
            // await setDoc (newOrderRef, order);
            return newOrderRef;
        }

            createOrderinFirestore () 
                .then (result => alert('Tu orden fue creada. Id orden '+ result.id + '\n\n'))
                .catch (err=> console.log(err));

  
    test.removeList();

    const checkout = () => {
        
    }
  
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
                    <button onClick={createOrder}>checkout now </button>
                </CardBody>
                )
            }
        </Card>
    );
}

export default Cart;