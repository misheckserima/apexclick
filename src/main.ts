import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/css/style.css'
import { initAnalytics, trackPageView } from './utils/analytics'

// Vercel Analytics & Speed Insights
import { inject } from '@vercel/analytics'
import { injectSpeedInsights } from '@vercel/speed-insights'

// Initialize Vercel Analytics
inject()

// Initialize Vercel Speed Insights
injectSpeedInsights()

// Initialize custom analytics
initAnalytics()

// Track initial page load
if (typeof window !== 'undefined') {
  trackPageView(window.location.pathname + window.location.search)
}

// Track route changes
router.afterEach((to) => {
  trackPageView(to.path + (to.search || ''))
})

// Import external libraries
import 'bootstrap/dist/css/bootstrap.min.css'
import 'owl.carousel/dist/assets/owl.carousel.css'
import 'owl.carousel/dist/assets/owl.theme.default.css'

// Import jQuery and make it available globally
import $ from 'jquery'
(window as any).$ = $
(window as any).jQuery = $

// Import Owl Carousel dynamically
import('owl.carousel').then(() => {
  // Owl Carousel is now available
})

const app = createApp(App)

app.use(router)

app.mount('#app')
