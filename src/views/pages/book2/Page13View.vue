<script setup>
const book = 2;
const page = 13;

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
            要说谷雨前后让岁岁最高兴的，还得是一朵一朵，
            <el-tooltip placement="bottom">
              <template #content>
                <p class="tip">Peony flowers bloom around the time of the Grain Rain, so peony flower is also known as “Grain Rain flower.”</p>
              </template>
              <strong>牡丹</strong>
            </el-tooltip>
            盛开。
            <el-tooltip placement="bottom">
              <template #content>
                <p class="tip">To this day, peony festivals are held in places such as Heze in Shandong and Luoyang in Henan for people to admire the flowers during the Grain Rain.</p>
              </template>
              <strong>夜间“花会”垂暮悬灯，宴饮赏花</strong>
            </el-tooltip>
            ，岁岁在“花会”里尽情观赏游玩，手舞足蹈。
          </p>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<style scoped>
@import '@/styles/page.css';
</style>
