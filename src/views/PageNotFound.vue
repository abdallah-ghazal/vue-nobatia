<template>
    <div class="page-not-found pb-4">
        <div class=" container py-2">
             <div class="text-center p-3">
              <img src="@/assets/01.svg"  alt="">

<h1 class="text-center  mb-2 mt-4">الصفحة المطلوبة غير متوفرة</h1>
<p class="text-center my-4">عذراُ ، ربما تكون الصفحة المطلوبة قد حذفت او تم تغيير الرابط</p>
<router-link to="/" class="btn btn-success">العودة الى الرئيسية</router-link>
             </div>
        </div>
        
    </div>
</template>

<script>

export default {
    name:"PageNotFound",
}
</script>
