<template>
  <div>
    <!-- Contact Section -->
    <section id="contact" class="contact">
      <h1 class="heading">Get in Touch</h1>
      <p style="font-size: 2rem; margin-bottom: 50px">
        Get in touch with us to discuss your digital marketing needs. We'll
        provide a free consultation and quote for your project.
      </p>
    </section>
    <div class="contact-in">
      <div class="contact-map" style="border-radius: 8px">
        <iframe
          src="https://maps.google.com/maps?q=7500+Cresswell+Drive,+Arlington,+TX+76001&t=&z=13&ie=UTF8&iwloc=&output=embed"
          width="100%"
          height="450"
          style="border: 0"
          loading="lazy"
          title="ApexClick Headquarters - Arlington, Texas"
          allowFullScreen={true}
        ></iframe>
      </div>
      <div class="contact-form">
        <form @submit.prevent="handleSubmit" class="contact-form-container">
          <div v-if="status.message" :class="['status-message', status.type]">
            {{ status.message }}
          </div>
          
          <div class="form-group">
            <input
              v-model="formData.name"
              type="text"
              name="name"
              placeholder="Your Name"
              class="form-control"
              required
            />
          </div>
          
          <div class="form-group">
            <input
              v-model="formData.email"
              type="email"
              name="email"
              placeholder="Your Email"
              class="form-control"
              required
            />
          </div>
          
          <div class="form-group">
            <input
              v-model="formData.phone"
              type="tel"
              name="phone"
              placeholder="Phone Number (Optional)"
              class="form-control"
            />
          </div>
          
          <div class="form-group">
            <select
              v-model="formData.subject"
              name="subject"
              class="form-control"
              required
            >
              <option value="" disabled selected>Select Subject</option>
              <option value="General Inquiry">General Inquiry</option>
              <option value="Project Quote">Project Quote</option>
              <option value="Support">Support</option>
              <option value="Partnership">Partnership</option>
            </select>
          </div>
          
          <div class="form-group">
            <textarea
              v-model="formData.message"
              name="message"
              placeholder="Your Message"
              rows="5"
              class="form-control"
              required
            ></textarea>
          </div>
          
          <div class="form-group">
            <button 
              type="submit" 
              class="submit-btn"
              :disabled="isSubmitting"
            >
              <span v-if="isSubmitting">Sending...</span>
              <span v-else>Send Message</span>
            </button>
          </div>
        </form>
      </div>
    </div>

    <!-- FAQ Section -->
    <section class="faq">
      <h1 class="heading" style="margin-top: 1rem; color: #00bfff" id="faq">
        Frequently-Asked Questions
      </h1>
      <div class="row">
        <div class="accordion-container">
          <div 
            v-for="faq in faqs" 
            :key="faq.id"
            class="accordion"
          >
            <div class="accordion-header" @click="toggleAccordion(faq.id)">
              <span>{{ activeAccordion === faq.id ? '-' : '+' }}</span>
              <h3 style="color: white">{{ faq.question }}</h3>
            </div>
            <div 
              class="accordion-body" 
              :style="{ display: activeAccordion === faq.id ? 'block' : 'none' }"
            >
              <p>{{ faq.answer }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { trackEvent } from '../utils/analytics'

// Form data
const formData = ref({
  name: '',
  email: '',
  phone: '',
  subject: '',
  message: ''
})

// Form status
const status = ref({
  message: '',
  type: '' // 'success' or 'error'
})

const isSubmitting = ref(false)
const activeAccordion = ref<string | null>(null)

const faqs = ref([
  {
    id: '1',
    question: 'What digital marketing services do you offer?',
    answer: 'We specialize in a comprehensive range of digital marketing services including website development, social media management, SEO optimization, content marketing, PPC advertising, and email marketing automation.'
  },
  {
    id: '2',
    question: 'How long does it take to see results?',
    answer: 'The timeline varies by service. SEO typically takes 3-6 months, while PPC can show immediate results. We provide detailed timelines during our consultation.'
  },
  {
    id: '3',
    question: 'What makes ApexClick different?',
    answer: 'We combine creativity with data-driven strategies, offering personalized solutions tailored to your specific business goals and target audience.'
  },
  {
    id: '4',
    question: 'Do you offer custom website development?',
    answer: 'Yes, we create custom, responsive websites optimized for search engines and designed to convert visitors into customers.'
  },
  {
    id: '5',
    question: 'How do you measure campaign success?',
    answer: 'We track KPIs like website traffic, conversion rates, lead generation, engagement metrics, and ROI, providing detailed analytics and regular performance reviews.'
  },
  {
    id: '6',
    question: 'What is your pricing structure?',
    answer: 'We offer customized pricing based on your specific needs, with flexible packages including monthly retainers and project-based options.'
  }
])

const toggleAccordion = (id: string) => {
  activeAccordion.value = activeAccordion.value === id ? null : id
}

const handleSubmit = async () => {
  isSubmitting.value = true
  status.value = { message: '', type: '' }

  // Basic validation
  if (!formData.value.name || !formData.value.email || !formData.value.subject || !formData.value.message) {
    trackEvent('form_validation_error', {
      form_name: 'contact',
      error: 'missing_required_fields',
      fields: [
        !formData.value.name ? 'name' : null,
        !formData.value.email ? 'email' : null,
        !formData.value.subject ? 'subject' : null,
        !formData.value.message ? 'message' : null
      ].filter(Boolean)
    })
    
    status.value = {
      message: 'Please fill in all required fields',
      type: 'error'
    }
    isSubmitting.value = false
    return
  }

  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(formData.value.email)) {
    trackEvent('form_validation_error', {
      form_name: 'contact',
      error: 'invalid_email',
      email: formData.value.email
    })
    
    status.value = {
      message: 'Please enter a valid email address',
      type: 'error'
    }
    isSubmitting.value = false
    return
  }

  // Track form submission attempt
  trackEvent('form_submit_attempt', {
    form_name: 'contact',
    form_data: {
      name_length: formData.value.name.length,
      subject: formData.value.subject,
      message_length: formData.value.message.length,
      has_phone: !!formData.value.phone
    }
  })

  try {
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData.value),
    })

    const data = await response.json()

    if (!response.ok) {
      throw new Error(data.message || 'Failed to send message')
    }

    // Track successful submission
    trackEvent('form_submit_success', {
      form_name: 'contact',
      subject: formData.value.subject
    })

    status.value = {
      message: 'Your message has been sent successfully! We will get back to you soon.',
      type: 'success'
    }
    
    // Reset form
    formData.value = {
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    }
  } catch (error) {
    console.error('Error submitting form:', error)
    
    // Track form submission error
    trackEvent('form_submit_error', {
      form_name: 'contact',
      error: error.message || 'unknown_error',
      timestamp: new Date().toISOString()
    })
    
    status.value = {
      message: error.message || 'Failed to send message. Please try again later.',
      type: 'error'
    }
  } finally {
    isSubmitting.value = false
  }
}

