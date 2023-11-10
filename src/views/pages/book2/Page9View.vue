<script setup>
const book = 2;
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
          <p class="chsPara">
            “什么味道好香啊——”这几天岁岁总是闻到空气中飘着糕点的甜香，原来是邻居在清明这一天做了
            <el-tooltip placement="top">
              <template #content>
                <p class="tip">Qingtuan is the most distinctive seasonal food in the Pure Brightness Day.</p>
              </template>
              <strong>美味的青团。</strong>
            </el-tooltip>
            <el-tooltip placement="top">
              <template #content>
                <p class="tip">People pound the bromegrass juice and glutinous rice together to make the green juice and rice flour blend with each other, then wrap them with fillings such as red bean paste and jujube paste, and put them in the steamer with reed leaves at the bottom. Steamed qingtuan is brightly green in color and fragrant.</p>
              </template>
              <strong>人们在用雀麦草汁和糯米包上豆沙、枣泥等馅料，用芦叶垫底，放到蒸笼内——蒸出青团。蒸好的青团色泽鲜绿、香气扑鼻！</strong>
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
