<template>
  <button 
    class="back-to-top" 
    :style="{ 
      position: 'fixed', 
      display: showBackToTop ? 'flex' : 'none',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#e74c3c', 
      color: '#ffffff',
      width: '50px',
      height: '50px',
      right: '20px',
      bottom: '20px',
      border: 'none',
      borderRadius: '50%',
      boxShadow: '0 2px 10px rgba(0, 0, 0, 0.2)',
      cursor: 'pointer',
      zIndex: '9999',
      transition: 'all 0.3s ease',
      padding: '0',
      outline: 'none'
    }"
    @click="scrollToTop"
    title="Back to top"
  >
    <svg 
      width="24" 
      height="24" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      stroke-width="2" 
      stroke-linecap="round" 
      stroke-linejoin="round"
      style="margin-top: 2px;"
    >
      <line x1="12" y1="19" x2="12" y2="5"></line>
      <polyline points="5 12 12 5 19 12"></polyline>
    </svg>
  </button>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const showBackToTop = ref(false)

const handleScroll = () => {
  showBackToTop.value = window.scrollY > 100
}

const scrollToTop = (event: Event) => {
  event.preventDefault()
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>
