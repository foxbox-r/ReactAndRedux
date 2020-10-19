import {combineReducers} from "redux"
import MealReducer,{MealSagaCounter} from "./MealReducer"
import CounterReducer,{counterSaga} from "./CounterReducer"
import {all} from "redux-saga/effects"

const rootReducer = combineReducers({
    MealReducer,
    CounterReducer,
})

export function* rootSaga(){
    yield all([counterSaga(),MealSagaCounter()]);
}

export default rootReducer;