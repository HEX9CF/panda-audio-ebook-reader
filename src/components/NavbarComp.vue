<script setup>

</script>

<template>
  <el-affix position="top" :offset="0">
    <el-menu
        :default-active="1"
        mode="horizontal"
        router
        @select="handleSelect"
    >
      <div>
        <img src="../assets/logo.png" id="logo"/>
        <span id="logoText">&nbsp;岁岁廿廿的节气之旅&nbsp;</span>
      </div>
      <el-menu-item index="/"><el-icon><HomeFilled /></el-icon>首页 Home</el-menu-item>
      <el-menu-item index="/library"><el-icon><Files /></el-icon>书库 Library</el-menu-item>
      <el-menu-item index="/about"><el-icon><InfoFilled /></el-icon>关于 About</el-menu-item>
    </el-menu>
  </el-affix>
</template>

<style scoped>
#logo {
  max-height: 50px;
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