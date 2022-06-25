<template>
    <div class="Add-channels">
<div class="head-content px-3 pt-0 bg-light">
    <div class="row justify-content-between align-items-center  py-3">
        <div class="col-auto">
            <div class="category-title my-0 py-0">الإشتراك في قنواتك المفضلة</div>
        </div>
      
    </div>
   
</div>

<div v-if="haveToken != null" class="loop-news px-4 py-4">
    <div class="card mb-3 p-3 shadow-sm border-0"  v-for="catitem in catogores" :key="catitem.uuid">
     <h1 class="category-title ">{{catitem.name}}</h1>
  <div class="row g-4" >

        <div v-for="cat in catitem.system_channel" :key="cat.uuid" class="col-lg-3 col-md-6">
       
            <div class="item-category border">
                <a >
                    <div class="img-check position-relative">
                        <img :src="cat.image_url" alt="">
                        <div class="check-select d-flex">
                            <div class="check-item " v-if="!cat.user_add"  @click="addChannelToFllow(cat.uuid)">
                                <div class="icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
                                        <g id="Group_39" data-name="Group 39" transform="translate(-1081 -293)">
                                          <path id="Path_52" data-name="Path 52" d="M10,0A10,10,0,1,1,0,10,10,10,0,0,1,10,0Z" transform="translate(1081 293)"/>
                                          <g id="Icon_feather-plus" data-name="Icon feather-plus" transform="translate(1081 293)">
                                            <path id="Path_53" data-name="Path 53" d="M10,4.167V15.833" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.667"/>
                                            <path id="Path_54" data-name="Path 54" d="M4.167,10H15.833" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.667"/>
                                          </g>
                                        </g>
                                      </svg>
                                      
                                </div>
                                  <div class="text">اشتراك</div>
                            </div>
                              <div v-else class="check-item checked" @click="deleteChannel(cat.uuid)">
                                                <div class="icon">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
                                                        <g id="Group_39" data-name="Group 39" transform="translate(-1081 -293)">
                                                          <path id="Path_52" data-name="Path 52" d="M10,0A10,10,0,1,1,0,10,10,10,0,0,1,10,0Z" transform="translate(1081 293)" fill="#f9a730"></path>
                                                          <path id="Icon_awesome-check" data-name="Icon awesome-check" d="M4.769,12.808.206,8.244a.7.7,0,0,1,0-.993L1.2,6.259a.7.7,0,0,1,.993,0L5.265,9.333,11.85,2.749a.7.7,0,0,1,.993,0l.993.993a.7.7,0,0,1,0,.993L5.762,12.808A.7.7,0,0,1,4.769,12.808Z" transform="translate(1083.979 295.222)" fill="#fff"></path>
                                                        </g>
                                                      </svg>
                                                </div>
                                                  <div class="text">مشترك</div>
                                            </div>
                        </div>
                      

               
                    </div>
                    <router-link :to="'/catogory/'+cat.uuid" class="title-category bg-light">
                       {{cat.name}}
                    </router-link>
                </a>
                
            </div>
        </div>  
      
 
    </div>
    </div>
  
</div>
<div v-else class="p-4">
    لتتمكن من الاستفادة من هذه الميزة من خلال  <router-link to="/login">الدخول</router-link> /  <router-link to="/register">التسجيل</router-link>
</div>
    </div>
</template>


<script>
// import { createToaster } from "@meforma/vue-toaster";
// const toaster = createToaster({ /* options */ });

import axios from 'axios';
export default {
  name: "AddChannels",
  components: {
   
  },
  data: function(){
      return{
          catogores:[],
          cat:null,
          subsicrips:[],
           haveToken : this.$store.state.token ,
      }
  },

  mounted () {
    
     if(this.haveToken != null){
    this.token = this.$store.state.token;
    axios.get("user/categories_with_channels" , { headers: {"Authorization" : `Bearer ${this.$store.state.token}`} })
    .then(res => {
    console.log('res'+res.data);
    this.catogores = res.data.data ;

         for (const chan of this.catogores) {
            for(const ite of chan.system_channel){
             console.log('ite: '+ite);
        if(ite.user_add !=null ){
            this.subsicrips.push({
              uuid:  ite.uuid
            })
        }
            } 
    }   
    })
     }
    }, 
    

  methods: {

     deleteChannel: function(id) {
        let item = '{uuid : ' + id + '}';
        console.log('item s:' + item)
        



let i = this.subsicrips.map(item => item.uuid).indexOf(id) // find index of your object
this.subsicrips.splice(i, 1) // remove it from array

      let channelss =  this.subsicrips
             console.log('channelss: '+channelss);
            axios.post(`user_channels` , { channels : channelss },{ 
               
                headers: {"Authorization" : `Bearer ${this.$store.state.token}`} 
                })
            .then(res => {
            console.log(res.data.message);
        

            }).catch(function(error){
                 console.log(error.res)
            })
 this.getdataChanels();

 this.getdataChanels();
        },
    addChannelToFllow(item){
        //console.log('item: '+item);
      this.subsicrips.push({
              uuid:  item
            })
    
             let channelss =  this.subsicrips
             console.log('channelss: '+channelss);
            axios.post(`user_channels` , { channels : channelss },{ 
               
                headers: {"Authorization" : `Bearer ${this.$store.state.token}`} 
                })
            .then(res => {
            console.log(res.data.message);
        

            }).catch(function(error){
                 console.log(error.res)
            })








    axios.get("user/categories_with_channels" , { headers: {"Authorization" : `Bearer ${this.$store.state.token}`} })
    .then(res => {
    console.log('res'+res.data);
    this.catogores = res.data.data ;  
    });
    this.getdataChanels();
    },


    getdataChanels(){
            this.token = this.$store.state.token;
    axios.get("user/categories_with_channels" , { headers: {"Authorization" : `Bearer ${this.$store.state.token}`} })
    .then(res => {
    console.log('res'+res.data);
    this.catogores = res.data.data ;

    
    })
    }
  },
};
</script>

<style lang="scss">
.check-item{
    cursor: pointer;
}
</style>