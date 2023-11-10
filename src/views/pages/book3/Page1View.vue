<script setup>
const book = 3;
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
          <h1>立夏</h1>
          <p class="chsPara">
            <el-tooltip placement="top">
              <template #content>
                <p class="tip">Beginning of Summer</p>
              </template>
              <strong>立夏</strong>
            </el-tooltip>
            之后，日照增加，
            <el-tooltip placement="top">
              <template #content>
                <p class="tip">During this period, temperature begins to rise obviously, thunderstorm becomes more frequent and crops’ growth enter the peak season.</p>
              </template>
              <strong>气温开始明显上升，雷雨愈加频繁，农作物生长进入高峰期。</strong>
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
