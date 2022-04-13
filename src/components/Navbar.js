import CartWidget from "./CartWidget";

const NavBar = () => {
    return (
        <div className="App" > 
            <nav class="navbar navbar-expand-lg nav-background container-fluid">
                <div class="container-fluid">
                    <a class="navbar-brand nav-text" href="#">Home</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div class="navbar-nav ">
                            {/* <a class="nav-link nav-text" aria-current="page" href="#">Home</a> */}
                            <a class="nav-link"  href="#">Tipografias</a>
                            <a class="nav-link" href="#">Catalogo</a>
                        </div>
                        <div class="d-flex justify-content-end"> <a >  <CartWidget /> </a>
                        </div>
                   </div>
                </div>
            </nav>  
        </div>
    );
}

export default NavBar;

{/* <form class="d-flex">
<input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
<button class="btn btn-outline-success" type="submit">Search</button>
</form> */}