<script setup>
const book = 3;
const page = 2;

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
            早上起床后，岁岁坐在餐桌前准备吃早餐，但不知怎的感觉
            <el-tooltip placement="bottom">
              <template #content>
                <p class="tip">Since the Beginning of summer, the weather has gradually become hot, and many people will feel weak,lose appetite, and gradually lose weight, suffering from the so-called "bitter summer". Children, in particular, are more prone to have “bitter summer symptoms.</p>
              </template>
              <strong>有些全身疲乏虚弱，食欲不振。</strong>
            </el-tooltip>
          </p>
          <p class="chsPara">
            于是乎，岁岁妈妈从厨房把早上锅里蒸好的鸡蛋切盘摆上餐桌，告诉岁岁
            <el-tooltip placement="bottom">
              <template #content>
                <p class="tip">Eating eggs at the Beginning of Summer： People believe that eating eggs at the beginning of summer can prevent the common summer symptoms such as anorexia, fatigue, weakness, and weight loss.</p>
              </template>
              <strong>夏天要多吃鸡蛋</strong>
            </el-tooltip>
            ，正所谓，
            <el-tooltip placement="bottom">
              <template #content>
                <p class="tip">As the saying goes, "if you eat eggs at the Beginning of Summer, it won't be a bitter summer in hot weather."</p>
              </template>
              <strong>“立夏吃了蛋，热天不疰夏。”</strong>
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
