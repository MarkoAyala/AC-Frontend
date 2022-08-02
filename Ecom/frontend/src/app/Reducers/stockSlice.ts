import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { AsyncThunk } from "@reduxjs/toolkit";
import { Stock } from "../Interfaces/interfaceStock";
import { stockTemplate } from "../Utils/stockUtilities";
import axios from 'axios';


interface InitialState {
    stock:Stock | ''
    loading:boolean | string;
}

const initialState:InitialState = {
    stock:'',
    loading:'',
}

export const fetchStock: AsyncThunk<any, void, {}> = createAsyncThunk(
    'stock/GETstock',
    async () => {
        try{
            const response = (await axios('/stock')).data;
            return response;
        }catch(err){
            if(err instanceof Error){
                console.log(err.message);
            }else{
                console.log('Unexpected error', err);
            }
        }
    }
)

export const stockSlice = createSlice({
    name:'stock',
    initialState,
    reducers:{
        stockLoading: (state , action) => {
            state.loading = action.payload;
        }
    },
    extraReducers:(builder) =>{
        builder.addCase(fetchStock.fulfilled, (state,action)=>{
            state.stock = action.payload
        });
    }
});

export const {stockLoading} = stockSlice.actions;

export default stockSlice.reducer;