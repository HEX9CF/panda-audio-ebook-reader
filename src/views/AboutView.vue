<template>
  <div class="about">
    <el-row :gutter="20">
      <el-col :span="2"></el-col>
      <el-col :span="20">
        <h1>{{ title }}</h1>
        <el-text class="mx-1" size="small">{{ smallTitle }}</el-text>
        <el-divider></el-divider>
        <el-skeleton :rows="5" animated />
      </el-col>
      <el-col :span="2"></el-col>
    </el-row>
  </div>
</template>

<style scoped>

</style>

<script setup>
const title = "关于";
const smallTitle = "About";
</script>
