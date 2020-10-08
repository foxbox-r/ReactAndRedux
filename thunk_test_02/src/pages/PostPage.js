import React from 'react';
import PostContainer from "../containers/PostContainer"

function PostPage({match}){
    const {id} = match.params;
    const postId = Number(id);
    return (
        <PostContainer postId={postId}/>
    )
}

export default PostPage;