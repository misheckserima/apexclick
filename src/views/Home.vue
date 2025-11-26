<template>
  <div>
    <CornerPopup />
    
    <!-- Home Section -->
    <section id="home" class="home">
      <div class="overlay"></div>
      <div class="hero-content">
        <h1 class="hero-title">ApexClick</h1>
        <h2 class="hero-subtitle">
          Transform Your Digital Presence
        </h2>
        <p class="hero-description">
          We craft powerful digital experiences that drive growth and engagement. Our full-service digital marketing agency specializes in creating stunning websites, 
          strategic social media campaigns, and data-driven marketing solutions tailored to your business needs.
        </p>
        <div class="cta-buttons">
          <a href="#services" class="btn btn-primary">
            Our Services
          </a>
          <a href="https://www.facebook.com/share/15gX6w1rsb/" target="_blank" class="btn btn-outline">
            Get Started
          </a>
        </div>
      </div>
      <div style="z-index: 1000" class="circuit-animation circuit1">
        <div class="promotion-text" style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); font-family: 'Poppins', sans-serif; font-size: 1.1rem; font-weight: 600; color: #2c3e50; text-align: center;">
          <div class="text-line" style="margin: 5px 0; opacity: 0; animation: professionalText 4s ease-in-out infinite;">STARTUP PROMOTION</div>
          <div class="text-line" style="margin: 5px 0; opacity: 0; animation: professionalText 4s ease-in-out infinite 0.8s;">50% OFF ALL SERVICES</div>
          <div class="text-line" style="margin: 5px 0; opacity: 0; animation: professionalText 4s ease-in-out infinite 1.6s;">LIMITED TIME OFFER</div>
        </div>
      </div>
      <div style="z-index: 1000" class="circuit-animation circuit2"></div>
      <div style="z-index: 1000" class="digital-tools digital1"></div>
      <div style="z-index: 1000" class="digital-tools digital2"></div>
    </section>

    <!-- About Section -->
    <section class="about" id="about" style="min-height: 35vh">
      <h1 class="heading">About Us</h1>
      <div class="row">
        <div class="content">
          <h3>Leaders in Digital Marketing and Online Presence</h3>
          <p>
            ApexClick specializes in creating innovative and
            high-quality digital marketing solutions. Our team of experienced designers
            and digital strategists are dedicated to bringing our clients' visions to
            life, ensuring every detail is perfected. From cutting-edge websites to
            strategic social media campaigns, we provide a full range of solutions to meet
            all your digital marketing needs across the USA.
          </p>
        </div>
      </div>
    </section>

    <!-- Services Section -->
    <div class="pt-5 pb-5 services-section" id="services">
      <div class="container">
        <div class="row">
          <div class="section-head col-sm-12" id="service">
            <h1 class="fade-in">Our Services</h1>
            <p class="fade-in">
              At ApexClick, we specialize in high-quality, results-driven digital marketing services
              that help businesses make more money, grow their audience, and dominate their online
              presence. From SEO and content marketing to paid ads, social media growth, and
              conversion-focused websites, we build complete digital ecosystems designed to increase
              traffic, followers, and revenue for your brand.
            </p>
          </div>
          <div 
            v-for="(service, index) in services" 
            :key="service.id"
            class="col-lg-4 col-sm-6 service-item"
            :ref="el => { if (el) serviceItems[index] = el }"
            :class="{ 'visible': isServiceVisible[index] }"
          >
            <div class="item">
              <div class="service-image">
                <img :src="service.image" :alt="service.alt" />
              </div>
              <h6>
                {{ service.title }}
              </h6>
              <p>
                {{ service.description }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Achievements Section -->
    <section class="counters">
      <div class="achievements-header">
        <h2 class="achievements-title">Our Achievements at a Glance</h2>
        <p class="achievements-subtitle">Delivering excellence in digital marketing solutions</p>
      </div>
      <div class="achievements-container">
        <div 
          v-for="achievement in achievementsList" 
          :key="achievement.id"
          class="achievement-item"
        >
          <div class="achievement-icon">
            <i :class="achievement.icon"></i>
          </div>
          <div class="counter" :data-target="achievement.target">0</div>
          <h3 class="achievement-label">{{ achievement.label }}</h3>
        </div>
      </div>
    </section>

    <!-- Featured Services Section -->
    <div class="pt-5 pb-5 featured-services-section">
      <div class="container">
        <div class="row">
          <div class="section-head-1 col-sm-12" style="text-align: center">
            <h4 style="margin-top: -5rem" id="portfolio" class="fade-in">
              <span>Our Featured</span> Services
            </h4>
            <p class="fade-in">
              Explore our comprehensive digital marketing solutions where we've
              combined cutting-edge technology with strategic expertise to drive
              business growth. Each service showcases our commitment to quality and
              innovation in the digital landscape.
            </p>
          </div>

          <div 
            v-for="(service, index) in featuredServices" 
            :key="service.id"
            class="col-lg-4 col-sm-6 featured-service-item"
            :ref="el => { if (el) featuredServiceItems[index] = el }"
            :class="{ 'visible': isFeaturedServiceVisible[index] }"
          >
            <div class="item">
              <div class="service-image">
                <img :src="service.image" :alt="service.alt" />
              </div>
              <h6>
                {{ service.title }}
              </h6>
              <p>
                {{ service.description }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Communicate Section -->
    <div class="communicate">
      <video autoplay loop muted>
        <source src="/videos/apexvid.mp4" type="video/mp4">
        Your browser does not support the video tag.
      </video>
      <h3 class="slide-in-left">Ready to Transform Your Digital Presence?</h3>
      <p class="slide-in-right">
        Whether it's a new website or digital marketing strategy, our team is ready to bring
        your vision to life with expertise and precision. Contact us for a
        consultation today.
      </p>
      <a href="https://www.facebook.com/share/15gX6w1rsb/" target="_blank" class="btn scale-in" id="contactNow">Contact Now</a>
    </div>


    <!-- Clients Section -->
    <div class="clients mt-100">
      <div class="container">
        <div class="section-header">
          <h2>Our Clients</h2>
          <p>
            At ApexClick, we pride ourselves on transforming businesses
            with our innovative digital marketing solutions. Our clients range from
            startups and small businesses to large enterprises across various industries.
          </p>
        </div>
        <div class="owl-carousel clients-carousel">
          <div class="client-item">
            <img src="/images/client-homeowner.jpg" alt="Homeowner Logo" />
          </div>
          <div class="client-item">
            <img src="/images/client-hotel.jpg" alt="Hotel Logo" />
          </div>
          <div class="client-item">
            <img src="/images/client-airlines.jpg" alt="Airline Logo" />
          </div>
          <div class="client-item">
            <img
              src="/images/client-residential-complex.jpg"
              alt="Residential Complex Logo"
            />
          </div>
          <div class="client-item">
            <img
              src="/images/client-commercial-building.jpg"
              alt="Commercial Building Logo"
            />
          </div>
          <div class="client-item">
            <img src="/images/client-spa.jpg" alt="Spa Logo" />
          </div>
          <div class="client-item">
            <img
              src="/images/client-interior-designer.jpg"
              alt="Interior Designer Logo"
            />
          </div>
        </div>
      </div>
    </div>

    <!-- Team Section -->
    <section class="team" style="margin-top: 7rem">
      <h1 class="heading" style="margin-top: 3rem" id="team">Our Team</h1>
      <p class="team-description">
        Meet the visionary leaders behind ApexClick, led by Founder &amp; CEO <strong>Misheck Serima</strong> – a
        digital marketing strategist and developer focused on helping businesses grow revenue, followers, and
        long-term online presence through data-driven marketing and technology.
      </p>
      <div class="row">
        <div 
          v-for="member in teamMembers" 
          :key="member.id"
          class="col-lg-4 col-md-6 mb-4"
        >
          <div class="card">
            <div class="image">
              <img :src="member.image" :alt="member.alt" />
            </div>
            <div class="info">
              <h3>{{ member.name }}</h3>
              <span>{{ member.position }}</span>
              <div class="icons">
                <a :href="member.socialLinks.facebook" class="fa fa-facebook"></a>
                <a :href="member.socialLinks.twitter" class="fa fa-twitter"></a>
                <a :href="member.socialLinks.instagram" class="fa fa-instagram"></a>
                <a :href="member.socialLinks.linkedin" class="fa fa-linkedin"></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Section -->
    <section id="contact" class="contact">
      <h1 class="heading">Get in Touch</h1>
      <p class="contact-description">
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
          allowfullscreen=""
          loading="lazy"
          title="ApexClick Headquarters - Arlington, Texas"
        ></iframe>
      </div>
      <div class="contact-form">
        <form
          action="https://formspree.io/f/meqyqqkj"
          method="POST"
          style="text-align: center"
        >
          <input
            type="text"
            name="name"
            placeholder="Name"
            class="contact-form-txt"
            required
          />
          <input
            type="tel"
            id="phone"
            name="phone"
            required
            placeholder="Contact number"
            maxlength="10"
            class="contact-form-phone"
          />
          <input
            type="email"
            name="_replyto"
            placeholder="Email"
            class="contact-form-email"
            required
          />
          <textarea
            placeholder="Your Message"
            name="message"
            class="contact-form-txtarea"
            required
          ></textarea>
          <input type="text" name="_gotcha" style="display: none" />
          <input
            type="submit"
            value="Submit"
            id="contactBtn"
            style="color: white"
            class="contact-form-btn"
          />
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
    <!-- Newsletter Section -->
    <section class="newsletter-section">
      <div class="container">
        <h2 style="text-align: center; color: #fff; margin-bottom: 2rem; font-size: 2.5rem;">Stay Updated</h2>
        <p style="text-align: center; color: #e0e0e0; max-width: 700px; margin: 0 auto 3rem; font-size: 1.2rem; line-height: 1.6;">
          Subscribe to our newsletter for the latest updates, digital marketing tips, and exclusive offers delivered straight to your inbox.
        </p>
        <NewsletterSignup />
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, nextTick } from 'vue';
import NewsletterSignup from '@/components/NewsletterSignup.vue';
import CornerPopup from '@/components/CornerPopup.vue';
import { achievements as achievementsData } from '@/data/achievements';
import type { Service, TeamMember, FAQ, Testimonial } from '@/types';
import type { Achievement } from '@/types';

// Data
const services = ref<Service[]>([
  {
    id: '1',
    title: 'Business Website Development',
    description: 'Create professional business websites, engaging blogs, and stunning portfolios that captivate your audience and drive conversions. Our expert developers craft custom solutions that blend functionality with modern design, ensuring your digital presence stands out. We specialize in responsive web design, e-commerce platforms, and content management systems that grow with your business. From initial concept to final deployment, we deliver websites that are fast, secure, and optimized for search engines.',
    image: '/img/services_images/website1.jpg',
    alt: 'Business Website Development'
  },
  {
    id: '2',
    title: 'Social Media Management',
    description: 'We provide professional social media management for Facebook, Instagram, LinkedIn, Twitter, and TikTok platforms. Our skilled strategists ensure seamless brand integration and top-notch engagement across all channels. We create compelling content calendars, manage community interactions, and run targeted advertising campaigns. Our team monitors analytics, responds to comments, and builds authentic relationships with your audience.',
    image: '/img/services_images/social_media.png',
    alt: 'Social Media Management'
  },
  {
    id: '3',
    title: 'Content Marketing Strategy',
    description: 'Develop compelling content that drives engagement and conversions across all digital platforms. We create strategic content plans, produce high-quality blogs, videos, infographics, and social media content. Our content marketing approach includes keyword research, SEO optimization, and audience targeting strategies. We help establish thought leadership, build brand authority, and create content that resonates with your target market.',
    image: '/img/services_images/content_management.jpg',
    alt: 'Content Marketing Strategy'
  },
  {
    id: '4',
    title: 'Search Engine Optimization (SEO)',
    description: 'Improve your website\'s visibility and ranking on search engines with our comprehensive SEO services. We conduct in-depth keyword research, on-page optimization, technical SEO audits, and link-building strategies. Our data-driven approach helps increase organic traffic, improve user experience, and boost your online presence. We stay updated with the latest algorithm changes to ensure your website maintains top rankings.',
    image: '/img/services_images/seo.jpg',
    alt: 'Search Engine Optimization'
  },
  {
    id: '5',
    title: 'Pay-Per-Click (PPC) Advertising',
    description: 'Maximize your online advertising ROI with our targeted PPC campaigns across Google Ads, Facebook, Instagram, and LinkedIn. We create data-driven ad strategies, conduct thorough keyword research, and design compelling ad creatives. Our team continuously optimizes campaigns, tests different ad variations, and refines targeting to improve performance and reduce cost per acquisition.',
    image: '/img/services_images/payperclick.jpg',
    alt: 'PPC Advertising'
  },
  {
    id: '6',
    title: 'Graphic Design & Branding',
    description: 'Create a strong visual identity that sets your brand apart with our professional graphic design services. We design logos, business cards, brochures, social media graphics, and marketing collateral that reflect your brand\'s personality. Our creative team works closely with you to develop a cohesive brand identity that resonates with your target audience and communicates your unique value proposition effectively.',
    image: '/img/services_images/brand.jpg',
    alt: 'Graphic Design & Branding'
  }
]);

const featuredServices = ref<Service[]>([
  {
    id: '7',
    title: 'Email Marketing Automation',
    description: 'We design and implement sophisticated email marketing campaigns that nurture leads and retain customers throughout their journey. Our automation strategies include welcome sequences, abandoned cart recovery, and personalized content delivery for maximum engagement. We create compelling email templates, segment your audience, and optimize deliverability to ensure your messages reach the right people. Our email marketing platform integrates with your CRM and provides detailed analytics to track open rates, click-through rates, and conversions.',
    image: '/img/services_images/automated_email.jpg',
    alt: 'Email Marketing'
  },
  {
    id: '8',
    title: 'Brand Identity & Design',
    description: 'Create a powerful brand identity that resonates with your target audience and differentiates you from competitors. We design logos, brand guidelines, visual assets, and marketing materials that establish a cohesive brand presence. Our brand identity services include color palette development, typography selection, and brand voice definition.',
    image: '/img/services_images/brand.jpg',
    alt: 'Brand Identity'
  },
  {
    id: '9',
    title: 'Analytics & Reporting',
    description: 'Comprehensive data analysis and reporting services that transform raw data into actionable business insights. We track performance metrics, analyze user behavior, and provide detailed reports to optimize your digital marketing strategies. Our analytics services include Google Analytics setup, custom dashboard creation, and conversion tracking implementation.',
    image: '/img/services_images/analytics_&_reporting.jpg',
    alt: 'Analytics & Reporting'
  }
]);


// Refs
const activeAccordion = ref<string | null>(null);
const serviceItems = ref<HTMLElement[]>([]);
const featuredServiceItems = ref<HTMLElement[]>([]);
const isServiceVisible = ref<boolean[]>([]);
const isFeaturedServiceVisible = ref<boolean[]>([]);
let observer: IntersectionObserver | null = null;

const teamMembers = ref<TeamMember[]>([
  {
    id: '1',
    name: 'Misheck Serima',
    position: 'Founder, CEO, Project Manager, Developer & Digital Marketing Agent',
    bio: 'Visionary leader with expertise in digital strategy and technology innovation.',
    image: '/img/team/misheck.png',
    alt: 'Misheck Serima',
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
    position: 'Founding Partner, CFO, Marketing Personnel & Customer Representative',
    bio: 'Strategic financial expert and customer relations specialist.',
    image: '/img/team/elton.png',
    alt: 'Elton Huche',
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
    position: 'Web Designer, Graphics Designer, Digital Marketing Agent & UI/UX Designer',
    bio: 'Creative design specialist with expertise in user experience.',
    image: '/img/team/nicole.png',
    alt: 'Nicole Ciriboto',
    socialLinks: {
      facebook: 'https://www.facebook.com/apexclick',
      twitter: 'https://twitter.com/apexclick',
      instagram: 'https://www.instagram.com/apexclick',
      linkedin: 'https://www.linkedin.com/company/apexclick'
    }
  }
]);

const faqs = ref<FAQ[]>([
  {
    id: '1',
    question: 'What digital marketing services do you offer?',
    answer: 'We specialize in a comprehensive range of digital marketing services including website development, social media management, SEO optimization, content marketing, PPC advertising, and email marketing automation.'
  },
  // Add other FAQs here
]);

const achievements = ref<Achievement[]>([
  {
    id: '1',
    icon: 'fas fa-project-diagram',
    target: 150,
    label: 'Projects Completed'
  },
  // Add other achievements here
]);

// Methods
const toggleAccordion = (id: string) => {
  activeAccordion.value = activeAccordion.value === id ? null : id;
};

const getAnimationClass = (index: number): string => {
  const delay = index * 0.2;
  return `fade-in`;
};

// Initialize visibility arrays
const initializeVisibilityArrays = () => {
  isServiceVisible.value = new Array(services.value.length).fill(false);
  isFeaturedServiceVisible.value = new Array(featuredServices.value.length).fill(false);
};

// Initialize intersection observer
const initIntersectionObserver = () => {
  const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
  };

  observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const index = serviceItems.value.findIndex(el => el === entry.target);
        if (index !== -1) {
          isServiceVisible.value[index] = true;
        }
        
        const featuredIndex = featuredServiceItems.value.findIndex(el => el === entry.target);
        if (featuredIndex !== -1) {
          isFeaturedServiceVisible.value[featuredIndex] = true;
        }
      }
    });
  }, options);

  // Observe service items
  serviceItems.value.forEach(item => {
    if (item) observer?.observe(item);
  });

  // Observe featured service items
  featuredServiceItems.value.forEach(item => {
    if (item) observer?.observe(item);
  });
};

