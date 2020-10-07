import * as postAPI from "../api/posts";
import {reducerUtils} from "../lib/reducerUtils"
import {createPromiseThunk,handlAsyncActions} from "../lib/thunkCreator"

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

export const getPosts = createPromiseThunk(GET_POSTS,postAPI.getPosts);
export const getPostById = createPromiseThunk(GET_POST,postAPI.getPostById);

const getPostsReducer = handlAsyncActions(GET_POSTS,"posts");
const getPostReducer = handlAsyncActions(GET_POST,"post");

export default function PostsReducer(state=initialState,action){
    switch(action.type){
        case GET_POSTS:
        case GET_POSTS_SUCCESS:
        case GET_POSTS_ERROR:
            return getPostsReducer(state,action);
        case GET_POST:
        case GET_POST_SUCCESS:
        case GET_POST_ERROR:
            return getPostReducer(state,action);
        default:
            return state;
    }
}