import Index from './pages/Index.vue';
import List from './pages/List.vue';
import NewList from './pages/NewList.vue';
import NewItem from './pages/NewItem.vue';

import HomePage from './pages/home.vue';
import AboutPage from './pages/about.vue';
import FormPage from './pages/form.vue';
import DynamicRoutePage from './pages/dynamic-route.vue';
import NotFoundPage from './pages/not-found.vue';

import PanelLeftPage from './pages/panel-left.vue';
import PanelRightPage from './pages/panel-right.vue';

export default [
  {
    path: '/',
    component: Index,
  },
  {
    path: '/lists/new',
    component: NewList,
  },
  {
    path: '/lists/:id/items/new',
    component: NewItem,
  },
  {
    path: '/lists/:id',
    component: List,
  },
  {
    path: '/panel-left',
    component: PanelLeftPage,
  },
  // {
  //   path: '/panel-right/',
  //   component: PanelRightPage,
  // },
  // {
  //   path: '/about/',
  //   component: AboutPage,
  // },
  // {
  //   path: '/form/',
  //   component: FormPage,
  // },
  // {
  //   path: '/dynamic-route/blog/:blogId/post/:postId/',
  //   component: DynamicRoutePage,
  // },
  {
    path: '(.*)',
    component: NotFoundPage,
  },
];
