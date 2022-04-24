import { createContext, useState } from "react";

export const CartContext = createContext ();

const CartContextProvider = ({children}) => {
    const [cartList, setCartList] = useState ([ ]);

    const addToCart = (items, qty) => {
        let found = cartList.find (product => product.idIem === items.id);
        if ( found === undefined) {
            setCartList ([
                ... cartList, 
                items
            ]);
        } else {
            found.qtyItem += qty;  
    } 
    }

    const deleteItem = (id) =>{
        let result = cartList.filter (item => item.idIem != id);
        setCartList (result);
    }

    const removeCart = () => {
        setCartList ([]);
    }

    return  (
        <CartContext.Provider value={{cartList, addToCart, removeCart, deleteItem}}> 
            {children}
        </CartContext.Provider>
    );
}

export default CartContextProvider;






// import { createContext, useState } from "react";

// export const CartContext = createContext ();

// const CartContextProvider = ({children}) => {
//     const [cartList, setCartList] = useState ([ ]);

//     const addToCart = (items) => {
//         setCartList ([
//             ... cartList, 
//             items
//         ]);
//     }