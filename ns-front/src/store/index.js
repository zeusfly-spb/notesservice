import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        authUser: null,
        registeredUser: null
    },
    actions: {
        registerUser ({commit}, data) {
            return new Promise((resolve, reject) => {
                Vue.axios.post('/register', {...data})
                    .then(res => {
                        commit('SET_REGISTERED_USER', res.data)
                        resolve(res)
                    })
                    .catch(e => reject(e))
            })
        }
    },
    mutations: {
        SET_REGISTERED_USER (state, user) {
            state.registeredUser = user
        }
    }
})