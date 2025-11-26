import { onMounted } from 'vue'

export function useScrollAnimations() {
  const isElementInViewport = (el: Element): boolean => {
    const rect = el.getBoundingClientRect()
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    )
  }

  const handleScrollAnimations = () => {
    const animatedElements = document.querySelectorAll('.fade-in, .slide-in-left, .slide-in-right, .scale-in, .stagger-animation, .spin-in, .throw-in, .bounce-in, .flip-in, .zoom-in')
    
    animatedElements.forEach(element => {
      if (isElementInViewport(element)) {
        element.classList.add('visible')
      }
    })
  }

  const initScrollAnimations = () => {
    // Initial check
    handleScrollAnimations()

    // Listen for scroll events
    window.addEventListener('scroll', handleScrollAnimations)
    window.addEventListener('resize', handleScrollAnimations)
  }

  return {
    initScrollAnimations
  }
}
