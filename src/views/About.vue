<template>
  <div id="generic_about_page">
    <!-- Hero Section -->
    <section class="about-hero">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-6">
            <div class="hero-content">
              <h1>About ApexClick</h1>
              <p class="lead">Your Trusted Digital Marketing Partner</p>
              <p class="description">
                We are a premier digital marketing agency dedicated to transforming businesses through innovative online solutions. 
                With years of experience and a passion for excellence, we help brands establish powerful digital presence and achieve remarkable growth.
              </p>
              <div class="hero-stats">
                <div class="stat">
                  <h3>50+</h3>
                  <p>Projects Completed</p>
                </div>
                <div class="stat">
                  <h3>98%</h3>
                  <p>Client Satisfaction</p>
                </div>
                <div class="stat">
                  <h3>3+</h3>
                  <p>Years Experience</p>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-6 position-relative">
            <div class="hero-image-container">
              <div class="image-wrapper">
                <div class="decorative-shape-1"></div>
                <div class="decorative-shape-2"></div>
                <div class="image-container">
                  <img src="/img/home.jpg" alt="ApexClick Team" class="hero-image">
                </div>
              </div>
              <div class="floating-shape"></div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Mission & Values Section -->
    <section class="mission-section">
      <div class="container">
        <div class="row">
          <div class="col-lg-6 mb-4">
            <div class="mission-card">
              <div class="card-icon">
                <i class="fas fa-bullseye"></i>
              </div>
              <h3>Our Mission</h3>
              <p>
                To empower businesses with cutting-edge digital marketing solutions that drive sustainable growth, 
                enhance online visibility, and deliver measurable ROI through transparent partnerships and innovative strategies.
              </p>
            </div>
          </div>
          <div class="col-lg-6 mb-4">
            <div class="vision-card">
              <div class="card-icon">
                <i class="fas fa-compass"></i>
              </div>
              <h3>Our Vision</h3>
              <p>
                To be the leading digital marketing partner for businesses seeking transformative growth, 
                where technology and creativity converge to create exceptional digital experiences and lasting success.
              </p>
            </div>
          </div>
        </div>

        <!-- Values -->
        <div class="values-section">
          <h2 class="section-title">Our Values</h2>
          <div class="row">
            <div class="col-md-3 col-sm-6 mb-4" v-for="value in values" :key="value.title">
              <div class="value-item">
                <div class="value-icon">
                  <i :class="value.icon"></i>
                </div>
                <h4>{{ value.title }}</h4>
                <p>{{ value.description }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Team Section -->
    <section class="team-section">
      <div class="container">
        <div class="section-header">
          <h2>Meet Our Team</h2>
          <p>The dedicated professionals behind ApexClick's success</p>
        </div>
        <div class="row">
          <div 
            v-for="member in teamMembers" 
            :key="member.id"
            class="col-lg-4 col-md-6 mb-4"
          >
            <div class="team-card">
              <div class="member-image">
                <div class="image-container">
                  <img :src="member.image" :alt="member.name" class="team-member-img">
                  <div class="social-links">
                    <a href="https://www.facebook.com/share/15gX6w1rsb/" target="_blank" class="social-link">
                      <i class="fab fa-facebook-f"></i>
                    </a>
                    <a href="https://www.facebook.com/share/15gX6w1rsb/" target="_blank" class="social-link">
                      <i class="fab fa-twitter"></i>
                    </a>
                    <a href="https://www.facebook.com/share/15gX6w1rsb/" target="_blank" class="social-link">
                      <i class="fab fa-instagram"></i>
                    </a>
                    <a href="https://www.facebook.com/share/15gX6w1rsb/" target="_blank" class="social-link">
                      <i class="fab fa-linkedin-in"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div class="member-info">
                <h3>{{ member.name }}</h3>
                <p class="position">{{ member.position }}</p>
                <p class="description">{{ member.description }}</p>
                <div class="skills">
                  <span 
                    v-for="skill in member.skills" 
                    :key="skill"
                    class="skill-tag"
                  >
                    {{ skill }}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Why Choose Us -->
    <section class="why-choose-section" id="services">
      <div class="container">
        <div class="section-header">
          <h2>Why Choose ApexClick?</h2>
          <p class="section-subtitle">What sets us apart in the digital marketing landscape</p>
        </div>
        <div class="row justify-content-center">
          <div class="col-lg-4 col-md-6 mb-4" v-for="(feature, index) in features" :key="feature.title">
            <div class="feature-card" :data-aos="'fade-up'" :data-aos-delay="index * 100">
              <div class="feature-icon-wrapper">
                <div class="feature-icon-bg"></div>
                <i :class="feature.icon"></i>
              </div>
              <h3 class="feature-title">{{ feature.title }}</h3>
              <p class="feature-description">{{ feature.description }}</p>
              <div class="feature-hover-content">
                <a href="https://www.facebook.com/share/15gX6w1rsb/" target="_blank" class="feature-link">Learn more <i class="fas fa-arrow-right"></i></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="about-cta">
      <div class="container">
        <div class="cta-content text-center">
          <h2>Ready to Transform Your Digital Presence?</h2>
          <p>Let's discuss how we can help your business achieve remarkable growth</p>
          <div class="cta-buttons">
            <a href="https://www.facebook.com/share/15gX6w1rsb/" target="_blank" class="cta-btn primary">Start Your Project</a>
            <a href="https://www.facebook.com/share/15gX6w1rsb/" target="_blank" class="cta-btn secondary">View Services</a>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const values = ref([
  {
    icon: 'fas fa-lightbulb',
    title: 'Innovation',
    description: 'We stay ahead of digital trends and leverage cutting-edge technologies.'
  },
  {
    icon: 'fas fa-handshake',
    title: 'Partnership',
    description: 'We build lasting relationships based on trust and mutual success.'
  },
  {
    icon: 'fas fa-award',
    title: 'Excellence',
    description: 'We deliver exceptional quality and exceed client expectations.'
  },
  {
    icon: 'fas fa-chart-line',
    title: 'Results',
    description: 'We focus on driving measurable growth and tangible outcomes.'
  }
])

const teamMembers = ref([
  {
    id: '1',
    name: 'Misheck Serima',
    position: 'CEO & Founder',
    image: '/img/team/misheck.png',
    description: 'Visionary leader with extensive experience in digital transformation and project management. Passionate about creating innovative solutions that drive business growth.',
    skills: ['Digital Strategy', 'Project Management', 'Business Development'],
    socialLinks: {
      facebook: 'https://www.facebook.com/apexclick',
      twitter: 'https://twitter.com/apexclick',
      instagram: 'https://www.instagram.com/apexclick',
      linkedin: 'https://www.linkedin.com/company/apexclick'
    }
  },
  {
    id: '2',
    name: 'Elton Huche',
    position: 'CFO & Founding Partner',
    image: '/img/team/elton.png',
    description: 'Strategic financial expert and customer relations specialist. Dedicated to building lasting client relationships and ensuring sustainable business growth.',
    skills: ['Financial Strategy', 'Client Relations', 'Business Planning'],
    socialLinks: {
      facebook: 'https://www.facebook.com/apexclick',
      twitter: 'https://twitter.com/apexclick',
      instagram: 'https://www.instagram.com/apexclick',
      linkedin: 'https://www.linkedin.com/company/apexclick'
    }
  },
  {
    id: '3',
    name: 'Nicole Ciriboto',
    position: 'Creative Director',
    image: '/img/team/nicole.png',
    description: 'Creative design specialist with expertise in user experience and visual communication. Committed to delivering exceptional digital experiences.',
    skills: ['UI/UX Design', 'Brand Identity', 'Digital Marketing'],
    socialLinks: {
      facebook: 'https://www.facebook.com/apexclick',
      twitter: 'https://twitter.com/apexclick',
      instagram: 'https://www.instagram.com/apexclick',
      linkedin: 'https://www.linkedin.com/company/apexclick'
    }
  },
  // {
  //   id: '4',
  //   name: 'Elton Muchenje',
  //   position: 'Digital Marketer & Founding Partner',
  //   image: '/img/team/elton.png',
  //   description: 'Results-driven digital marketing expert with a passion for data-driven strategies. Specializes in creating impactful online campaigns that drive growth and engagement.',
  //   skills: ['SEO/SEM', 'Social Media Marketing', 'Content Strategy', 'Analytics'],
  //   socialLinks: {
  //     facebook: 'https://www.facebook.com/apexclick',
  //     twitter: 'https://twitter.com/apexclick',
  //     instagram: 'https://www.instagram.com/apexclick',
  //     linkedin: 'https://www.linkedin.com/company/apexclick'
  //   }
  // },
  // {
  //   id: '5',
  //   name: 'Sarah Johnson',
  //   position: 'Head of Operations',
  //   image: '/img/team/placeholder.png',
  //   description: 'Efficiency expert with a talent for optimizing business processes and ensuring smooth operations. Committed to delivering excellence in every project.',
  //   skills: ['Process Optimization', 'Team Leadership', 'Project Management'],
  //   socialLinks: {
  //     facebook: 'https://www.facebook.com/apexclick',
  //     twitter: 'https://twitter.com/apexclick',
  //     instagram: 'https://www.instagram.com/apexclick',
  //     linkedin: 'https://www.linkedin.com/company/apexclick'
  //   }
  // },
  // {
  //   id: '6',
  //   name: 'David Kim',
  //   position: 'Lead Developer',
  //   image: '/img/team/placeholder.png',
  //   description: 'Tech enthusiast with expertise in building robust and scalable web applications. Passionate about clean code and innovative solutions.',
  //   skills: ['Web Development', 'API Integration', 'System Architecture'],
  //   socialLinks: {
  //     facebook: 'https://www.facebook.com/apexclick',
  //     twitter: 'https://twitter.com/apexclick',
  //     instagram: 'https://www.instagram.com/apexclick',
  //     linkedin: 'https://www.linkedin.com/company/apexclick'
  //   }
  // }
])

const features = ref([
  {
    icon: 'fas fa-trophy',
    title: 'Proven Results',
    description: 'We deliver measurable ROI and trackable results for all our clients through data-driven strategies.',
    image: '/img/services_images/webanalytics.jpg'
  },
  {
    icon: 'fas fa-user-tie',
    title: 'Expert Team',
    description: 'Our team consists of experienced professionals with diverse expertise in digital marketing and technology.',
    image: '/img/services_images/team_collaboration.jpg'
  },
  {
    icon: 'fas fa-rocket',
    title: 'Innovative Approach',
    description: 'We combine creativity with technology to create unique solutions that set your business apart.',
    image: '/img/services_images/innovation.jpg'
  }
])
</script>

<style scoped>
/* Import same font as pricing page */
@import url('https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700;900&family=Raleway:wght@100;200;300;400;500;600;700;800;900&display=swap');
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css');

#generic_about_page {
  font-family: 'Raleway', sans-serif;
  background-color: #f0eded;
  color: #525252;
}

