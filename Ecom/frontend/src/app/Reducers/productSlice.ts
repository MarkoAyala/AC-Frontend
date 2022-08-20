import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

interface InitialState {
    products:any
}

const initialState:InitialState = {
    products:[]
}

export const fetchProducts = createAsyncThunk(
    "products/GETproducts",
    async()=>{
        try{
            const response = (await axios('/product')).data;
            return response;
        }catch(err){
            if(err instanceof Error){
                console.log(err.message);
            }else{
                console.log('Unexpected error',err);
            }
        }
    }
)

export const productSlice = createSlice({
    name:'products',
    initialState,
    reducers:{
    },
    extraReducers:(builder)=>{
        builder.addCase(fetchProducts.fulfilled,(state,action)=>{
            state.products = action.payload
        });
    }
});

export default productSlice.reducer;