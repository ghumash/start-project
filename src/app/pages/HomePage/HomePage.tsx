import { Counter } from '@/entities/Counter'
import { PostList } from '@/entities/Post'
import { FC } from 'react'

const HomePage: FC = () => {
  return (
    <>
      <Counter />
      <PostList />
    </>
  )
}

export default HomePage
