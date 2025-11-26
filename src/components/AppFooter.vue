<template>
  <div class="footer">
    <div class="footer-top">
      <div class="container">
        <div class="row">
          <div class="col-lg-3 col-md-6 footer-links">
            <h4>Quick Links</h4>
            <ul>
              <li>
                <i class="ion-ios-arrow-forward"></i> 
                <router-link to="/">Home</router-link>
              </li>
              <li>
                <i class="ion-ios-arrow-forward"></i>
                <router-link to="/pricing">Pricing</router-link>
              </li>
              <li>
                <i class="ion-ios-arrow-forward"></i>
                <router-link to="/about">About Us</router-link>
              </li>
              <li>
                <i class="ion-ios-arrow-forward"></i>
                <router-link to="/contact">Contact Us</router-link>
              </li>
              <li>
                <i class="ion-ios-arrow-forward"></i>
                <a href="/#service">Our Services</a>
              </li>
            </ul>
          </div>

          <div class="col-lg-3 col-md-6 footer-links">
            <h4>Resources</h4>
            <ul>
              <li>
                <i class="ion-ios-arrow-forward"></i>
                <a href="/about#team">Our Team</a>
              </li>
              <li>
                <i class="ion-ios-arrow-forward"></i>
                <router-link to="/terms-conditions">Terms & Conditions</router-link>
              </li>
              <li>
                <i class="ion-ios-arrow-forward"></i>
                <router-link to="/privacy-policy">Privacy Policy</router-link>
              </li>
              <li>
                <i class="ion-ios-arrow-forward"></i>
                <a href="/contact#faq">FAQ</a>
              </li>
              <li>
                <i class="ion-ios-arrow-forward"></i>
                <a href="/html/careers.html">Careers</a>
              </li>
            </ul>
          </div>

          <div
            class="col-lg-3 col-md-6 footer-contact"
            style="font-size: 1.5rem"
          >
            <h4>Contact Us</h4>
            <p>
              7500 Cresswell Drive<br />
              Arlington<br />
              Texas 76001<br />
              USA <br />
              <strong>Phone:</strong> +1 (682) 284-4934<br />
              <strong>Email:</strong> helpdesk@apexclick.online<br />
            </p>

          </div>

          <div class="col-lg-3 col-md-6 footer-newsletter">
            <h4>Stay Updated</h4>
            <p>
              Join our mailing list for insights on the latest trends in
              digital marketing and exclusive updates on ApexClick's
              innovative digital solutions.
            </p>
            <form @submit.prevent="handleNewsletterSubmit">
              <input
                v-model="newsletterForm.email"
                type="email"
                name="email"
                style="font-size: 14px"
                placeholder="Your Email"
                required
              />
              <input
                type="submit"
                value="Subscribe"
                style="font-size: 14px; width: 80px"
              />
              <input
                type="hidden"
                name="_subject"
                value="New Subscription Request"
              />
            </form>
          </div>
        </div>
      </div>
    </div>

    <div class="container">
      <div class="row align-items-center">
        <div
          class="col-md-6 copyright"
          style="color: #fff; font-size: 1.3rem"
        >
          Copyright &copy; 2024 ApexClick. All Rights Reserved.
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import type { NewsletterForm } from '@/types'

const newsletterForm = ref<NewsletterForm>({
  email: ''
})

const handleNewsletterSubmit = () => {
  // Handle newsletter subscription
  console.log('Newsletter subscription:', newsletterForm.value.email)
  // Reset form
  newsletterForm.value.email = ''
}
</script>
