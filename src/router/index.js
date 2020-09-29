import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'HomeHouse',
    component: () => import( '../views/home/HomeHouse.vue'),
    meta:{
      showTabbar:true,
    }
  },
  {
    path: '/Coach',
    name: 'Coach',
    component: () => import( '../views/home/Coach.vue'),
  },
  {
    path: '/CourseHome',
    name: 'CourseHome',
    component: () => import( '../views/course/CourseHome.vue'),
    meta:{
      showTabbar:true,
    }
  },
  {
    path: '/ExerciseHome',
    name: 'ExerciseHome',
    component: () => import( '../views/exercise/ExerciseHome.vue'),
    meta:{
      showTabbar:true,
    }
  },
  
  {
    path: '/MineHome',
    name: 'MineHome',
    component: () => import( '../views/mine/MineHome.vue'),
    meta:{
      showTabbar:true,
    }
  },
  {
    path: '/RecordHome',
    name: 'RecordHome',
    component: () => import( '../views/record/RecordHome.vue'),
    meta:{
      showTabbar:true,
    }
  },
  {
    path: '/class_item',
    name: 'class_item',
    component: () => import( '../views/record/record_item/class_item.vue'),
  },
  {
    path: '/Login',
    name: 'Login',
    component: () => import( '../views/mine/Login.vue'),
    meta:{
      showTabbar:false,
    }
  },
]

const router = new VueRouter({
   mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to,from,next)=>{
  var TOKEN = localStorage.getItem('token')
  if (to.name === 'Login') {
    next()
  } else {
    if (TOKEN) {
      next()
    } else {
      next('/login')
    }
  }
})

export default router
