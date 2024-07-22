<template>
  <div class="banner banner-vuejsconf" v-if="isVisible">
    <a href="/server-info/changelog#v4-0-0-jumping"
      target="_blank">
      <p>全新 4.0 版本，代号“姜萍”现已推出！全新地形地貌，大幅增强冒险体验，点击查看更新日志 -></p>
    </a>
    <div class="close-btn" @click.stop.prevent="closeBanner">
      <span class="close">&times;</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

const isVisible = ref(false)

const nameStorage = 'NEW-VERSION-V4_0'

const resetLayoutTopHeight = () => {
  document.documentElement.classList.add('banner-dismissed')
}

const closeBanner = () => {
  // Hide the banner
  isVisible.value = false
  // Save action in the local storage
  localStorage.setItem(nameStorage, String(true))
  resetLayoutTopHeight()
}

onMounted(() => {
  isVisible.value = !localStorage.getItem(nameStorage)

  if (!isVisible.value) {
    resetLayoutTopHeight()
  }
})
</script>
<style>
html:not(.banner-dismissed) {
  --vp-layout-top-height: 60px;
}
</style>
<style scoped>
.banner {
  position: fixed;
  z-index: var(--vp-z-index-layout-top);
  box-sizing: border-box;
  top: 0;
  left: 0;
  right: 0;
  height: var(--vp-layout-top-height);
  line-height: 0;
  text-align: center;
  font-size: 14px;
  font-weight: 600;
  color: #fff;
  background-color: #f6f6f6;
}

.banner-dismissed .banner {
  display: none;
}

a {
  text-decoration: underline;
}

.banner-vuejsconf a {
  display: inline-block;
  margin: 0 auto;
}

.banner-vuejsconf .close-btn {
  top: 20px;
  right: 10px;
  z-index: 99;
  position: absolute;
  border-radius: 50%;
  padding: 10px;
  cursor: pointer;
  color: #000;
}
</style>
