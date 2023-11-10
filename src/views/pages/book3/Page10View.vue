<script setup>
const book = 3;
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
          <p class="chsPara">
            <el-tooltip placement="top">
              <template #content>
                <p class="tip">During rainy weather, the air is humid and hot and easy to make people sick.Timely hydration, due to the hot weather, the human body sweating more, we should pay attention to timely hydration.</p>
              </template>
              <strong>芒种时节雨量充沛，气温显著升高。此时全国开始陆续进入雨季。阴雨天气下，空气潮湿又闷热，此时最容易生病。而且天气炎热，出门都得带上水瓶。岁岁知道，如果不及时喝水，很容易出现脱水中暑的情况。</strong>
            </el-tooltip>
            </p>
          <p class="chsPara">
            此外，连鲜艳的花朵都被晒得失去了精神。
            <el-tooltip placement="top">
              <template #content>
                <p class="tip">After May, all flowers begin to wither. Therefore, people will hold a ceremony to worship the Flower God in Grain in Ear, saying their farewell to the Flower God and expressing their gratitude to him.</p>
              </template>
              <strong>五月后，百花开始凋残，因此民间会在芒种举行祭祀花神仪式，饯送花神归位，表达对花神的感激之情。</strong>
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
