import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";



const NavBar = () => {
    return (
        <div className="App" > 
            <nav className="navbar navbar-expand-lg bg-color">
                <div className="container-fluid">
                    <Link to='/'className="navbar-brand text-violeta">Home</Link>
                    <div className="collapse navbar-collapse" id="navbarText">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <Link to='/category/1'><li className="nav-item nav-link"> Sans-Serif</li> </Link>    
                        <Link to='/category/2'><li className="nav-item nav-link"> Serif</li> </Link>  
                        </ul>
                        <span className="navbar-text"> <CartWidget/> </span>
                    </div>
                </div>
            </nav>
        </div>
    );
}


export default NavBar;

