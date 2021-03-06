const Cookies = require('js-cookie')
import { reject } from 'lodash'
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        sharedNote: null,
        deletingNote: null,
        editingNote: null,
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
        },
        updateNote ({commit}, data) {
            return new Promise((resolve, reject) => {
                Vue.axios.post('/update_note', {...data})
                    .then(res => {
                        commit('UPDATE_NOTE', res.data)
                        resolve(res)
                    })
                    .catch(e => reject(e))
            })
        },
        deleteNote ({commit}, id) {
            return new Promise ((resolve, reject) => {
                Vue.axios.post('/delete_note', {id: id})
                    .then(res => {
                        commit('DELETE_NOTE', res.data.id)
                        resolve(res)
                    })
                    .catch(e => reject(e))
            })
        },
        shareNote ({commit}, data) {
            return new Promise((resolve, reject) => {
                Vue.axios.post('/share_note', {...data})
                    .then(res => {
                        commit('UPDATE_NOTE', res.data)
                        resolve(res)
                    })
                    .catch(e => reject(e))
            })
        },
        getSharedNote ({commit}, link) {
            console.log('getting note by link: ' + link)
            return new Promise((resolve, reject) => {
                Vue.axios.post('/shared', {link: link})
                    .then(res => {
                        commit('SET_SHARED_NOTE', res.data)
                        resolve(res)                        
                    })
                    .catch(e => reject(e))
            })
        }
    },
    mutations: {
        SET_SHARED_NOTE (state, note) {
            state.sharedNote = note
        },
        DELETE_NOTE (state, id) {
            state.notes = state.notes.filter(item => +item.id != +id)
            state.deletingNote = null
        },
        SET_DELETING_NOTE (state, note) {
            state.deletingNote = note
        },
        UPDATE_NOTE (state, note) {
            state.notes = state.notes.map(item => +item.id === +note.id ? note : item)
        },
        SET_EDITING_NOTE (state, note) {
            state.editingNote = note
        },
        ADD_NOTE (state, note) {
            state.notes.push(note)
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
            state.notes = []
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