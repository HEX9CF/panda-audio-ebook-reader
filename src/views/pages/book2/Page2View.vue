<script setup>
const book = 2;
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
            这时候，普通人家的餐桌上就会多出一道美味——
            <el-tooltip placement="bottom">
              <template #content>
                <p class="tip">"Spring vegetables" is a kind of wild amaranth commonly known as "spring artemisia."</p>
              </template>
              <strong>“春菜”（一种野生苋菜，俗称“春蒿”）。</strong>
            </el-tooltip>
            <el-tooltip placement="bottom">
              <template #content>
                <p class="tip">On “Spring Equinox,” people go in groups to pick "spring vegetables" in the wild. After picking the vegetables, they make "spring soup" together with fish slices. Spring soup cleanses the liver and intestines; the whole family is safe and healthy.</p>
              </template>
              <strong>在春分，人们成群结队地去野外挑选“春菜”。摘完蔬菜后，他们和鱼片一起做“春汤”。在春分喝春汤，可以净化肝脏和肠道，还能保佑全家都安全健康。</strong>
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
