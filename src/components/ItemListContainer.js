import { useEffect, useState } from "react";
import ItemCount from "./ItemCount";
import { getProducts } from "../utils/products";
import ItemList from './ItemList';


const ItemListContainer = () => {

    const [tipografias, setTipografias] = useState ([]);

    useEffect(() => {
        async function pedirProducts () {
            let productsLlegando = await getProducts ();
            setTipografias (productsLlegando)
        }
        pedirProducts()
    }, [] )

    return (
        <>
        <ItemCount stock="5" initial="0"/>
        <ItemList objetos= {tipografias} />
        </>
    )
}

export default ItemListContainer;
