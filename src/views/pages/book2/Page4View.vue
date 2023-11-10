<script setup>
const book = 2;
const page = 4;

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
            在户外活动中，风筝可是最受欢迎的。但你知道吗，风筝还有不同的名字——
            <el-tooltip placement="top">
              <template #content>
                <p class="tip">Long long ago, kites were called "harrier" and "kite", and both "harrier" and "kite" were eagle-like raptors. Most of the kites were made of silk or paper in the shape of eagles, so they were also called "paper harriers" and "paper kites".</p>
              </template>
              <strong>很久很久以前，风筝被称为“鹞”和“鸢”，它们都是鹰类猛禽。大多数的风筝都是由丝绸或鹰形形状的纸制成的，所以它们也被称为“纸鸢”和“纸鹞”。</strong>
            </el-tooltip>
            风筝最早的造型是用绢或纸做成鹰，放飞时真得像一雄鹰在空中翱翔。岁岁迎着温和的春风，感受大自然的气息，真是美妙极了！
          </p>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<style scoped>
@import '@/styles/page.css';
</style>
