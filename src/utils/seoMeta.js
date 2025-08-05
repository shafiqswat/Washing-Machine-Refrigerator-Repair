/** @format */

// utils/seoMeta.js
export const generatePageMeta = (page) => {
  const baseMeta = {
    siteName: "JTE Repair Services Malaysia",
    baseUrl: "https://your-domain.com",
    phone: "+60 11-2118 1615",
    address: "Kuala Lumpur, Malaysia",
  };

  const pageMeta = {
    home: {
      title:
        "JTE Repair Services Malaysia | Expert Appliance Repair KL, Shah Alam, Selangor",
      description:
        "Professional appliance repair services in Malaysia. Expert washing machine, refrigerator, TV, dishwasher repair. Same-day service, 90-day warranty. Call +60 11-2118 1615",
      keywords:
        "appliance repair Malaysia, washing machine repair KL, refrigerator repair Shah Alam, TV repair Selangor",
    },
    services: {
      title:
        "Appliance Repair Services Malaysia | Washing Machine, Refrigerator, TV Repair",
      description:
        "Complete appliance repair services in Malaysia. Professional technicians for Samsung, LG, Panasonic brands. Same-day service in KL, Shah Alam, Selangor.",
      keywords:
        "appliance repair services Malaysia, mesin basuh repair, peti sejuk repair, professional technician",
    },
    // Add more pages as needed
  };

  return { ...baseMeta, ...pageMeta[page] };
};
