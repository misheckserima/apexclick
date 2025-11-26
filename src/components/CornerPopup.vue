<template>
  <div 
    id="cornerPopup" 
    class="corner-popup" 
    :style="{ 
      position: 'fixed', 
      bottom: '20px', 
      right: showPopup ? '20px' : '-200px', 
      width: '180px', 
      zIndex: 10000, 
      transition: 'right 0.5s ease-in-out' 
    }"
  >
    <div class="popup-content" style="position: relative; width: 100%;">
      <img 
        src="/img/stickers/startup_promotion.png" 
        alt="Startup Promotion" 
        style="width: 100%; height: auto; border-radius: 10px; cursor: pointer; transition: transform 0.3s ease;" 
        @click="goToPromotion"
        @mouseover="handleImageHover"
        @mouseout="handleImageLeave"
      />
      
      <!-- Hover Description Tooltip -->
      <div 
        class="hover-description" 
        :style="{ 
          position: 'absolute', 
          top: '-140px', 
          left: '50%', 
          transform: 'translateX(-50%)', 
          background: 'rgba(0, 0, 0, 0.9)', 
          color: 'white', 
          padding: '15px', 
          borderRadius: '10px', 
          width: '280px', 
          fontSize: '0.9rem', 
          lineHeight: '1.4', 
          opacity: showDescription ? 1 : 0, 
          visibility: showDescription ? 'visible' : 'hidden', 
          transition: 'all 0.3s ease', 
          pointerEvents: 'none', 
          zIndex: 10001 
        }"
      >
        <div style="text-align: center; margin-bottom: 10px; font-weight: bold; color: #007bff;">🚀 STARTUP PROMOTION</div>
        <div style="margin-bottom: 8px; text-align: center; font-weight: bold; color: #28a745;">Find out more about our promotion!</div>
        <div style="margin-bottom: 8px;">Take advantage of our exclusive startup offer</div>
        <div style="margin-bottom: 8px;">• Special pricing for new businesses</div>
        <div style="margin-bottom: 8px;">• Limited time opportunity</div>
        <div style="margin-bottom: 8px;">• Don't miss out on these savings</div>
        <div style="margin-bottom: 10px;">• Click to discover all benefits</div>
        <div style="text-align: center; font-weight: bold; color: #ffc107;">Click "Read More" to take advantage!</div>
        <!-- Arrow pointing down -->
        <div style="position: absolute; bottom: -8px; left: 50%; transform: translateX(-50%); width: 0; height: 0; border-left: 8px solid transparent; border-right: 8px solid transparent; border-top: 8px solid rgba(0, 0, 0, 0.9);"></div>
      </div>
      
      <button 
        id="closeCornerPopup" 
        style="position: absolute; top: -5px; right: -5px; background: rgba(0, 0, 0, 0.7); border: none; border-radius: 50%; width: 25px; height: 25px; color: white; font-size: 1rem; font-weight: bold; cursor: pointer; transition: all 0.3s ease;" 
        @click="closePopup"
        @mouseover="handleButtonHover"
        @mouseout="handleButtonLeave"
      >×</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const showPopup = ref(false)
const showDescription = ref(false)

const goToPromotion = () => {
  router.push('/startup-promotion')
}

const closePopup = () => {
  showPopup.value = false
}

const handleImageHover = (event: MouseEvent) => {
  const img = event.target as HTMLImageElement
  img.style.transform = 'scale(1.05)'
  showDescription.value = true
}

const handleImageLeave = (event: MouseEvent) => {
  const img = event.target as HTMLImageElement
  img.style.transform = 'scale(1)'
  showDescription.value = false
}

const handleButtonHover = (event: MouseEvent) => {
  const button = event.target as HTMLButtonElement
  button.style.background = 'rgba(0, 0, 0, 0.9)'
  button.style.transform = 'scale(1.1)'
}

const handleButtonLeave = (event: MouseEvent) => {
  const button = event.target as HTMLButtonElement
  button.style.background = 'rgba(0, 0, 0, 0.7)'
  button.style.transform = 'scale(1)'
}

onMounted(() => {
  // Show popup after 3 seconds
  setTimeout(() => {
    showPopup.value = true
  }, 3000)

  // Auto-hide popup after 10 seconds
  setTimeout(() => {
    showPopup.value = false
  }, 13000)
})
</script>
