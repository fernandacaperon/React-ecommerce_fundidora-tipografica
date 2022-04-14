 import 'bootstrap/dist/css/bootstrap.min.css';
 import 'bootstrap-icons/font/bootstrap-icons.css';

const CartWidget = () => {
    return (
    <p> <i class="bi bi-cart nav-text" style={{ fontSize: 30 }} >  
        <span class="position-absolute bottom-50 translate-middle badge  bg-danger" style={{ fontSize: 11 }}> 3 <span class="visually-hidden">unread messages</span>
        </span>
        </i>
    </p>
    )
}

export default CartWidget;



