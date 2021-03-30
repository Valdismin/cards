import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from "redux-thunk";
import {profileReducer} from "./porfile_reducer";
import {authReducer} from "./auth-reducer";
import {appReducer} from "./app-reducer";



let reducers = combineReducers({
    profile:profileReducer,
    auth:authReducer,
    app:appReducer

})

export let store = createStore(reducers,applyMiddleware(thunk))

export type stateType =  ReturnType<typeof reducers>