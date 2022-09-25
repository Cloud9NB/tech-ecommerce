import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const appApi = createApi({
  reducerPath: 'appApi',
  baseQuery: fetchBaseQuery({ baseUrl: '/' }),
  endpoints: builder => ({
    // REGISTER / SIGN IN
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

    // ADMIN
    createProduct: builder.mutation({
      query: product => ({
        url: '/products',
        method: 'POST',
        body: product,
      }),
    }),

    deleteProduct: builder.mutation({
      query: ({ productId, userId }) => ({
        url: `/products/${productId}`,
        body: { userId },
        method: 'DELETE',
      }),
    }),

    updateProduct: builder.mutation({
      query: product => ({
        url: `/products/${product._id}}`,
        body: product,
        method: 'PATCH',
      }),
    }),

    // CUSTOMER
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

    createOrder: builder.mutation({
      query: body => ({
        url: '/orders',
        body: body,
        method: 'POST',
      }),
    }),
  }),
});

export const {
  useSignupMutation,
  useLoginMutation,
  useCreateProductMutation,
  useDeleteProductMutation,
  useUpdateProductMutation,
  useAddToCartMutation,
  useDeleteFromCartMutation,
  useIncreaseCartCountMutation,
  useDecreaseCartCountMutation,
  useCreateOrderMutation,
} = appApi;

export default appApi;
