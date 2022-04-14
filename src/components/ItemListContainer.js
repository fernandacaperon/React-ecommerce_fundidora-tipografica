import ItemCount from "./ItemCount";
import { getProducts } from "../utils/products";
import ItemList from './ItemList';
import customFetch from "../utils/customFetch";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

// import { products } from '../utils/products';
// import { products } = require("../utils/products");


const ItemListContainer = () => {

    const [tipografias, setTipografias] = useState ([]);
    const { idCategory } = useParams(); 
    
    useEffect ( () => {
        if (idCategory == undefined) {
            customFetch (2000, getProducts)
            .then (result => setTipografias (result))
            .catch (err => console.log (err))
        } else{
            customFetch (2000, getProducts.filter(item => item.categoryId === parseInt(idCategory)))
            .then (result => setTipografias (result))
            .catch (err => console.log (err))
        }
        console.log (idCategory);
    }, [idCategory]);

    return (
        <>
        <ItemList objetos= {tipografias} />
        {/* <ItemCount stock="5" initial="0"/> */}
        </>
    )
};

export default ItemListContainer;


// if (idCategory == undefined) {
    //     useEffect(() => { 
    //         async function pedirProducts () {
    //             let productsLlegando = await getProducts ();
    //             setTipografias (productsLlegando)
    //         } else { 
    //             useEffect(() => { 
    //                 async function pedirProducts () {
    //                     let productsLlegando = await getProducts ();
    //                     setTipografias (productsLlegando)
    //                 } 
    //         pedirProducts();
    //         console.log (idCategory);
    // }, [] )