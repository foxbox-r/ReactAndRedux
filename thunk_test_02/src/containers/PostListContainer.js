import React,{useEffect} from 'react';
import {useSelector,useDispatch} from "react-redux"
import {getPosts} from "../modules/PostsReducer"
import PostList from "../components/PostList"

function PostListContainer(){
    const {data,error,loading} = useSelector(state=>state.PostsReducer.posts);
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getPosts());
    },[])

    if(loading) return <h1>loading...</h1>
    if(error) return <h1>error</h1>
    if(!data) return null

    return (
        <div>
            <PostList data={data}/>
        </div>
    )
}

export default PostListContainer;