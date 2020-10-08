import React from 'react';
import qs  from "qs"

function About({location}){
    console.log(location);
    const query =  qs.parse(location.search,{
        ignoreQueryPrefix:true,
    });
    console.log(query);
    const {detail} = query;
    return (
        <div>
            <h1>ABOUT</h1>
            {detail==="true"?<h2>detail:true</h2>:<h2>detail:flase</h2>}
        </div>
    )
}

export default About;