<template>
    <div class="login-page">
        <div class="head-content px-3 pt-0 bg-light">
    <div class="row justify-content-between align-items-center  py-3">
        <div class="col-auto d-flex align-items-center">
            <div class="category-title my-0 py-0">تسجيل </div>
          
        </div>
      
    </div>
   
</div>
<div class="loop-news px-4 py-4">
    <div class="row my-3 justify-content-center">
        <div class="col-lg-7">
            <div class="text-center fs-18 mb-3">يمكنك تسجيل من خلال تعبئة المعلومات المطلوبة</div>
            <form @submit.prevent="submit">
            <div class="bg-light p-4">
                 <div class="mb-4">
                    <label for="username" class="form-label">إسم المستخدم</label>
                    <input type="text" class="form-control" id="username" v-model="form.name">
                  </div>
                <div class="mb-4">
                    <label for="email" class="form-label">البريد الإلكتروني</label>
                    <input type="email" class="form-control" id="email" v-model="form.email">
                  </div>
                  <div class="mb-4">
                    <label for="passworddiv" class="form-label">كلمة المرور</label>
                    <input type="password" class="form-control" id="passworddiv" v-model="form.password">
                  </div>
                  <div>
                      <button type="submit" class=" btn btn-primary br-5-i w-100 text-center">تسجيل</button>
                  </div>
                   <p v-if="showError" id="error">{{messageError}}</p>
            </div>
            </form>

            <div class="text-center">أمتلك حساب <router-link to="/login" href="#">دخول</router-link></div>
        </div>
    </div>
    
</div>
    </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "TheRegister",
  components: {
   
  },
   data() {
    return {
      form: {
        name: "",
        email: "",
        password: "",
      },
      showError: false,
      messageError : "تاكد من عملية الادخال"
    };
  },
  methods: {
    ...mapActions(["register"]),
    async submit() {
      if(this.form.name == '' || this.form.email == '' || this.form.password == '' || this.form.password.length <= 8){
        this.showError = true ;
        this.messageError = "ارجو ادخال اسم المستخدم" ;
      }
  
      else{
 try {
        await this.register(this.form);
       
        this.showError = false
      } catch (error) {
        this.showError = true
      }
      }

     
    },
  },

};
</script>
