<script setup>

</script>

<template>
  <div>
    <el-row :gutter="20">
      <el-col :span="12">
        <el-image :src="require('@/assets/images/book1/7.jpg')" fit="contain" />
      </el-col>
      <el-col :span="12">
        <div class="content">
          <p class="chsPara">
            听，轰隆隆———岁岁正昏昏欲睡地靠窗休息，忽然被这惊雷吓得原地起立。这雷声传说中是由雷神，一手持鼓，一手拿锤，
            <el-tooltip placement="bottom">
              <template #content><p class="tip">
                Awakening of Insects mean spring’s move, awakened dormant in the soil hivernating animals.
              </p></template>
              <strong>跟上时间的节奏唤醒春困的人们和冬眠的昆虫</strong>
            </el-tooltip>
            。
          </p>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<style scoped>
@import '@/styles/page.css';
</style>
