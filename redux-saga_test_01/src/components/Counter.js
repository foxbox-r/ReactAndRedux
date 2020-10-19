import React from 'react';

function Counter({number,diff,onIncrease,onDecrease,onSetDiff}){

    const onChange = e=>onSetDiff(Number(e.target.value));

    return (
        <>
            <h1>{number}</h1>
            <button onClick={onIncrease}>+</button>
            <button onClick={onDecrease}>-</button><br/>
            <input type="number" value={diff} onChange={onChange}/>
        </>
    )
}

export default Counter;