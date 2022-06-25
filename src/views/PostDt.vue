<template>

    <div class="postdt" v-if="newsDt">
            <div class="head-content px-3 pt-0 bg-light">
        <div class="row justify-content-between align-items-center  py-3">
            <div class="col-auto">
              
                <div class="category-title my-0 py-0">
                    {{newsDt.title}}
                </div>
        
            </div>
          
        </div>
       
    </div>
     
    
    <div class="px-3">
        <div class=" row gx-1">
        <div class="col-lg-8">
            <div class="content-news-dt bg-white p-4 ">
        <div class="img-dt-main">
           <img :src="newsDt.thumbnail" v-if="newsDt.thumbnail" height="500" width="100%" alt=""> 
           <img src="@/assets/02.svg" class=" d-block w-100 border m-auto" v-else height="400" width="100%" alt=""> 
        </div>
        <div class="row justify-content-between align-items-center g-2  my-2" >
            <div class="col-auto">
                <div class="date-news my-1 py-1"><span><svg xmlns="http://www.w3.org/2000/svg" width="11.175" height="12.417" viewBox="0 0 11.175 12.417">
                    <path id="Icon_material-date-range" data-name="Icon material-date-range" d="M6.225,7.254H4.983V8.5H6.225Zm2.483,0H7.467V8.5H8.708Zm2.483,0H9.95V8.5h1.242Zm1.242-4.346h-.621V1.667H10.571V2.908H5.6V1.667H4.362V2.908H3.742A1.236,1.236,0,0,0,2.506,4.15L2.5,12.842a1.241,1.241,0,0,0,1.242,1.242h8.692a1.245,1.245,0,0,0,1.242-1.242V4.15A1.245,1.245,0,0,0,12.433,2.908Zm0,9.933H3.742V6.012h8.692v6.829Z" transform="translate(-2.5 -1.667)" fill="#6a6a6a"/>
                  </svg>
                  </span>    <span>{{newsDt.date}}</span></div>
            </div>
            <div class="col-auto">
                <div class="date-cat-top mt-2">
                    <span class="date-slide d-inline-flex align-items-center">
                        <span class="me-1 favoret"  @click="addToReadLater(newsDt.uuid)">
                            <svg xmlns="http://www.w3.org/2000/svg" width="14.099" height="14.099" viewBox="0 0 14.099 14.099">
                                <path id="Icon_awesome-book-reader" data-name="Icon awesome-book-reader" d="M9.693,2.644A2.644,2.644,0,1,0,7.05,5.287,2.644,2.644,0,0,0,9.693,2.644Zm-3.261,4A13.509,13.509,0,0,0,.821,5.289.762.762,0,0,0,0,6.034V12.17a.757.757,0,0,0,.729.745,14.813,14.813,0,0,1,5.316,1.141.383.383,0,0,0,.564-.327V6.955a.366.366,0,0,0-.177-.316Zm6.846-1.351A13.5,13.5,0,0,0,7.667,6.639a.373.373,0,0,0-.177.32v6.768a.384.384,0,0,0,.566.328,14.819,14.819,0,0,1,5.314-1.14.758.758,0,0,0,.729-.745V6.034a.762.762,0,0,0-.821-.746Z" fill="#fff"/>
                              </svg>
                              
                              
                        </span>
                        <span class="me-1 favoret" @click="addToFavorite(newsDt.uuid)">
                            <svg xmlns="http://www.w3.org/2000/svg" width="14.731" height="14.099" viewBox="0 0 14.731 14.099">
                                <path id="Icon_awesome-star" data-name="Icon awesome-star" d="M7.376.49l-1.8,3.645-4.023.586a.882.882,0,0,0-.487,1.5l2.91,2.836L3.29,13.067A.881.881,0,0,0,4.567,14l3.6-1.892L11.765,14a.881.881,0,0,0,1.278-.928l-.688-4.006,2.91-2.836a.882.882,0,0,0-.487-1.5l-4.023-.586L8.956.49A.882.882,0,0,0,7.376.49Z" transform="translate(-0.801 0)" fill="#fff"/>
                              </svg>
                              
                        </span>
                        <router-link :to="'/channel/'+newsDt.channel.uuid" class="mx-2 chanel" >
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
                              <span>{{newsDt.channel_name}}</span>
                        </router-link>
                        </span>
                    </div>
            </div>
        </div>
        <div class="content-dt">
          {{newsDt.description}} 
            
        </div>
    </div>
        </div>
        <div class="col-lg-4 px-1">
            <div class="list-news-left card   my-4">
                <div class=" card-header p-2 text-bold text-primary">اخبار ذات صلة</div>
                <div class="card-body p-2">
                    <div class="row gy-2">
                                  <div class="col-12" v-for=" news in channels_news.splice(0,5)" :key="news.uuid">
                                    <div class="item-news bg-light p-1">
                                        <router-link :to="'/news-dt/'+news.uuid">
                                            <div class="d-flex">
                                                    <div class="content-w-100 p-1 px-2">
                                                        <div class="title-news small-text mt-2 "><a href="#">{{news.title}}</a></div>
                                                        <div class="date-news my-1 py-1"><span><svg xmlns="http://www.w3.org/2000/svg" width="11.175" height="12.417" viewBox="0 0 11.175 12.417">
                                                            <path id="Icon_material-date-range" data-name="Icon material-date-range" d="M6.225,7.254H4.983V8.5H6.225Zm2.483,0H7.467V8.5H8.708Zm2.483,0H9.95V8.5h1.242Zm1.242-4.346h-.621V1.667H10.571V2.908H5.6V1.667H4.362V2.908H3.742A1.236,1.236,0,0,0,2.506,4.15L2.5,12.842a1.241,1.241,0,0,0,1.242,1.242h8.692a1.245,1.245,0,0,0,1.242-1.242V4.15A1.245,1.245,0,0,0,12.433,2.908Zm0,9.933H3.742V6.012h8.692v6.829Z" transform="translate(-2.5 -1.667)" fill="#6a6a6a"/>
                                                        </svg>
                                                        </span>    <span class="date">{{news.date}}</span></div>
                                                
                                                    </div>
                                            </div>
                                                </router-link>
                                        
                                    </div>
                                </div>
                                
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
    </div>
