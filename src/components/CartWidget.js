 import 'bootstrap/dist/css/bootstrap.min.css';
 import 'bootstrap-icons/font/bootstrap-icons.css';

const CartWidget = () => {
    return (
        <p class="d-flex justify-content-end"> <i class="bi bi-cart nav-text" style={{ fontSize: 28 }} >  
            <span class="position-absolute top-50 translate-middle badge  bg-danger" style={{ fontSize: 10 }}> 3 <span class="visually-hidden">unread messages</span>
      </span></i></p>
    )
}

export default CartWidget;



