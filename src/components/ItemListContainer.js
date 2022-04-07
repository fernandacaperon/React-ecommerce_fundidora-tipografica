import Item from "./Item";
import { useEffect, useState } from "react";
import products from "../utils/products";
const {Products} = require ('../utils/products');


const itemListContainer = ({gretting}) => {
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
            <ItemList item={lista} />
            <ItemCount stock = {5} initial= {1} />
        </>
    );
}

export default itemListContainer;


            {/* <h1> {gretting}</h1> */}
