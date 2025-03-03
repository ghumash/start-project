import { memo } from 'react'
import { Post, postAPI } from '@/entities/Post'
import { Button } from '@/shared/ui'
import styles from './style.module.css'

const PostsPage = memo(() => {
  const { isError, isLoading, data: posts } = postAPI.useFetchAllPostsQuery(100)
  const [createPost] = postAPI.useCreatePostMutation()
  const [updatePost] = postAPI.useUpdatePostMutation()
  const [deletePost] = postAPI.useDeletePostMutation()

  const handleCreate = async () => {
    const title = prompt('Type post title')
    if (title) await createPost({ title, body: title })
  }

  const handleUpdate = (post) => {
    console.log(post)
    updatePost(post)
  }

  const handleRemove = (post) => {
    deletePost(post)
  }

  if (isLoading) return <span>Loading...</span>
  if (isError) return <span>Something went wrong!!!</span>

  return (
    <div>
      <h1 className={styles.title}>Posts Page</h1>

      <div className={styles.listGroup}>
        <div className={styles.header}>
          <h3>List</h3>
          <Button onClick={handleCreate}>New Post</Button>
        </div>

        <div>
          {posts?.map((post) => (
            <Post update={handleUpdate} remove={handleRemove} key={post.id} post={post} />
          ))}
        </div>
      </div>

    </div>
  )
})

export default PostsPage
