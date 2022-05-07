import ItemList from './ItemList';
import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import { collection,  getDocs } from 'firebase/firestore';
import db from '../utils/firebaseConfig';

const ItemListContainer = () => {

    const [tipografias, setTipografias] = useState ([]);
    const { idCategory } = useParams ();

    useEffect (()=> {
        const fetchFromFirestore = async () => {
            const querySnapshot = await getDocs(collection(db, "users"));
            const dataFromFirestore = querySnapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data()
            })); 
            return dataFromFirestore;
            }
            fetchFromFirestore ()
            .then (result => setTipografias (result))
            .catch (err => console.log (err)) 
            ;
        }, [idCategory]);

    return (
        <>
        <ItemList objetos= {tipografias} />
        </>
    )
}

export default ItemListContainer;
