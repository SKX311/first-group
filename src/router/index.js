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
    path: '/Coach',
    name: 'Coach',
    component: () => import('../views/home/Coach.vue'),
  },
  {
    path: '/TeacherDetails',
    name: 'TeacherDetails',
    component: () => import('../views/home/TeacherDetails.vue'),
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
    path: "/CourseDetails",
    name: "CourseDetails",
    component: () => import("../views/course/CourseDetails.vue")
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
    redirect: '/all',
    children: [
      {
        path: '/all',
        name: 'all',
        component: () => import('../views/exercise/practice_item/all.vue'),
      },
      {
        path: '/senior',
        name: 'senior',
        component: () => import('../views/exercise/practice_item/senior.vue'),
      },
      {
        path: '/sethx',
        name: 'sethx',
        component: () => import('../views/exercise/practice_item/sethx.vue'),
      },
      {
        path: '/setenlinsh',
        name: 'setenlinsh',
        component: () => import('../views/exercise/practice_item/setenlinsh.vue'),
      },
    ]
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
  {
    path: '/point',
    name: 'point',
    component: () => import('../views/exercise/practice_item/point.vue'),
    redirect: '/derivation',
    children: [
      {

        path: '/derivation',
        name: 'derivation',
        component: () => import('../views/exercise/practice_item/derivation.vue'),
      },
      {
        path: '/limitation',
        name: 'limitation',
        component: () => import('../views/exercise/practice_item/limitation.vue'),
      },
      {
        path: '/biology',
        name: 'biology',
        component: () => import('../views/exercise/practice_item/biology.vue'),
      },
      {
        path: '/chemistry',
        name: 'chemistry',
        component: () => import('../views/exercise/practice_item/chemistry.vue'),
      },
      {
        path: '/math',
        name: 'math',
        component: () => import('../views/exercise/practice_item/math.vue'),
      },
      {
        path: '/physics',
        name: 'physics',
        component: () => import('../views/exercise/practice_item/physics.vue'),
      },
      {
        path: '/english',
        name: 'english',
        component: () => import('../views/exercise/practice_item/english.vue'),
      }

    ]
  },
  {
<<<<<<< HEAD

=======
=======
<<<<<<< HEAD
  {
=======
{
>>>>>>> 2954e5f019f934fea323dc00de1cbf75c30ed14b
>>>>>>> 8a321b1e2d9eba354c7c9a7ce36a8c24e6cdff96
>>>>>>> 70bd28f92a144e5d022e0bde3b43607fe522d1c5

    path: '/class_item',
    name: 'class_item',
    component: () => import('../views/record/record_item/class_item.vue'),
  },

  

<<<<<<< HEAD


  {
=======
<<<<<<< HEAD






=======
=======


  {
>>>>>>> 2954e5f019f934fea323dc00de1cbf75c30ed14b
>>>>>>> 8a321b1e2d9eba354c7c9a7ce36a8c24e6cdff96
>>>>>>> 70bd28f92a144e5d022e0bde3b43607fe522d1c5
    path: '/Login',
    name: 'Login',
    component: () => import('../views/mine/Login.vue'),
    meta: {
      showTabbar: false,
    }
  },

  {
    path: '/UserLearn',
    name: 'UserLearn',
    component: () => import('../views/mine/UserLearn.vue'),
    meta: {
      showTabbar: false,
    }
  }, {
    path: '/Calendar',
    name: 'Calendar',
    component: () => import('../views/mine/Calendar.vue'),
    meta: {
      showTabbar: false,
    }
  }, {
    path: '/Search',
    name: 'Search',
    component: () => import('../views/mine/Search.vue'),
    meta: {
      showTabbar: false,
    }
  }, {
    path: '/Money',
    name: 'Money',
    component: () => import('../views/mine/Money.vue'),
    meta: {
      showTabbar: false,
    }
  }, {
    path: '/MoneySize',
    name: 'MoneySize',
    component: () => import('../views/mine/MoneySize.vue'),
    meta: {
      showTabbar: false,
    }
  }, {
    path: '/Teacher',
    name: 'Teacher',
    component: () => import('../views/mine/Teacher.vue'),
    meta: {
      showTabbar: false,
    }
  }, {
    path: '/Collect',
    name: 'Collect',
    component: () => import('../views/mine/Collect.vue'),
    meta: {
      showTabbar: false,
    }
  }, {
    path: '/Course',
    name: 'Course',
    component: () => import('../views/mine/Course.vue'),
    meta: {
      showTabbar: false,
    }
  }, {
    path: '/Vip',
    name: 'Vip',
    component: () => import('../views/mine/Vip.vue'),
    meta: {
      showTabbar: false,
    }
  }, {
    path: '/Order',
    name: 'Order',
    component: () => import('../views/mine/Order.vue'),
    meta: {
      showTabbar: false,
    }
  }, {
    path: '/Preferential',
    name: 'Preferential',
    component: () => import('../views/mine/Preferential.vue'),
    meta: {
      showTabbar: false,
    }
  }, {
    path: '/Study',
    name: 'Study',
    component: () => import('../views/mine/Study.vue'),
    meta: {
      showTabbar: false,
    }
  }, {
    path: '/Vips',
    name: 'Vips',
    component: () => import('../views/mine/Vips.vue'),
    meta: {
      showTabbar: false,
    }
  }, {
    path: '/MyEmail',
    name: 'MyEmail',
    component: () => import('../views/mine/MyEmail.vue'),
    meta: {
      showTabbar: false,
    }
  }, {
    path: '/Feedback',
    name: 'Feedback',
    component: () => import('../views/mine/Feedback.vue'),
    meta: {
      showTabbar: false,
    }
  }, {
    path: '/Service',
    name: 'Service',
    component: () => import('../views/mine/Service.vue'),
    meta: {
      showTabbar: false,
    }
  }, {
    path: '/Intercalate',
    name: 'Intercalate',
    component: () => import('../views/mine/Intercalate.vue'),
    meta: {
      showTabbar: false,
    }
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})


export default router;



router.beforeEach((to, from, next) => {
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

