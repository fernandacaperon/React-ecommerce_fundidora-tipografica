import { useEffect, useState } from "react";
import { useParams } from "react-router";
import customFetch from "../utils/customFetch";
import ItemCount from "./ItemCount";
import ItemDetail from "./ItemDetail";
import { getDetail } from "../utils/products";

const ItemDetailContainer = () => {

    const [tipografias, setTipografias] = useState ([]);

    useEffect(() => {
        async function pedirItem () {
            let detailLlegando = await getDetail ();
            setTipografias (detailLlegando)
        }
        pedirItem()
    }, [] )

    return (
        <>
        {/* <ItemCount stock="5" initial="0"/> */}
        <ItemDetail items= {tipografias} />
        </>
    )
}

export default ItemDetailContainer;