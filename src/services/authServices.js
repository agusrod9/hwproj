import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({ baseUrl: process.env.BD_AUTH_URL }),
  endpoints: (builder) => ({
    signUp: builder.mutation({
      query: ({ ...auth }) => ({
        url: `/accounts:signUp?key=${process.env.API_KEY}`,
        method: "POST",
        body: auth,
      }),
    }),
     signIn: builder.mutation({
      query: ({ ...auth }) => ({
        url: `/accounts:signInWithPassword?key=${process.env.API_KEY}`,
        method: "POST",
        body: auth,
      }),
    }), 
  }),
});

export const { useSignInMutation, useSignUpMutation } = authApi;