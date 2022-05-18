import { createContext, useState } from "react";

export const CartContext = createContext ();

const CartContextProvider = ({children}) => {
    const [tipografias, setTipografias] = useState ([ ]);

    const addToCart = (item, qty) => {
        let found = tipografias.find (product => product.item === item.id);
        if ( found === undefined) {
            setTipografias ([
                ...tipografias, 
                {
                    idItem: item.id,
                    imgItem: item.image[0],
                    nameItem: item.name,
                    costItem: item.cost,
                    qtyItem: qty
                }  
            ]);
        } else {
            found.qtyItem += qty;  
        } 
    }   

    const deleteItem = (id) =>{
        let result = tipografias.filter (item =>item.idItem !== id );
        setTipografias (result);
    }

    const removeCart = () => {
        setTipografias ([]);
    }

    const calcItemsQty = (id) => {
        let qtys = tipografias.map(item => item.qtyItem);
        return qtys.reduce(((previousValue, currentValue) => previousValue + currentValue), 0);
    }

    const  calcTotalPerItem =  (idItem) => {
        let index = tipografias.map((item) => item.idItem).indexOf(idItem);    
        console.log(index);
        return tipografias[index].costItem * tipografias[index].qtyItem;
        };  

    const calcSubTotal = () => {
        let totalPerItem = tipografias.map(item => calcTotalPerItem(item.idItem));
        return totalPerItem.reduce((previousValue, currentValue) => previousValue + currentValue);
    }

    const calcTotal = () => {
        return calcSubTotal();
    }

    return  (
        <CartContext.Provider value={{
            tipografias, 
            addToCart, 
            removeCart, 
            deleteItem, 
            calcItemsQty, 
            calcTotalPerItem,  
            calcSubTotal, 
            calcTotal 
        }}> 
            {children}
        </CartContext.Provider>
    );
}

export default CartContextProvider;
