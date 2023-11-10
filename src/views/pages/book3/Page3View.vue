<script setup>
const book = 3;
const page = 3;

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
            中午，岁岁一家人一起吃
            <el-tooltip placement="top">
              <template #content>
                <p class="tip">Many people in southern China have the custom of eating “colorful rice,” also traditionally called “lixia rice,” which is made from many different kinds of beans, like red beans,soy beans, black beans, green beans and mung beans mixed together with white japonica rice.</p>
              </template>
              <strong>“立夏饭”，这是用赤豆、黄豆、黑豆、青豆、绿豆等五色豆拌合白粳米煮成的“五色饭”</strong>
            </el-tooltip>
            ，后演变改为豌豆肉煮糯米饭。
          </p>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<style scoped>
@import '@/styles/page.css';
</style>
