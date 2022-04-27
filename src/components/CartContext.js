import { createContext, useState } from "react";

export const CartContext = createContext ();

const CartContextProvider = ({children}) => {
    const [cartList, setCartList] = useState ([ ]);

    const addToCart = (item, qty) => {
        let found = cartList.find (product => product.idItems === item.id);
        if ( found === undefined) {
            setCartList ([
                ...cartList, 
                item ,    
            ]);
        } else {
            found.qty += qty;  
        } 
    }   

    const deleteItem = (id) =>{
        let result = cartList.filter (item => item.id !== id);
        setCartList (result);
    }

    const removeCart = () => {
        setCartList ([]);
    }

    const calcItemsQty = (id) => {
        let qtys = cartList.map(item => item.qtyItem);
        return qtys.reduce(((previousValue, currentValue) => previousValue + currentValue), 0);
    }

    return  (
        <CartContext.Provider value={{cartList, addToCart, removeCart, deleteItem, calcItemsQty }}> 
            {children}
        </CartContext.Provider>
    );
}

export default CartContextProvider;