/* Hero Section */
.about-hero {
  padding: 10% 0 80px;
  position: relative;
  overflow: hidden;
}

.hero-image-container {
  position: relative;
  z-index: 2;
}

.image-wrapper {
  position: relative;
  padding: 20px;
  display: flex;
  justify-content: center;
  width: 100%;
}

.image-container {
  position: relative;
  width: 100%;
  max-width: 600px;
  height: 500px;
  overflow: hidden;
}

.hero-image {
  position: relative;
  z-index: 3;
  border: none !important;
  border-radius: 0 !important;
  box-shadow: 20px 20px 0 rgba(46, 204, 113, 0.1);
  width: 100%;
  max-width: 600px; /* Increased max-width */
  height: 500px; /* Fixed height */
  object-fit: cover; /* Ensure image covers the area */
  object-position: center; /* Center the image */
  transition: transform 0.3s ease;
}

.hero-image:hover {
  transform: translate(-5px, -5px);
}

.decorative-shape-1 {
  position: absolute;
  top: -20px;
  right: -20px;
  width: 200px;
  height: 200px;
  background: rgba(46, 204, 113, 0.05);
  z-index: 1;
}

.decorative-shape-2 {
  position: absolute;
  bottom: -30px;
  left: -30px;
  width: 150px;
  height: 150px;
  border: 2px dashed rgba(46, 204, 113, 0.3);
  z-index: 1;
}

