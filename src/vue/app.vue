<template>
  <div id="app">
    <nl-nav class="nav" ></nl-nav>
    <router-view v-if="isRouterAlive"/>
  </div>
</template>

<script>
// import axios from 'axios';
// import store from './store';
import Nav from './Nav.vue';
export default {
  name: 'App',
  components:{
    'nl-nav': Nav
  },
  // provide() {
  //   return {
  //     reload: this.reload
  //   }
  // },
  data() {
    return {
      isRouterAlive: true
    }
  },
  methods: {
    handleSelect(key, keyPath) {
        this.curIndex = key;
        this.$router.push('/');
      },
  }
}
</script>

<style>
</style>
