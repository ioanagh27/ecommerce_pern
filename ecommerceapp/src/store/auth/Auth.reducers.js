import {createSlice} from '@reduxjs/toolkit';
import { registerUser, loginUser, checkLoginStatus } from './Auth.actions';

const initialState = {
    isFetching: false,
    isAuthenticated: false,
    error: null
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder
          .addCase(checkLoginStatus.fulfilled, (state, action) => {
            const { isAuthenticated } = action.payload;
            state.isAuthenticated = isAuthenticated;
          })
          .addCase(loginUser.fulfilled, (state, action) => {
            const { isAuthenticated } = action.payload;
            state.isAuthenticated = isAuthenticated;
          })
          .addCase(loginUser.rejected, (state, action) => {
            const { error } = action.payload;
            state.isAuthenticated = false;
            state.error = error;
          })
          .addCase(registerUser.fulfilled, (state, action) => {
             const { error } = action.payload;
             state.isAuthenticated = false;
             state.error = error;
          })
          .addCase(registerUser.rejected, (state, action) => {
            const { error } = action.payload;
            state.isAuthenticated = false;
            state.error = error;
          })
      }
});

export default authSlice.reducer;