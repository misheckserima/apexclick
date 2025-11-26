<template>
  <header class="header" :style="{ zIndex: 1001 }">
    <router-link to="/" class="logo">
      <img
        src="/images/apexlogo.jpg"
        alt="ApexClick Logo"
        class="logo-img"
      />
    </router-link>
    <button class="mobile-menu-btn" :class="{ 'is-active': isMobileMenuOpen }" @click="toggleMobileMenu" aria-label="Toggle menu">
      <span class="hamburger-line"></span>
      <span class="hamburger-line"></span>
      <span class="hamburger-line"></span>
    </button>
    <nav class="navbar" :class="{ active: isMobileMenuOpen }">
      <button class="close-menu-btn" @click="closeMobileMenu" aria-label="Close menu">×</button>
      <ul>
        <li><router-link to="/" @click="closeMobileMenu">Home</router-link></li>
        <li><router-link to="/pricing" @click="closeMobileMenu">Pricing</router-link></li>
        <li><router-link to="/about" @click="closeMobileMenu">About</router-link></li>
        <li><router-link to="/contact" @click="closeMobileMenu">Contact Us</router-link></li>
      </ul>
    </nav>
    <div class="mobile-overlay" :class="{ active: isMobileMenuOpen }" @click="closeMobileMenu"></div>
  </header>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const isMobileMenuOpen = ref(false)

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
  document.body.classList.toggle('nav-open', isMobileMenuOpen.value)
}

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false
  document.body.classList.remove('nav-open')
}

const handleScroll = () => {
  const header = document.querySelector('.header') as HTMLElement
  if (window.scrollY > 35) {
    header.style.background = '#002e5f'
    header.style.boxShadow = '0 .2rem .5rem rgba(0,0,0,.4)'
  } else {
    header.style.background = 'none'
    header.style.boxShadow = 'none'
  }
}

const handleResize = () => {
  if (window.innerWidth > 992) {
    closeMobileMenu()
  }
}

const handleClickOutside = (event: Event) => {
  const target = event.target as HTMLElement
  if (!target.closest('.header') && !target.closest('.navbar')) {
    closeMobileMenu()
  }
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  window.addEventListener('resize', handleResize)
  document.addEventListener('click', handleClickOutside)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
  window.removeEventListener('resize', handleResize)
  document.removeEventListener('click', handleClickOutside)
})
</script>

<style scoped>
.logo-img {
  width: 80px;
  height: 3rem;
  border-radius: 2px;
  object-fit: contain;
  transition: all 0.3s ease;
}

/* Mobile Menu Button - Hamburger */
.mobile-menu-btn {
  display: none;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 45px;
  height: 45px;
  background: linear-gradient(135deg, #00ffff, #0080ff);
  border: none;
  border-radius: 8px;
  cursor: pointer;
  z-index: 1002;
  padding: 8px;
  gap: 5px;
  transition: all 0.3s ease;
  box-shadow: 0 2px 10px rgba(0, 255, 255, 0.3);
}

.mobile-menu-btn:hover {
  transform: scale(1.05);
  box-shadow: 0 4px 15px rgba(0, 255, 255, 0.4);
}

.hamburger-line {
  width: 24px;
  height: 3px;
  background: #0f3460;
  border-radius: 2px;
  transition: all 0.3s ease;
}

.mobile-menu-btn.is-active .hamburger-line:nth-child(1) {
  transform: rotate(45deg) translate(6px, 6px);
}

.mobile-menu-btn.is-active .hamburger-line:nth-child(2) {
  opacity: 0;
}

.mobile-menu-btn.is-active .hamburger-line:nth-child(3) {
  transform: rotate(-45deg) translate(6px, -6px);
}

/* Close Button inside menu */
.close-menu-btn {
  display: none;
  position: absolute;
  top: 20px;
  right: 20px;
  width: 40px;
  height: 40px;
  background: rgba(255, 255, 255, 0.1);
  border: 2px solid #00ffff;
  border-radius: 50%;
  color: #00ffff;
  font-size: 28px;
  cursor: pointer;
  z-index: 1003;
  transition: all 0.3s ease;
  line-height: 1;
}

.close-menu-btn:hover {
  background: #00ffff;
  color: #0f3460;
}

/* Mobile Overlay */
.mobile-overlay {
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 999;
  opacity: 0;
  visibility: hidden;
  transition: all 0.3s ease;
}

.mobile-overlay.active {
  opacity: 1;
  visibility: visible;
}

/* Mobile Responsive */
@media (max-width: 992px) {
  .mobile-menu-btn {
    display: flex;
  }
  
  .close-menu-btn {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .mobile-overlay {
    display: block;
  }
  
  .logo-img {
    width: 80px;
    height: 3rem;
    object-fit: contain;
    margin: 10px 0;
  }
  
  .navbar {
    position: fixed !important;
    top: 0 !important;
    right: -300px !important;
    width: 280px !important;
    height: 100vh !important;
    background: linear-gradient(180deg, #0f3460 0%, #1a1a2e 100%) !important;
    display: flex !important;
    flex-direction: column !important;
    align-items: center !important;
    justify-content: center !important;
    transition: right 0.4s cubic-bezier(0.4, 0, 0.2, 1) !important;
    z-index: 1000 !important;
    box-shadow: -5px 0 30px rgba(0, 0, 0, 0.3) !important;
    visibility: hidden;
  }
  
  .navbar.active {
    right: 0 !important;
    visibility: visible;
  }
  
  .navbar ul {
    flex-direction: column !important;
    gap: 0.5rem !important;
    list-style: none !important;
    padding: 0 !important;
    margin: 0 !important;
    text-align: center !important;
    width: 100% !important;
  }
  
  .navbar ul li {
    margin: 0 !important;
    width: 100% !important;
  }
  
  .navbar ul li a {
    font-size: 1.6rem !important;
    color: white !important;
    text-decoration: none !important;
    padding: 1.2rem 2rem !important;
    display: block !important;
    transition: all 0.3s ease !important;
    border-left: 3px solid transparent !important;
  }
  
  .navbar ul li a:hover {
    color: #00ffff !important;
    background: rgba(0, 255, 255, 0.1) !important;
    border-left-color: #00ffff !important;
  }
}

@media (max-width: 576px) {
  .mobile-menu-btn {
    width: 40px;
    height: 40px;
    padding: 6px;
    gap: 4px;
  }
  
  .hamburger-line {
    width: 20px;
    height: 2.5px;
  }
  
  .logo-img {
    width: 80px;
    height: 3rem;
  }
  
  .navbar {
    width: 250px !important;
    right: -260px !important;
  }
  
  .navbar ul li a {
    font-size: 1.4rem !important;
    padding: 1rem 1.5rem !important;
  }
}
</style>
