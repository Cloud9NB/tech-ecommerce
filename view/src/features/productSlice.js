import { createSlice } from '@reduxjs/toolkit';
// import appApi from '../services/appApi';

const initialState = [];

export const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
});

export default productSlice.reducer;
