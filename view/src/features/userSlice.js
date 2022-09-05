import { createSlice } from '@reduxjs/toolkit';
import appApi from '../services/appApi';

const initialState = null;

export const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addMatcher(
      appApi.endpoints.signup.matchFulfilled,
      (state, action) => action.payload
    );

    builder.addMatcher(
      appApi.endpoints.login.matchFulfilled,
      (state, { payload }) => payload
    );
  },
});

export default userSlice.reducer;
