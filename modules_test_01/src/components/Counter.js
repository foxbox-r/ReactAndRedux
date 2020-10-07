import React from 'react';

function Counter({number,diff,onIncrease,onDecrease,onSetDiff}){

    const onChange = e=>{
        e.preventDefault();
        onSetDiff(Number(e.target.value));
    }

    return (
        <div>
            <h1>{number}</h1>
            <input type="number" value={diff} onChange={onChange}/><br/>
            <button onClick={onIncrease}>+</button>
            <button onClick={onDecrease}>-</button>
        </div>
    )
}

export default Counter;