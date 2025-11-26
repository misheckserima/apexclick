// Extend the Window interface to include Google Analytics properties
declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
  }
}

export {}; // This file needs to be a module
