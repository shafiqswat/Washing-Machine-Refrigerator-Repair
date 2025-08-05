/** @format */

export const siteConfig = {
  name: "JTE Repair Services",
  title:
    "JTE Repair Services Malaysia | Expert Appliance Repair KL, Shah Alam, Selangor",
  description:
    "Professional appliance repair services in Malaysia. Expert TV, washing machine, refrigerator, dishwasher repair. Same-day service in Kuala Lumpur, Shah Alam, Selangor. Call +60 11-2118 1615",
  url: "https://jterepairservices.com.my", // Replace with your actual domain
  ogImage: "https://jterepairservices.com.my/images/og-image.jpg",
  keywords: [
    "appliance repair Malaysia",
    "TV repair Malaysia",
    "washing machine repair KL",
    "refrigerator repair Shah Alam",
    "JTE repair services",
    "same day appliance repair Malaysia",
    "Samsung LG appliance repair Malaysia",
    "professional technician Malaysia",
  ],
  author: "JTE Repair Services",
  creator: "JTE Repair Services Malaysia",
  publisher: "Javed Tohedi Enterprise",
  category: "Appliance Repair Services",
  classification: "Business",
  coverage: "Malaysia",
  distribution: "Global",
  rating: "General",
  copyright: "© 2024 JTE Repair Services Malaysia. All rights reserved.",
  robots:
    "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
  googlebot: "index, follow",
  language: "en-MY",
  geo: {
    region: "MY",
    placename: "Kuala Lumpur, Malaysia",
    position: "2.99281;101.786753",
  },
  contact: {
    phone: "+60 11-2118 1615",
    email: "info@jterepairservices.com.my",
    address: "Jalan Mendaling, Kuala Lumpur, 52100, Malaysia",
  },
  business: {
    type: "LocalBusiness",
    priceRange: "RM50-RM500",
    paymentAccepted: ["Cash", "Online Banking", "Credit Card", "E-Wallet"],
    currencyAccepted: "MYR",
    hoursAvailable: "Mo,Tu,We,Th,Fr,Sa,Su 08:00-20:00",
    serviceArea: [
      "Kuala Lumpur",
      "Shah Alam",
      "Selangor",
      "Petaling Jaya",
      "Subang Jaya",
      "Kajang",
      "Klang",
    ],
  },
};

export const generatePageMeta = (pageType, customData = {}) => {
  const baseTitle = "JTE Repair Services Malaysia";
  const baseDescription = "Professional appliance repair services in Malaysia";

  const pageMetas = {
    home: {
      title:
        "JTE Repair Services Malaysia | Expert Appliance Repair KL, Shah Alam, Selangor",
      description:
        "Professional appliance repair services in Malaysia. Expert TV, washing machine, refrigerator, dishwasher repair. Same-day service in Kuala Lumpur, Shah Alam, Selangor. Call +60 11-2118 1615",
      keywords:
        "appliance repair Malaysia, TV repair KL, washing machine repair Shah Alam, refrigerator repair Selangor, JTE repair services, same day service",
      canonical: siteConfig.url,
    },
    services: {
      title:
        "Appliance Repair Services Malaysia | TV, Washing Machine, Refrigerator Repair",
      description:
        "Complete appliance repair services in Malaysia. Professional technicians for Samsung, LG, Panasonic brands. TV repair, washing machine repair, refrigerator repair in KL, Shah Alam, Selangor.",
      keywords:
        "appliance repair services Malaysia, TV repair, washing machine repair, refrigerator repair, dishwasher repair, dryer repair, emergency repair",
      canonical: `${siteConfig.url}/services`,
    },
    contact: {
      title:
        "Contact JTE Repair Services Malaysia | Get Free Quote +60 11-2118 1615",
      description:
        "Contact JTE Repair Services for professional appliance repair in Malaysia. Free quotes, same-day service in Kuala Lumpur, Shah Alam, Selangor. Call +60 11-2118 1615 or WhatsApp.",
      keywords:
        "contact JTE repair services, appliance repair quote Malaysia, emergency repair contact, +60 11-2118 1615",
      canonical: `${siteConfig.url}/contact`,
    },
  };

  const meta = pageMetas[pageType] || pageMetas.home;
  return {
    ...meta,
    ...customData,
    title: customData.title || meta.title,
    description: customData.description || meta.description,
  };
};