// Lifecycle hooks
onMounted(async () => {
  initializeVisibilityArrays();
  await nextTick();
  initIntersectionObserver();
});

onUnmounted(() => {
  if (observer) {
    observer.disconnect();
  }
});
</script>

<style scoped>
.newsletter-section {
  background: linear-gradient(135deg, #1a237e 0%, #283593 100%);
  padding: 5rem 1rem;
  margin-top: 5rem;
  position: relative;
  overflow: hidden;
}

.newsletter-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiPjxkZWZzPjxwYXR0ZXJuIGlkPSJwYXR0ZXJuIiB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiIHBhdHRlcm5UcmFuc2Zvcm09InJvdGF0ZSg0NSkiPjxyZWN0IHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwwLjA1KSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNwYXR0ZXJuKSIvPjwvc3ZnPg==');
  opacity: 0.3;
  z-index: 0;
}

.newsletter-section .container {
  position: relative;
  z-index: 1;
  max-width: 1200px;
  margin: 0 auto;
}

@media (max-width: 768px) {
  .newsletter-section {
    padding: 3rem 1rem;
  }
  
  .newsletter-section h2 {
    font-size: 2rem !important;
  }
}

/* Hero Section Mobile Responsive */
.hero-content {
  z-index: 1000;
  position: relative;
  text-align: center;
  max-width: 900px;
  margin: 0 auto;
  padding: 0 2rem;
}

