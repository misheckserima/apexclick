<template>
  <div id="app">
    <AppHeader />
    <router-view />
    <AppFooter />
    <BackToTop />
  </div>
</template>

<script setup lang="ts">
import AppHeader from '@/components/AppHeader.vue'
import AppFooter from '@/components/AppFooter.vue'
import BackToTop from '@/components/BackToTop.vue'
</script>

<style>
#app {
  font-family: 'Poppins', sans-serif;
}
</style>
