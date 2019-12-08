export const state = () => ({
  user: {},
  authenticated: false
})
export const mutations = {
  login(state, user) {
    state.user = user
    state.authenticated = true
  }
}
export const getters = {
  logged(state) {
    return state.authenticated
  }
}
