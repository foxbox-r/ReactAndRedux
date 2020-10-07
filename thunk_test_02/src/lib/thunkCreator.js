import {reducerUtils} from "./reducerUtils"

export const createPromiseThunk = (type,promiseCreator)=>{
    const [SUCCESS,ERROR] = [`${type}_SUCCESS`,`${type}_ERROR`]
    return param => async dispatch => {
        dispatch({type})
        try{
            const payload = await promiseCreator(param);
            dispatch({
                type:SUCCESS,
                payload,
            })
        } catch(e){
            dispatch({
                type:ERROR,
                payload:e,
                error:true,
            })
        }
    }
}

export const handlAsyncActions = (type,key)=>{
    const [SUCCESS,ERROR] = [`${type}_SUCCESS`,`${type}_ERROR`]
    return (state,action)=>{
        switch(action.type){
            case type:
                return {
                    ...state,
                    [key]:reducerUtils.loading()
                }
            case SUCCESS:
                return {
                    ...state,
                    [key]:reducerUtils.success(action.payload)
                }
            case ERROR:
                return {
                    ...state,
                    [key]:reducerUtils.error(action.payload)
                }
            default:
                return state;
        }
    }
}