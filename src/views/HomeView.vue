<template>
  <div class="home">
    <div class="head-content px-3 pt-0 bg-light">
    <div class="row justify-content-between align-items-center  py-3 w-100">
        <div class="col-auto">
            <div class="category-title my-0 py-0">اخبار المحررين</div>
        </div>
       <div class="col-auto">
            <div class=" my-0 py-0"> <router-link class="btn btn-warning" to="/editor">عرض الكل</router-link></div>
        </div>
    </div>
   
</div>
     <div class="loop-news px-4 py-4">
       <div class="row g-4" v-if="state === 'loaded'">
        <div class="col-lg-4 col-md-4" v-for="news in editor" :key="news.uuid" >
            <div class="item-news">
                <router-link :to="'/news-dt/'+news.uuid" href="#">
                    <div class="news-slide small-slid">
                        <img v-if="news.thumbnail != null" :src="news.thumbnail" alt="">
                        <img v-else src="@/assets/02.svg" alt="">
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
                                          <span >{{news.category_data.name}}</span>
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
                        <!-- <div class="some-text fs-13"> حذر عضو تجمع أصحاب المخابز بولاية الخرطوم عصام عكاشة من أن الارتفاع في  </div> -->
                </router-link>
                
            </div>
        </div>
    
    </div>








    <slot name="loading" v-else>
     
          <div v-if="state ==='loading'">
              
              <div class="row g-3">
            <div class="col-lg-4">
              <div class="item-loading larg item1">
              <div class="img-loading"> </div>
              <div class="content-loading">
              <div class="title-loading"></div>
              <div class="sub-title-loading"></div>
              </div>
              </div>
            </div>
            <div class="col-lg-4">
              <div class="item-loading larg item1">
              <div class="img-loading"> </div>
              <div class="content-loading">
              <div class="title-loading"></div>
              <div class="sub-title-loading"></div>
              </div>
              </div>
            </div>
            <div class="col-lg-4">
              <div class="item-loading larg item1">
              <div class="img-loading"> </div>
              <div class="content-loading">
              <div class="title-loading"></div>
              <div class="sub-title-loading"></div>
              </div>
              </div>
            </div>
            <div class="col-lg-4">
              <div class="item-loading larg item1">
              <div class="img-loading"> </div>
              <div class="content-loading">
              <div class="title-loading"></div>
              <div class="sub-title-loading"></div>
              </div>
              </div>
            </div>
            <div class="col-lg-4">
              <div class="item-loading larg item1">
              <div class="img-loading"> </div>
              <div class="content-loading">
              <div class="title-loading"></div>
              <div class="sub-title-loading"></div>
              </div>
              </div>
            </div>
         
         <div class="col-lg-4">
              <div class="item-loading larg item1">
              <div class="img-loading"> </div>
              <div class="content-loading">
              <div class="title-loading"></div>
              <div class="sub-title-loading"></div>
              </div>
              </div>
            </div>
         
         
          </div>
          </div>
         
        </slot>



        
     </div>
