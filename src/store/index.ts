import Vue from 'vue'
import Vuex from 'vuex'
// import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

export default new Vuex.Store({
  /* state: {
    jwt: null as string | null
  },
  mutations: {
    setJwt (state, jwt: string | null) {
      state.jwt = jwt
    }
  },
  getters: {
    isAuthenticated (context): boolean {
      return context.jwt !== null
    }
  },
  actions: {
    clearJwt (context): void {
      context.commit('setJwt', null)
    },
    async authenticateUser (context, loginDTO: ILoginDTO): Promise<boolean> {
      const jwt = await Account.getJwt(loginDTO)
      context.commit('setJwt', jwt)
      return jwt !== null
    }
  },
  modules: {

  } */
})
