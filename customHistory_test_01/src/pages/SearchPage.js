import React from 'react';
import SearchContainer from "../containers/SearchContainer"

function SearchPage({match}){
    const {word} = match.params
    return (
        <div>
            <SearchContainer word={word}/>
        </div>
    )
}

export default SearchPage;