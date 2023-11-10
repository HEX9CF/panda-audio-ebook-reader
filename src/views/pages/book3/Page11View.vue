<script setup>
const book = 3;
const page = 11;

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
                <p class="tip">The season of Grain in Ear is the ripe season of southern plums. In southern China, the ripeness of plums typically occurs between May and June each year. Plums are rich in various organic acids and minerals. Because their taste is sour and difficult to consume directly, they require processing by brewing. After that, People can taste sour and sweet waxberry and drink sweet waxberry wine.</p>
              </template>
              <strong>而在南方，每年五、六月是梅子成熟的季节，人们煮酸梅汤，酿青梅酒，煮制后的新鲜梅子减轻了酸涩，能调理人们因为天气闷热而变得不好的胃口。</strong>
            </el-tooltip>
            喝一口酸梅汤，岁岁立刻觉得心情舒畅。
          </p>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<style scoped>
@import '@/styles/page.css';
</style>
