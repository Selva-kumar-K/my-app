import { createSlice } from "@reduxjs/toolkit";

let initialState = []


const formSlice = createSlice({
    name : 'formData',
    initialState,
    reducers : {
        addData : (state, action) => {
            state.push(action.payload)
        }
    }
})

export const {addData} = formSlice.actions
export default formSlice.reducer