.hero-content h1 {
  font-size: 3rem;
  font-weight: 700;
  color: #2c3e50;
  margin-bottom: 1rem;
}

.hero-content .lead {
  font-size: 1.5rem;
  color: #2ECC71;
  font-weight: 600;
  margin-bottom: 1.5rem;
}

.hero-content .description {
  font-size: 1.1rem;
  line-height: 1.7;
  color: #7f8c8d;
  margin-bottom: 2.5rem;
}

.hero-stats {
  display: flex;
  gap: 2rem;
}

.stat h3 {
  font-size: 2.5rem;
  font-weight: 700;
  color: #2ECC71;
  margin-bottom: 0.5rem;
}

.stat p {
  color: #7f8c8d;
  font-weight: 500;
}

.hero-image-container {
  position: relative;
  height: 100%;
  padding-top: 40px;
  padding-right: 40px;
}

.hero-image {
  position: relative;
  width: 120%;
  height: 480px;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 20px 40px rgba(0,0,0,0.15);
  z-index: 2;
  transition: all 0.4s ease;
  margin-top: -18%;
  margin-right: -40px;
}

.hero-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.hero-image:hover {
  transform: translateY(-5px);
  box-shadow: 0 25px 50px rgba(0,0,0,0.2);
}

.hero-image:hover img {
  transform: scale(1.05);
}

