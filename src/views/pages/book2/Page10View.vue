<script setup>
const book = 2;
const page = 10;

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
          <h1>谷雨</h1>
          <p class="chsPara">
            <el-tooltip placement="top">
              <template #content>
                <p class="tip">Grain Rain</p>
              </template>
              <strong>谷雨</strong>
            </el-tooltip>
            是春季最后一个节气，
            <el-tooltip placement="top">
              <template #content>
                <p class="tip">"Rain brings up the growth of hundreds of grains".</p>
              </template>
              <strong>“雨生百谷”，谷得雨而生也。</strong>
            </el-tooltip>
            谷雨意味着寒潮天气基本结束，气温回升加快。天气暖和，雨水多了，谷物开始生长。一年的丰收在这天有了预兆。
          </p>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<style scoped>
@import '@/styles/page.css';
</style>
