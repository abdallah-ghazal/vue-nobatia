import { createStore } from "vuex";
import axios from 'axios';
import router from '@/router/index.js'
export default createStore({
  namespaced: true,
  state: {
    items: [],
    user: null,
    token:null,
    cat: null ,
    accessToken: null,
    cat_channels : null,
  },
  getters: {
     isAuthenticated: state => !!state.accessToken,  
  
     getcat_channels : state => state.token,
     
      items: state => {
        return state.items;
      }
     
    // StateUser: state => state.user,
  },
  mutations: {
    SET_Items (state, items) {
      state.items = items 
  },

    SET_TOKEN(state , token ){
      state.token = token
    },
    SET_USER(state , user){
      state.user = user
    },
    SET_CAT(state , cat){
      state.cat = cat
    },
    setUser(state, email){
      state.email = email

  },

  logout(state ){
      state.token = null
      state.accessToken = null
      state.items = []
     
  },
  updateAccessToken: (state, accessToken) => {
    state.accessToken = accessToken;
    state.token = accessToken;
  },
  updateAccessUser: (state, accessUser) => {
    state.user = accessUser;
  },
  SET_CAT_CHANNELS: (state , cat_channelss) => {
    state.cat_channels = cat_channelss
  }
  },
  actions: {

    loadItems ({ commit ,getters}) {

      if(getters.getcat_channels){

      
     //   alert('hi');

      axios.get(`user_categories_with_user_channels` , 
      { 
        headers: {"Authorization" : `Bearer ${getters.getcat_channels}`} 
      })
          .then(response => response.data.data)
          .then(items => {
              console.log(items);
          commit('SET_Items', items)
      })
    }

  },
    async fetchcatchnnel({ commit }) {
      try {
        const res = await axios.get('guest/categories_guest')
          commit('SET_CAT_CHANNELS', res.data)
          console.log('abc: ' + res.data)
        }
        catch (error) {
            alert(error)
            console.log(error)
        }
    },






    async register({dispatch}, form) {
      await axios.post('register', form)
      let UserForm = new FormData()
      UserForm.append('email', form.email)
      UserForm.append('password', form.password)
      await dispatch('LogIn', UserForm)
    },

    // async LogIn({commit}, User) {
    //   await axios.post('authentication/login', User)
    //   await commit('setUser', User.get('user'))
    // },
    async LogOut({commit }){
      // let token = null
      commit('logout')
  
    },

    async singIn({ dispatch }, credentials){
      
      let response = await axios.post('authentication/login' , credentials);
     // console.log(response.data)
    // alert('signin')
     localStorage.setItem('accessToken', response.data.token);
     localStorage.setItem('accessUser', response.data.user);
     dispatch('attempt' , response.data.token)
     dispatch('userdata' , response.data.user)
     dispatch('loadItems')
    },
    async attempt({ commit },token){
      commit('SET_TOKEN' , token);
      console.log(token);

      try{
        let response =await axios.get('categories' , {
          headers:{
            'Authorization':'Bearer ' + token
          }
          
        })
        commit('SET_CAT' , response.data)
        
      }
      catch(e){
        console.log('failed')
      }

    },
    fetchAccessToken({ commit }) {
      commit('updateAccessToken', localStorage.getItem('accessToken'));
      commit('updateAccessUser', localStorage.getItem('accessUser'));
    },
    async userdata({ commit },user ){
      commit('SET_USER' , user);
      console.log(user);
      setTimeout((router.push('/')), 2000);
     
      
    },

    
  },
  modules: {},
});
