import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch((err) => err);
};
const routes = [
  {
    path: '/',
    name: 'index',
    component: () => import(/* webpackChunkName: "index" */ '../views/index/index.vue'),
    children:[
      {
        path: '/main_page',
        name: 'main_page',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "main_page" */ '../views/main_page/main_page.vue')
      },
      {
        path: '/near_xinghe',
        name: 'near_xinghe',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "near_xinghe" */ '../views/near_xinghe/near_xinghe.vue')
      },
      {
        path: '/news_center',
        name: 'news_center',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "near_xinghe" */ '../views/news_center/news_center.vue')
      },
      {
        path: '/major_businesses',
        name: 'major_businesses',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "major_businesses" */ '../views/major_businesses/major_businesses.vue')
      },
      {
        path: '/party_building',
        name: 'party_building',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "party_building" */ '../views/party_building/party_building.vue'),
        children:[
          {
            path: '/party_news',
            name: 'party_news',
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import(/* webpackChunkName: "party_news" */ '../views/party_news/party_news.vue')
          },
          {
            path: '/party_danggui',
            name: 'party_danggui',
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import(/* webpackChunkName: "party_danggui" */ '../views/party_danggui/party_danggui.vue')
          },
          {
            path: '/party_yuandi',
            name: 'party_yuandi',
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import(/* webpackChunkName: "party_yuandi" */ '../views/party_yuandi/party_yuandi.vue')
          },
          {
            path: '/party_notify',
            name: 'party_notify',
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import(/* webpackChunkName: "party_notify" */ '../views/party_notify/party_notify.vue')
          },
        ]
      },
      {
        path: '/talent_recruitment',
        name: 'talent_recruitment',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "talent_recruitment" */ '../views/talent_recruitment/talent_recruitment.vue'),
        children:[
          {
            path: '/talent_recruitment',
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import(/* webpackChunkName: "talent_concept" */ '../views/talent_concept/talent_concept.vue')
          },
          {
            path: '/talent_concept',
            name: 'talent_concept',
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import(/* webpackChunkName: "talent_concept" */ '../views/talent_concept/talent_concept.vue')
          },
          {
            path: '/talent_recruitment_notice',
            name: 'talent_recruitment_notice',
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import(/* webpackChunkName: "talent_recruitment_notice" */ '../views/talent_recruitment_notice/talent_recruitment_notice.vue')
          },
        ]
      },
      {
        path: '/connect_us',
        name: 'connect_us',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "connect_us" */ '../views/connect_us/connect_us.vue')
      },
    ]
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
