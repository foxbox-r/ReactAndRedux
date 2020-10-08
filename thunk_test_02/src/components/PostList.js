import React from 'react';
import {Link} from "react-router-dom"

function PostList({data}){

    console.log(data);
    const makeList = ()=>data.map(post=>
    (
    <li key={post.id}>
        <Link to={`/${post.id}`}>
            {post.title}
        </Link>
    </li>
    ))

    return (
        <div>
            <ul>
                {makeList()}
            </ul>
        </div>
    )
}

export default PostList;