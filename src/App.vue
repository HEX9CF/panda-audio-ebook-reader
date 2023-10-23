<template>
  <navbar-comp></navbar-comp>
  <router-view/>

<!--
  <router-view #default="{Component}">
    <transition name="el-fade-in">
      <component :is="Component"></component>
    </transition>
  </router-view>
-->

  <footer-comp></footer-comp>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>

<script setup>
import {ElNotification} from "element-plus";

import NavbarComp from "@/components/NavbarComp.vue";
import FooterComp from "@/components/FooterComp.vue";

ElNotification.info({
  title: '提示',
  position: 'bottom-right',
  dangerouslyUseHTMLString: true,
  message: "<el-icon><FullScreen /></el-icon>&nbsp;按下 [F11] 进入全屏模式，再次按下可退出全屏模式。",
})
</script>