import Vue from 'vue'
import Router from 'vue-router'
import ThreeLeveldropDown from '@/components/ThreeLeveldropDown'
// import Three from '@/components/three'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: ThreeLeveldropDown
      // component: Three
    }
  ]
})