<div v-if="haveToken != null">
<div class="head-content px-3 pt-0 bg-dark" >
    <div class="row justify-content-between align-items-center  py-3 w-100">
        <div class="col-auto">
            <ul class="nav nav-pills">
                <li class="nav-item" v-for="(cat , index) in catogores" :index="index" :key="cat"> 
                  <a class="nav-link" aria-current="page"  @click="getDataBycat(cat.uuid , 1)">{{cat.name}}</a>
                </li>
              
              </ul>
        </div>
        <div class="col-auto">
            <ul class="list-feltar d-md-flex d-none">
                <li @click="updateshow('list-text')"><a ><svg xmlns="http://www.w3.org/2000/svg" width="10.645" height="10.938" viewBox="0 0 10.645 10.938">
                    <g id="Icon_ionic-ios-list" data-name="Icon ionic-ios-list" transform="translate(-6.855 -4.531)">
                      <path id="Path_5" data-name="Path 5" d="M16.875,9.375H7.48a.625.625,0,0,0,0,1.25h9.395a.625.625,0,0,0,0-1.25Z" fill="#6a6a6a"/>
                      <path id="Path_6" data-name="Path 6" d="M16.875,14.219H7.48a.625.625,0,0,0,0,1.25h9.395a.625.625,0,0,0,0-1.25Z" fill="#6a6a6a"/>
                      <path id="Path_7" data-name="Path 7" d="M7.48,5.781h9.395a.625.625,0,0,0,0-1.25H7.48a.625.625,0,0,0,0,1.25Z" fill="#6a6a6a"/>
                    </g>
                  </svg>
                  </a></li>
                <li  @click="updateshow('list-img')"><a ><svg xmlns="http://www.w3.org/2000/svg" width="15" height="11.875" viewBox="0 0 15 11.875">
                    <g id="Icon_ionic-ios-list" data-name="Icon ionic-ios-list" transform="translate(-2.5 -4.063)">
                      <path id="Path_2" data-name="Path 2" d="M4.688,10A1.094,1.094,0,1,1,3.594,8.906,1.094,1.094,0,0,1,4.688,10Z" fill="#6a6a6a"/>
                      <path id="Path_3" data-name="Path 3" d="M4.688,5.156A1.094,1.094,0,1,1,3.594,4.063,1.094,1.094,0,0,1,4.688,5.156Z" fill="#6a6a6a"/>
                      <path id="Path_4" data-name="Path 4" d="M4.688,14.844A1.094,1.094,0,1,1,3.594,13.75,1.094,1.094,0,0,1,4.688,14.844Z" fill="#6a6a6a"/>
                      <path id="Path_5" data-name="Path 5" d="M16.875,9.375H7.48a.625.625,0,0,0,0,1.25h9.395a.625.625,0,0,0,0-1.25Z" fill="#6a6a6a"/>
                      <path id="Path_6" data-name="Path 6" d="M16.875,14.219H7.48a.625.625,0,0,0,0,1.25h9.395a.625.625,0,0,0,0-1.25Z" fill="#6a6a6a"/>
                      <path id="Path_7" data-name="Path 7" d="M7.48,5.781h9.395a.625.625,0,0,0,0-1.25H7.48a.625.625,0,0,0,0,1.25Z" fill="#6a6a6a"/>
                    </g>
                  </svg>
                  </a></li>
                <li  @click="updateshow('grid')"><a ><svg xmlns="http://www.w3.org/2000/svg" width="13.51" height="13.51" viewBox="0 0 13.51 13.51">
                    <path id="Icon_open-grid-three-up" data-name="Icon open-grid-three-up" d="M0,0V3.378H3.378V0ZM5.066,0V3.378H8.444V0Zm5.066,0V3.378H13.51V0ZM0,5.066V8.444H3.378V5.066Zm5.066,0V8.444H8.444V5.066Zm5.066,0V8.444H13.51V5.066ZM0,10.133V13.51H3.378V10.133Zm5.066,0V13.51H8.444V10.133Zm5.066,0V13.51H13.51V10.133Z" fill="#f9a730"/>
                  </svg>
                  </a></li>
                <li><a ><svg xmlns="http://www.w3.org/2000/svg" width="13.333" height="18.333" viewBox="0 0 13.333 18.333">
                    <path id="Icon_material-loop" data-name="Icon material-loop" d="M10,3.333V.833L6.667,4.167,10,7.5V5a5,5,0,0,1,5,5,4.892,4.892,0,0,1-.583,2.333l1.217,1.217A6.655,6.655,0,0,0,10,3.333ZM10,15a5,5,0,0,1-5-5,4.892,4.892,0,0,1,.583-2.333L4.367,6.45A6.655,6.655,0,0,0,10,16.667v2.5l3.333-3.333L10,12.5Z" transform="translate(-3.333 -0.833)" fill="#6a6a6a"/>
                  </svg>
                  </a></li>
            </ul>
        </div>
    </div>
   