.floating-shape {
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, #2ECC71 0%, #27ae60 100%);
  border-radius: 20px;
  z-index: 1;
  transform: translate(20px, 20px);
}

/* Mission Section */
.mission-section {
  padding: 80px 0;
  background-color: #f8f9fa;
}

.mission-card, .vision-card {
  background: white;
  padding: 2.5rem;
  border-radius: 10px;
  box-shadow: 0 5px 20px rgba(0,0,0,0.05);
  height: 100%;
  text-align: center;
  transition: all 0.3s ease;
}

.mission-card:hover, .vision-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 30px rgba(0,0,0,0.1);
}

.card-icon {
  font-size: 2.5rem;
  color: #2c3e50; /* Changed to dark color for better visibility */
  margin: 0 auto 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background: none !important;
}

.card-icon i {
  font-size: 2rem;
  color: white;
}

.mission-card h3, .vision-card h3 {
  color: #2c3e50;
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 1rem;
}

.mission-card p, .vision-card p {
  color: #7f8c8d;
  line-height: 1.7;
  margin: 0;
}

/* Values Section */
.values-section {
  margin-top: 4rem;
}

.section-title {
  text-align: center;
  font-size: 2.5rem;
  font-weight: 700;
  color: #2c3e50;
  margin-bottom: 3rem;
}

.value-item {
  text-align: center;
  padding: 2rem 1rem;
  background: white;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0,0,0,0.05);
  height: 100%;
  transition: all 0.3s ease;
}

.value-item:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 25px rgba(0,0,0,0.1);
}

.value-icon {
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
  color: #2c3e50; /* Changed to dark color for better visibility */
  background: none !important;
  box-shadow: none !important;
  width: auto;
  height: auto;
}

.value-item h4 {
  color: #2c3e50;
  font-size: 1.3rem;
  font-weight: 600;
  margin-bottom: 1rem;
}

.value-item p {
  color: #7f8c8d;
  line-height: 1.6;
  margin: 0;
}

/* Team Section */
.team-section {
  padding: 80px 0;
  background-color: #fff;
}

.section-header {
  text-align: center;
  margin-bottom: 4rem;
}

.section-header h2 {
  font-size: 2.5rem;
  font-weight: 700;
  color: #2c3e50;
  margin-bottom: 1rem;
}

.section-header p {
  font-size: 1.2rem;
  color: #7f8c8d;
  max-width: 600px;
  margin: 0 auto;
}

.team-card {
  background: white;
  border-radius: 10px;
  box-shadow: 0 5px 20px rgba(0,0,0,0.05);
  overflow: hidden;
  transition: all 0.3s ease;
  height: 100%;
}

.team-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 15px 35px rgba(0,0,0,0.1);
}

.member-image {
  position: relative;
  height: 300px;
  background: #f8f9fa;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
}

