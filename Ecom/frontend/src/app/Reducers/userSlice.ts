import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { User } from "../Interfaces/interfaceUser";
import { userTemplate } from "../Utils/userUtilities";
import axios from "axios";
/* interface Date{
    email:string,
    email_verified:boolean,
    nickname:string,
    picture:string,
    sub:string,
} */

interface InitialState {
    dataUser:User;
    loading:string;
}

const initialState:InitialState = {
    dataUser:userTemplate,
    loading:"",
};

export const fetchUserByEmail = createAsyncThunk(
    "user/fetchUserById",
    async (date: any | undefined) => {
      const response = (await axios(`/user?email=${date?.email}&picture=${date?.picture}&nickname=${date?.nickname}`)).data;
      return response;
    }
  );

  export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
      clearUser: (state) => {
        state.dataUser = initialState.dataUser;
      },
      updateUser: (state, action: PayloadAction<User>) => {
        state.dataUser = action.payload;
        axios.put(`/user/`, state.dataUser);
      },
    },
    extraReducers: (builder) => {
      builder.addCase(fetchUserByEmail.fulfilled, (state, action) => {
        state.dataUser = action.payload;
      });
    },
  });
  
  export const { clearUser, updateUser } = userSlice.actions;
  
  export default userSlice.reducer;