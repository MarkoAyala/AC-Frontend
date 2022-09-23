import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { Product } from "../Interfaces/interfaceProducts";
import { ProductTemplate } from "../Utils/postProduct";
import axios from 'axios';


interface InitialState {
    productById:Product | '' | unknown
    loading:boolean | string;
}

const initialState:InitialState = {
    productById:ProductTemplate,
    loading:'',
}

export const fetchProductById:any = createAsyncThunk(
    'product/GETproductById',
    async (_id:string) => {
        try{
            const response = (await axios(`/product/${_id}`)).data;
            return response;
        }catch(err){
            if(err instanceof Error){
                console.log(err.message);
            }else{
                console.log('Unexpected error in getProductById', err);
            }
        }
    }
)

export const productByIdSlice = createSlice({
    name:'productById',
    initialState,
    reducers:{
        refreshProductById: (state) => {
            state.productById = ProductTemplate;
        }
    },
    extraReducers:(builder) =>{
        builder.addCase(fetchProductById.fulfilled, (state,action)=>{
            state.productById = action.payload
        });
    }
});

export const {refreshProductById} = productByIdSlice.actions;

export default productByIdSlice.reducer;