</template>

<script >
import { createToaster } from "@meforma/vue-toaster";
const toaster = createToaster({ /* options */ });
import axios from "axios";
export default {
    name:"PostDt",
    data: function(){
        return{
            newsDt:null,
            haveToken : this.$store.state.token ,
            channel : '',
            channels_news:[],
        }
    },
 created(){
        this.$watch(
      () => this.$route.params,
      () => {
        this.getPostData(this.$route.params.id)
      },
  
      { immediate: true },
    );
 }, 

    methods:{
         getPostData(idPost){
       //   let redict = this.$router ; 
        axios.get(`guest/system_news/${idPost}`)
        .then(res => {
        this.newsDt = res.data.data ;
        this.channel =res.data.data.channel.uuid



            let linke = this.channel
        axios.get(`guest/system_channels/${linke}` )
        .then(res => {
        this.channels_news = res.data.data.systemNews ;
        })


        console.log(res);
        }).catch(function (error) {
                console.log("error "+ error.res)
             })
         },
  
         addToFavorite(item){
          if(this.haveToken != null)
          {
       
      axios.post(`add_user_fovarite_news` , { uuid : item},{ 
          
          headers: {"Authorization" : `Bearer ${this.$store.state.token}`} 
          })
      .then(res => {
    //  console.log(res.data.message);
      toaster.success(res.data.message);
      }).catch(function(error){
            console.log(error.res)
      })
          }
          else{
              toaster.warning("<div class='d-flex'>لتتمكن من استخدام هذه الميزة يتطلب منك  <a class='text-dark mx-1' href='/login'>دخول </a> / <a class='text-dark mx-1' href='/register'> تسجيل </a></div>");
          }
   
},

         addToReadLater(item){
   if(this.haveToken != null)
          {
      axios.post(`add_user_later_read_news` , { uuid : item},{ 
          
          headers: {"Authorization" : `Bearer ${this.$store.state.token}`} 
          })
      .then(res => {
    //  console.log(res.data.message);
      toaster.success(res.data.message);
       
      }).catch(function(error){
        
            console.log(error.res);
              toaster.danger(error.res);
      })

          }
 else{
            toaster.warning("<div class='d-flex'>لتتمكن من استخدام هذه الميزة يتطلب منك  <a class='text-dark mx-1' href='/login'>دخول </a> / <a class='text-dark mx-1' href='/register'> تسجيل </a></div>");
          }

},


    },
        mounted(){
            
    
        
    },
}
</script>

<style lang="scss">
    .small-text{
        font-size: 14px !important;
    }
    .date{
        font-size: 11px !important;
    }
</style>