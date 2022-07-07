<template>
    <div class="catogory">
<div class="head-content px-3 pt-0 bg-light">
    <div class="row justify-content-between align-items-center  py-3">
        <div class="col-auto">
            <div class="category-title my-0 py-0">{{catogores[0].name}}</div>
        </div>
      
    </div>
   
</div>
<div class="loop-news px-4 py-4">
  
    <div class="row g-4">
        <div v-for="chanle in catogores[0].systemChannel" :key="chanle" class="col-lg-4 col-md-6">
            <div class="item-news">
                <a>
                    <div class="news-slide small-slid">
                          <img v-if="!chanle.image_url" src="@/assets/02.svg" alt="">
                        

                        <img v-else :src="chanle.image_url" alt="">
                        <div class="content-news-slider">
                            <div class="date-cat-top">
                                <span class="date-slide d-inline-flex align-items-center">
                               
                                     </span>
                                </div>
                            </div>
                        </div>
                        <div class="title-news mt-2"><router-link :to="'/channel/'+chanle.uuid">{{chanle.name}}</router-link></div>
            
                        
                </a>
                
            </div>
        </div>
    
    </div>
</div>
    </div>
</template>


<script>
import axios from 'axios';
export default {
  name: "TheCatogory",
  components: {
   
  },
    data(){
      return{
          catogores:[],
          cat:null,
          subsicrips:[],
          
            
      }
  },
    created () {
        

      this.$watch(
      () => this.$route.params,
      () => {
        this.getData(this.$route.params.id)
      },
       { immediate: true },
    );


    }, 
    mounted(){
   

   
    },  
    methods:{

        // getData(link){
        // this.token = this.$store.state.token;
        // axios.get(`category/${link}/channel` , { headers: {"Authorization" : `Bearer ${this.$store.state.token}`} })
        // .then(res => {
        // this.catogores = res.data.data ;
        // this.cat = res.data.data[0].category_name;



        // })
        // },

              getData(link){
                let cat = [{'uuid' : link}]
        axios.post(`guest/channels_guest` , {'categories': cat})
        .then(res => {
        this.catogores = res.data.data ;
        this.cat = res.data.data[0].category_name;



        })
        },

           addCatToFllow(item){

             console.log('item: '+item);



    //  for (const chan of this.catogores) {
    //     if(chan.user_add ){
    //         this.subsicrips.push({
    //           uuid:  chan.uuid
    //         })
    //     }
    // }
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
                    },

    }


};
</script>