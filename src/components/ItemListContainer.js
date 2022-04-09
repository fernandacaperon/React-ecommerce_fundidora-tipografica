import Item from "./Item";
import { useEffect, useState } from "react";
import products from "../utils/products";
import customFetch from "../utils/customFetch";
import ItemList from "./ItemList";
const {Products} = require ('../utils/products');



const ItemListContainer = ({gretting}) => {
    const [lista, setDatos] = useState ([]);

    useEffect ( () => {
        customFetch (2000, products) 
        .then (result => setDatos (result))
        .catch (err => console.log (err))
    }, []);

    const onAdd = (qty) => {
        alert ("Seleccionaste " + qty + "items.")
    }


    return (
        <> 
            <wrapper>{gretting} </wrapper>
            <ItemList tipografia={lista} />
            <ItemCount stock = {5} initial= {1} />
        </>
    );
}

export default ItemListContainer;
