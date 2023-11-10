<script setup>
const book = 3;
const page = 9;

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
          <h1>芒种</h1>
          <p class="chsPara">
            “芒种夏至天，走路要人牵。”
            <el-tooltip placement="top">
              <template #content>
                <p class="tip">Grain in Ear solar term is characterized by a significant increase in temperature, abundant rainfall and high air humidity.</p>
              </template>
              <strong>芒种时节，气温显著提高，雨量充沛，空气湿度大。</strong>
            </el-tooltip>
            <el-tooltip placement="top">
              <template #content>
                <p class="tip">
                  Grain in Ear is the key node of agricultural production. It is also known as "busy planting," which indicates that farmers are about to start busy field work.
                  <br/><br/>
                  During that time, people in most agricultural areas of China should sow autumn crops and race against time to harvest summer crops before the rainy season, and at the same time, they should manage spring crops well. For the harvesting, planting and management of crops are carried out at the same time, making it the busiest solar term of the year.
                </p>
              </template>
              <strong>农事以这个时节为界，之后呢，庄稼播种的存活率会越来越低。岁岁看着村子里忙碌的人们，才知道“三夏大忙”是怎样的情景。</strong>
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
