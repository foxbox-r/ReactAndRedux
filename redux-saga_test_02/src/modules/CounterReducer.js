import {delay,put,takeEvery,takeLatest} from "redux-saga/effects"
const initialState = {
    number:0,
    diff:1,
};

const INCREASE = "CounterReducer/INCREASE";
const DECREASE = "CounterReducer/DECREASE";
const SET_DIFF = "CounterReducer/SET_DIFF";
const INCREASE_ASYNC = "CounterReducer/INCREASE_ASYNC";
const DECREASE_ASYNC = "CounterReducer/DECREASE_ASYNC";
 
export const increase = ()=>({type:INCREASE});
export const decrease = ()=>({type:DECREASE});
export const setDiff = (diff)=>({
    type:SET_DIFF,
    diff
});

export const increaseAsync = ()=>({type:INCREASE_ASYNC});
export const decreaseAsync = ()=>({type:DECREASE_ASYNC});
// export const setDiffAsync = diff=>setDiff(diff);

function* increaseSaga(){
    yield delay(1000);
    yield put(increase());
}

function* decreaseSaga(){
    yield delay(1000);
    yield put(decrease());
}

export function* counterSaga(){
    yield takeEvery(INCREASE_ASYNC,increaseSaga);
    yield takeLatest(DECREASE_ASYNC,decreaseSaga); 
}

function CounterReducer(state=initialState,action){
    switch(action.type){
        case INCREASE:
            return {
                ...state,
                number:state.number+state.diff,
            }
        case DECREASE:
            return {
                ...state,
                number:state.number-state.diff,
            }

        case SET_DIFF:
            return {
                ...state,
                diff:action.diff,
            }
        default :
            return state;
    }
}

export default CounterReducer;