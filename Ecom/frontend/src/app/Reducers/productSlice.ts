import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { Slice } from "@reduxjs/toolkit";
import axios from 'axios';

interface InitialState {
    products:any
}

const initialState:InitialState = {
    products:[],
}

export const fetchProducts = createAsyncThunk(
    "products/GETproducts",
    async({tags , color , size}: any | null)=>{
        try{
            if(tags || color || size){
                if(tags && !color && !size){
                    const response = (await axios(`/product?tags=${tags}`)).data;
                    return response;
                }
                if(!tags && color && !size){
                    const response = (await axios(`/product?color=${color}`)).data;
                    return response;
                }
                if(tags && color && !size){
                    const response = (await axios(`/product?color=${color}&tags=${tags}`)).data;
                    return response;
                }
                if(tags && color && size){
                    const response = (await axios(`/product?color=${color}&tags=${tags}&size=${size}`)).data;
                    return response;
                }
                if(!tags && !color && size){
                    const response = (await axios(`/product?size=${size}`)).data;
                    return response;
                }
                if(!tags && color && size){
                    const response = (await axios(`/product?size=${size}&color=${color}`)).data;
                    return response;
                }
                if(tags && !color && size){
                    const response = (await axios(`/product?size=${size}&tags=${tags}`)).data;
                    return response;
                }
            }else{
                const response = (await axios('/product')).data;
                return response;
            }
        }catch(err){
            if(err instanceof Error){
                console.log(err.message);
            }else{
                console.log('Unexpected error',err);
            }
        }
    }
)

export const productSlice:Slice<InitialState, {}, "products"> = createSlice({
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