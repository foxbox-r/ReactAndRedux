import React from 'react';
import Search  from "../components/Search"
import {goToHome}  from "../modules/MealReducer"
import {useSelector,useDispatch} from "react-redux"

function SearchContainer({word}){
    const dispatch = useDispatch();
    const onGoToHome = ()=>{
        alert("go Home");
        dispatch(goToHome());
    }
    return (
        <div>
            <Search word={word} onGoToHome={onGoToHome}/>
        </div>
    )
}

export default SearchContainer;