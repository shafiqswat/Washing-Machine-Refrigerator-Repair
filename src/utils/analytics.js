/** @format */

// utils/analytics.js
export const initializeAnalytics = () => {
  // Google Analytics 4
  window.dataLayer = window.dataLayer || [];
  function gtag() {
    dataLayer.push(arguments);
  }
  gtag("js", new Date());
  gtag("config", "GA_MEASUREMENT_ID");

  // Enhanced ecommerce for service bookings
  gtag("config", "GA_MEASUREMENT_ID", {
    custom_map: { custom_parameter_1: "service_type" },
  });
};
