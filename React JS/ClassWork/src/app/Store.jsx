import { configureStore } from "@reduxjs/toolkit";
import  Todoslice  from "../features/TodoSlice";
import  ApiSlice  from "../features/ApiSlice";

export const store = configureStore({
    reducer : {
        todokey : Todoslice,
        apikey : ApiSlice
    }
})