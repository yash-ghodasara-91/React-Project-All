import { configureStore } from "@reduxjs/toolkit";
import  counterSlice  from "../features/CounterSlices";
import  TodoSlice  from "../features/TodoSlice";


export const store = configureStore({
    reducer : {
        counterkey : counterSlice,
        todoKey : TodoSlice
    }
})