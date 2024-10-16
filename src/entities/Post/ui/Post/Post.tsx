import { ButtonColor, IPost } from '@/shared/types'
import { Button } from '@/shared/ui'
import { FC, memo } from 'react'
import { Link } from 'react-router-dom'

interface PostItemProps {
  post: IPost
  remove: (post: IPost) => void
  update: (post: IPost) => void
  className?: string
}

export const Post: FC<PostItemProps> = memo((props) => {
  const { post, remove, update } = props

  const handleRemove = () => {
    const confirmed = (confirm('Are you sure?') as boolean) || false
    if (confirmed) remove(post)
  }

  const handleUpdate = () => {
    const title = prompt(`Update post title "${post.title}"`) || ''
    update({
      ...post,
      title,
    })
  }

  return (
    <div className={'flex justify-between items-center my-2 pl-5 rounded-full border border-gray-300'}>
      <span>
        {post.id}. <Link to={`/posts/${post.id}`}>{post.title}</Link>
      </span>
      <div>
        <Button color={ButtonColor.SUCCESS} onClick={handleUpdate}>
          Update
        </Button>
        <Button className={'rounded-r-full'} color={ButtonColor.DANGER} onClick={handleRemove}>
          Delete
        </Button>
      </div>
    </div>
  )
})
