import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isLoggedIn: false,
    user: null,
    users: [],
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        RESET(state) {
            state.twoFactors = false;
            state.isError = false;
            state.isSuccess = false;
            state.isLoading = false;
            state.message = ""
        }
    }
});

export const { RESET } = authSlice.actions;

export const selectIsLoggedIn = (state) => state.auth.isLoggedIn;

export default authSlice.reducer;