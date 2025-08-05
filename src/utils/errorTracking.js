/** @format */

// utils/errorTracking.js
export const trackError = (error, context = {}) => {
  console.error("Application Error:", error);

  // Send to analytics
  if (typeof gtag !== "undefined") {
    gtag("event", "exception", {
      description: error.message,
      fatal: false,
      custom_context: JSON.stringify(context),
    });
  }
};
