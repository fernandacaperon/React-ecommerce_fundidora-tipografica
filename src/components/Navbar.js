import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";


const NavBar = () => {
    return (
        <div className="App" > 
            <nav class="navbar navbar-expand-lg bg-color">
                <div class="container-fluid">
                    <Link to='/'><a class="navbar-brand text-violeta" href="#">Home</a></Link>
                    <div class="collapse navbar-collapse" id="navbarText">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <Link to='/category/1'><li class="nav-item"><a class="nav-link" href="#">Sans-Serif</a></li> </Link>    
                        <Link to='/category/2'><li class="nav-item"><a class="nav-link" href="#">Serif</a></li> </Link>  
                        </ul>
                        <span class="navbar-text"> <a> <CartWidget/> </a> </span>
                    </div>
                </div>
            </nav>
        </div>
    );
}


export default NavBar;

