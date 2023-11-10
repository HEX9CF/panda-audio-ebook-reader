<script setup>
const book = 3;
const page = 7;

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
            <el-tooltip placement="top">
              <template #content>
                <p class="tip">The "three Wheels" are starting to hum as Grain Buds gets closer. Waterwheel for irrigating the rice fields, spinning wheel for making silk products, and oil wheel for squeezing oil out of rapeseeds, all start to gather pace during this time of the year.</p>
              </template>
              <strong>古谚语说得好：“小满动三车（水车、丝车、油车）。”</strong>
            </el-tooltip>
          </p>
          <p class="chsPara">
            <el-tooltip placement="top">
              <template #content>
                <p class="tip">Dry weather is easy to occur in Grain Buds, which is very unfavorable to crops. In the old days, farmers would use water trucks for drainage and irrigation to alleviate the drought.</p>
              </template>
              <strong>小满期间，岁岁总是听见乡间的水车咕噜噜地转，看见农民们正在勤劳地踏水车翻水。小满时节正值初夏，天气易旱，但生长的小麦需要大量的水源，所以在小满这天启动水车进行灌溉可谓是农村的大事呢。</strong>
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
