import Vue from 'vue'
import vuex from 'vuex'
import axios from '../firebase/auth.js'
//import globalAxios from 'axios'
//import { router } from '../main.js'
Vue.use(vuex)

export const store = new vuex.Store({
    state: {
        compaigns: [{
                id: 1,
                title: 'title 1',
                detail: 'Lorem ipsum dolor sit amet perferendis quidem accusamus adipisci. Tempore, et minus.',
                donationPercent: 50,
                value: 20000,
                amount: 14000,
                remain: 6000
            },
            {
                id: 2,
                title: 'title 2',
                detail: 'Lorem ipsum dolor sit amet perferendis quidem accusamus adipisci. Tempore, et minus.',
                donationPercent: 25,
                value: 20000,
                amount: 14000,
                remain: 6000
            },
            {
                id: 3,
                title: 'title 3',
                detail: 'Lorem ipsum dolor sit amet perferendis quidem accusamus adipisci. Tempore, et minus.',
                donationPercent: 50,
                value: 20000,
                amount: 14000,
                remain: 6000
            },
            {
                id: 4,
                title: 'title 4',
                detail: 'Lorem ipsum dolor sit amet perferendis quidem accusamus adipisci. Tempore, et minus.',
                donationPercent: 100,
                value: 20000,
                amount: 14000,
                remain: 6000
            }
        ],
        currentID: 0,
        signin: false,
        singnup: false,
        profile: false,
        user: {
            idToken: null,
            localId: null,
            email: null
        },
        apiKey: "AIzaSyBLR7OtP-dWcMceaESxkF4Bd5xKnmve84Y"

    },
    getters: {
        getCurrentID(state) {
            return state.currentID
        },
        //navigation popups getters
        getSignIn(state) {
            return state.signin
        },
        getSignUp(state) {
            return state.singnup
        },
        getProfile(state) {
            return state.profile
        },
        getIdToken(state) {
            return state.user.idToken
        }

    },
    mutations: {
        setCurrentID(state, id) {
            state.currentID = id
        },
        //navigation popups mutations
        setSignIn(state, showState) {
            state.signin = showState
        },
        setSignUp(state, showState) {
            state.singnup = showState
        },
        setProfile(state, showState) {
            state.profile = showState
        },
        authUser(state, apiReponse) {
            state.user.idToken = apiReponse.data.idToken
            state.user.localId = apiReponse.data.localId
        }
    },
    actions: {
        actionSignIn({ commit }, showState) {
            commit('setSignIn', showState)
        },
        actionSignUp({ commit }, showState) {
            commit('setSignUp', showState)
        },
        signup({ state, commit }, userAuth) {
            axios.post('/v1/accounts:signUp?key=' + state.apiKey, {
                    email: userAuth.email,
                    password: userAuth.password,
                    returnSecureToken: true
                })
                .then(function(response) {
                    commit('authUser', response)
                    axios.post('/v1/accounts:sendOobCode?key=' + state.apiKey, {
                            requestType: "VERIFY_EMAIL",
                            idToken: state.user.idToken
                        })
                        .then(function(response) {
                            console.log(response)
                        }).catch(function(error) {
                            console.log(error)
                        })

                })
                .catch(function(error) {
                    console.log(error)
                })
        },
        signin({ state, commit }, userAuth) {
            axios.post('v1/accounts:signInWithPassword?key=' + state.apiKey, {
                    email: userAuth.email,
                    password: userAuth.password,
                    returnSecureToken: true
                })
                .then(function(response) {
                    commit('authUser', response)
                    axios.post('v1/accounts:lookup?key=' + state.apiKey, {
                            idToken: state.user.idToken
                        })
                        .then(function(response) {
                            if (response.data.users[0].emailVerified) {
                                console.log('email verified')
                                commit('setProfile', true)
                            }
                        })
                        .catch(error => {
                            console.log(error)
                        })
                })
                .catch(function(error) {
                    console.log(error)
                })
        }
    }


})