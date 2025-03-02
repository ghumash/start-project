import { memo } from 'react'
import { Post } from '../Post/Post'
import {
  useCreatePostMutation,
  useDeletePostMutation,
  useFetchAllPostsQuery,
  useUpdatePostMutation,
} from '../../model/services/post.api'
import { Button } from '@/shared/ui'

export const PostList = memo(() => {
  const { isError, isLoading, data: posts } = useFetchAllPostsQuery(100)
  const [createPost, {}] = useCreatePostMutation()
  const [updatePost, {}] = useUpdatePostMutation()
  const [deletePost, {}] = useDeletePostMutation()

  const handleCreate = async () => {
    const title = prompt('Type post title')
    if (title) await createPost({ title, body: title })
  }

  const handleUpdate = (post) => {
    updatePost(post)
  }

  const handleRemove = (post) => {
    deletePost(post)
  }

  return isLoading ? (
    <span className={'flex justify-center'}>Loading...</span>
  ) : isError ? (
    <span className={'flex justify-center'}>Something went wrong!!!</span>
  ) : (
    <div>
      <Button onClick={handleCreate} className={'mb-5'}>
        New Post
      </Button>
      {posts?.map((post) => (
        <Post update={handleUpdate} remove={handleRemove} key={post.id} post={post} />
      ))}
    </div>
  )
})
