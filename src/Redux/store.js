import { configureStore } from "@reduxjs/toolkit";
import CounterReducer from "./Redux-slice/counterSlice"
import AuthReducer from "./Redux-slice/AuthSlice"

const store = configureStore({
    reducer:{
        counter: CounterReducer,
        auth: AuthReducer,
    }
})


export default store;