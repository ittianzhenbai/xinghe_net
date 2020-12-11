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
    component: () => import(/* webpackChunkName: "index" */ '../views/index/index.vue'),
    children:[
      //此处导致ie报错
      {
        path: '/',
        component: () => import(/* webpackChunkName: "main_page" */ '../views/main_page/main_page.vue')
      },
      {
        path: '/main_page',
        component: () => import(/* webpackChunkName: "main_page" */ '../views/main_page/main_page.vue')
      },
      {
        path: '/near_xinghe',
        name: 'near_xinghe',
        component: () => import(/* webpackChunkName: "near_xinghe" */ '../views/near_xinghe/near_xinghe.vue'),
        children:[
            {
              path: '/group_intro',
              name: 'group_intro',
              component: () => import(/* webpackChunkName: "group_intro" */ '../views/group_intro/group_intro.vue')
            },
            {
              path: '/group_framework',
              name: 'group_framework',
              component: () => import(/* webpackChunkName: "group_framework" */ '../views/group_framework/group_framework.vue')
            },
            {
              path: '/group_mission',
              name: 'group_mission',
              component: () => import(/* webpackChunkName: "group_mission" */ '../views/group_mission/group_mission.vue')
            },
            {
              path: '/group_menber',
              name: 'group_menber',
              component: () => import(/* webpackChunkName: "group_menberr" */ '../views/group_menber/group_menber.vue')
            },
            {
              path: '/group_honor',
              name: 'group_honor',
              component: () => import(/* webpackChunkName: "group_honor" */ '../views/group_honor/group_honor.vue')
            }
          ]
        },
      {
        path: '/news_center',
        name: 'news_center',
        component: () => import(/* webpackChunkName: "news_center" */ '../views/news_center/news_center.vue'),
        children:[
          {
            path: '/news_group',
            name: 'news_group',
            component: () => import(/* webpackChunkName: "news_group" */ '../views/news_group/news_group.vue')
          },
          {
            path: '/news_menber',
            name: 'news_menber',
            component: () => import(/* webpackChunkName: "news_menber" */ '../views/news_menber/news_menber')
          },
          {
            path: '/news_notice',
            name: 'news_notice',
            component: () => import(/* webpackChunkName: "news_notice" */ '../views/news_notice/news_notice.vue')
          },
          {
            path: '/news_detail',
            name: 'news_detail',
            component: () => import(/* webpackChunkName: "news_detail" */ '../views/news_detail/news_detail.vue')
          },
        ]
      },
      {
        path: '/major_businesses',
        name: 'major_businesses',
        component: () => import(/* webpackChunkName: "major_businesses" */ '../views/major_businesses/major_businesses.vue'),
        children:[
          {
            path: '/business_neimao',
            name: 'business_neimao',
            component: () => import(/* webpackChunkName: "business_neimao" */ '../views/business_neimao/business_neimao.vue')
          },
          {
            path: '/business_waimao',
            name: 'business_waimao',
            component: () => import(/* webpackChunkName: "business_waima" */ '../views/business_waimao/business_waimao.vue')
          },
          {
            path: '/business_finance',
            name: 'business_finance',
            component: () => import(/* webpackChunkName: "business_finance" */ '../views/business_finance/business_finance.vue')
          },
          {
            path: '/business_building',
            name: 'business_building',
            component: () => import(/* webpackChunkName: "business_building" */ '../views/business_building/business_building.vue')
          },
          {
            path: '/business_agriculture',
            name: 'business_agriculture',
            component: () => import(/* webpackChunkName: "group_honor" */ '../views/business_agriculture/business_agriculture.vue')
          }
        ]

      },
      {
        path: '/party_building',
        name: 'party_building',
        component: () => import(/* webpackChunkName: "party_building" */ '../views/party_building/party_building.vue'),
        children:[
          {
            path: '/party_news',
            name: 'party_news',
            component: () => import(/* webpackChunkName: "party_news" */ '../views/party_news/party_news.vue')
          },
          {
            path: '/party_danggui',
            name: 'party_danggui',
            component: () => import(/* webpackChunkName: "party_danggui" */ '../views/party_danggui/party_danggui.vue')
          },
          {
            path: '/party_yuandi',
            name: 'party_yuandi',
            component: () => import(/* webpackChunkName: "party_yuandi" */ '../views/party_yuandi/party_yuandi.vue')
          },
          {
            path: '/party_notify',
            name: 'party_notify',
            component: () => import(/* webpackChunkName: "party_notify" */ '../views/party_notify/party_notify.vue')
          },
        ]
      },
      {
        path: '/talent_recruitment',
        name: 'talent_recruitment',
        component: () => import(/* webpackChunkName: "talent_recruitment" */ '../views/talent_recruitment/talent_recruitment.vue'),
        children:[
          {
            path: '/talent_recruitment',
            component: () => import(/* webpackChunkName: "talent_concept" */ '../views/talent_concept/talent_concept.vue')
          },
          {
            path: '/talent_concept',
            name: 'talent_concept',
            component: () => import(/* webpackChunkName: "talent_concept" */ '../views/talent_concept/talent_concept.vue')
          },
          {
            path: '/talent_recruitment_notice',
            name: 'talent_recruitment_notice',
            component: () => import(/* webpackChunkName: "talent_recruitment_notice" */ '../views/talent_recruitment_notice/talent_recruitment_notice.vue')
          },
          {
            path: '/recruitment_detail',
            name: 'recruitment_detail',
            component: () => import(/* webpackChunkName: "recruitment_detail" */ '../views/recruitment_detail/recruitment_detail.vue')
          }
        ]
      },
      {
        path: '/connect_us',
        name: 'connect_us',
        component: () => import(/* webpackChunkName: "connect_us" */ '../views/connect_us/connect_us.vue')
      },
      {
        path: '/ceshi',
        name: 'ceshi',
        component: () => import(/* webpackChunkName: "connect_us" */ '../views/ceshi.vue')
      },
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
