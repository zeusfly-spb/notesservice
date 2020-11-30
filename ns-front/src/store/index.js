const Cookies = require('js-cookie')
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        dialog: false,
        notes: [],
        token: null,
        authUser: null,
        registeredUser: null
    },
    actions: {
        registerUser ({commit}, data) {
            return new Promise((resolve, reject) => {
                Vue.axios.post('/register', {...data})
                    .then(res => {
                        if (res.data.error) {
                            if (res.data.error.includes('Unique')) {
                                alert('Такой логин уже занят')
                            }
                            reject(res.data.error)
                        }
                        commit('SET_REGISTERED_USER', res.data)
                        resolve(res)
                    })
                    .catch(e => reject(e))
            })
        },
        logIn ({commit}, data) {
            return new Promise((resolve, reject) => {
                Vue.axios.post('/login', {...data})
                    .then(res => {
                        if (res.status === 200 && res.statusText === 'OK' && res.data.message === 'OK' && res.data.user && res.data.token) {
                            commit('SAVE_TOKEN', res.data.token)
                            commit('SET_AUTH_USER', res.data.user)
                            resolve(res)
                        }
                    })
                    .catch(e => reject(e))
            })
        },
        getDetails ({commit}) {
            return new Promise((resolve, reject) => {
                Vue.axios.get('/details')
                    .then(res => {
                        commit('SET_AUTH_USER', res.data)
                        resolve(res)
                    })
                    .catch(e => reject(e))
            })
        },
        setNotes ({commit}, id) {
            return new Promise((resolve, reject) => {
                Vue.axios.post('/notes', {user_id: id})
                    .then(res => {
                        commit('SET_NOTES', res.data)
                        resolve(res)
                    })
                    .catch(e => reject(e))
            })
        },
        addNote ({commit}, data) {
            return new Promise((resolve, reject) => {
                Vue.axios.post('/addnote', {...data})
                    .then(res => {
                        commit('ADD_NOTE', res.data)
                        resolve(res)
                    })
                    .catch(e => reject(e))
            })
        }
    },
    mutations: {
        ADD_NOTE (state, note) {
            state.notes.unshift(note)
        },
        SET_DIALOG_VALUE (state, value) {
            state.dialog = value
        },
        SET_NOTES (state, notes) {
            state.notes = notes
        },
        AUTH_LOGOUT (state) {
            state.token = null
            state.authUser = null
            Cookies.remove('ns-token')
            delete Vue.axios.defaults.headers.common['Authorization']
        },
        SAVE_TOKEN (state, token) {
            let now = new Date()
            now.setMinutes(1 + now.getMinutes())
            Cookies.set('ns-token', token, {expires: now, path: '/'})
            setInterval(() => {
                let now = new Date()
                now.setMinutes(1 + now.getMinutes())
                Cookies.set('ns-token', token, {expires: now, path: '/'})
            }, 30000)
            Vue.axios.defaults.headers.common['Authorization'] = 'Bearer ' + token
            state.token = token
        },
        SET_AUTH_USER (state, user) {
            state.authUser = user
        },
        SET_REGISTERED_USER (state, user) {
            state.registeredUser = user
        }
    }
})