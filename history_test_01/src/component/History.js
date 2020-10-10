import React, { useEffect } from 'react';

function History({history}){

    const goBack = ()=>{
        history.goBack();
    }

    const goHome = ()=>{
        history.push("/");
    }

    useEffect(()=>{
        console.log(history);
        const block = history.block("realy go?");
        return ()=>{
            block();
        }
    },[history]);

    return (
        <div>
            <button onClick={goBack}>go back</button>
            <button onClick={goHome}>go home</button>
        </div>
    )
}

export default History;