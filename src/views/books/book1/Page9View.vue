<script setup>

</script>

<template>
  <div>
    <el-row>
      <el-col :span="12">
        <el-image :src="require('@/assets/images/book1/9.jpg')" fit="contain" />
      </el-col>
      <el-col :span="12">
        <div class="content">
          <p class="chsPara">
            岁岁又被可爱的村民们投喂了，惊蛰
            <el-tooltip placement="bottom">
              <template #content><p class="tip">
                Awakening of Insets has the tradition of eating pears.
              </p></template>
              <strong>吃梨</strong>
            </el-tooltip>
            ，因为生梨性寒味甘，吃起来清热润肺；而吃醪糟、芥末，则是要趁着天暖，一口气除掉身体内积存的寒气。
          </p>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<style scoped>
@import '@/styles/page.css';
</style>
