import * as postAPI from "../api/posts";
import {reducerUtils} from "../lib/reducerUtils"
import {createPromiseThunk} from "../lib/thunkCreator"

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
                posts:reducerUtils.success(action.payload)
            }
        case GET_POSTS_ERROR:
            return {
                ...state,
                posts:reducerUtils.error(action.payload)
            }
        case GET_POST:
            return {
                ...state,
                post:reducerUtils.loading()
            }
        case GET_POST_SUCCESS:
            return {
                ...state,
                post:reducerUtils.success(action.payload)
            }
        case GET_POST_ERROR:
            return {
                ...state,
                post:reducerUtils.error(action.payload)
            }
        default:
            return state;
    }
}