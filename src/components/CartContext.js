import { createContext, useState } from "react";

export const CartContext = createContext ();

const CartContextProvider = ({children}) => {
    const [cartList, setCartList] = useState ([ ]);

    const addToCart = (item, qty) => {
        let found = cartList.find (product => product.item === item.id);
        if ( found === undefined) {
            setCartList ([
                ...cartList, 
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
        let result = cartList.filter (item =>item.idItem != id );
        setCartList (result);
    }

    const removeCart = () => {
        setCartList ([]);
    }

    const calcItemsQty = (id) => {
        let qtys = cartList.map(item => item.qtyItem);
        return qtys.reduce(((previousValue, currentValue) => previousValue + currentValue), 0);
    }

    const calcTotalPerItem = (idItem) => {
        let index = cartList.map(item => item.idItem).indexOf(idItem);
        return cartList[index].costItem * cartList[index].qtyItem;
    }

    const calcSubTotal = () => {
        let totalPerItem = cartList.map(item => calcTotalPerItem(item.idItem));
        return totalPerItem.reduce((previousValue, currentValue) => previousValue + currentValue);
    }

    const calcTotal = () => {
        return calcSubTotal();
    }

    return  (
        <CartContext.Provider value={{cartList, addToCart, removeCart, deleteItem, calcItemsQty, calcItemsQty, calcTotalPerItem,  calcSubTotal, calcTotal }}> 
            {children}
        </CartContext.Provider>
    );
}

export default CartContextProvider;