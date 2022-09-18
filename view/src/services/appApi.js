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

    deleteFromCart: builder.mutation({
      query: item => ({
        url: '/products/remove-from-cart',
        body: item,
        method: 'DELETE',
      }),
    }),

    increaseCartCount: builder.mutation({
      query: count => ({
        url: '/products/increase-cart',
        body: count,
        method: 'POST',
      }),
    }),

    decreaseCartCount: builder.mutation({
      query: count => ({
        url: '/products/decrease-cart',
        body: count,
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
  useDeleteFromCartMutation,
  useIncreaseCartCountMutation,
  useDecreaseCartCountMutation,
} = appApi;

export default appApi;
