<script setup>
const book = 2;
const page = 12;

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
            下午，岁岁住在山东沿海的好朋友写信告诉它，海水回暖，百鱼行至浅海地带，是下海捕鱼的好日子，渔民们会在谷雨这天庆祝
            <el-tooltip placement="bottom">
              <template #content>
                <p class="tip">Fisherman's Day is the festival of fishermen in Rongcheng City, Shandong Province, which originated fromthe Grain Rain Festival.</p>
              </template>
              <strong>“渔民节”，</strong>
            </el-tooltip>
            隆重举行了传统的
            <el-tooltip placement="bottom">
              <template #content>
                <p class="tip">Rongcheng fishermen still hold the traditional sea sacrifice ceremony on Grain Rain day, thanking the God of the sea for the rich fish and shrimp and praying for the blessing of the gods to avoid disasters and eliminate difficulties.</p>
              </template>
              <strong>海上祭祀仪式，感谢海神赋予的丰富鱼虾，祈求海神保佑。</strong>
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
