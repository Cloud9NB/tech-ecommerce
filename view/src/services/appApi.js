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
  }),
});

export const { useSignupMutation, useLoginMutation, useCreateProductMutation } =
  appApi;

export default appApi;
