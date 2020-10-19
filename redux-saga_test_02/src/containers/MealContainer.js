import React,{useEffect} from 'react';
import {useSelector,useDispatch} from "react-redux"
import {getMeal} from "../modules/MealReducer"
import Meal from "../components/Meal"

function MealContainer(){
    const state = useSelector(state=>state.MealReducer);
    const dispatch = useDispatch();
    console.log(state.data);
    console.log(getMeal);
    useEffect(()=>{
        if(!state.data)
        dispatch(getMeal());
    },[]);

    return (
        <div>
            <Meal state={state}/>
        </div>
    )
}

export default MealContainer;