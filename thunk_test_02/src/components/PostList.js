import React from 'react';

function PostList({data}){

    console.log(data);
    const makeList = ()=>data.map(post=><li key={post.id}>{post.title}</li>)

    return (
        <div>
            <ul>
                {makeList()}
            </ul>
        </div>
    )
}

export default PostList;