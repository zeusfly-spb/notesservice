window.Cookies = require('js-cookie')
import Vue from 'vue'
import App from './App.vue'
import {createRouter} from './router'
const router = createRouter()
import { store } from './store'

import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios, axios)

Vue.axios.defaults.headers.common['Accept'] = 'application/json'
Vue.axios.defaults.baseURL = process.env.VUE_APP_BASE_URL
Vue.axios.interceptors.response.use(
  response => {
      return response;
  },
  function(error) {
      if (error.response && error.response.status === 401) {
          router.replace('/login');
      }
      return Promise.reject(error.response);
  }
)

const token = window.Cookies.get('ns-token')
console.log(token)
if (token) {
  store.commit('SAVE_TOKEN', token)
    // Vue.axios.defaults.headers.common['Authorization'] = 'Bearer ' + token
    // setInterval(() => {
    //     let now = new Date()
    //     now.setMinutes(1 + now.getMinutes())
    //     window.Cookies.set('isi-token', token, {expires: now, path: '/'})
    // }, 30000)

} else {

    // store.dispatch('logOut')
    //     .then(() => router.push('/login'))
}

Vue.config.productionTip = false
new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
