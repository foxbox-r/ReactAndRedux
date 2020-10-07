import * as postAPI from "../api/posts";

const initialState = {
    posts:{
        data:[],
        error:null,
        loading:false,
    },
    post:{
        data:null,
        error:null,
        loading:false,
    }
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
                posts:{
                    ...state.posts,
                    loading:true,
                }
            }
        case GET_POSTS_SUCCESS:
            return {
                ...state,
                posts:{
                    ...state.posts,
                    data:action.posts,
                    loading:false,
                }
            }
        case GET_POSTS_ERROR:
            return {
                ...state,
                posts:{
                    ...state.posts,
                    error:action.error,
                }
            }
        case GET_POST:
            return {
                ...state,
                post:{
                    ...state.post,
                    loading:true,
                }
            }
        case GET_POST_SUCCESS:
            return {
                ...state,
                post:{
                    ...state.post,
                    data:action.post,
                    loading:false,
                }
            }
        case GET_POST_ERROR:
            return {
                ...state,
                post:{
                    ...state.post,
                    error:action.error,
                }
            }
        default:
            return state;
    }
}