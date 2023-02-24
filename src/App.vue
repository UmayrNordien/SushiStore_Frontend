<template>
  <NavBarVue />
  <router-view />
  <FooterCVue/>
</template>

<script>
import FooterCVue from './components/FooterC.vue';
import NavBarVue from './components/NavBar.vue';

export default {
  components: {
    NavBarVue,
    FooterCVue
}
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #9EA1D4;
}
body {
  background: rgb(253, 138, 138);
  background: linear-gradient(90deg, rgba(253, 138, 138, 1) 0%, rgba(241, 247, 181, 1) 50%, rgba(168, 209, 209, 1) 100%);
  /* background-image: url(https://i.postimg.cc/T1MY17rv/DALL-E-2023-02-23-15-07-06-Generate-a-high-resolution-image-using-DALL-E-featuring-a-sprawling-Jap.png);
  background-size: cover !important; */
}
</style>
