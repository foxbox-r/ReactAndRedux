import {combineReducers} from "redux"
import MealReducer from "./MealReducer"
import CounterReducer,{counterSaga} from "./CounterReducer"
import {all} from "redux-saga/effects"

const rootReducer = combineReducers({
    MealReducer,
    CounterReducer,
})

export function* rootSaga(){
    yield all([counterSaga()]);
}

export default rootReducer;