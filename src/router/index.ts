import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import About from '@/views/About.vue'
import Contact from '@/views/Contact.vue'
import Pricing from '@/views/Pricing.vue'
import StartupPromotion from '@/views/StartupPromotion.vue'
import PrivacyPolicy from '@/views/PrivacyPolicy.vue'
import TermsConditions from '@/views/TermsConditions.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  },
  {
    path: '/pricing',
    name: 'Pricing',
    component: Pricing
  },
  {
    path: '/startup-promotion',
    name: 'StartupPromotion',
    component: StartupPromotion
  },
  {
    path: '/privacy-policy',
    name: 'PrivacyPolicy',
    component: PrivacyPolicy
  },
  {
    path: '/terms-conditions',
    name: 'TermsConditions',
    component: TermsConditions
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    // Always scroll to top when going to home page
    if (to.name === 'Home') {
      return { top: 0 }
    }
    
    if (savedPosition) {
      return savedPosition
    } else if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth'
      }
    } else {
      return { top: 0 }
    }
  }
})

export default router
