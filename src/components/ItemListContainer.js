import ItemList from './ItemList';
import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import { collection,  getDocs } from 'firebase/firestore';
import { firestoreFetch } from '../utils/firestoreFetch';
import db from '../utils/firebaseConfig';

const ItemListContainer = () => {

    const [tipografias, setTipografias] = useState ([]);
    const { idCategory } = useParams ();

    useEffect(() => {
        firestoreFetch(idCategory)
            .then(res => setTipografias(res))
            .catch(err => console.log(err));
        
        }, [idCategory]);

        useEffect(() => {
            return (() => {
            setTipografias([]);
            })
    }, []);


    return (
        <>
        <ItemList objetos= {tipografias} />
        </>
    )
}

export default ItemListContainer;
