import React, {useState} from "react";

const Counter = function(){
    const [cnt, setCnt] = useState(0);

    function plus(){
        setCnt(cnt+1);
    }

    function minus(){
        setCnt(cnt-1);
    }

    return (
        <div>
            <h1>{cnt}</h1>
            <button onClick={plus}>Plus</button>
            <button onClick={minus}>Minus</button>
        </div>
    )
}

export default Counter;