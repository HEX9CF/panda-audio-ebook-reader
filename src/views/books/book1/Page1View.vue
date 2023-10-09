<script setup>

</script>

<template>
  <div>
    <el-row :gutter="20">
      <el-col :span="12">
        <el-image :src="require('@/assets/images/book1/1.jpg')" fit="contain" />
      </el-col>
      <el-col :span="12">
        <div class="content">
          <p class="chsPara">
            <el-tooltip placement="bottom">
              <template #content>
                <p class="tip">立春（Beginning of Spring）</p>
              </template>
              <strong>立春</strong>
            </el-tooltip>
            到了，这一天春回大地、万物复苏。温暖的东风徐徐吹来，冰河消融，草木初生，气温逐渐回暖。
          </p>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<style scoped>
@import '@/styles/page.css';
</style>
