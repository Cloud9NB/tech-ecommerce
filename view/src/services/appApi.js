import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const appApi = createApi({
  reducerPath: 'appApi',
  baseQuery: fetchBaseQuery({ baseUrl: '/' }),
  endpoints: builder => ({
    signup: builder.mutation({
      query: user => ({
        url: '/users/signup',
        method: 'POST',
        body: user,
      }),
    }),

    login: builder.mutation({
      query: user => ({
        url: '/users/login',
        method: 'post',
        body: user,
      }),
    }),

    createProduct: builder.mutation({
      query: product => ({
        url: '/products',
        method: 'POST',
        body: product,
      }),
    }),

    addToCart: builder.mutation({
      query: cart => ({
        url: '/products/add-to-cart',
        body: cart,
        method: 'POST',
      }),
    }),
  }),
});

export const {
  useSignupMutation,
  useLoginMutation,
  useCreateProductMutation,
  useAddToCartMutation,
} = appApi;

export default appApi;
