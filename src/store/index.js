import { createStore } from "vuex";
import axios from 'axios';

export default createStore({
  state: {
    user: null,
  },
  getters: {
    isAuthenticated: state => !!state.user,    
    StateUser: state => state.user,
  },
  mutations: {
    setUser(state, name){
      state.user = name
  },

  LogOut(state){
      state.user = null
  },
    
  },
  actions: {
    async register({dispatch}, form) {
      await axios.post('register', form)
      let UserForm = new FormData()
      UserForm.append('name', form.name)
      UserForm.append('password', form.password)
      await dispatch('LogIn', UserForm)
    },

    async LogIn({commit}, User) {
      await axios.post('authentication/login', User)
      await commit('setUser', User.get('name'))
    },
    async LogOut({commit}){
      let user = null
      commit('logout', user)
    }
    
  },
  modules: {},
});
