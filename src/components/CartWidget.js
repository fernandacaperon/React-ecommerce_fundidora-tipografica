 import 'bootstrap/dist/css/bootstrap.min.css';
 import 'bootstrap-icons/font/bootstrap-icons.css';


const CartWidget = () => {


    return (
        <p className="d-flex justify-content-end"> <i className="bi bi-cart nav-text" style={{ fontSize: 28 }} >  
            <span className="position-absolute top-50 translate-middle badge  bg-danger" style={{ fontSize: 10 }}> 3 <span className="visually-hidden">unread messages</span>
      </span></i></p>
    )
}

export default CartWidget;



