<template>
    <div class="the-navbar">
        <div class="right-co-with-screen bg-white">
    <div class="logo bg-light"><router-link to="/"><img src="@/assets/icon.svg" alt=""></router-link></div>
    <ul class="list-right-center">
           <li @click="toggle = !toggle" class="menu-main"><a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="16.356" height="18.145" viewBox="0 0 448 512"><!-- Font Awesome Pro 5.15.4 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) --><path d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"/></svg>
          </a></li>

        <li><router-link to="/add"><svg xmlns="http://www.w3.org/2000/svg" width="13.667" height="13.667" viewBox="0 0 13.667 13.667">
            <g id="Icon_feather-plus" data-name="Icon feather-plus" transform="translate(-3.167 -3.167)">
              <path id="Path_67" data-name="Path 67" d="M10,4.167V15.833" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
              <path id="Path_68" data-name="Path 68" d="M4.167,10H15.833" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
            </g>
          </svg>
          </router-link></li>
           <li><router-link to="/search" ><svg  width="14.099" height="14.099" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M500.3 443.7l-119.7-119.7c27.22-40.41 40.65-90.9 33.46-144.7C401.8 87.79 326.8 13.32 235.2 1.723C99.01-15.51-15.51 99.01 1.724 235.2c11.6 91.64 86.08 166.7 177.6 178.9c53.8 7.189 104.3-6.236 144.7-33.46l119.7 119.7c15.62 15.62 40.95 15.62 56.57 0C515.9 484.7 515.9 459.3 500.3 443.7zM79.1 208c0-70.58 57.42-128 128-128s128 57.42 128 128c0 70.58-57.42 128-128 128S79.1 278.6 79.1 208z"/></svg>
          </router-link></li>
        <li><router-link to="/favorite" ><svg xmlns="http://www.w3.org/2000/svg" width="16.667" height="15.833" viewBox="0 0 16.667 15.833">
            <path id="Icon_material-star" data-name="Icon material-star" d="M10,14.392,15.15,17.5l-1.367-5.858L18.333,7.7l-5.992-.508L10,1.667,7.658,7.192,1.667,7.7l4.55,3.942L4.85,17.5Z" transform="translate(-1.667 -1.667)"/>
          </svg>
          </router-link></li>
        <li><router-link to="/readlater"><svg xmlns="http://www.w3.org/2000/svg" width="14.099" height="14.099" viewBox="0 0 14.099 14.099">
            <path id="Icon_awesome-book-reader" data-name="Icon awesome-book-reader" d="M9.693,2.644A2.644,2.644,0,1,0,7.05,5.287,2.644,2.644,0,0,0,9.693,2.644Zm-3.261,4A13.509,13.509,0,0,0,.821,5.289.762.762,0,0,0,0,6.034V12.17a.757.757,0,0,0,.729.745,14.813,14.813,0,0,1,5.316,1.141.383.383,0,0,0,.564-.327V6.955a.366.366,0,0,0-.177-.316Zm6.846-1.351A13.5,13.5,0,0,0,7.667,6.639a.373.373,0,0,0-.177.32v6.768a.384.384,0,0,0,.566.328,14.819,14.819,0,0,1,5.314-1.14.758.758,0,0,0,.729-.745V6.034a.762.762,0,0,0-.821-.746Z"/>
          </svg>
          </router-link></li>
        <!-- <li><a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="16.02" height="16.02" viewBox="0 0 16.02 16.02">
            <path id="Icon_ionic-md-moon" data-name="Icon ionic-md-moon" d="M7.617,4.883A7.436,7.436,0,0,1,8.2,1.988,8.125,8.125,0,1,0,18.012,11.8a7.45,7.45,0,0,1-2.895.582A7.5,7.5,0,0,1,7.617,4.883Z" transform="translate(-1.992 -1.988)"/>
          </svg>
          </a></li> -->
        <li><router-link to="/faq" ><svg xmlns="http://www.w3.org/2000/svg" width="18.333" height="18.333" viewBox="0 0 18.333 18.333">
            <g id="Icon_feather-help-circle" data-name="Icon feather-help-circle" transform="translate(0.833 0.833)">
              <path id="Path_8" data-name="Path 8" d="M18.333,10A8.333,8.333,0,1,1,10,1.667,8.333,8.333,0,0,1,18.333,10Z" transform="translate(-1.667 -1.667)" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.667"/>
              <path id="Path_9" data-name="Path 9" d="M7.575,7.5a2.5,2.5,0,0,1,4.858.833c0,1.667-2.5,2.5-2.5,2.5" transform="translate(-1.667 -1.667)" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.667"/>
              <path id="Path_10" data-name="Path 10" d="M10,14.167h0" transform="translate(-1.667 -1.667)" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.667"/>
            </g>
          </svg>
          </router-link></li>
    </ul>
    <ul class="list-under">
  
        <li><a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="16.356" height="18.145" viewBox="0 0 16.356 18.145">
            <path id="Icon_awesome-google-play" data-name="Icon awesome-google-play" d="M12.413,8.3,4.59.461l9.953,5.714L12.413,8.3ZM2.548,0a1.378,1.378,0,0,0-.769,1.251V16.893a1.378,1.378,0,0,0,.769,1.251l9.1-9.074ZM17.62,8,15.532,6.788,13.2,9.074l2.329,2.286,2.13-1.209A1.422,1.422,0,0,0,17.62,8ZM4.59,17.687l9.953-5.714-2.13-2.13Z" transform="translate(-1.779)"/>
          </svg>
          </a></li>
        <li><a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="19.723" height="19.723" viewBox="0 0 19.723 19.723">
            <path id="Icon_awesome-app-store" data-name="Icon awesome-app-store" d="M10.42,5.052l.362-.624a.812.812,0,0,1,1.408.811L8.71,11.263h2.517a1.114,1.114,0,0,1,.919,1.622H4.77a.811.811,0,0,1,0-1.622H6.837L9.486,6.674,8.659,5.239a.812.812,0,0,1,1.408-.811l.354.624ZM7.291,13.721l-.779,1.352A.812.812,0,1,1,5.1,14.261l.581-1a1.385,1.385,0,0,1,1.606.461Zm6.716-2.453h2.111a.811.811,0,0,1,0,1.622H14.945l.791,1.372a.812.812,0,1,1-1.408.811q-2-3.465-3-5.193a2.24,2.24,0,0,1,.286-2.748q.8,1.372,2.39,4.135ZM10.424.563a9.862,9.862,0,1,0,9.862,9.862A9.86,9.86,0,0,0,10.424.563Zm8.589,9.862a8.589,8.589,0,1,1-8.589-8.589A8.589,8.589,0,0,1,19.013,10.424Z" transform="translate(-0.563 -0.563)"/>
          </svg>
          </a></li>
          <li v-if="store_categories[0]" @click="logout()">خروج</li>
        <li v-else><router-link to="/login"><svg id="Group_11" data-name="Group 11" xmlns="http://www.w3.org/2000/svg" width="17.492" height="15.305" viewBox="0 0 17.492 15.305">
            <path id="Icon_open-account-login" data-name="Icon open-account-login" d="M6.559,0V2.186h8.746V13.119H6.559v2.186H17.492V0ZM8.746,4.373V6.559H0V8.746H8.746v2.186l4.373-3.28Z" transform="translate(0)" fill="#f9a730"/>
          </svg>
          </router-link></li>
    </ul>
