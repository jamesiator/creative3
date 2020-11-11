import Vue from 'vue'
import App from './App.vue'
import router from './router'
import mock from './MOCK_DATA.js'

let data = {
  flights: mock,
  bookings: [],
  currentFlight: ''
}

Vue.config.productionTip = false

new Vue({
  router,
  data,
  render: h => h(App)
}).$mount('#app')
