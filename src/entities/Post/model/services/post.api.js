import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const postAPI = createApi({
  reducerPath: 'postAPI',
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_API_URL }),
  tagTypes: ['Post'],

  endpoints: (build) => ({
    fetchAllPosts: build.query({
      query: (limit = 5) => ({
        url: `/posts`,
        params: {
          _limit: limit,
        },
      }),
      providesTags: () => ['Post'],
    }),

    fetchSinglePost: build.query({
      query: (id) => ({
        url: `/posts/${id}`,
      }),
      providesTags: () => ['Post'],
    }),

    createPost: build.mutation({
      query: (post) => ({
        url: `/posts`,
        method: 'POST',
        body: post,
      }),
      invalidatesTags: () => ['Post'],
    }),

    updatePost: build.mutation({
      query: (post) => ({
        url: `/posts/${post.id}`,
        method: 'PUT',
        body: post,
      }),
      invalidatesTags: () => ['Post'],
    }),

    deletePost: build.mutation({
      query: (post) => ({
        url: `/posts/${post.id}`,
        method: 'DELETE',
        body: post,
      }),
      invalidatesTags: () => ['Post'],
    }),
  }),
})

export const {
  useFetchAllPostsQuery,
  useFetchSinglePostQuery,
  useCreatePostMutation,
  useDeletePostMutation,
  useUpdatePostMutation,
} = postAPI
