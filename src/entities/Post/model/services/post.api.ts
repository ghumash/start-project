import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { IPost } from '@/shared/types'

export const postAPI = createApi({
  reducerPath: 'postAPI',
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_API_URL }),
  tagTypes: ['Post'],

  endpoints: (build) => ({
    fetchAllPosts: build.query<IPost[], number>({
      query: (limit: number = 5) => ({
        url: `/posts`,
        params: {
          _limit: limit,
        },
      }),
      providesTags: () => ['Post'],
    }),

    createPost: build.mutation<IPost, IPost>({
      query: (post) => ({
        url: `/posts`,
        method: 'POST',
        body: post,
      }),
      invalidatesTags: () => ['Post'],
    }),

    updatePost: build.mutation<IPost, IPost>({
      query: (post) => ({
        url: `/posts/${post.id}`,
        method: 'PUT',
        body: post,
      }),
      invalidatesTags: () => ['Post'],
    }),

    deletePost: build.mutation<IPost, IPost>({
      query: (post) => ({
        url: `/posts/${post.id}`,
        method: 'DELETE',
        body: post,
      }),
      invalidatesTags: () => ['Post'],
    }),
  }),
})

export const { useFetchAllPostsQuery, useCreatePostMutation, useDeletePostMutation, useUpdatePostMutation } = postAPI
