import React from 'react';
import {withRouter} from "react-router-dom"

function WithRouterSample({match,location,history}){

    return (
        <div>
            <h4>location</h4>
            <textarea value={JSON.stringify(location)}></textarea>
            <h4>match</h4>
            <textarea value={JSON.stringify(match)}></textarea>
            <br/>
            <button onClick={()=>history.push("/")}>go home</button>
        </div>
    )
}

export default withRouter(WithRouterSample);