<template>
    <div class="channel">
<div class="head-content px-3 pt-0 bg-light">
    <div class="row justify-content-between align-items-center  py-3">
        <div class="col-auto">
            <div v-if="channels.name" class="category-title my-0 py-0">{{channels.name}}</div>
        </div>
      
    </div>
   
</div>
<div class="loop-news px-4 py-4">
  
    <div class="row g-4">
        <div v-if="!channels.systemNews">
        لا يوجد اخبار
        </div>
        <div v-for="chanle in channels.systemNews" :key="chanle" class="col-lg-4 col-md-6">
            <div class="item-news">
                <router-link :to="'/news-dt/'+chanle.uuid" >
                    <div class="news-slide small-slid">
                        <img v-if="!chanle.file" src="https://newsapp.be875981ca9416725.temporary.link/images/Splash.jpg" alt="">
                        <img v-else :src="chanle.file" alt="">
                        <div class="content-news-slider">
                            <div class="date-cat-top">
                                <span class="date-slide d-inline-flex align-items-center">
                                 
                                    <span class="mx-1 chanel">
                                        <span><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
                                            <g id="Group_39" data-name="Group 39" transform="translate(-1081 -293)">
                                              <circle id="Ellipse_3" data-name="Ellipse 3" cx="10" cy="10" r="10" transform="translate(1081 293)" fill="#fff" opacity="0.14"/>
                                              <g id="Icon_material-rss-feed" data-name="Icon material-rss-feed" transform="translate(1082.513 293.646)">
                                                <path id="Path_48" data-name="Path 48" d="M6.222,14.478a1.444,1.444,0,1,1-1.444-1.444,1.444,1.444,0,0,1,1.444,1.444Z" transform="translate(0 -1.913)" fill="#fff"/>
                                                <path id="Path_49" data-name="Path 49" d="M3.333,3.7V5.575a8.434,8.434,0,0,1,8.433,8.433h1.875A10.311,10.311,0,0,0,3.333,3.7Zm0,3.75V9.325a4.688,4.688,0,0,1,4.684,4.684H9.892A6.557,6.557,0,0,0,3.333,7.45Z" fill="#fff"/>
                                              </g>
                                            </g>
                                          </svg>
                                          </span>
                                          <span>{{channels.name}}</span>
                                    </span>
                                     </span>
                                </div>
                            </div>
                        </div>
                        <div class="title-news mt-2">{{ chanle.title }}</div>
                        <div class="date-news my-1 py-1"><span><svg xmlns="http://www.w3.org/2000/svg" width="11.175" height="12.417" viewBox="0 0 11.175 12.417">
                            <path id="Icon_material-date-range" data-name="Icon material-date-range" d="M6.225,7.254H4.983V8.5H6.225Zm2.483,0H7.467V8.5H8.708Zm2.483,0H9.95V8.5h1.242Zm1.242-4.346h-.621V1.667H10.571V2.908H5.6V1.667H4.362V2.908H3.742A1.236,1.236,0,0,0,2.506,4.15L2.5,12.842a1.241,1.241,0,0,0,1.242,1.242h8.692a1.245,1.245,0,0,0,1.242-1.242V4.15A1.245,1.245,0,0,0,12.433,2.908Zm0,9.933H3.742V6.012h8.692v6.829Z" transform="translate(-2.5 -1.667)" fill="#6a6a6a"/>
                          </svg>
                          </span>    <span>{{chanle.date }}</span></div>
                        
                </router-link>
                
            </div>
        </div>


    </div>
</div>
    </div>
</template>


<script>

import axios from 'axios';
export default {
  name: "TheChannel",
  components: {
   
  },
    data: function(){
      return{
          channels:[],
          
      }
  },
  created () {
      this.$watch(
      () => this.$route.params,
      () => {
        this.getData(this.$route.params.id)
      },
  
      { immediate: true }
    );


    }, 
    methods:{
        getData(link){
        axios.get(`guest/system_channels/${link}` )
        .then(res => {
        this.channels = res.data.data ;


       
        })
        }
        ,



    },


};
</script>