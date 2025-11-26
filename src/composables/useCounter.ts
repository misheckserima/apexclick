import { onMounted } from 'vue'

export function useCounter() {
  const initCounters = () => {
    const counters = document.querySelectorAll('.counter')
    const speed = 120

    counters.forEach((counter) => {
      const updateCount = () => {
        const target = parseInt(counter.getAttribute('data-target') || '0')
        const count = parseInt(counter.textContent || '0')
        const inc = target / speed
        
        if (count < target) {
          counter.textContent = Math.ceil(count + inc).toString()
          setTimeout(updateCount, 1)
        } else {
          counter.textContent = target.toString()
        }
      }
      updateCount()
    })
  }

  return {
    initCounters
  }
}
