<script>

</script>

<template>
  <div>
    <el-row :gutter="20">
      <el-col :span="12">
        <el-image :src="require('@/assets/book1/1.jpg')" fit="contain" />
      </el-col>
      <el-col :span="12">
        <div class="content">
          <p class="chsText">
            <el-tooltip placement="bottom">
              <template #content>立春（Beginning of Spring）</template>
              <strong>立春</strong>
            </el-tooltip>
            到了，这一天春回大地、万物复苏。温暖的东风徐徐吹来，冰河消融，草木初生，气温逐渐回暖。
          </p>
          <p class="engText">
            At the “Beginning of Spring”, the aura of early spring can be clearly felt in China's Tropic of Cancer and the
            area south of it. In the nature, the most distinctive feature for “Beginning of Spring”is that everything begins
            to recover and becomes full of vigor. Also, the daytime becomes longer and the weather gets warmers.
          </p>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<style scoped>
@import '@/styles/page.css';
</style>
