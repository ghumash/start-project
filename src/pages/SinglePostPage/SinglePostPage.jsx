import { useParams } from 'react-router-dom'
import { useFetchSinglePostQuery } from '@/entities/Post'

const SinglePostPage = () => {
  const { id } = useParams()
  const { data: post } = useFetchSinglePostQuery(id)

  return <div>Title: {post?.title}</div>
}

export default SinglePostPage
