<script setup>
const book = 3;
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
            正好，邻居家门前围坐了好多人，十分热闹。岁岁饭后见状跑去围观，只见
            <el-tooltip placement="bottom">
              <template #content>
                <p class="tip">
                  Checking the weight of people：This custom is popular in the south of China. After having the summer meal at noon, people hold a big wooden scale with a stool or bamboo basket hanging on its hook. Everyone takes turns to sit on it to check their weight, mainly the elderly and children.
                  <br/><br/>
                  Generally, in summer, due to hot weather and other reasons, people's weight will drop. This is intended to prevent the symptoms of “bitter summer,” reflecting people's good wishes for peace and happiness in summer.
                </p>
              </template>
              <strong>门口挂起一杆大木秤，秤钩悬一根凳子，原来这是“秤人”的游戏，大家要轮流坐到凳子上面秤人，司秤人一面打秤花，一面说着吉祥话。</strong>
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
