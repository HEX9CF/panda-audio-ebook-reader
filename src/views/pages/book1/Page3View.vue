<script setup>
const book = 1;
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
            在越冬的燕子飞回北方，鱼儿畅游在解冻的河面，岁岁约上了好朋友出城探春踏春。朋友们
            <el-tooltip placement="top">
              <template #content><p class="tip">
                摆春盘（Making Spring Plate）<br/>
                Spring plate is one of the food customs in spring, which contains fruit, vegetables, candy, cakes. Vegetables chiefly have bean sprouts, radishes, leeks, spinach, lettuce, beans, eggs, and shredded potatoes. Spring plate is made with a thin, round dough roll wrapped in the shape of long strips and then fried until golden brown. We usually send it to friends, relatives or self-eating to welcome the spring.
              </p></template>
              <strong>摆好了春盘</strong>
            </el-tooltip>
            ，还准备了在立春这天要吃的
            <el-tooltip placement="top">
              <template #content><p class="tip">
                春 饼（Enjoying Spring Cake）<br/>
                Spring cake is a flour-cooked pancake which is usually rolled with vegetables. As a proverb goes: "At the Start of Spring, we should eat some radish, spring cake and lettuce.
              </p></template>
              <strong>春饼</strong>
            </el-tooltip>
            和
            <el-tooltip placement="top">
              <template #content><p class="tip">
                春 卷（Eating Spring Rolls）<br/>
                Spring rolls are deep fried, cylinder-shaped food made of golden, crispy wrappers and a tasty filling of various ingredients. They can appear on the table as a dinner dish, appetizer or snack. Because they look like bars of gold, spring rolls are a wish for prosperity and wealth.
              </p></template>
              <strong>春卷</strong>
            </el-tooltip>
            ，邀请岁岁一起来“
            <el-tooltip placement="top">
              <template #content><p class="tip">
                咬 春（Biting the Spring）<br/>
                "At the start of spring, no expensive chewing radish, said 'bite the spring."
              </p></template>
              <strong>咬春</strong>
            </el-tooltip>
            ”。
          </p>
          <p class="engPara">
            In many parts of China, people eat spring pancanks, spring rolls, and a few mouthfuls of carrots.
          </p>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<style scoped>
@import '@/styles/page.css';
</style>
