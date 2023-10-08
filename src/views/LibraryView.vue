<script setup>
// const bookList = [];
</script>

<template>
  <div>
    <el-row :gutter="20">
      <el-col :span="2"></el-col>
      <el-col :span="20">
        <h1>书库</h1>
        <el-text class="mx-1" size="small">Library</el-text>
        <el-divider></el-divider>
        <el-row :gutter="20">
          <el-col :span="6" v-for="(i) in 8" :key="i">
            <el-card :body-style="{ padding: '0px' }">
              <img src="../assets/book1/1.jpg" class="image"/>
              <div style="padding: 14px">
                <span>岁岁廿廿的节气之旅（春季篇）</span>
                <div class="bottom">
                  <span><el-text class="mx-1" size="small">这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介</el-text></span>
                  <el-button class="button" type="primary"><router-link to="book1/:id/1"><el-icon><Reading /></el-icon>&nbsp;阅读</router-link></el-button>
                </div>
              </div>
            </el-card>
            <br/>
          </el-col>
        </el-row>
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
</style>