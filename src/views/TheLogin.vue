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
            <div class="bg-light p-4">
                <div class="mb-4">
                    <label for="exampleFormControlInput1" class="form-label">البريد الإلكتروني</label>
                    <input type="email" class="form-control" id="exampleFormControlInput1" >
                  </div>
                  <div class="mb-4">
                    <label for="passworddiv" class="form-label">كلمة المرور</label>
                    <input type="email" class="form-control" id="passworddiv" placeholder="">
                  </div>
                  <div>
                      <button class=" btn btn-primary br-5-i w-100 text-center">دخول</button>
                  </div>
            </div>
            <div class="text-center">لا أمتلك حساب <router-link to="/register">تسجيل</router-link></div>
        </div>
    </div>
    
</div>
    </div>
</template>

<script>
export default {
  name: "TheLogin",
  components: {
   
  },
};
</script>