.hero-title {
  font-size: 4.5rem;
  margin-bottom: 1.5rem;
  color: #fff;
  text-shadow: 0 2px 10px rgba(0,0,0,0.3);
}

.hero-subtitle {
  font-size: 2.5rem;
  color: #00ffff;
  margin-bottom: 2rem;
  text-shadow: 0 2px 5px rgba(0,0,0,0.2);
}

.hero-description {
  font-size: 1.6rem;
  color: #e0e0e0;
  margin-bottom: 2.5rem;
  line-height: 1.6;
}

.cta-buttons {
  display: flex;
  gap: 1.5rem;
  justify-content: center;
  flex-wrap: wrap;
}

.btn-primary {
  background: #00ffff;
  color: #0f3460;
  padding: 1rem 2.5rem;
  border-radius: 50px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;
  transition: all 0.3s ease;
  text-decoration: none;
}

.btn-outline {
  background: transparent;
  border: 2px solid #00ffff;
  color: #fff;
  padding: 1rem 2.5rem;
  border-radius: 50px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;
  transition: all 0.3s ease;
  text-decoration: none;
}

.team-description {
  font-size: 2rem;
  color: white;
  margin-bottom: 20px;
}

.contact-description {
  font-size: 2rem;
  margin-bottom: 50px;
}

