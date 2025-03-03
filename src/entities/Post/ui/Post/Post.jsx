import { Button } from '@/shared/ui'
import { Link } from 'react-router-dom'
import styles from './style.module.css'

export const Post = (props) => {
  const { post, remove, update } = props

  const handleRemove = () => {
    const confirmed = confirm('Are you sure?')
    if (confirmed) remove(post)
  }

  const handleUpdate = () => {
    const title = prompt(`Update post title "${post.title}"`)
    if (title) update({ ...post, title })
  }

  return (
    <div className={styles.root}>
      <span>
        {post.id}. <Link to={`/posts/${post.id}`}>{post.title}</Link>
      </span>
      <div className={styles.buttonGroup}>
        <Button onClick={handleUpdate}>
          Update
        </Button>
        <Button onClick={handleRemove}>
          Delete
        </Button>
      </div>
    </div>
  )
}
