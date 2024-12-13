import { createSlice } from "@reduxjs/toolkit";

export const carSlice = createSlice({
    name: 'car',
    initialState: {
        value:{
            toy_num: null,
            model: null,
            series: null,
            series_num: null,
            photo_url: null,
            year: null,
            user: null
        }
    },
    reducers:{
        
        addCarImg:(state, {payload})=>{
            state.value.photo_url = payload;
        }
    }
})

export const { addCarImg} = carSlice.actions;
export default carSlice.reducer