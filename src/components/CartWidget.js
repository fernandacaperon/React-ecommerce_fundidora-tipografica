import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { useContext } from 'react';
import { CartContext } from './CartContext';


const CartWidget = () => {

    const test = useContext(CartContext);

    return (
        <p className="d-flex justify-content-end"> 
            <i className="bi bi-cart nav-text" style={{ fontSize: 28 }}>  
                <span  className="position-absolute top-50 translate-middle badge bg-danger" style={{ fontSize: 10 }}> 
                    <span className="visually-hidden"></span> {test.calcItemsQty()} 
                </span>
            </i>
        </p> 
    )
}

export default CartWidget;