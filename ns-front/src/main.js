window.Cookies = require('js-cookie')
import Vue from 'vue'
import App from './App.vue'
import {createRouter} from './router'
const router = createRouter()
import { store } from './store'

import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios, axios)

import 'moment/locale/ru'
import moment from 'moment'
moment.locale('ru')
import VueMoment from 'vue-moment'
Vue.use(VueMoment, {
    moment,
})

import VueClipboards from 'vue-clipboards'
Vue.use(VueClipboards)

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
if (token) {
  store.commit('SAVE_TOKEN', token)
  store.dispatch('getDetails')    
} else {
  store.commit('AUTH_LOGOUT')
}
Vue.config.productionTip = false
new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
