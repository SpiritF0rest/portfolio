<template>
  <div class="container">
    <Header />
    <router-view/>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
export default {
  name: 'app', 
  components:  {
    Header
  }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300&family=Varela+Round&display=swap');
#app {
  margin: 0;
  a {
    text-decoration: none;
  }
  .container {
    font-family: Ubuntu, Helvetica, Arial, sans-serif;
    text-align: center;
    color: black;
  }
}
</style>
