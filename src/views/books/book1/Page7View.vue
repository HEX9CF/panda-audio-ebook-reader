<script setup>

</script>

<template>
  <div>
    <el-row :gutter="20">
      <el-col :span="12">
        <el-image :src="require('@/assets/images/book1/8.jpg')" fit="contain" />
      </el-col>
      <el-col :span="12">
        <div class="content">
          <p class="chsPara">
            雨打立春节，
            <el-tooltip placement="bottom">
              <template #content><p class="tip">
                惊蛰（Awakening of Insets）<br/>
                Jingzhe, or the “awakening of Insets” often falls in March in China, which is when hebernat insects begin to wake up from a long sleep gradually.
              </p></template>
              <strong>惊蛰</strong>
            </el-tooltip>
            雨不歇。
          </p>
          <p class="engPara">
            Thunder made the Spring Festival, the rain did not stop the awakening of insects.
          </p>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<style scoped>
@import '@/styles/page.css';
</style>
