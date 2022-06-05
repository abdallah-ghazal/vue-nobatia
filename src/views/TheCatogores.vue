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
                <router-link :to="'/catogory/'+cat.uuid" >
                    <div class="img-check position-relative">
                        <img :src="cat.file" alt="">
                        <div class="check-select d-flex">
                            <div class="check-item ">
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
                                  <div class="text">تحديد</div>
                            </div>
                        </div>
                    </div>
                    <div class="title-category bg-light">
                       {{cat.name}}
                    </div>
                </router-link>
            </div>
        </div>  
      
 
    </div>
</div>
    </div>
</template>


<script>
export default {
  name: "TheCatogores",
  components: {
   
  },
  data: function(){
      return{
          catogores:[]
      }
  },
    mounted() {
    this.fetchDataPages().catch((error) => {
      console.error(error);
    });
  },
  methods: {
        setPageNumber(){
      this.fetchDataPages();
    },
    async fetchDataPages() {
      this.catogores = await fetch(
        `https://newsapp.be875981ca9416725.temporary.link/api/v1/guest/categories_guest`
      )
        .then((res) => {
          return res.json();
        })
        .then((catogores) => catogores.data);
    },
  },
};
</script>