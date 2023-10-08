<script setup>

</script>

<template>
  <el-menu
      :default-active="1"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
  >
    <div>
      <img src="../assets/logo.png" id="logo"/>
      <span id="logoText">&nbsp;岁岁廿廿的节气之旅&nbsp;</span>
    </div>
    <el-menu-item index="1"><router-link to="/"><el-icon><HomeFilled /></el-icon>首页 Home</router-link></el-menu-item>
    <el-menu-item index="2"><router-link to="/library"><el-icon><Files /></el-icon>书库 Library</router-link></el-menu-item>
    <el-menu-item index="3"><router-link to="/about"><el-icon><InfoFilled /></el-icon>关于 About</router-link></el-menu-item>
  </el-menu>
</template>

<style scoped>
#logo {
  height: 50px;
  width: auto;
  vertical-align:middle;
}

#logoText {
  font-size: 24px;
}

a {
  text-decoration:none;
}
</style>