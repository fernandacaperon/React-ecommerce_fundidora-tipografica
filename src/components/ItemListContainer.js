import ItemList from './ItemList';
import customFetch from '../utils/customFetch';
import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import { getProducts } from "../utils/products";
import ItemCount from "./ItemCount";
import ItemDetail from './ItemDetail';

const ItemListContainer = () => {

    const [tipografias, setTipografias] = useState ([]);
    const { idCategory } = useParams ();

    // console.log (idCategory);

    useEffect (()=> {
        if (idCategory == undefined) {
            customFetch (2000, getProducts)
                .then(result => setTipografias(result))
                .catch(err => console.log(err))
        } else {
            customFetch (2000, getProducts.filter (item => item.categoryId === parseInt(idCategory)))
                .then(result => setTipografias (result))
                .catch (err=> console.log(err))
        } 
        console.log (idCategory);
    }, [idCategory]);

    const onAdd = (qty) => {
        alert ("You have selected " + qty + " items.");
    }

    return (
        <>
        {/* <ItemCount stock="5" initial="0"/> */}
        <ItemList objetos= {tipografias} />
        </>
    )
}

export default ItemListContainer;
