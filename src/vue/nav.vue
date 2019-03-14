<template>
  <div class="navDiv">
      <el-menu default-active="/vue/401" class="el-menu-demo nav" mode="horizontal" @select="handleSelect" active-text-color="#ffd04b">
        <el-menu-item index="/vue/401">401111111111</el-menu-item>
        <el-menu-item index="/vue/404">404444444444</el-menu-item>
    </el-menu>
  </div>
</template>

<script>
// import { setCookie,getCookie,delCookie } from '../common/cookie.js'
export default {
    name: "nlnav",
    data: function(){
        return {
            // activeIndex: '/MedicalClass',
             name: '',
        }
    },
    methods:{
      handleSelect(key, keyPath) {
          console.log(key, keyPath);
          this.curIndex = key;
          this.$router.push(key);
      }
    }
}
</script>

<style>

</style>