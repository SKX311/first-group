import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'HomeHouse',
    component: () => import('../views/home/HomeHouse.vue'),
    meta: {
      showTabbar: true,
    }
  },
  {
    path: '/CourseHome',
    name: 'CourseHome',
    component: () => import('../views/course/CourseHome.vue'),
    meta: {
      showTabbar: true,
    }
  },
  {
    path: '/ExerciseHome',
    name: 'ExerciseHome',
    component: () => import('../views/exercise/ExerciseHome.vue'),
    meta: {
      showTabbar: true,
    }
  },

  {
    path: '/MineHome',
    name: 'MineHome',
    component: () => import('../views/mine/MineHome.vue'),
    meta: {
      showTabbar: true,
    }
  },
  {
    path: '/RecordHome',
    name: 'RecordHome',
    component: () => import('../views/record/RecordHome.vue'),
    meta: {
      showTabbar: true,
    }
  },
  {
    path: '/centre',
    name: 'centre',
    component: () => import('../views/exercise/practice_item/centre.vue'),
  },
  {
    path: '/enshrine',
    name: 'enshrine',
    component: () => import('../views/exercise/practice_item/enshrine.vue')
  },
  {
    path: '/mistakes',
    name: 'mistakes',
    component: () => import('../views/exercise/practice_item/mistakes.vue'),
  },
  {
    path: '/setvolume',
    name: 'setvolume',
    component: () => import('../views/exercise/practice_item/setvolume.vue'),
  },
  {
    path: '/aeromodelling',
    name: 'aeromodelling',
    component: () => import('../views/exercise/practice_item/aeromodelling.vue'),
  },
  {
    path: '/appraisal',
    name: 'appraisal',
    component: () => import('../views/exercise/practice_item/appraisal.vue'),
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
