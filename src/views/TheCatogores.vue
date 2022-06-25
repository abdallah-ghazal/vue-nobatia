<template>
    <div class="catogores">
<div class="head-content px-3 pt-0 bg-light">
    <div class="row justify-content-between align-items-center  py-3">
        <div class="col-auto">
            <div class="category-title my-0 py-0">الأقسام الرئيسية</div>
        </div>
      
    </div>
   
</div>
<div class="loop-news px-4 py-4">
    <div class="row g-4">
        <div v-for="cat in catogores" :key="cat.uuid" class="col-lg-3 col-md-6">
            <div class="item-category border">
                <a >
                    <div class="img-check position-relative">
                        <img :src="cat.file" alt="">
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
</template>


<script>

import axios from 'axios';
export default {
  name: "TheCatogores",
  components: {
   
  },
  data: function(){
      return{
          catogores:[]
      }
  },
  mounted () {

    axios.get("guest/categories_guest")
    .then(res => {
    console.log('res'+res.data);
    this.catogores = res.data.data ;
    })

    }, 
    

};
</script>