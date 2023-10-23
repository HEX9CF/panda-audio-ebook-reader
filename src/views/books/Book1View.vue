<script setup>
import router from "@/router";
import { useRoute } from 'vue-router';
import {ElNotification} from "element-plus";

const title = "岁岁廿廿的节气之旅 春季篇（上）";
const smallTitle = "";

const { params } = useRoute();

var pagination = {
  currentPage: 0,
  pageSize: 1,
  total: 9
}

pagination.currentPage = params.id;

const handleCurrentChange = () => {
  router.push({ path: `/book1/:id/${pagination.currentPage}` })
}

ElNotification.info({
  title: '提示',
  position: 'bottom-right',
  message: "有声读物，佩戴耳机效果更佳。",
})
</script>

<template>
  <navbar-comp></navbar-comp>
  <div id="book1">
    <el-row>
      <el-col :span="2">
      </el-col>
      <el-col :span="20">
        <h1>{{ title }}</h1>
        <el-text class="mx-1" size="small">{{ smallTitle }}</el-text>
        <el-divider></el-divider>
        <el-card>
          <router-view></router-view>
          <!--
          <router-view #default="{Component}">
            <transition name="el-fade-in">
              <component :is="Component"></component>
            </transition>
          </router-view>
          -->
        </el-card>
        <el-divider></el-divider>
      </el-col>
      <el-col :span="8">
      </el-col>
    </el-row>
      <div id="pagination">
        <el-affix position="bottom" :offset="0">
        <el-card class="box-card">
          <el-pagination
              v-model:current-page="pagination.currentPage"
              v-model:page-size="pagination.pageSize"
              :small="false"
              :disabled="false"
              :background="true"
              layout="total, prev, pager, next, jumper"
              v-model:total="pagination.total"
              @current-change="handleCurrentChange"
          />
        </el-card>
        </el-affix>
      </div>
  </div>
</template>

<style scoped>
.box-card {
  height: 70px;
  width: auto;
  display: flex;
  align-items: center;
  justify-content: center;
}

#pagination {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>