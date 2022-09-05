import { createSlice } from '@reduxjs/toolkit';
import appApi from '../services/appApi';

const initialState = null;

export const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    logout: ({ user }) => (user = initialState),
  },

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

export const { logout } = userSlice.actions;

export default userSlice.reducer;
