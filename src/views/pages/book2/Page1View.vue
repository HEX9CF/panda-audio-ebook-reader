<script setup>
const book = 2;
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
          <h1>春分</h1>
          <p class="chsPara">
            <el-tooltip placement="bottom">
              <template #content>
                <p class="tip">Spring Equinox</p>
              </template>
              <strong>春分</strong>
            </el-tooltip>
            这一天，
            <el-tooltip placement="bottom">
              <template #content>
                <p class="tip">The day and night is approximately equal, each for 12 hours. </p>
              </template>
              <strong>昼夜等长。</strong>
            </el-tooltip>
            <el-tooltip placement="bottom">
              <template #content>
                <p class="tip">After “Spring Equinox”, the weather is mild, rainy and with bright sunshine.</p>
              </template>
              <strong>春分之后，天气温和、多雨且阳光明媚。</strong>
            </el-tooltip>
            在天气由冷转热的过渡期间，要多注意开窗通风，预防春季流感。
          </p>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<style scoped>
@import '@/styles/page.css';
</style>
