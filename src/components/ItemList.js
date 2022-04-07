import Item from "./Item";
import products from "../utils/products";
// import { ProductsContainer } from './styledComponents';

const ItemList = ( { items }) => {
    return (
        <ProductsContainer>
            {
                items.length > 0  
                ? items.map (item => <Item key={item.id} title={item.name} price={item.cost} description={item.description} pictureUrl={item.image[0]}> ):
                <p> Cargando...</p>
            }
        </ProductsContainer>
    )
}