/* Mobile Responsive Styles */
@media (max-width: 991px) {
  .hero-title {
    font-size: 3.5rem;
  }
  
  .hero-subtitle {
    font-size: 2rem;
  }
  
  .hero-description {
    font-size: 1.3rem;
  }
  
  .team-description,
  .contact-description {
    font-size: 1.5rem;
    padding: 0 1rem;
  }
}

@media (max-width: 768px) {
  .hero-content {
    padding: 0 1rem;
  }
  
  .hero-title {
    font-size: 2.5rem;
    margin-bottom: 1rem;
  }
  
  .hero-subtitle {
    font-size: 1.5rem;
    margin-bottom: 1.5rem;
  }
  
  .hero-description {
    font-size: 1rem;
    margin-bottom: 2rem;
    line-height: 1.5;
  }
  
  .cta-buttons {
    flex-direction: column;
    gap: 1rem;
    align-items: center;
  }
  
  .btn-primary,
  .btn-outline {
    padding: 0.875rem 2rem;
    font-size: 0.9rem;
    width: 100%;
    max-width: 280px;
    text-align: center;
  }
  
  .team-description,
  .contact-description {
    font-size: 1.2rem;
    margin-bottom: 30px;
    padding: 0 1rem;
  }
  
  .circuit-animation,
  .digital-tools {
    display: block !important;
    opacity: 0.5;
  }
  
  .promotion-text {
    font-size: 0.9rem !important;
    display: none;
  }
  
  .promotion-text .text-line {
    font-size: 0.8rem;
  }
}

@media (max-width: 480px) {
  .hero-title {
    font-size: 2rem;
  }
  
  .hero-subtitle {
    font-size: 1.25rem;
  }
  
  .hero-description {
    font-size: 0.95rem;
  }
  
  .btn-primary,
  .btn-outline {
    padding: 0.75rem 1.5rem;
    font-size: 0.85rem;
  }
  
  .team-description,
  .contact-description {
    font-size: 1rem;
  }
}
</style>

