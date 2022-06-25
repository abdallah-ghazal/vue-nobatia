<template>
    <div class="login-page">
        <div class="head-content px-3 pt-0 bg-light">
    <div class="row justify-content-between align-items-center  py-3">
        <div class="col-auto d-flex align-items-center">
            <div class="category-title my-0 py-0">الدخول </div>
          
        </div>
      
    </div>
   
</div>
<div class="loop-news px-4 py-4">
    <div class="row my-3 justify-content-center">
        <div class="col-lg-7">
            <div class="text-center fs-18 mb-3">يمكنك تسجيل الدخول من خلال تعبئة المعلومات المطلوبة</div>
            <form action="" @submit.prevent="submit">
                <div class="bg-light p-4">
                <div class="mb-4">
                    <label for="exampleFormControlInput1" class="form-label">البريد الإلكتروني</label>
                    <input type="email" class="form-control" v-model="form.email" id="exampleFormControlInput1" >
                  </div>
                  <div class="mb-4">
                    <label for="passworddiv" class="form-label">كلمة المرور</label>
                    <input type="password" class="form-control" v-model="form.password" id="passworddiv" placeholder="">
                  </div>
                  <div>
                      <button class=" btn btn-primary br-5-i w-100 text-center">دخول</button>
                  </div>
            </div>
            </form>
            <p v-if="showError" id="error">اسم المستخدم أو كلمة المرور غير صحيحة</p>
            <div class="text-center">لا أمتلك حساب <router-link to="/register">تسجيل</router-link></div>

        </div>
    </div>
    
</div>
    </div>
</template>

<script>
// import { createToaster } from "@meforma/vue-toaster";
// const toaster = createToaster({ /* options */ });

import { mapActions } from "vuex";
export default {
  name: "TheLogin",
  components: {
   
  },
  data() {
    return {
      form: {
        email: "",
        password: "",
      },
      showError: false,
      catogory : [] ,
     token:null,
     datanew : this.$store.state.items.data , 
    };
  },
mounted () {
   this.$store.dispatch('loadItems')
//   this.token = this.$store.state.token;
//   if(this.token != null)
//   {
//   toaster.success("تم تسجيل دخولك بنجاح");
//  // this.$router.push("/");
//   }

    }, 
     created() {
         
    },
computed : {
      isLoggedIn(){ return this.$store.getters.isAuthenticated},
    },
  methods: {

    // ...mapActions(["LogIn"]),
    // async submit() {
    //   const User = new FormData();
    //   User.append("email", this.form.email);
    //   User.append("password", this.form.password);
    //   try {
    //       await this.LogIn(User);
    //       this.$router.push("/");
    //       this.showError = false
    //   } catch (error) {
    //     this.showError = true
    //   }
    // },
  ...mapActions(["singIn" , "loadItems"]),
  submit(){
      this.singIn(this.form)
      this.loadItems()
      //  this.isLoggedIn();
       
  }
  },

};
</script>
