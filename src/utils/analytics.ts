// Google Analytics 4 Measurement ID
const MEASUREMENT_ID = 'G-XXXXXXXXXX'; // Replace with your GA4 Measurement ID

export const initAnalytics = () => {
  // Only run in browser
  if (typeof window === 'undefined') return;

  // Load Google Analytics script
  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${MEASUREMENT_ID}`;
  document.head.appendChild(script);

  // Initialize data layer
  window.dataLayer = window.dataLayer || [];
  function gtag() {
    // eslint-disable-next-line prefer-rest-params
    dataLayer.push(arguments);
  }
  // @ts-ignore
  gtag('js', new Date());
  // @ts-ignore
  gtag('config', MEASUREMENT_ID, {
    send_page_view: true,
    anonymize_ip: true,
    cookie_expires: 60 * 60 * 24 * 30 * 12, // 1 year
  });

  // @ts-ignore
  window.gtag = gtag;
};

// Track page views
export const trackPageView = (url: string) => {
  if (typeof window === 'undefined' || !(window as any).gtag) return;
  
  // @ts-ignore
  window.gtag('event', 'page_view', {
    page_path: url,
    send_to: MEASUREMENT_ID,
  });};

// Track custom events
export const trackEvent = (action: string, params: Record<string, any> = {}) => {
  if (typeof window === 'undefined' || !(window as any).gtag) return;
  
  // @ts-ignore
  window.gtag('event', action, {
    ...params,
    send_to: MEASUREMENT_ID,
  });
};

// Track form submissions
export const trackFormSubmission = (formName: string, formData: Record<string, any> = {}) => {
  trackEvent('form_submit', {
    form_name: formName,
    ...formData,
  });
};
