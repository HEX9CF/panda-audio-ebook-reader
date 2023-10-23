<script setup>
const title = "书库";
const smallTitle = "Library";

const rsPath = window.api.getRsPath();

const book1Cover = rsPath + '/images/book1/cover/1.jpg';
const book2Cover = rsPath + '/images/book2/cover/1.jpg';
// const book3Cover = rsPath + '/images/book3/cover/1.jpg';
// const book4Cover = rsPath + '/images/book4/cover/1.jpg';
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
            <el-image :src="book1Cover" fit="contain" class="bookCover"></el-image>
            <div style="padding: 14px">
              <span class="bookTitle">《岁岁廿廿的节气之旅 春季篇（上）》</span>
              <div class="bottom">
                <el-button class="button" type="primary"><router-link to="book1/:id/1"><el-icon><Reading /></el-icon>&nbsp;阅读</router-link></el-button>
              </div>
            </div>
          </el-card>
          <el-card class="bookCard">
            <el-image :src="book2Cover" fit="contain" class="bookCover"></el-image>
            <div style="padding: 14px">
              <span class="bookTitle">《岁岁廿廿的节气之旅 春季篇（下）》</span>
              <div class="bottom">
                <el-button class="button" type="primary"><router-link to="book2/:id/1"><el-icon><Reading /></el-icon>&nbsp;阅读</router-link></el-button>
              </div>
            </div>
          </el-card>
<!--
          <el-card class="bookCard">
            <el-image :src="book2Cover" fit="contain" class="bookCover"></el-image>
            <div style="padding: 14px">
              <span class="bookTitle">《岁岁廿廿的节气之旅（夏季篇）》</span>
              <div class="bottom">
                <el-button class="button" type="danger" disabled><el-icon><Loading /></el-icon>&nbsp;敬请期待</el-button>
              </div>
            </div>
          </el-card>
          <el-card class="bookCard">
            <el-image :src="book3Cover" fit="contain" class="bookCover"></el-image>
            <div style="padding: 14px">
              <span class="bookTitle">《岁岁廿廿的节气之旅（秋季篇）》</span>
              <div class="bottom">
                <el-button class="button" type="danger" disabled><el-icon><Loading /></el-icon>&nbsp;敬请期待</el-button>
              </div>
            </div>
          </el-card>
          <el-card class="bookCard">
            &lt;!&ndash;<img src="" class="image"/>&ndash;&gt;
            <el-image :src="book4Cover" fit="contain" class="bookCover"></el-image>
            <div style="padding: 14px">
              <span class="bookTitle">《岁岁廿廿的节气之旅（冬季篇）》</span>
              <div class="bottom">
                <el-button class="button" type="danger" disabled><el-icon><Loading /></el-icon>&nbsp;敬请期待</el-button>
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

.bookCover {
  height: 225px;
  max-width: 200px;
  padding: 0px;
}
</style>