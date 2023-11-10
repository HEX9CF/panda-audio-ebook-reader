<script setup>
const book = 1;
const page = 1;

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
                <p class="tip">立春（Beginning of Spring）</p>
              </template>
              <strong>立春</strong>
            </el-tooltip>
            到了，这一天春回大地、万物复苏。温暖的东风徐徐吹来，冰河消融，草木初生，气温逐渐回暖。
          </p>
          <p class="chsPara">
            蛰伏一个冬天的小动物们逐渐苏醒，伸伸懒腰，开始寻找食物。
          </p>
          <p class="engPara">
            At the “Beginning of Spring”, the aura of early spring can be clearly felt in China's Tropic of Cancer and the area south of it. In the nature, the most distinctive feature of  “Beginning of Spring”is that everything begins to recover and becomes full of vigor. Also, the daytime becomes longer and the weather gets warmers.
          </p>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<style scoped>
@import '@/styles/page.css';
</style>
