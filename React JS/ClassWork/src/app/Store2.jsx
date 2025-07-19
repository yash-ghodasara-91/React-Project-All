import { configureStore } from "@reduxjs/toolkit";
import  counterSlice  from "../features/CounterSlices";


export const store =configureStore({
    reducer :{
        countrkey : counterSlice
    }
})