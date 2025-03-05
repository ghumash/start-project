import { HomePage, AboutPage, PostsPage, SinglePostPage, CounterPage, WeatherPage, NotFoundPage } from '@/pages'

export const routes = [
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
    path: '/weather',
    component: WeatherPage,
    label: 'Weather',
    showInMenu: true,
  },
  {
    path: '/counter',
    component: CounterPage,
    label: 'Counter',
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
