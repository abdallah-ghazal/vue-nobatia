<template>
    <div class="favorite">
<div class="head-content px-3 pt-0 bg-light">
    <div class="row justify-content-between align-items-center  py-3">
        <div class="col-auto">
            <div class="category-title my-0 py-0" @click="getData()">المفضلة</div>
        </div>
      
    </div>
   
</div>
<div class="loop-news px-4 py-4">
  
    <div class="row g-4" v-if="readlist[0]">
        <div v-for="news in readlist" :key="news.uuid" class="col-lg-4 col-md-6">
            <div class="item-news">
                <router-link :to="'/news-dt/'+news.uuid">
                    <div class="news-slide small-slid">
                         <img v-if="news.thumbnail !=null" :src="news.thumbnail" alt="">
                        <img v-else src="@/assets/logo-text.png" alt="">
                        <div class="content-news-slider">
                            <div class="date-cat-top">
                                <span class="date-slide d-inline-flex align-items-center">
                                   
                                    <span class="mx-1 favoret  bg-danger" @click="removeItem(news.uuid)">
                                          <svg width="14" height="14" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!-- Font Awesome Pro 5.15.4 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) --><path fill="#fff" d="M32 464a48 48 0 0 0 48 48h288a48 48 0 0 0 48-48V128H32zm272-256a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zm-96 0a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zm-96 0a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zM432 32H312l-9.4-18.7A24 24 0 0 0 281.1 0H166.8a23.72 23.72 0 0 0-21.4 13.3L136 32H16A16 16 0 0 0 0 48v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16z"/></svg>
     
                                    </span>
                                 
                                     </span>
                                </div>
                            </div>
                        </div>
                        <div class="title-news mt-2"><a href="#">{{news.title}}</a></div>
                        <div class="date-news my-1 py-1"><span><svg xmlns="http://www.w3.org/2000/svg" width="11.175" height="12.417" viewBox="0 0 11.175 12.417">
                            <path id="Icon_material-date-range" data-name="Icon material-date-range" d="M6.225,7.254H4.983V8.5H6.225Zm2.483,0H7.467V8.5H8.708Zm2.483,0H9.95V8.5h1.242Zm1.242-4.346h-.621V1.667H10.571V2.908H5.6V1.667H4.362V2.908H3.742A1.236,1.236,0,0,0,2.506,4.15L2.5,12.842a1.241,1.241,0,0,0,1.242,1.242h8.692a1.245,1.245,0,0,0,1.242-1.242V4.15A1.245,1.245,0,0,0,12.433,2.908Zm0,9.933H3.742V6.012h8.692v6.829Z" transform="translate(-2.5 -1.667)" fill="#6a6a6a"/>
                          </svg>
                          </span>    <span>{{news.date}}</span></div>
                       
                </router-link>
                
            </div>
        </div>
  
    </div>
    <div v-else>
        لا يوجد اخبار في المفضلة
    </div>
</div>
    </div>
</template>


<script>
import { createToaster } from "@meforma/vue-toaster";
const toaster = createToaster({ /* options */ });

import axios from 'axios';
export default {
  name: "TheFavorite",
  components: {
   
  },
  data: function(){
    return {
        readlist : [],
    }
  },
    mounted () {

    }, 
    created(){
this.getData();
    },
    methods:{
        removeItem(item){
axios.delete(`delete_fovarite_news/${item}` , { headers: {"Authorization" : `Bearer ${this.$store.state.token}`} })
 .then(response => {
                 console.log(response.data.message);
                  toaster.success(response.data.message);
                 this.getData() ;
             })
             .catch(function (error) {
                console.log(error.response);
                 toaster.error(error.response);
             })
        },
    getData(){
        
        axios.get(`user_news_fovarite` , { headers: {"Authorization" : `Bearer ${this.$store.state.token}`} })
        .then(res => {
        this.readlist = res.data.data ;
        }).catch(function (error) {
                console.log(error.res)
             })
    }
    }
};
</script>