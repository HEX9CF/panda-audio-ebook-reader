<script setup>
const book = 3;
const page = 5;

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
            平日里，岁岁经常邀请好朋友们一起来院子里玩耍。岁岁拿出了好多水果和它的好朋友们分享。
            <el-tooltip placement="top">
              <template #content>
                <p class="tip">Tasting new：There is a custom of tasting "three new" in the Beginning of Summer in Jiangnan area. Among the people of Nanjing, "three new" refers to cherries in Xuanwu Lake, green plum in Gaochun and reeves shad in Zhenjiang; In Suzhou, "three new" are freshly ripened cherries, prunes and wheat. In short, the Beginning of Summer is a good time to taste fresh seasonal food, and the "three new" produced in the Beginning of Summer are mostly light（清淡的）.</p>
              </template>
              <strong>立夏尝新，听说品尝新鲜时令水果，能够健康吉祥呢。</strong>
            </el-tooltip>
          </p>
          <p class="chsPara">
            务农的人家左领右舍互相赠送豆、米，和以黄糖，煮成一锅粥，寓意吃了后邻里和睦，一心去夏耕夏种。
          </p>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<style scoped>
@import '@/styles/page.css';
</style>
