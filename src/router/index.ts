import { AUTH_TOKEN } from '@/api/auth'
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const signin = () => import(/* webpackChunkName: "signin" */ '@/views/Signin.vue')
const home = () => import(/* webpackChunkName: "home" */ '@/views/Home.vue')
const index = () => import(/* webpackChunkName: "index" */ '@/views/pages/Index.vue')
const account = () => import(/* webpackChunkName: "account" */ '@/views/pages/Account.vue')
const menu = () => import(/* webpackChunkName: "menu" */ '@/views/pages/Menu.vue')
const role = () => import(/* webpackChunkName: "role" */ '@/views/pages/role/Role.vue')
const PathNotFound = () => import(/* webpackChunkName: "404" */ '@/views/pages/404.vue')

const routes: Array<RouteRecordRaw> = [
  {
    path: '/signin',
    name: 'signin',
    component: signin,
    meta: { requiresAuth: false },
  },
  {
    path: '/',
    name: 'home',
    component: home,
    meta: { requiresAuth: true },
    children: [
      {
        path: '',
        name: 'index',
        component: index,

        meta: { requiresAuth: true },
      },
      {
        path: '/account',
        name: 'account',
        component: account,
        meta: { requiresAuth: true },
      },
      {
        path: '/menu',
        name: 'menu',
        component: menu,
        meta: { requiresAuth: true },
      },
      {
        path: '/role',
        name: 'role',
        component: role,
        meta: { requiresAuth: true },
      },
    ],
  },
  { path: '/404', alias: '/:pathMatch(.*)*', component: PathNotFound },
]

const router = createRouter({
  linkExactActiveClass: 'link-exact-active-class',
  history: createWebHistory(process.env.BASE_URL),
  routes
})
router.beforeEach(to => {
  const isAuthenticated: boolean = localStorage.getItem(AUTH_TOKEN) ? true : false;
  if (to.meta.requiresAuth && !isAuthenticated) router.push('/signin');
});

export default router
