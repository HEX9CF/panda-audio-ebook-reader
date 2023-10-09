<script setup>

</script>

<template>
  <div>
    <el-row :gutter="20">
      <el-col :span="12">
        <el-image :src="require('@/assets/images/book1/5.jpg')" fit="contain" />
      </el-col>
      <el-col :span="12">
        <div class="content">
          <p class="chsText">
            江南春·千里莺啼绿映红<br/>
            【唐】 杜牧<br/>
            千里莺啼绿映红，水村山郭酒旗风。<br/>
            南朝四百八十寺，多少楼台烟雨中。<br/>
          </p>
          <p class="engText">
            Spring on the Southern River shore | By Du Mu<br/>
            Orioles sing for miles amid red blooms and green trees<br/>
            By hills and rills wine shop streamers wave in the breeze.<br/>
            Four Hundred eighty splendid temples still remain<br/>
            Of Southern Dynasties in the mist and rain.<br/>
          </p>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<style scoped>
@import '@/styles/page.css';
</style>