</div>
<div class="loop-news px-4 py-4" v-if="newscat[0] && state =='loaded'" >
   
    <div class="row g-4" v-if="typeShow == 'grid' ">
        <div class="col-lg-6 col-md-6" v-for="news in newscat" :key="news.uuid" >
            <div class="item-news">
                <router-link :to="'/news-dt/'+news.uuid" href="#">
                    <div class="news-slide small-slid">
                        <img v-if="news.thumbnail != null" :src="news.thumbnail" alt="">
                        <img v-else src="@/assets/02.svg" alt="">
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
                                          <span to="'catogory/'">{{news.category_data.name}}</span>
                                    </span>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div class="title-news mt-2"><a >{{news.title}}</a></div>
                        <div class="date-news my-1 py-1"><span><svg xmlns="http://www.w3.org/2000/svg" width="11.175" height="12.417" viewBox="0 0 11.175 12.417">
                            <path id="Icon_material-date-range" data-name="Icon material-date-range" d="M6.225,7.254H4.983V8.5H6.225Zm2.483,0H7.467V8.5H8.708Zm2.483,0H9.95V8.5h1.242Zm1.242-4.346h-.621V1.667H10.571V2.908H5.6V1.667H4.362V2.908H3.742A1.236,1.236,0,0,0,2.506,4.15L2.5,12.842a1.241,1.241,0,0,0,1.242,1.242h8.692a1.245,1.245,0,0,0,1.242-1.242V4.15A1.245,1.245,0,0,0,12.433,2.908Zm0,9.933H3.742V6.012h8.692v6.829Z" transform="translate(-2.5 -1.667)" fill="#6a6a6a"/>
                          </svg>
                          </span>    <span>{{news.date}}</span></div>
                       
                </router-link>
                
            </div>
        </div>
    
    </div>

    
 



     <div class="row g-4"  v-if="typeShow == 'list-img'">
         <div class="col-12"  v-for="news in newscat" :key="news.uuid">
            <div class="item-news bg-light p-3">
                <router-link :to="'/news-dt/'+news.uuid" >
                    <div class="row">
                        <div class="col-md-4 news-slide small-slid h-100px" >
                          <img v-if="news.thumbnail != null" :src="news.thumbnail" alt="">
                          <img v-else src="@/assets/02.svg" alt="">
                       
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
                                              <span >{{news.category_data.name}}</span>
                                        </span>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div class="col content-w-100 p-1 px-2">
                                <div class="title-news mt-2"><a href="#">{{news.title}}</a></div>
                                <div class="date-news my-1 py-1"><span><svg xmlns="http://www.w3.org/2000/svg" width="11.175" height="12.417" viewBox="0 0 11.175 12.417">
                                    <path id="Icon_material-date-range" data-name="Icon material-date-range" d="M6.225,7.254H4.983V8.5H6.225Zm2.483,0H7.467V8.5H8.708Zm2.483,0H9.95V8.5h1.242Zm1.242-4.346h-.621V1.667H10.571V2.908H5.6V1.667H4.362V2.908H3.742A1.236,1.236,0,0,0,2.506,4.15L2.5,12.842a1.241,1.241,0,0,0,1.242,1.242h8.692a1.245,1.245,0,0,0,1.242-1.242V4.15A1.245,1.245,0,0,0,12.433,2.908Zm0,9.933H3.742V6.012h8.692v6.829Z" transform="translate(-2.5 -1.667)" fill="#6a6a6a"/>
                                  </svg>
                                  </span>    <span>{{news.date}}</span></div>
                                <div class="some-text fs-13">{{news.content}}  </div>
                       
                            </div>
                    </div>
                      </router-link>>
                
            </div>
        </div>
    
    </div>
    <div class="row g-4 "  v-if="typeShow == 'list-text'">
     <div class="col-12" v-for="news in newscat" :key="news.uuid">
            <div class="item-news bg-light p-3">
                <router-link :to="'/news-dt/'+news.uuid">
                    <div class="d-flex">
                        
                            <div class="content-w-100 p-1 px-2">
                                <div class="title-news mt-2"><a href="#">{{news.title}}</a></div>
                                <div class="date-news my-1 py-1"><span><svg xmlns="http://www.w3.org/2000/svg" width="11.175" height="12.417" viewBox="0 0 11.175 12.417">
                                    <path id="Icon_material-date-range" data-name="Icon material-date-range" d="M6.225,7.254H4.983V8.5H6.225Zm2.483,0H7.467V8.5H8.708Zm2.483,0H9.95V8.5h1.242Zm1.242-4.346h-.621V1.667H10.571V2.908H5.6V1.667H4.362V2.908H3.742A1.236,1.236,0,0,0,2.506,4.15L2.5,12.842a1.241,1.241,0,0,0,1.242,1.242h8.692a1.245,1.245,0,0,0,1.242-1.242V4.15A1.245,1.245,0,0,0,12.433,2.908Zm0,9.933H3.742V6.012h8.692v6.829Z" transform="translate(-2.5 -1.667)" fill="#6a6a6a"/>
                                  </svg>
                                  </span>    <span>{{news.date}}</span></div>
                                <div class="some-text fs-13"> {{news.content}}</div>
                                <div class="date-cat-top mt-2">
                                    <span class="date-slide d-inline-flex align-items-center">
                                     
                                        <span class="mx-e chanel">
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
                                               <span >{{news.category_data.name}}</span>
                                        </span>
                                        </span>
                                    </div>
                            </div>
                    </div>
                        </router-link>
                
            </div>
        </div>
    </div>
</div>
   

<div v-else class="px-4 py-4">
  لا يوجد اخبار تتبع لهذا القسم حاليا
