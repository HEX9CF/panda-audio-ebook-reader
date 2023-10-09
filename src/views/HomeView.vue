<template>
  <div class="home">
    <el-row :gutter="20">
      <el-col :span="2"></el-col>
      <el-col :span="20">
        <h1>{{ title }}</h1>
        <el-text class="mx-1" size="small">{{ smallTitle }}</el-text>
        <el-divider></el-divider>
        <el-carousel :interval="4000" type="card" height="900px">
          <el-carousel-item v-for="i in 18" :key="i">
            <el-image :src="require('@/assets/images/cover/' + i + '.jpg')" fit="fill"></el-image>
          </el-carousel-item>
        </el-carousel>
      </el-col>
      <el-col :span="2"></el-col>
    </el-row>
  </div>
</template>

<script setup>
const title = "岁岁廿廿的节气之旅";
const smallTitle = "Home";
</script>


<style scoped>
el-carousel {
  height: 100px;
  width: 100px;
}

el-carousel-item el-image {
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
  text-align: center;
}

/*
.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
*/
</style>
