export default {
    SET_TOKEN(state, token) {
        state.token = token
    },

    SET_USERS(state, users) {
        console.log(users)
        state.users = users
    },

    CLEAR_LOCAL_STORE() {
        localStorage.removeItem('token');
        localStorage.removeItem('token_expiration');
    }
}