.image-container {
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.team-member-img {
  max-width: 100%;
  max-height: 100%;
  width: auto;
  height: auto;
  object-fit: contain;
  border-radius: 8px;
  transition: transform 0.3s ease;
}

.team-card:hover .team-member-img {
  transform: scale(1.03);
}

.social-links {
  position: absolute;
  bottom: 20px;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  gap: 0.8rem;
  opacity: 0;
  transition: all 0.3s ease;
  z-index: 3;
}

.social-link {
  width: 36px;
  height: 36px;
  background: rgba(255, 255, 255, 0.95);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #2ecc71;
  text-decoration: none;
  transition: all 0.3s ease;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
}

.social-link:hover {
  background: #2ecc71;
  color: white;
  transform: translateY(-3px);
  box-shadow: 0 4px 8px rgba(0,0,0,0.15);
}

.social-link i {
  font-size: 14px;
}

.team-card:hover .social-links {
  opacity: 1;
}

.member-info {
  padding: 2rem;
}

.member-info h3 {
  color: #2c3e50;
  font-size: 1.4rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
}

.position {
  color: #2ECC71;
  font-weight: 500;
  margin-bottom: 1rem;
  font-size: 1rem;
}

.member-info .description {
  color: #7f8c8d;
  line-height: 1.6;
  margin-bottom: 1.5rem;
  font-size: 0.95rem;
}

.skills {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.skill-tag {
  background: #f0f0f0;
  color: #525252;
  padding: 0.3rem 0.8rem;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 500;
}

/* Why Choose Us Section */
.why-choose-section {
  padding: 100px 0;
  background-color: #fff;
  position: relative;
  overflow: hidden;
}

.why-choose-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, rgba(46, 204, 113, 0.03) 0%, rgba(39, 174, 96, 0.03) 100%);
  z-index: 0;
}

.section-subtitle {
  color: #7f8c8d;
  font-size: 1.2rem;
  max-width: 700px;
  margin: 0 auto 3rem;
  position: relative;
  padding-bottom: 15px;
}

.section-subtitle::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 60px;
  height: 3px;
  background: #2ecc71;
  border-radius: 3px;
}

.feature-card {
  background: #fff;
  border-radius: 15px;
  padding: 40px 30px;
  text-align: center;
  height: 100%;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  position: relative;
  z-index: 1;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.03);
  border: 1px solid rgba(0, 0, 0, 0.03);
}

.feature-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 5px;
  background: linear-gradient(90deg, #2ecc71, #27ae60);
  transform: scaleX(0);
  transition: transform 0.4s ease;
  z-index: 2;
}

.feature-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.08);
}

.feature-card:hover::before {
  transform: scaleX(1);
}

.feature-icon-wrapper {
  width: 90px;
  height: 90px;
  margin: 0 auto 25px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
}

.feature-icon-bg {
  position: absolute;
  width: 100%;
  height: 100%;
  background: rgba(46, 204, 113, 0.1);
  border-radius: 50%;
  z-index: -1;
  transform: scale(0.8);
  opacity: 0;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.feature-card:hover .feature-icon-bg {
  transform: scale(1);
  opacity: 1;
}

.feature-icon-wrapper i {
  font-size: 2.5rem;
  color: #2ecc71;
  transition: all 0.3s ease;
}

.feature-card:hover .feature-icon-wrapper i {
  transform: scale(1.1) rotate(5deg);
  color: #27ae60;
}

.feature-title {
  font-size: 1.5rem;
  color: #2c3e50;
  margin-bottom: 15px;
  font-weight: 700;
  position: relative;
  padding-bottom: 15px;
}

.feature-title::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 40px;
  height: 2px;
  background: #2ecc71;
  transition: width 0.3s ease;
}

.feature-card:hover .feature-title::after {
  width: 70px;
}

.feature-description {
  color: #7f8c8d;
  margin-bottom: 20px;
  line-height: 1.7;
  transition: all 0.3s ease;
}

.feature-hover-content {
  height: 0;
  overflow: hidden;
  transition: all 0.4s ease;
  opacity: 0;
  transform: translateY(10px);
}

.feature-card:hover .feature-hover-content {
  height: auto;
  opacity: 1;
  transform: translateY(0);
}