</div>
<div>
  <slot name="loading" v-if="state ==='loading'">
     
          <div class="px-4">
              
              <div class="row g-3">
            <div class="col-lg-6">
              <div class="item-loading larg item1">
              <div class="img-loading"> </div>
              <div class="content-loading">
              <div class="title-loading"></div>
              <div class="sub-title-loading"></div>
              </div>
              </div>
            </div>
            <div class="col-lg-6">
              <div class="item-loading larg item1">
              <div class="img-loading"> </div>
              <div class="content-loading">
              <div class="title-loading"></div>
              <div class="sub-title-loading"></div>
              </div>
              </div>
            </div>
            <div class="col-lg-6">
              <div class="item-loading larg item1">
              <div class="img-loading"> </div>
              <div class="content-loading">
              <div class="title-loading"></div>
              <div class="sub-title-loading"></div>
              </div>
              </div>
            </div>
            <div class="col-lg-6">
              <div class="item-loading larg item1">
              <div class="img-loading"> </div>
              <div class="content-loading">
              <div class="title-loading"></div>
              <div class="sub-title-loading"></div>
              </div>
              </div>
            </div>
            <div class="col-lg-6">
              <div class="item-loading larg item1">
              <div class="img-loading"> </div>
              <div class="content-loading">
              <div class="title-loading"></div>
              <div class="sub-title-loading"></div>
              </div>
              </div>
            </div>
         
         <div class="col-lg-6">
              <div class="item-loading larg item1">
              <div class="img-loading"> </div>
              <div class="content-loading">
              <div class="title-loading"></div>
              <div class="sub-title-loading"></div>
              </div>
              </div>
            </div>
         
         
          </div>
          </div>
         
        </slot>
</div>
<nav aria-label="Page navigation example" v-if="pageNumber >=2">
  <ul class="pagination">
 
    <li class="page-item" v-for="i in pageNumber" :index="i" :key="i"><a class="page-link" @click="getDataBycat('',i)" >{{i}}</a></li>
  
  </ul>
</nav>
</div>


  </div>
</template>

<script>
import { createToaster } from "@meforma/vue-toaster";
const toaster = createToaster({ /* options */ });
import axios from 'axios';
export default {
  name: "HomeView",
  data: function(){
    return {
      token:null,
      typeShow :'grid',
      newscat:[],
      catogores:[],
      pageNumber:1,
      catName:'6a5e76a5-729c-482f-9428-074020a96879',
      editor:[],
      haveToken : this.$store.state.token ,

      state: 'loading',
      
    }
  },
  components: {
   
  },
  mounted () {
      this.getcategories();
this.state = "loading";
      axios.get("editor_picks_news" , { headers: {"Authorization" : `Bearer ${this.$store.state.token}`} })
        .then(res => {
      //  console.log('editor: '+res.data);
        this.editor = res.data.data ;
        this.state = "loaded";
        })
  },
  methods:{
    getcategories(){
      if(this.haveToken != null){


        this.token = this.$store.state.token;
        axios.get(`category/6a5e76a5-729c-482f-9428-074020a96879/user_news` , { headers: {"Authorization" : `Bearer ${this.$store.state.token}`} })
        .then(res => {
        this.newscat = res.data.data ;
        this.pageNumber = res.data.meta.pagination.total_pages ;
        })


        axios.get("categories" , { headers: {"Authorization" : `Bearer ${this.$store.state.token}`} })
        .then(res => {
       // console.log('res'+res.data);
        this.catogores = res.data.data ;
        
        })
      }
    },
    getDataBycat(cat,id){
      this.pageNumber = id ;
      if (cat != ''){
        this.catName = cat;
      }
      
        this.token = this.$store.state.token;
        axios.get(`category/${this.catName}/user_news?page=${this.pageNumber}` , { headers: {"Authorization" : `Bearer ${this.$store.state.token}`} })
        .then(res => {
        this.newscat = res.data.data ;
        this.pageNumber = res.data.meta.pagination.total_pages ;
        })
    },
 getDataToGuest(cat,id){
      this.pageNumber = id ;
      if (cat != ''){
        this.catName = cat;
      }
      
        this.token = this.$store.state.token;
        axios.get(`guest/news_guest/filter=/${this.catName}/user_news?page=${this.pageNumber}` )
        .then(res => {
        this.newscat = res.data.data ;
        this.pageNumber = res.data.meta.pagination.total_pages ;
        })
    },

updateshow(type){
this.typeShow = type;
},
addToFavorite(item){
      axios.post(`add_user_fovarite_news` , { uuid : item},{ 
          
          headers: {"Authorization" : `Bearer ${this.$store.state.token}`} 
          })
      .then(res => {
    //  console.log(res.data.message);
      toaster.success(res.data.message);
      }).catch(function(error){
            console.log(error.res)
      })
},
   
  }


};
</script>
