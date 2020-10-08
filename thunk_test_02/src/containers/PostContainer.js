import React, { useEffect } from 'react';
import {useSelector,useDispatch} from "react-redux"
import {getPostById} from "../modules/PostsReducer"
import Post from "../components/Post"

function PostContainer({postId}){
    const {data,loading,error} = useSelector(state=>state.PostsReducer.post);
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getPostById(postId))
    },[postId,dispatch]);

    if(loading) return <h2>loading...</h2>;
    if(error) return <h2>error</h2>
    if(!data) return null;

    return (
        <Post post={data}/>
    )
}

export default PostContainer;