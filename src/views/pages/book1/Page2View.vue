<script setup>
const page = 2;

const rsPath = window.api.getRsPath();

const chsAudio = rsPath + '/audios/book1/chs/' + page + '.mp3';
const engAudio = rsPath + '/audios/book1/eng/' + page + '.mp3';
const comicImage = rsPath + '/images/book1/comic/' + page + '.jpg';
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
            岁岁被一阵敲门声唤醒，打开门，是隔壁的邻居，他的手上拿着一副春牛图和一只泥土捏成的小春牛。原来是春耕的时候到了，邻居在挨家挨户上门拜访，向左邻右舍送上春耕祝福的话语。
          </p>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<style scoped>
@import '@/styles/page.css';
</style>
