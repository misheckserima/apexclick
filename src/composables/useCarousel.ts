import { onMounted } from 'vue'

export function useCarousel() {
  const initCarousels = () => {
    // Wait for DOM and Owl Carousel to be available
    const initCarousel = () => {
      // Initialize Owl Carousel for testimonials
      const testimonialsCarousel = document.querySelector('.testimonials-carousel')
      if (testimonialsCarousel && (window as any).$ && (window as any).$.fn.owlCarousel) {
        // Destroy existing carousel if it exists
        if ((window as any).$(testimonialsCarousel).data('owl.carousel')) {
          (window as any).$(testimonialsCarousel).trigger('destroy.owl.carousel')
        }
        
        (window as any).$(testimonialsCarousel).owlCarousel({
          autoplay: true,
          dots: true,
          loop: true,
          margin: 30,
          responsive: {
            0: { items: 1 },
            576: { items: 2 },
            768: { items: 3 },
            992: { items: 4 },
          },
        })
      }

      // Initialize Owl Carousel for clients
      const clientsCarousel = document.querySelector('.clients-carousel')
      if (clientsCarousel && (window as any).$ && (window as any).$.fn.owlCarousel) {
        // Destroy existing carousel if it exists
        if ((window as any).$(clientsCarousel).data('owl.carousel')) {
          (window as any).$(clientsCarousel).trigger('destroy.owl.carousel')
        }
        
        (window as any).$(clientsCarousel).owlCarousel({
          autoplay: true,
          dots: true,
          loop: true,
          margin: 20,
          responsive: { 
            0: { items: 2 }, 
            768: { items: 4 }, 
            900: { items: 6 } 
          },
        })
      }
    }

    // Try to initialize immediately
    setTimeout(initCarousel, 100)

    // If not available, wait a bit and try again
    if (!(window as any).$ || !(window as any).$.fn.owlCarousel) {
      setTimeout(initCarousel, 500)
    }
  }

  return {
    initCarousels
  }
}
