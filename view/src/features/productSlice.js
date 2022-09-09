import { createSlice } from '@reduxjs/toolkit';
// import appApi from '../services/appApi';

const initialState = [];

export const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    updateProducts: (state, action) => action.payload,
  },
});

export const { updateProducts } = productSlice.actions;
export default productSlice.reducer;
