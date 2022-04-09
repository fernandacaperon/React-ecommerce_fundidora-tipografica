import Item from "./Item";
import products from "../utils/products";

const ItemList = ({ tipografias }) => {
    return (
        <ProductsContainer>
            {
                tipografias.length > 0  
                ? tipografias.map (tipografias => <Item key={tipografia.id} title={tipografia.name} price={tipografia.cost} description={tipografia.description} pictureUrl={tipografia.image[0]}> );
                : <p> Cargando...</p>
            }
        </ ProductsContainer>
    ); 
}

export default ItemList;