import { useState } from "react";

const ItemCount = (props) => {
    const [rate, setCont] = useState(0);

    const increment = () => {
        if (rate < initial){
            setRate(rate +1);
        }
        console.log(count);
    }

    const decrease = () => {
        if (rate > initial) {
            setRate(rate-1);
        }
        console.log(count);
    }

    return (
        <div className="count-container">
            <h3>Contador</h3>
            <p>{rate}</p>
            <button onClick={increment}>-</button>
            <button onClick={decrease}>+</button>
        </div>
    )
}

export default ItemCount;