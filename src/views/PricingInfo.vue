<template>
  <div class="pricing-info-section">
    <div class="container">
      <div class="row">
        <div class="col-12 text-center mb-5">
          <h2 class="section-title">Unlock Your Business Potential with Apex Click</h2>
        </div>
      </div>
      
      <!-- How It Works Section -->
      <div class="row mb-5">
        <div class="col-lg-8 mx-auto">
          <div class="info-card">
            <h3 class="info-card-title">How It Works</h3>
            <div class="steps">
              <div class="step">
                <div class="step-number">1</div>
                <div class="step-content">
                  <p>Sign up for a 1-month trial and get:</p>
                  <ul>
                    <li>Website creation or optimization</li>
                    <li>Social media account setup (if not available)</li>
                    <li>Social media content creation and management</li>
                    <li>Email marketing</li>
                  </ul>
                </div>
              </div>
              <div class="step">
                <div class="step-number">2</div>
                <div class="step-content">
                  <p>We'll handle the setup, you focus on your business</p>
                </div>
              </div>
              <div class="step">
                <div class="step-number">3</div>
                <div class="step-content">
                  <p>At the end of the trial, review our progress and decide:</p>
                  <ul>
                    <li>Upgrade to a premium package for customized features, mobile app solutions, and top-tier website functionality</li>
                    <li>Pay for the services rendered and take ownership of the accounts</li>
                    <li>Walk away with nothing, no obligations</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Services & Premium Packages -->
      <div class="row">
        <!-- Services Included -->
        <div class="col-lg-6 mb-4">
          <div class="info-card">
            <h3 class="info-card-title">Services Included</h3>
            <ul class="services-list">
              <li>Website creation or optimization</li>
              <li>Social media setup and management</li>
              <li>Content creation and marketing</li>
              <li>Email marketing</li>
              <li>Customized features (additional costs apply)
                <ul class="sublist">
                  <li>Own domain</li>
                  <li>Business email</li>
                  <li>Mobile app solutions</li>
                  <li>Advanced website functionality</li>
                </ul>
              </li>
            </ul>
          </div>
        </div>

        <!-- Premium Packages -->
        <div class="col-lg-6 mb-4">
          <div class="info-card premium-card">
            <h3 class="info-card-title">Premium Packages</h3>
            <ul class="premium-list">
              <li>Get more customized features and services tailored to your business needs</li>
              <li>Choose from our packages or create your own</li>
              <li>Enjoy priority support and dedicated account management</li>
            </ul>
            <div class="cta-section">
              <p class="highlight">Sign up now and get 50% off your first month!</p>
              <a href="#contact" class="cta-button">Get Started</a>
            </div>
          </div>
        </div>
      </div>

      <!-- CTA Section -->
      <div class="row mt-5">
        <div class="col-12 text-center">
          <div class="cta-box">
            <h3>Ready to take your business to the next level?</h3>
            <p>Reach out to us via email at <a href="mailto:contact@apexclick.com">contact@apexclick.com</a> or join our Facebook page and send us a message.</p>
            <a href="#contact" class="cta-button">Submit Your Project Details</a>
            <p class="small-text mt-3">We'll review your submission and be in touch soon to discuss next steps.</p>
            <div class="guarantee">
              <p>No Hidden Costs, No Long-Term Contracts</p>
              <h4>Try Apex Click today and take your business to the next level!</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PricingInfo',
}
</script>

<style scoped>
.pricing-info-section {
  padding: 60px 0;
  background-color: #f9f9f9;
}

.section-title {
  font-size: 2.5rem;
  color: #2c3e50;
  margin-bottom: 40px;
  font-weight: 700;
  position: relative;
  padding-bottom: 15px;
}

.section-title:after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 80px;
  height: 3px;
  background: #2ECC71;
}

.info-card {
  background: white;
  border-radius: 10px;
  padding: 30px;
  box-shadow: 0 5px 20px rgba(0,0,0,0.05);
  height: 100%;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.info-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 30px rgba(0,0,0,0.1);
}

.info-card-title {
  color: #2c3e50;
  font-size: 1.8rem;
  margin-bottom: 25px;
  padding-bottom: 15px;
  border-bottom: 2px solid #f0f0f0;
  position: relative;
}

.info-card-title:after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 50px;
  height: 2px;
  background: #2ECC71;
}

/* Steps Styling */
.steps {
  position: relative;
  padding-left: 30px;
}

.step {
  position: relative;
  padding-bottom: 30px;
  padding-left: 40px;
  border-left: 2px solid #2ECC71;
}

