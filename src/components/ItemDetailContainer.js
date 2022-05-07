import { useEffect, useState } from "react";
import { useParams } from "react-router";
import ItemDetail from "./ItemDetail";
import { firestoreFetchOne } from "../utils/firestoreFetch.js";


const ItemDetailContainer = () => {

    const [tipografias, setTipografias] =  useState ({});
    const { idItem } = useParams ();

    useEffect(() => {
        firestoreFetchOne(idItem)
            .then(result => setTipografias(result))
            .catch(err => console.log(err))
    }, []);

    return <ItemDetail items={tipografias} />
    
}

export default ItemDetailContainer;