import { configureStore } from "@reduxjs/toolkit";
import ApiSlice   from "../Feucher/TodoSlice";

export const store = configureStore({
    reducer : {
        apiKey : ApiSlice
    }
})

