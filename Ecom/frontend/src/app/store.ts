import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import userReducer from './Reducers/userSlice';
import stockReducer from './Reducers/stockSlice';

export const store = configureStore({
  reducer: {
    user:userReducer ,
    stock:stockReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
//xds