</div>
<div class="main-list-after-right" :class="{ show: toggle }">
    <ul class="list-main">
        <li>
            <router-link to="/">
                <span class="icon"><svg xmlns="http://www.w3.org/2000/svg" width="11.182" height="10.322" viewBox="0 0 11.182 10.322">
                    <path id="Icon_ionic-md-home" data-name="Icon ionic-md-home" d="M7.676,14.822V11.381h2.581v3.441H12.88V9.661h1.677L8.966,4.5,3.375,9.661H5.052v5.161Z" transform="translate(-3.375 -4.5)"/>
                  </svg>
                  </span>
                <span class="text">الرئيسية</span>
            </router-link>
        </li>
        <li>
            <router-link to="/editor">
                <span class="icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="12.577" height="8.384" viewBox="0 0 576 512"><!-- Font Awesome Pro 5.15.4 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) --><path d="M552 64H112c-20.858 0-38.643 13.377-45.248 32H24c-13.255 0-24 10.745-24 24v272c0 30.928 25.072 56 56 56h496c13.255 0 24-10.745 24-24V88c0-13.255-10.745-24-24-24zM48 392V144h16v248c0 4.411-3.589 8-8 8s-8-3.589-8-8zm480 8H111.422c.374-2.614.578-5.283.578-8V112h416v288zM172 280h136c6.627 0 12-5.373 12-12v-96c0-6.627-5.373-12-12-12H172c-6.627 0-12 5.373-12 12v96c0 6.627 5.373 12 12 12zm28-80h80v40h-80v-40zm-40 140v-24c0-6.627 5.373-12 12-12h136c6.627 0 12 5.373 12 12v24c0 6.627-5.373 12-12 12H172c-6.627 0-12-5.373-12-12zm192 0v-24c0-6.627 5.373-12 12-12h104c6.627 0 12 5.373 12 12v24c0 6.627-5.373 12-12 12H364c-6.627 0-12-5.373-12-12zm0-144v-24c0-6.627 5.373-12 12-12h104c6.627 0 12 5.373 12 12v24c0 6.627-5.373 12-12 12H364c-6.627 0-12-5.373-12-12zm0 72v-24c0-6.627 5.373-12 12-12h104c6.627 0 12 5.373 12 12v24c0 6.627-5.373 12-12 12H364c-6.627 0-12-5.373-12-12z"/></svg>                
                  </span>
                <span class="text">اخبار المحررين</span>
            </router-link>
        </li>
        <li>
            <router-link to="/catogores">
                <span class="icon"><svg xmlns="http://www.w3.org/2000/svg" width="12.577" height="8.384" viewBox="0 0 12.577 8.384">
                    <path id="Icon_awesome-newspaper" data-name="Icon awesome-newspaper" d="M12.053,4.5H1.921a.524.524,0,0,0-.524.524V5.2H.524A.524.524,0,0,0,0,5.723v5.939a1.223,1.223,0,0,0,1.223,1.223H11.529a1.048,1.048,0,0,0,1.048-1.048V5.024A.524.524,0,0,0,12.053,4.5ZM1.223,11.836a.175.175,0,0,1-.175-.175V6.247H1.4v5.415A.175.175,0,0,1,1.223,11.836Zm5.153-.349H3.057a.262.262,0,0,1-.262-.262V11.05a.262.262,0,0,1,.262-.262H6.376a.262.262,0,0,1,.262.262v.175A.262.262,0,0,1,6.376,11.487Zm4.542,0H7.6a.262.262,0,0,1-.262-.262V11.05a.262.262,0,0,1,.262-.262h3.319a.262.262,0,0,1,.262.262v.175A.262.262,0,0,1,10.917,11.487Zm-4.542-2.1H3.057a.262.262,0,0,1-.262-.262V8.954a.262.262,0,0,1,.262-.262H6.376a.262.262,0,0,1,.262.262v.175A.262.262,0,0,1,6.376,9.391Zm4.542,0H7.6a.262.262,0,0,1-.262-.262V8.954A.262.262,0,0,1,7.6,8.692h3.319a.262.262,0,0,1,.262.262v.175A.262.262,0,0,1,10.917,9.391Zm0-2.1H3.057a.262.262,0,0,1-.262-.262V6.159A.262.262,0,0,1,3.057,5.9h7.86a.262.262,0,0,1,.262.262v.873A.262.262,0,0,1,10.917,7.295Z" transform="translate(0 -4.5)" fill="#f9a730"/>
                  </svg>                  
                  </span>
                <span class="text">الاقسام</span>
            </router-link>
        </li>
  

        <li v-for="item in store_categories" :key="item.uuid">
            <router-link :to="'/catogory/'+item.uuid" href="#">
                <span class="icon"><img :src="'https://newsapp.be875981ca9416725.temporary.link/'+item.file" alt="">
                  </span>
                <span class="text">{{item.name}}</span>
            </router-link >
            <ul class="drop-down">
                <li v-for="channel in item.user_system_channel" :key="channel.uuid"><router-link :to="'/channel/'+channel.uuid">{{channel.name}}</router-link></li>
            </ul>
        </li>
        
    </ul>