.step:last-child {
  padding-bottom: 0;
  border-left: 2px solid transparent;
}

.step-number {
  position: absolute;
  left: -20px;
  top: 0;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: #2ECC71;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 1.2rem;
  box-shadow: 0 4px 10px rgba(46, 204, 113, 0.3);
}

.step-content {
  padding: 10px 0;
}

.step-content p {
  margin-bottom: 10px;
  font-size: 1.1rem;
  color: #2c3e50;
}

.step-content ul {
  padding-left: 20px;
  margin: 10px 0;
}

.step-content li {
  margin-bottom: 8px;
  color: #7f8c8d;
  position: relative;
  padding-left: 20px;
}

.step-content li:before {
  content: '•';
  color: #2ECC71;
  font-weight: bold;
  position: absolute;
  left: 0;
}

/* Services List */
.services-list {
  list-style: none;
  padding: 0;
}

.services-list > li {
  padding: 12px 0;
  border-bottom: 1px solid #f0f0f0;
  color: #2c3e50;
  font-size: 1.1rem;
  position: relative;
  padding-left: 30px;
}

.services-list > li:before {
  content: '✓';
  color: #2ECC71;
  font-weight: bold;
  position: absolute;
  left: 0;
}

.sublist {
  margin-top: 10px;
  padding-left: 20px;
  list-style: none;
}

.sublist li {
  padding: 5px 0;
  color: #7f8c8d;
  font-size: 1rem;
  border: none;
  padding-left: 20px;
}

.sublist li:before {
  content: '→';
  color: #2ECC71;
  margin-right: 8px;
}

/* Premium Card */
.premium-card {
  background: linear-gradient(135deg, #2c3e50 0%, #1a252f 100%);
  color: white;
}

.premium-card .info-card-title {
  color: white;
  border-bottom-color: rgba(255,255,255,0.1);
}

.premium-card .info-card-title:after {
  background: #2ECC71;
}

.premium-list {
  list-style: none;
  padding: 0;
  margin-bottom: 30px;
}

.premium-list li {
  padding: 12px 0;
  border-bottom: 1px solid rgba(255,255,255,0.1);
  position: relative;
  padding-left: 30px;
}

.premium-list li:before {
  content: '★';
  color: #2ECC71;
  position: absolute;
  left: 0;
}

/* CTA Section */
.cta-box {
  background: white;
  padding: 40px;
  border-radius: 10px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.1);
  max-width: 800px;
  margin: 0 auto;
}

.cta-box h3 {
  color: #2c3e50;
  margin-bottom: 20px;
  font-size: 1.8rem;
}

.cta-box p {
  color: #7f8c8d;
  margin-bottom: 25px;
  font-size: 1.1rem;
}

.cta-box a {
  color: #2ECC71;
  text-decoration: none;
  transition: color 0.3s ease;
}

.cta-box a:hover {
  color: #27ae60;
  text-decoration: underline;
}

.cta-button {
  display: inline-block;
  background: #2ECC71;
  color: white !important;
  padding: 12px 30px;
  border-radius: 50px;
  text-decoration: none !important;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;
  transition: all 0.3s ease;
  border: 2px solid #2ECC71;
  margin-top: 10px;
}

.cta-button:hover {
  background: transparent;
  color: #2ECC71 !important;
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(46, 204, 113, 0.3);
  text-decoration: none !important;
}

.highlight {
  font-size: 1.2rem;
  color: #2ECC71 !important;
  font-weight: 600;
  margin: 20px 0;
}

.guarantee {
  margin-top: 30px;
  padding-top: 30px;
  border-top: 1px solid #f0f0f0;
}

.guarantee p {
  color: #7f8c8d;
  font-style: italic;
  margin-bottom: 10px;
}

.guarantee h4 {
  color: #2c3e50;
  font-size: 1.4rem;
  font-weight: 600;
}

.small-text {
  font-size: 0.9rem !important;
  color: #95a5a6 !important;
}

/* Responsive Design */
@media (max-width: 991px) {
  .section-title {
    font-size: 2rem;
  }
  
  .info-card {
    margin-bottom: 30px;
  }
  
  .cta-box {
    padding: 30px 20px;
  }
}

@media (max-width: 767px) {
  .section-title {
    font-size: 1.8rem;
  }
  
  .info-card {
    padding: 25px 20px;
  }
  
  .step {
    padding-left: 35px;
  }
  
  .step-number {
    left: -15px;
    width: 30px;
    height: 30px;
    font-size: 1rem;
  }
  
  .cta-button {
    width: 100%;
    text-align: center;
  }
}
</style>
