<script setup>

</script>

<template>
  <div>
    <el-row :gutter="20">
      <el-col :span="12">
        <el-image :src="require('@/assets/images/book1/6.jpg')" fit="contain" />
      </el-col>
      <el-col :span="12">
        <div class="content">
        <p class="chsPara">
          岁岁披上斗篷蓑衣，走在雨中，它正准备要去田边山间采摘一些春天的食物。春雨过后，岁岁最最最喜欢
          <el-tooltip placement="bottom">
            <template #content><p class="tip">
              春笋(Fresh bamboo shoots )<br/>
              Fresh bamboo shoots are panda’s staple diet. They push through after the spring rain.
            </p></template>
            <strong>春笋</strong>
          </el-tooltip>
          都探出头来。想到这里，岁岁忍不住擦了擦口水。除此之外，还有吃完唇齿留香的马兰头、绿叶红边、香味浓郁的香椿和
          <el-tooltip placement="bottom">
            <template #content><p class="tip">
            田艾籺（Partaking of Tian Ai Qi with Polished Glutinous Rice and Affine Cudweed in Guandong Style）<br/>
            “Tian Ai Qi” is a common seasonal food and a snack with glutinous rice flour as the crust and filling, which can be mixed according to personal taste, both salty and sweet. At the beginning of spring, when everything is reviving and the grass is growing, it is the heyday of “Tian Ai Qi” growth in the spring fields.
            </p></template>
            <strong>田艾籺</strong>
          </el-tooltip>
          。书上说，
          <el-tooltip placement="bottom">
            <template #content><p class="tip">
              According to the "Food Materia Medica", it is effective in dispelling dampness, warming the stomach and cleansing the intestines. It is also used as a seasonal tribute for worshipping the gods and praying for good weather and rain.
            </p></template>
            <strong>田艾籺它有祛湿、清热胃、清肠的功效呢</strong>
          </el-tooltip>
          。
        </p>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<style scoped>
@import '@/styles/page.css';
</style>
