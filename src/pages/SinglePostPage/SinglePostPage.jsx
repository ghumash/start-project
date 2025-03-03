import { useParams } from 'react-router-dom'
import { postAPI } from '@/entities/Post'

const SinglePostPage = () => {
  const { id } = useParams()
  const { data: post } = postAPI.useFetchSinglePostQuery(id)

  return <div>Title: {post?.title}</div>
}

export default SinglePostPage
