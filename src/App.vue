<template>
  <navbar-comp></navbar-comp>
  <!--<router-view/>-->
  <router-view #default="{Component}">
    <transition name="el-fade-in">
      <component :is="Component"></component>
    </transition>
  </router-view>
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
import NavbarComp from "@/components/NavbarComp.vue";
import FooterComp from "@/components/FooterComp.vue";
</script>