import { useParams } from 'react-router-dom'
import { FC } from 'react'
import { useFetchSinglePostQuery } from '@/entities/Post/model/services/post.api'

type Params = {
  id: string
}

const SinglePostPage: FC = () => {
  const { id } = useParams<Params>()
  const { data: post } = useFetchSinglePostQuery(id as string)

  return <div>Title: {post?.title}</div>
}

export default SinglePostPage
