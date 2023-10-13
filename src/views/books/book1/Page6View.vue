<script setup>
const page = 6;
</script>

<template>
  <div>
    <el-card>
      <el-row>
        <el-col :span="12">
          <span><el-icon><Headset /></el-icon>&nbsp;中文录音</span>
          <br/>
          <audio controls controlsList="nodownload">
            <source :src="require('@/assets/audios/book1/chs/' + page + '.mp3')" type="audio/mpeg">
          </audio>
        </el-col>
        <el-col :span="12">
          <span><el-icon><Headset /></el-icon>&nbsp;英文录音</span>
          <br/>
          <audio controls controlsList="nodownload">
            <source :src="require('@/assets/audios/book1/eng/' + page + '.mp3')" type="audio/mpeg">
          </audio>
        </el-col>
      </el-row>
    </el-card>
    <br/>
    <el-row>
      <el-col :span="12">
        <el-image :src="require('@/assets/images/book1/' + page + '.jpg')" fit="contain" />
      </el-col>
      <el-col :span="12">
        <div class="content">
          <p class="chsPara">
            路上岁岁碰到了住在村头的姐姐带着瓶瓶罐罐，川西这一带的姑娘都会在这天回娘家探望父母。村里人还有独特的爆炸谷米花的手艺，据说爆出的爆米花越多、成色越好，意味着今年的收成就会越好。
          </p>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<style scoped>
@import '@/styles/page.css';
</style>
