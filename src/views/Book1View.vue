<script setup>
import router from "@/router";
import { useRoute } from 'vue-router';

const title = "岁岁廿廿的节气之旅（春季篇）";
const smallTitle = "title";

const { params } = useRoute();

var pagination = {
  currentPage: 0,
  pageSize: 1,
  total: 11
}

pagination.currentPage = params.id;

const handleCurrentChange = () => {
  router.push({ path: `/book1/:id/${pagination.currentPage}` })
}
</script>

<template>
  <div>
    <el-row :gutter="20">
      <el-col :span="2">
      </el-col>
      <el-col :span="20">
        <h1>{{ title }}</h1>
        <el-text class="mx-1" size="small">{{ smallTitle }}</el-text>
        <el-divider></el-divider>
          <router-view></router-view>
        <el-divider></el-divider>
      </el-col>
      <el-col :span="2">
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="6"></el-col>
      <el-col :span="12">
        <el-pagination
            v-model:current-page="pagination.currentPage"
            v-model:page-size="pagination.pageSize"
            :small="false"
            :disabled="false"
            :background="true"
            layout="prev, pager, next, jumper"
            v-model:total="pagination.total"
            @current-change="handleCurrentChange"
        />
      </el-col>
      <el-col :span="6"></el-col>
    </el-row>
  </div>
</template>

<style scoped>

</style>