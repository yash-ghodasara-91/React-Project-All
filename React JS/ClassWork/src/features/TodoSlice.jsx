import { createSlice } from "@reduxjs/toolkit";


export const Todoslice = createSlice({
    name : "TodoSlice",
    initialState : {Data : []},
    reducers : {
        addData : (State, action) => {
            State.Data.push(action.payload)
        },
        deleteData : (State, action) => {
            let newData = State.Data.filter((item) => item.id != action.payload)
            State.Data = newData
        },
        updateData : (State, action) => {
            State.Data.map((e,i) => {
                if(e.id === action.payload.id && action.payload.formData) {
                    e.name = action.payload.formData.name || e.name
                    e.Subject = action.payload.formData.Subject || e.Subject
                } else {
                    e
                }
            })
        },
    }
})

export const {addData, deleteData,updateData} =Todoslice.actions
export default Todoslice.reducer