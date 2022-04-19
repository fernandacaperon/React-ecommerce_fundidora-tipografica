import React, {useState} from "react";

const ItemCount = () => {

    const [contador, setContador] = useState (1);

    const increment = () => {
       if (contador < 5){
            setContador (contador+1)
        }
    }

    const decrement = () => {
        if (contador > 1){
            setContador (contador-1)
            }
        }

    return (
        <div className="txt-violeta ">
            <div className="count-container">
                <button onClick={decrement} className="btn-white">-</button> {contador}
                <button onClick={increment}  className="btn-white">+</button>
                <button  className="btn-color-violeta"> Agregar al carrito</button>
            </div>
        </div>
    );
}

export default ItemCount;