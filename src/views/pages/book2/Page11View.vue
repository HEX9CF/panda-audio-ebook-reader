<script setup>
const book = 2;
const page = 11;

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
          小雨淅淅沥沥，岁岁戴上草帽、拎起茶筒，蹦蹦跳跳地和村民们一起去茶园里采摘谷雨茶叶，准备制作
            <el-tooltip placement="top">
              <template #content>
                <p class="tip">Grain Rain tea, also known as pre-rain tea, is spring tea harvested during Grain Rain period.</p>
              </template>
              <strong>谷雨茶。</strong>
            </el-tooltip>
            谷雨茶滋味鲜活，香气怡人，
            <el-tooltip placement="top">
              <template #content>
                <p class="tip">It is said that Grain Rain's tea on this day will clear the fire, ward off evil spirits, and brighten the eyes.</p>
              </template>
              <strong>传说谷雨这天的茶喝了能够清火、辟邪、明目呢！</strong>
            </el-tooltip>
          </p>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<style scoped>
@import '@/styles/page.css';
</style>
