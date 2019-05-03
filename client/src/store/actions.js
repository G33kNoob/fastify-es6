import axios from 'axios'

export default {

    SET_USER({commit}, user) {
        commit('SET_USER', user)
    },

    SET_USERS({ commit, state }) {
        axios.get(state.apiUrl + 'users')
             .then(res => commit('SET_USERS', res.data))
             .catch(err => console.log(err))
    },
    ADD_USER({ commit, state }, user) {
        axios.post(state.apiUrl + 'user', user)
             .then(res => commit('ADD_USER', res.data))
             .catch(err => console.log(err))
    },
    REMOVE_USER({ commit, state }, id) {
        axios.post(state.apiUrl + 'removeuser', {id: id})
             .then(res => commit('REMOVE_USER', id))
             .catch(err => console.log(err))

        //commit('REMOVE_USER', id)
    }

}