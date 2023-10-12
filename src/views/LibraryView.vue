<script setup>
const title = "书库";
const smallTitle = "Library";
</script>

<template>
  <div id="library">
    <el-row>
      <el-col :span="2"></el-col>
      <el-col :span="20">
        <h1>{{ title }}</h1>
        <el-text class="mx-1" size="small">{{ smallTitle }}</el-text>
        <el-divider></el-divider>
        <el-space wrap>
          <el-card class="bookCard">
            <img src="../assets/images/book1/1.jpg" class="image"/>
            <div style="padding: 14px">
              <span class="bookTitle">《岁岁廿廿的节气之旅（春季篇）》</span>
              <div class="bottom">
                <span class="desc"></span>
                <el-button class="button" type="primary"><router-link to="book1/:id/1"><el-icon><Reading /></el-icon>&nbsp;阅读</router-link></el-button>
              </div>
            </div>
          </el-card>
<!--
          <el-card class="bookCard">
            <img src="../assets/images/book1/2.jpg" class="image"/>
            <div style="padding: 14px">
              <span class="bookTitle">《岁岁廿廿的节气之旅（夏季篇）》</span>
              <div class="bottom">
                <span class="desc">这是简介</span>
                <el-button class="button" type="primary"><router-link to="book1/:id/1"><el-icon><Reading /></el-icon>&nbsp;阅读</router-link></el-button>
              </div>
            </div>
          </el-card>
          <el-card class="bookCard">
            <img src="../assets/images/book1/3.jpg" class="image"/>
            <div style="padding: 14px">
              <span class="bookTitle">《岁岁廿廿的节气之旅（秋季篇）》</span>
              <div class="bottom">
                <span class="desc">这是简介</span>
                <el-button class="button" type="primary"><router-link to="book1/:id/1"><el-icon><Reading /></el-icon>&nbsp;阅读</router-link></el-button>
              </div>
            </div>
          </el-card>
          <el-card class="bookCard">
            <img src="../assets/images/book1/4.jpg" class="image"/>
            <div style="padding: 14px">
              <span class="bookTitle">《岁岁廿廿的节气之旅（冬季篇）》</span>
              <div class="bottom">
                <span class="desc">这是简介</span>
                <el-button class="button" type="primary"><router-link to="book1/:id/1"><el-icon><Reading /></el-icon>&nbsp;阅读</router-link></el-button>
              </div>
            </div>
          </el-card>
-->
        </el-space>
      </el-col>
      <el-col :span="2"></el-col>
    </el-row>
  </div>
</template>

<style scoped>
.bottom {
  margin-top: 13px;
  line-height: 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.button {
  min-height: auto;
}

.image {
  width: 100%;
  display: block;
}

a {
  color: #fff;
  text-decoration:none;
}

.desc {
  font-size: 12px;
  color: #999;
}

.bookTitle {
  font-size: 12px;
}

.bookCard {
  width: 200px;
  padding: 0px;
}
</style>