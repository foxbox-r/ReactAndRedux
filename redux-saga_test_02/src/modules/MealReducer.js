import * as mealAPI from "../api/getMeal"
import {call,put,takeEvery} from "redux-saga/effects"
const initialState = {
    data:null,
    error:null,
    loading:false,
};

const GET_MEAL = "MealReducer/GET_MEAL";
const GET_MEAL_SUCCESS = "MealReducer/GET_MEAL_SUCCESS";
const GET_MEAL_ERROR = "MealReducer/GET_MEAL_ERROR"; 

export const getMeal = ()=>({type:GET_MEAL});

// export const getMeal = ()=>async dispatch =>{
//     dispatch({type:GET_MEAL});
//     try{
//         const data = await mealAPI.getMeal();
//         dispatch({
//             type:GET_MEAL_SUCCESS,
//             data
//         })
//     } catch(e){
//         dispatch({
//             type:GET_MEAL_ERROR,
//             error:e
//         })
//     }
// }

function* getMealSaga(){
    try{
        const data = yield call(mealAPI.getMeal);
        yield put({
            type:GET_MEAL_SUCCESS,
            data
        })
    } catch(e){
        yield put({
            type:GET_MEAL_ERROR,
            error:e
        })
    }
}

export function* MealSagaCounter(){
    yield takeEvery(GET_MEAL,getMealSaga);
}

function MealReducer(state=initialState,action){
    switch(action.type){
        case GET_MEAL:
            return {
                ...state,
                loading:true,
            }
        case GET_MEAL_SUCCESS:
            return {
                ...state,
                loading:false,
                data:action.data,
            }
        case GET_MEAL_ERROR:
            return {
                ...state,
                loading:false,
                error:action.e
            }
        default :
            return state;
    }
}

export default MealReducer;

export const goToHome = () => (dispatch,getState,{history})=>{
    history.push("/");
}



