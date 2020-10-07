import * as postAPI from "../api/posts";
import {reducerUtils} from "../lib/reducerUtils"

const initialState = {
    posts:reducerUtils.initial(),
    post:reducerUtils.initial(),
};

const GET_POSTS = "post/GET_POSTS";
const GET_POSTS_SUCCESS = "post/GET_POSTS_SUCCESS";
const GET_POSTS_ERROR = "post/GET_POSTS_ERROR";

const GET_POST = "post/GET_POST";
const GET_POST_SUCCESS = "post/GET_POST_SUCCESS";
const GET_POST_ERROR = "post/GET_POST_ERROR";

export const getPosts = () => async dispatch =>{
    dispatch({type:GET_POSTS});
    try{
        const posts = await postAPI.getPosts();
        dispatch({
            type:GET_POSTS_SUCCESS,
            posts,
        })
    } catch(e){
        dispatch({
            type:GET_POSTS_ERROR,
            error:e
        })
    }
}

export const getPostById = (id) => async dispatch =>{
    dispatch({type:GET_POST});
    try{
        const post = await postAPI.getPostById(id);
        dispatch({
            type:GET_POST_SUCCESS,
            post,
        })
    } catch(e){
        dispatch({
            type:GET_POST_ERROR,
            error:e
        })
    }
}

export default function PostsReducer(state=initialState,action){
    switch(action.type){
        case GET_POSTS:
            return {
                ...state,
                posts:reducerUtils.loading()
            }
        case GET_POSTS_SUCCESS:
            return {
                ...state,
                posts:reducerUtils.success(action.posts)
            }
        case GET_POSTS_ERROR:
            return {
                ...state,
                posts:reducerUtils.error(action.error)
            }
        case GET_POST:
            return {
                ...state,
                post:reducerUtils.loading()
            }
        case GET_POST_SUCCESS:
            return {
                ...state,
                post:reducerUtils.success(action.post)
            }
        case GET_POST_ERROR:
            return {
                ...state,
                post:reducerUtils.error(action.error)
            }
        default:
            return state;
    }
}