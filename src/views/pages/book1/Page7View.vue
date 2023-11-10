<script setup>
const book = 1;
const page = 7;

const rsPath = window.api.getRsPath();

const chsAudio = rsPath + '/audios/book' + book + '/chs/' + page + '.mp3';
const engAudio = rsPath + '/audios/book' + book + '/eng/' + page + '.mp3';
const comicImage = rsPath + '/images/book' + book + '/comic/' + page + '.jpg';
</script>

<template>
  <div>
    <el-card>
      <el-row>
        <el-col :span="12">
          <span><el-icon><Headset /></el-icon>&nbsp;中文录音</span>
          <br/>
          <audio controls controlsList="nodownload">
            <source :src="chsAudio" type="audio/mpeg">
          </audio>
        </el-col>
        <el-col :span="12">
          <span><el-icon><Headset /></el-icon>&nbsp;英文录音</span>
          <br/>
          <audio controls controlsList="nodownload">
            <source :src="engAudio" type="audio/mpeg">
          </audio>
        </el-col>
      </el-row>
    </el-card>
    <br/>
    <el-row>
      <el-col :span="12">
        <el-image :src="comicImage" fit="contain" />
      </el-col>
      <el-col :span="12">
        <div class="content">
          <p class="chsPara">
            雨打立春节，
            <el-tooltip placement="top">
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
          <p class="chsPara">
            听，轰隆隆———岁岁正昏昏欲睡地靠窗休息，忽然被这惊雷吓得原地起立。这雷声传说中是由雷神，一手持鼓，一手拿锤，
            <el-tooltip placement="top">
              <template #content><p class="tip">
                Awakening of Insects mean spring’s move, awakened dormant in the soil hivernating animals.
              </p></template>
              <strong>跟上时间的节奏唤醒春困的人们和蛰伏在土壤中冬眠的昆虫。</strong>
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
