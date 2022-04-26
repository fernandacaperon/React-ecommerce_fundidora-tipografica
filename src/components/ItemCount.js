import React, { useState } from "react";

const ItemCount = ({ stock = 0, initial = 0,  onAdd }) => {

    const [contador, setContador] = useState (0);

    const increment = () => {
       if (contador < stock){
            setContador (contador+1)
        }
    }

    const decrement = () => {
        if (contador > initial-1){
            setContador (contador-1)
            }
        }

    return (
        <div className="txt-violeta ">
            <div className="count-container">
                <button onClick={decrement} className="btn-white">-</button> {contador}
                <button onClick={increment}  className="btn-white">+</button>
                {/* <button className="btn-color-violeta"> Agregar al carrito</button> */}
                {
                    stock && contador
                    ? <button className="btn-color-violeta" onClick={ () => onAdd (contador)}> Agregar al carrito </button>
                    : <button className="btn-color-violeta"> Agregar al carrito</button>
                }
            </div>
        </div>
    );
}

export default ItemCount;


// onClick={ () => onAdd (contador)

// ? <button className="btn-color-violeta" onClick={ () => alert ('contador')}> Add to cart </button>
//                     : <button className="btn-color-violeta"> Add to Cart</button>