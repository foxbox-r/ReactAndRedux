import React from 'react';
import Counter from "../components/Counter"
import {useSelector,useDispatch} from "react-redux"
import {increaseAsync,decreaseAsync,setDiff} from "../modules/CounterReducer"

function CounterContainer(){
    const {number,diff} = useSelector(state=>state.CounterReducer);
    const dispatch = useDispatch();

    const onIncrease = ()=>dispatch(increaseAsync());
    const onDecrease = ()=>dispatch(decreaseAsync());
    const onSetDiff = (diff)=>dispatch(setDiff(diff));

    const params = {
        number,
        diff,
        onIncrease,
        onDecrease,
        onSetDiff,
    }

    return (
        <>
            <Counter {...params} />
        </>
    )
}

export default CounterContainer;