</div>
    </div>
</template>

<script>
import { mapActions } from "vuex";
import axios from 'axios';
export default {
    name : "NaveBar",
    computed : {
      store_categories(){
        return  this.$store.state.items;
      },
      isLoggedIn(){ return this.$store.getters.isAuthenticated},
    },
    data: function(){
      return{
          categories_with_channels:[],
          categories:[],
          toggle: false,
      }
  },
  created(){
   this.categories = this.$store.state.items;
    if(this.categories != null){
      this.categories_with_channels = this.categories
    }
  },

      mounted () {
        this.getdataChannels();
    }, 
    methods: {
      getdataChannels(){

        if(this.$store.state.token){

    
        this.$store.dispatch('loadItems');
      axios.get(`user_categories_with_user_channels` , 
      { 
        headers: {"Authorization" : `Bearer ${this.$store.state.token}`} 
      })
      .then(res => {
        console.log(res.code);
          if(this.categories != null){
        this.categories_with_channels = res.data.data ;
          }
      }) 
      .catch((error)=> {
        console.log(error.message);
                // this.erorrsData = error.response.data.errors ;
        });

    }
      },
       ...mapActions(["loadItems"]),

      async logout(){
        await this.$store.dispatch('LogOut')
        
        localStorage.removeItem("accessToken");
        localStorage.removeItem("accessUser");
       setTimeout((this.$router.push('/login')), 2000);
        this.isLoggedIn();
        this.getdataChannels();
        this.categories_with_channels = [];
      }
    },
}
</script>   
<style lang="scss">
  .main-list-after-right{
    @media screen and(max-width:980px) {
      position: absolute;
      height: 100%;
      right: -350px;
      z-index: 99;
      transition: 0.3s ease-in-out;
      &.show{
      right: 70px;
    margin: 0;
    width: calc(100% - 70px);
    z-index: 999;
      }
    }
  }
  .content-page{
    @media screen and(max-width:980px) {
      padding-right: 70px !important;
    }
  }
  .menu-main{
    display: none;
      @media screen and(max-width:980px) {
     display: block !important;
    }
  }
</style>