import React from 'react';
import {useSelector,useDispatch} from "react-redux"
import {getPostById,getPosts} from "../modules/PostsReducer"
import Posts from "../components/Posts"

function PostsContianer(){
    const state = useSelector(state=>state.PostsReducer);
    const dispatch = useDispatch();

    const onGetPosts = ()=>dispatch(getPosts());
    const onGetPostById = id => dispatch(getPostById(id));

    return (
        <div>
            <Posts onGetPosts={onGetPosts} onGetPostById={onGetPostById} post={state.post} posts={state.posts} />
        </div>
    )
}

export default PostsContianer;