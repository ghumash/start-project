import { ComponentType } from 'react'
import { HomePage, AboutPage, PostsPage, SinglePostPage, NotFoundPage } from '@/pages'

export type RouteProps = {
  path: string
  component: ComponentType
  label?: string
  exact?: boolean
  routes?: RouteProps[]
  showInMenu?: boolean
}

export const routes: RouteProps[] = [
  {
    path: '/',
    component: HomePage,
    label: 'Home',
    exact: true,
    showInMenu: true,
  },
  {
    path: '/about',
    component: AboutPage,
    label: 'About',
    showInMenu: true,
  },
  {
    path: '/posts',
    component: PostsPage,
    label: 'Posts',
    showInMenu: true,
  },
  {
    path: '/posts/:id',
    component: SinglePostPage,
    showInMenu: false,
  },
  {
    path: '*',
    component: NotFoundPage,
    showInMenu: false,
  },
]
