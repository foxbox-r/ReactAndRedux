import React from 'react';
import {useSelector,useDispatch} from "react-redux"
import {incresaeAsync,decresaeAsync,setDiff} from "../modules/CounterReducer";
import Counter from "../components/Counter"

function CounterContainer(){

    const state = useSelector(state=>state.CounterReducer);
    const dispatch = useDispatch();

    const onIncrease = ()=>dispatch(incresaeAsync());
    const onDecrease = ()=>dispatch(decresaeAsync());
    const onSetDiff = diff=>dispatch(setDiff(diff));

    return (
        <div>
            <Counter number={state.number} diff={state.diff} onIncrease={onIncrease} onDecrease={onDecrease} onSetDiff={onSetDiff}/>
        </div>
    )
}

export default CounterContainer;