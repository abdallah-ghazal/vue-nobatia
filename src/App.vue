<template>
  <NaveBar />
  <!-- <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav> -->
    <div class="content-page">
      <router-view />
    </div>
</template>

<script>
import NaveBar from '@/components/NaveBar.vue';
export default {
  components:{
      NaveBar,
  }
}
</script>
<style lang="scss">
    :root {
            --mincolor:#F9A730;
            --darkcolor:#7168D8;
            --greencolor:#72d962;
            --blowcolor:#7168D8;
            --warningcolor:#FF8800;
            --light:#FEFAF3;
            --dark:#000;
            --white:#fff;
            --bacmixinfo : mix(#fff,#00C3FF, 84%);
        }
</style>
