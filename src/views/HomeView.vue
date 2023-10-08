<template>
  <div class="home">
    <el-row :gutter="20">
      <el-col :span="2"></el-col>
      <el-col :span="20">
        <h1>{{ title }}</h1>
        <el-text class="mx-1" size="small">{{ smallTitle }}</el-text>
        <el-divider></el-divider>
        <el-carousel :interval="4000" type="card">
          <el-carousel-item v-for="item in 4" :key="item">
<!--            <h3 text="2xl" justify="center">{{ item }}</h3>-->
            <el-image :src="require('@/assets/book1/1.jpg')" fit="contain"></el-image>
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
.el-carousel__item el-image {
  color: #475669;
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
