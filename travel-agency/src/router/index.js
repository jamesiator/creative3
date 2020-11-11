import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Flight from '../views/Flight.vue'
import Bookings from '../views/Bookings.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/flight',
    name: 'Flight',
    component: Flight
  },
  {
    path: '/bookings',
    name: 'Bookings',
    component: Bookings
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
