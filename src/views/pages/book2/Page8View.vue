<script setup>
const book = 2;
const page = 8;

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
            清明节有
            <el-tooltip placement="top">
              <template #content>
                <p class="tip">Tomb sweeping refers that people sacrifice to ancestors to express their mourning.</p>
              </template>
              <strong>通过扫墓来祭祀祖先，表达哀悼的习俗。</strong>
            </el-tooltip>
            <el-tooltip placement="top">
              <template #content>
                <p class="tip">When people visit the tomb, they usually bring food, drinks, fruits, paper money and other items to the cemetery, burn the paper money, and then kowtow.</p>
              </template>
              <strong>岁岁和家人通常会带着食物、饮料、水果、纸钱等物品到墓地，烧掉纸币，然后磕头。</strong>
            </el-tooltip>
            受传统文化的影响，中国人有一种强烈的缅怀祭拜祖先的意识。
          </p>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<style scoped>
@import '@/styles/page.css';
</style>
