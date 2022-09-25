import { createSlice } from '@reduxjs/toolkit';
import appApi from '../services/appApi';

const initialState = [];

export const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: { updateProducts: (_, { payload }) => payload },

  extraReducers: ({ addMatcher }) => {
    addMatcher(
      appApi.endpoints.createProduct.matchFulfilled,
      (_, { payload }) => payload
    );

    addMatcher(
      appApi.endpoints.updateProduct.matchFulfilled,
      (_, { payload }) => payload
    );

    addMatcher(
      appApi.endpoints.deleteProduct.matchFulfilled,
      (_, { payload }) => payload
    );
  },
});

export const { updateProducts } = productSlice.actions;
export default productSlice.reducer;
