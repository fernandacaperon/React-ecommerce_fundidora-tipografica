import { useEffect, useState } from "react";
import { useParams } from "react-router";
import customFetch from "../utils/customFetch";
// import ItemCount from "./ItemCount";
import ItemDetail from "./ItemDetail";
import { products } from "../utils/products";



const ItemDetailContainer = () => {

    const [tipografias, setTipografias] =  useState ({});
    const { idItem } = useParams ();

    useEffect ( () => {
        customFetch (2000, products.find (item => item.id === parseInt (idItem)))
        .then(result => setTipografias(result))
        .catch(err => console.log(err))
    }, [idItem]);

    return <ItemDetail items={tipografias} />
    
}

export default ItemDetailContainer;