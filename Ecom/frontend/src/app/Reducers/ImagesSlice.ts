import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';
import { Images, ImagesTemplate } from "../Interfaces/interfaceImages";
import { AsyncThunk } from "@reduxjs/toolkit";


interface InitialState {
    images:Array<Images>
}

const initialState:InitialState = {
    images:[ImagesTemplate]
}

export const fetchImages:AsyncThunk<any , void , {}> = createAsyncThunk(
    'images/GETimages',
    async()=> {
        try{
            const response = (await axios('/images')).data;
            return response;
        }catch(err){
            if(err instanceof Error){
                console.log(err.message);
            }else{
                console.log("Unexpected error", err);
            }
        }
    }
)

export const imagesSlice = createSlice({
    name:'images',
    initialState,
    reducers:{

    },
    extraReducers:(builder) => {
        builder.addCase(fetchImages.fulfilled, (state,action)=>{
            state.images = action.payload
        });
    }
});

export default imagesSlice.reducer;