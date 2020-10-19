import React from 'react';
import {Link} from "react-router-dom"

function Meal({state}){

    if(state.loading) return <h1>loading...</h1>;
    if(state.error) return <h2>error</h2>
    if(!state.data) return <h1>no-data</h1>
    const meals = state.data.data.meals.map((str,i)=>str?str.split("<br/>").map((word,j)=><span><Link title={`${i}_${j}`} key={`${i}_${j}`} to={"/search/"+word}>{word}</Link> + </span>):<span>null</span>);

    console.log(meals);
    return (
        <div>
            {meals.map((meal,i)=><li key={i}>{meal}</li>)}
        </div>
    )
}

export default Meal;