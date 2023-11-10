<script setup>
const book = 2;
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
            岁岁和小伙伴一起在玩一个有趣的游戏——
            <el-tooltip placement="top">
              <template #content>
                <p class="tip">Standing an egg upright is a popular game across the country during the spring equinox.</p>
              </template>
              <strong>竖鸡蛋。</strong>
            </el-tooltip>
            <el-tooltip placement="top">
              <template #content>
                <p class="tip">On the spring equinox, people like to find a smooth, well-proportioned fresh egg and try to stand it on the table. It is not easy to stand up an egg, and the fun comes from repeatedly trying and failing.</p>
              </template>
              <strong>它们找到了光滑、均匀的新鲜鸡蛋，并试着把鸡蛋放在桌子上。要站起一个鸡蛋并不容易，但其中的乐趣则来自于反复的尝试和失败。</strong>
            </el-tooltip>
            岁岁不愿轻易放弃，因为它相信，如果能在春分这天将蛋竖起，它一定能在未来拥有好运。
          </p>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<style scoped>
@import '@/styles/page.css';
</style>