// Removed unused handleContactSubmit function since we're using handleSubmit
</script>

<style scoped>
.contact {
  text-align: center;
  padding: 4rem 1rem;
  background: #f8f9fa;
}

.contact-in {
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem 4rem;
}

.contact-map {
  flex: 1;
  min-width: 300px;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.contact-form {
  flex: 1;
  min-width: 300px;
  background: white;
  padding: 2.5rem;
  border-radius: 8px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);
}

.contact-form-container {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.form-group {
  margin-bottom: 1rem;
}

.form-control {
  width: 100%;
  padding: 0.875rem 1rem;
  border: 1px solid #e0e0e0;
  border-radius: 6px;
  font-size: 1rem;
  transition: all 0.3s ease;
  background-color: #f8f9fa;
}

.form-control:focus {
  outline: none;
  border-color: #4a90e2;
  box-shadow: 0 0 0 2px rgba(74, 144, 226, 0.2);
  background-color: white;
}

textarea.form-control {
  min-height: 150px;
  resize: vertical;
}

.submit-btn {
  background: linear-gradient(135deg, #4a90e2, #357abd);
  color: white;
  border: none;
  padding: 1rem 2rem;
  border-radius: 6px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  width: 100%;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.submit-btn:hover:not(:disabled) {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(74, 144, 226, 0.3);
}

.submit-btn:disabled {
  background: #a0c4f8;
  cursor: not-allowed;
  transform: none;
  box-shadow: none;
}

.status-message {
  padding: 1rem;
  margin-bottom: 1rem;
  border-radius: 6px;
  font-weight: 500;
  text-align: center;
}

.status-message.success {
  background-color: #e8f5e9;
  color: #2e7d32;
  border: 1px solid #c8e6c9;
}

.status-message.error {
  background-color: #ffebee;
  color: #c62828;
  border: 1px solid #ffcdd2;
}

/* FAQ Styles */
.faq {
  max-width: 1200px;
  margin: 0 auto;
  padding: 4rem 1rem;
  background: #f8f9fa;
}

.accordion-container {
  max-width: 800px;
  margin: 0 auto;
  padding: 1rem;
}

.accordion {
  background: white;
  border-radius: 8px;
  margin-bottom: 1rem;
  overflow: hidden;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
}

.accordion:hover {
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
}

.accordion-header {
  padding: 1.25rem 1.5rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
  transition: all 0.3s ease;
  background: white;
}

.accordion-header:hover {
  background: #f8f9fa;
}

.accordion-header h3 {
  margin: 0;
  color: #2c3e50;
  font-size: 1.1rem;
  font-weight: 600;
}

.accordion-header span {
  font-size: 1.5rem;
  font-weight: bold;
  margin-left: 1rem;
  color: #4a90e2;
  transition: transform 0.3s ease;
}

.accordion-body {
  padding: 0 1.5rem;
  max-height: 0;
  overflow: hidden;
  transition: all 0.3s ease;
  background: white;
}

.accordion-body p {
  margin: 0;
  padding: 0 0 1.5rem;
  color: #555;
  line-height: 1.7;
}

.accordion-body.show {
  max-height: 500px;
}

@media (max-width: 768px) {
  .contact {
    padding: 2rem 1rem;
  }
  
  .contact-in {
    padding: 0 1rem 2rem;
  }
  
  .contact-form {
    padding: 1.5rem;
  }
  
  .accordion-header h3 {
    font-size: 1rem;
  }
  
  .accordion-body p {
    font-size: 0.95rem;
  }
}

@media (max-width: 480px) {
  .contact-form {
    padding: 1.25rem;
  }
  
  .form-control {
    padding: 0.75rem;
  }
  
  .submit-btn {
    padding: 0.875rem 1.5rem;
  }
}
</style>
