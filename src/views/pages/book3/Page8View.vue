<script setup>
const book = 3;
const page = 8;

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
            小满之后，气候潮湿闷热，每次一出门，岁岁就热得脱下外套。苦味的食物最是清凉解毒，为了解暑，岁岁买回了苦菜、苦瓜。用来炖汤的
            <el-tooltip placement="top">
              <template #content>
                <p class="tip">During Grain Buds, the climate is humid and muggy, while bitter vegetables are fresh and refreshing. Bitter vegetable is already luxuriant, which can not only be used as a good product for the working people to relieve summer heat and enhance appetite, but also a traditional Chinese medicine having the effect of clearing away toxin and excess body heat, cooling blood and stopping bleeding.</p>
              </template>
              <strong>苦菜</strong>
            </el-tooltip>
            新鲜爽口，苦中带涩，涩中带甜，独具风味；用来清炒的苦瓜留有回甘，增食欲，助消化，吃完之后神清气爽。
          </p>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<style scoped>
@import '@/styles/page.css';
</style>
