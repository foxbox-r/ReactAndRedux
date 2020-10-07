const initialState = {
    number:0,
    diff:1,
}

const INCREASE = "counter/INCREASE";
const DECREASE = "counter/DECREASE";
const SET_DIFF = "conter/SET_DIFF";

export const increase = ()=>({type:INCREASE});
export const decrease = ()=>({type:DECREASE});
export const setDiff = diff=>({type:SET_DIFF,diff});

export default function CounterReducer(state=initialState,action){
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
                diff:action.diff
            }
        default:
            return state;
    }
}