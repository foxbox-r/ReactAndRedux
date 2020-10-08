import React from 'react';
import Profile from "./Profile"
import {Route,Link} from "react-router-dom"

function Profiles(){

    return (
        <div>
            <h3>user lists</h3>
            <ul>
                <li><Link to="/profiles/foxboxr" >foxboxr</Link></li>
                <li><Link to="/profiles/homer" >homer</Link></li>
            </ul>
            <Route path="/profiles" exact component={()=><h2>choose userList</h2>} />
            <Route path="/profiles/:userName" component={Profile} />
        </div>
    )
}

export default Profiles;