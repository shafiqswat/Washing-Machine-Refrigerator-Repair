/** @format */

// utils/serviceSchema.js
export const generateServicePageSchema = (service) => {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.description,
    provider: {
      "@type": "LocalBusiness",
      name: "JTE Repair Services",
      telephone: "+60 11-2118 1615",
    },
    areaServed: ["Kuala Lumpur", "Shah Alam", "Selangor"],
    offers: {
      "@type": "Offer",
      priceRange: "RM50-RM500",
      priceCurrency: "MYR",
    },
  };
};
