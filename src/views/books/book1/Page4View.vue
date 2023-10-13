<script setup>

</script>

<template>
  <div>
    <el-row>
      <el-col :span="12">
        <el-image :src="require('@/assets/images/book1/4.jpg')" fit="contain" />
      </el-col>
      <el-col :span="12">
        <div class="content">
          <p class="chsPara">
            <el-tooltip placement="bottom">
              <template #content><p class="tip">雨水（Rain Water）</p></template>
              <strong>雨水</strong>
            </el-tooltip>
            来了。
            <el-tooltip placement="bottom">
              <template #content><p class="tip">
                  Happy Rain on a spring Night | By Du Fu<br/>
                  Good rainknows its time right,<br/>
                  It will fall when comes sping.<br/>
                  With windit steals in night;<br/>
                  Mute, itwets everything.<br/>
                  Over wildlanes dark cloud spreads;<br/>
                  In boat alantern looms.<br/>
                  Dawn seessaturated reds;<br/>
                  The townsheavy with blooms.<br/>
              </p></template>
              <strong>“好雨知时节，当春乃发生。随风潜入夜，润物细无声。”（《春夜喜雨》——【唐】杜甫）
              </strong>
            </el-tooltip>
            岁岁口中念念有词，看着窗外连绵不断的细雨，知道这
            <el-tooltip placement="bottom">
              <template #content><p class="tip">雨水（Rain Water）</p></template>
              <strong>雨水</strong>
            </el-tooltip>
            的珍贵。农民伯伯都在忙碌着备耕、备种，这是新的一年希望的种子。
          </p>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<style scoped>
@import '@/styles/page.css';
</style>
