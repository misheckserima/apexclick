<template>
  <div class="newsletter-form">
    <h3>Subscribe to Our Newsletter</h3>
    <form @submit.prevent="handleSubmit" class="subscribe-form">
      <input
        v-model="email"
        type="email"
        placeholder="Enter your email"
        required
        :disabled="isLoading"
        class="email-input"
      />
      <button type="submit" :disabled="isLoading" class="submit-btn">
        {{ isLoading ? 'Subscribing...' : 'Subscribe' }}
      </button>
    </form>
    <p v-if="message" :class="['message', { error: isError }]">
      {{ message }}
    </p>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const email = ref('');
const message = ref('');
const isError = ref(false);
const isLoading = ref(false);

const handleSubmit = async () => {
  if (!email.value) return;
  
  isLoading.value = true;
  message.value = '';
  isError.value = false;

  try {
    const response = await fetch('/api/subscribe', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email: email.value }),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || 'Failed to subscribe');
    }

    message.value = 'Thank you for subscribing!';
    email.value = '';
  } catch (error) {
    console.error('Subscription error:', error);
    message.value = error.message || 'Failed to subscribe. Please try again.';
    isError.value = true;
  } finally {
    isLoading.value = false;
  }
};
</script>

<style scoped>
.newsletter-form {
  max-width: 500px;
  margin: 2rem auto;
  padding: 2rem;
  background: #f8f9fa;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

h3 {
  margin: 0 0 1.5rem;
  color: #2c3e50;
  text-align: center;
  font-size: 1.5rem;
}

.subscribe-form {
  display: flex;
  gap: 0.5rem;
}

.email-input {
  flex: 1;
  padding: 0.75rem 1rem;
  border: 2px solid #e2e8f0;
  border-radius: 8px;
  font-size: 1rem;
  transition: border-color 0.3s ease;
}

.email-input:focus {
  outline: none;
  border-color: #00a2ed;
  box-shadow: 0 0 0 2px rgba(0, 162, 237, 0.2);
}

.submit-btn {
  background-color: #00a2ed;
  color: white;
  border: none;
  padding: 0 1.5rem;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.submit-btn:hover:not(:disabled) {
  background-color: #0088cc;
  transform: translateY(-1px);
}

.submit-btn:disabled {
  background-color: #a0d4f8;
  cursor: not-allowed;
}

.message {
  margin: 1rem 0 0;
  padding: 0.75rem;
  border-radius: 8px;
  text-align: center;
  font-size: 0.95rem;
}

.message:not(.error) {
  color: #28a745;
  background-color: #e8f5e9;
  border: 1px solid #c3e6cb;
}

.message.error {
  color: #dc3545;
  background-color: #fde8e8;
  border: 1px solid #f5c6cb;
}

@media (max-width: 600px) {
  .subscribe-form {
    flex-direction: column;
  }
  
  .submit-btn {
    padding: 0.75rem;
  }
}
</style>
