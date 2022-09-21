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
        url: '/cart/add-to-cart',
        body: cart,
        method: 'PATCH',
      }),
    }),

    deleteFromCart: builder.mutation({
      query: item => ({
        url: '/cart/remove-from-cart',
        body: item,
        method: 'PATCH',
      }),
    }),

    increaseCartCount: builder.mutation({
      query: count => ({
        url: '/cart/increase-cart',
        body: count,
        method: 'PATCH',
      }),
    }),

    decreaseCartCount: builder.mutation({
      query: count => ({
        url: '/cart/decrease-cart',
        body: count,
        method: 'PATCH',
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
