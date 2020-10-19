import React from 'react';

function Search({word,onGoToHome}){

    return (
        <div>
            <h1>{word}</h1>
            <button onClick={onGoToHome}>home</button>
        </div>
    )
}

export default Search;