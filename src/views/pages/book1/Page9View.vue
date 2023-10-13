<script setup>
const page = 9;
</script>

<template>
  <div>
    <el-card>
      <el-row>
        <el-col :span="12">
          <span><el-icon><Headset /></el-icon>&nbsp;中文录音</span>
          <br/>
          <audio controls controlsList="nodownload">
            <source :src="require('@/assets/audios/book1/chs/' + page + '.mp3')" type="audio/mpeg">
          </audio>
        </el-col>
        <el-col :span="12">
          <span><el-icon><Headset /></el-icon>&nbsp;英文录音</span>
          <br/>
          <audio controls controlsList="nodownload">
            <source :src="require('@/assets/audios/book1/eng/' + page + '.mp3')" type="audio/mpeg">
          </audio>
        </el-col>
      </el-row>
    </el-card>
    <br/>
    <el-row>
      <el-col :span="12">
        <el-image :src="require('@/assets/images/book1/' + page + '.jpg')" fit="contain" />
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