.feature-link {
  display: inline-flex;
  align-items: center;
  color: #2ecc71;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;
}

.feature-link i {
  margin-left: 5px;
  transition: transform 0.3s ease;
}

.feature-link:hover {
  color: #27ae60;
}

.feature-link:hover i {
  transform: translateX(5px);
}

.feature-card {
  text-align: center;
  padding: 2.5rem 1.5rem;
  background: white;
  border-radius: 10px;
  box-shadow: 0 5px 20px rgba(0,0,0,0.05);
  height: 100%;
  transition: all 0.3s ease;
  overflow: hidden;
  position: relative;
}

.feature-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 30px rgba(0,0,0,0.1);
}

.feature-image {
  position: relative;
  width: 100%;
  height: 180px;
  margin: -2.5rem -1.5rem 1.5rem -1.5rem;
  overflow: hidden;
}

.feature-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.feature-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(to bottom, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.7) 100%);
}

.feature-icon {
  width: 70px;
  height: 70px;
  background: #2ECC71;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: -35px auto 1.5rem;
  position: relative;
  z-index: 2;
  box-shadow: 0 5px 15px rgba(0,0,0,0.1);
}

.feature-icon i {
  font-size: 1.8rem;
  color: white;
}

.feature-card h4 {
  color: #2c3e50;
  font-size: 1.3rem;
  font-weight: 600;
  margin-bottom: 1rem;
}

.feature-card p {
  color: #7f8c8d;
  line-height: 1.6;
  margin: 0;
}

/* CTA Section */
.about-cta {
  padding: 80px 0;
  background: #2c3e50;
  color: rgb(0, 0, 0);
}

.cta-content h2 {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
}

.cta-content p {
  font-size: 1.2rem;
  margin-bottom: 2rem;
  opacity: 0.9;
}

.cta-buttons {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
}

.cta-btn {
  padding: 12px 30px;
  border-radius: 50px;
  text-decoration: none;
  font-weight: 600;
  font-size: 1rem;
  transition: all 0.3s ease;
  border: 2px solid transparent;
}

.cta-btn.primary {
  background: #2ECC71;
  color: rgb(55, 70, 119);
}

.cta-btn.primary:hover {
  background: #27ae60;
  transform: translateY(-2px);
  box-shadow: 0 10px 20px rgba(46, 204, 113, 0.3);
}

.cta-btn.secondary {
  background: transparent;
  color: rgb(92, 100, 109);
  border-color: white;
}

.cta-btn.secondary:hover {
  background: rgb(168, 184, 199);
  color: #578abd;
  transform: translateY(-2px);
}

/* Responsive Design */
/* Additional styles for feature cards */
.feature-card:hover .feature-image img {
  transform: scale(1.1);
}

/* Ensure text is readable on feature cards */
.feature-card h4,
.feature-card p {
  position: relative;
  z-index: 2;
}

/* Add background pattern to mission and vision cards */
.mission-card,
.vision-card {
  position: relative;
  overflow: hidden;
}

.mission-card::before,
.vision-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: url('/img/services_images/pattern.png') repeat;
  opacity: 0.05;
  z-index: 1;
}

.mission-card > *,
.vision-card > * {
  position: relative;
  z-index: 2;
}

/* Add subtle animation to values */
@keyframes float {
  0% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0px); }
}

.value-item:hover .value-icon {
  animation: float 3s ease-in-out infinite;
}

@media (max-width: 768px) {
  .hero-content h1 {
    font-size: 2.5rem;
  }
  
  .hero-stats {
    flex-direction: column;
    gap: 1.5rem;
  }
  
  .section-title {
    font-size: 2rem;
  }
  
  .cta-buttons {
    flex-direction: column;
    align-items: center;
  }
  
  .cta-btn {
    width: 200px;
    text-align: center;
  }
}

@media (max-width: 576px) {
  .about-hero,
  .mission-section,
  .team-section,
  .why-choose-section,
  .about-cta {
    padding: 60px 0;
  }
  
  .hero-content h1 {
    font-size: 2rem;
  }
  
  .section-header h2 {
    font-size: 2rem;
  }
  
  .cta-content h2 {
    font-size: 2rem;
  }
}
</style>