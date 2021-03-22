export const state = () => ({
  loading: true
})

export const mutations = {
  loading (state, param) {
    state.loading = param
  }
}
