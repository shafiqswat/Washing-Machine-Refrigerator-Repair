/** @format */

import { ClockIcon, LocationIcon, PhoneIcon } from "./Svg";

export const services = [
  {
    id: 1,
    title: "Washing Machine Repair Malaysia",
    description:
      "Expert washing machine repair services in Kuala Lumpur, Shah Alam, and Selangor for all major brands including Samsung, LG, Panasonic, and Electrolux",
    icon: "washing-machine",
    image:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop",
    features: [
      "Drum replacement and repair",
      "Motor repair and replacement",
      "Control board diagnostics",
      "Drain pump repair and maintenance",
    ],
    color: "blue",
    seoKeywords: [
      "washing machine repair Malaysia",
      "mesin basuh repair KL",
      "washing machine service Shah Alam",
      "Samsung washing machine repair Malaysia",
      "LG washer repair Selangor",
    ],
    serviceArea: [
      "Kuala Lumpur",
      "Shah Alam",
      "Selangor",
      "Petaling Jaya",
      "Subang",
    ],
    brands: [
      "Samsung",
      "LG",
      "Panasonic",
      "Toshiba",
      "Electrolux",
      "Sharp",
      "Haier",
    ],
  },
  {
    id: 2,
    title: "Refrigerator Repair Malaysia",
    description:
      "Complete refrigerator and freezer repair services throughout Malaysia for all major brands with same-day service in KL and Selangor",
    icon: "refrigerator",
    image:
      "https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?w=400&h=300&fit=crop",
    features: [
      "Compressor repair and replacement",
      "Thermostat replacement service",
      "Door seal repair and replacement",
      "Ice maker repair and maintenance",
    ],
    color: "cyan",
    seoKeywords: [
      "refrigerator repair Malaysia",
      "peti sejuk repair KL",
      "fridge repair Shah Alam",
      "Samsung refrigerator repair Malaysia",
      "LG fridge repair Selangor",
    ],
    serviceArea: [
      "Kuala Lumpur",
      "Shah Alam",
      "Selangor",
      "Petaling Jaya",
      "Subang",
    ],
    brands: [
      "Samsung",
      "LG",
      "Sharp",
      "Panasonic",
      "Hitachi",
      "Toshiba",
      "Electrolux",
    ],
  },
  {
    id: 3,
    title: "Dishwasher Repair Malaysia",
    description:
      "Professional dishwasher repair and maintenance services in Malaysia with expert technicians for all brands",
    icon: "dishwasher",
    image:
      "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=300&fit=crop",
    features: [
      "Pump replacement and repair",
      "Spray arm repair service",
      "Door latch repair",
      "Control panel diagnostics",
    ],
    color: "green",
    seoKeywords: [
      "dishwasher repair Malaysia",
      "dishwasher service KL",
      "Bosch dishwasher repair Malaysia",
      "dishwasher repair Shah Alam",
    ],
    serviceArea: ["Kuala Lumpur", "Shah Alam", "Selangor", "Petaling Jaya"],
    brands: ["Bosch", "Miele", "Siemens", "Electrolux", "Whirlpool"],
  },
  {
    id: 4,
    title: "Dryer Repair Malaysia",
    description:
      "Efficient clothes dryer repair services in Malaysia for all brands with same-day service available in Kuala Lumpur and Selangor",
    icon: "dryer",
    image: "/images/hero3.png",
    features: [
      "Heating element replacement",
      "Belt replacement and repair",
      "Thermostat repair service",
      "Motor repair and replacement",
    ],
    color: "orange",
    seoKeywords: [
      "dryer repair Malaysia",
      "clothes dryer repair KL",
      "dryer service Shah Alam",
      "Samsung dryer repair Malaysia",
    ],
    serviceArea: ["Kuala Lumpur", "Shah Alam", "Selangor", "Petaling Jaya"],
    brands: ["Samsung", "LG", "Electrolux", "Bosch", "Whirlpool"],
  },
  {
    id: 5,
    title: "TV Repair Malaysia",
    description:
      "Expert TV repair services in Malaysia for all brands including Samsung, LG, Sony. LED, LCD, OLED, and Smart TV repairs with in-home service",
    icon: "tv",
    image: "/images/tv-repair.png",
    features: [
      "Screen replacement and repair",
      "Power supply issue diagnosis",
      "No signal or sound troubleshooting",
      "Remote & sensor repair",
    ],
    color: "blue",
    seoKeywords: [
      "TV repair Malaysia",
      "television repair KL",
      "Samsung TV repair Malaysia",
      "Smart TV repair Selangor",
    ],
    serviceArea: [
      "Kuala Lumpur",
      "Shah Alam",
      "Selangor",
      "Petaling Jaya",
      "Subang",
    ],
    brands: ["Samsung", "LG", "Sony", "Panasonic", "TCL", "Hisense", "Sharp"],
  },
  {
    id: 6,
    title: "Emergency Appliance Repair Malaysia",
    description:
      "24/7 emergency appliance repair services throughout Malaysia with rapid response in Kuala Lumpur, Shah Alam, and Selangor",
    icon: "emergency",
    image:
      "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=400&h=300&fit=crop",
    features: [
      "Same day emergency service",
      "24/7 emergency hotline",
      "Weekend service available",
      "Public holiday availability",
    ],
    color: "purple",
    seoKeywords: [
      "emergency appliance repair Malaysia",
      "24/7 appliance repair KL",
      "same day appliance service Malaysia",
      "urgent appliance repair Selangor",
    ],
    serviceArea: [
      "Kuala Lumpur",
      "Shah Alam",
      "Selangor",
      "Petaling Jaya",
      "Subang",
      "Klang",
    ],
    brands: ["All Major Brands"],
  },
];

export const testimonials = [
  {
    id: 1,
    name: "Muhammad Danial",
    location: "Unisel Shah Alam",
    rating: 5,
    text: "Excellent service! They fixed my Samsung washing machine in under an hour. The technician was very professional and explained everything in both English and Bahasa Malaysia.",
    appliance: "Washing Machine",
    date: "2 days ago",
    avatar: "/images/testimonial1.jpg",
    brand: "Samsung",
    verified: true,
  },
  {
    id: 2,
    name: "Khai Rizuan ",
    location: " Kampung Bukit Tinggi, Pahang, Malaysia",
    rating: 5,
    text: "Emergency repair on a Sunday! They came within 2 hours and fixed my LG refrigerator. Saved all my food during the hot Malaysian weather. Highly recommend JTE!",
    appliance: "Refrigerator",
    date: "1 week ago",
    avatar: "/images/testimonial2.jpg",
    brand: "LG",
    verified: true,
  },
  {
    id: 3,
    name: "Izz Rostam ",
    location: "Melbourne, Victoria, Australia",
    rating: 5,
    text: "Very professional team from JTE. They diagnosed my Panasonic dryer issue over the phone and brought the right parts. Fixed same day with warranty!",
    appliance: "Dryer",
    date: "3 days ago",
    avatar: "/images/testimonial3.jpg",
    brand: "Panasonic",
    verified: true,
  },
  {
    id: 4,
    name: "Lim Wei Jian",
    location: "Subang, Selangor",
    rating: 5,
    text: "Outstanding work! They repaired my Bosch dishwasher and it's working better than new. The 90-day warranty gives me complete peace of mind.",
    appliance: "Dishwasher",
    date: "1 week ago",
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
    brand: "Bosch",
    verified: true,
  },
  {
    id: 5,
    name: "Fatimah Zahra",
    location: "Kajang, Selangor",
    rating: 5,
    text: "Fast, reliable, and honest service from JTE. They could have charged me for unnecessary parts but didn't. Fixed my Samsung TV quickly and at fair price.",
    appliance: "TV",
    date: "5 days ago",
    avatar:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=face",
    brand: "Samsung",
    verified: true,
  },
  {
    id: 6,
    name: "Chen Wei Ming",
    location: "Klang, Selangor",
    rating: 5,
    text: "Best appliance repair service in Malaysia! JTE has serviced multiple appliances for me. Always professional, on time, and reasonably priced.",
    appliance: "Multiple Appliances",
    date: "2 weeks ago",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face",
    brand: "Various Brands",
    verified: true,
  },
];

export const stats = [
  {
    id: 1,
    number: "15+",
    label: "Years Experience in Malaysia",
    color: "blue",
  },
  { id: 2, number: "12K+", label: "Happy Malaysian Customers", color: "green" },
  { id: 3, number: "24/7", label: "Emergency Service", color: "purple" },
  {
    id: 4,
    number: "99%",
    label: "Customer Satisfaction Rate",
    color: "orange",
  },
];

export const contactInfo = {
  phone: "+60 11-2118 1615",
  emergency: "+60 11-2118 1615",
  email: "info@jterepair.com.my",
  address:
    "Jalan Mendaling, Kuala Lumpur, 52100, Wilayah Persekutuan, Malaysia",
  hours: "Mon-Sun: 8AM-8PM, 24/7 Emergency Service Available",
  whatsapp: "+60 11-2118 1615",
  businessName: "Javed Tohedi Enterprise (JTE Repair Services)",
  serviceRadius: "30km radius from Kuala Lumpur",
};

export const serviceAreas = [
  "Kuala Lumpur",
  "Shah Alam",
  "Petaling Jaya",
  "Subang Jaya",
  "Kajang",
  "Klang",
  "Cheras",
  "Ampang",
  "Puchong",
  "Serdang",
  "Bandar Sunway",
  "Damansara",
];

export const reasons = [
  {
    icon: "⭐",
    title: "Certified Malaysian Technicians",
    description:
      "Our certified technicians have 15+ years of experience in Malaysia and are trained on all major appliance brands sold locally.",
    color: "from-yellow-400 to-orange-500",
    bgColor: "bg-gradient-to-br from-yellow-50 to-orange-50",
    seoKeywords: [
      "certified technicians Malaysia",
      "appliance repair experts KL",
    ],
  },
  {
    icon: "⚡",
    title: "Same Day Service Malaysia",
    description:
      "Most repairs completed the same day throughout Kuala Lumpur and Selangor. 24/7 emergency service available across Malaysia.",
    color: "from-blue-500 to-cyan-500",
    bgColor: "bg-gradient-to-br from-blue-50 to-cyan-50",
    seoKeywords: ["same day appliance repair Malaysia", "emergency repair KL"],
  },
  {
    icon: "🛡️",
    title: "1 Month Warranty Coverage",
    description:
      "All JTE repairs come with comprehensive 90-day warranty. We stand behind our work with genuine parts guarantee.",
    color: "from-green-500 to-emerald-500",
    bgColor: "bg-gradient-to-br from-green-50 to-emerald-50",
    seoKeywords: [
      "appliance repair warranty Malaysia",
      "guaranteed repair service",
    ],
  },
  {
    icon: "💰",
    title: "Transparent Malaysian Pricing",
    description:
      "Fair pricing in Malaysian Ringgit with no hidden fees. Get clear quotation before we start any repair work.",
    color: "from-purple-500 to-pink-500",
    bgColor: "bg-gradient-to-br from-purple-50 to-pink-50",
    seoKeywords: [
      "affordable appliance repair Malaysia",
      "transparent pricing KL",
    ],
  },
  {
    icon: "🔧",
    title: "Genuine OEM Parts Malaysia",
    description:
      "We use only genuine OEM parts sourced from authorized distributors in Malaysia to ensure quality and longevity.",
    color: "from-indigo-500 to-blue-500",
    bgColor: "bg-gradient-to-br from-indigo-50 to-blue-50",
    seoKeywords: [
      "genuine appliance parts Malaysia",
      "OEM parts repair service",
    ],
  },
  {
    icon: "📱",
    title: "Easy Online Booking Malaysia",
    description:
      "Book online, call us, or WhatsApp. We work around your schedule across Kuala Lumpur and Selangor areas.",
    color: "from-red-500 to-orange-500",
    bgColor: "bg-gradient-to-br from-red-50 to-orange-50",
    seoKeywords: [
      "online appliance repair booking",
      "WhatsApp repair service Malaysia",
    ],
  },
];

export const ApplianceOptions = [
  {
    value: "washing-machine",
    label: "Washing Machine (Mesin Basuh)",
    brands: ["Samsung", "LG", "Panasonic", "Toshiba", "Electrolux"],
  },
  {
    value: "refrigerator",
    label: "Refrigerator (Peti Sejuk)",
    brands: ["Samsung", "LG", "Sharp", "Panasonic", "Hitachi"],
  },
  {
    value: "dishwasher",
    label: "Dishwasher",
    brands: ["Bosch", "Miele", "Siemens", "Electrolux"],
  },
  {
    value: "dryer",
    label: "Clothes Dryer",
    brands: ["Samsung", "LG", "Electrolux", "Bosch"],
  },
  {
    value: "tv",
    label: "Television (TV)",
    brands: ["Samsung", "LG", "Sony", "Panasonic", "TCL"],
  },
  {
    value: "oven",
    label: "Oven/Range",
    brands: ["Electrolux", "Bosch", "Siemens"],
  },
  { value: "other", label: "Other Appliances", brands: ["Various Brands"] },
];

export const features = [
  {
    icon: "⚡",
    title: "Same Day Service Malaysia",
    description:
      "Emergency repairs available within hours across KL and Selangor",
    color: "blue",
    seoKeywords: ["same day appliance repair", "emergency service Malaysia"],
  },
  {
    icon: "🛡️",
    title: "1 Month Warranty Guaranteed",
    description:
      "Comprehensive 90-day warranty on all repairs with genuine parts",
    color: "green",
    seoKeywords: ["appliance repair warranty", "guaranteed service Malaysia"],
  },
  {
    icon: "💰",
    title: "Competitive Malaysian Pricing",
    description: "Fair and transparent pricing in Malaysian Ringgit",
    color: "purple",
    seoKeywords: [
      "affordable appliance repair",
      "competitive pricing Malaysia",
    ],
  },
];

export const contactItems = [
  {
    id: "phone",
    title: "Call / WhatsApp",
    value: contactInfo.phone,
    Icon: PhoneIcon,
    bgColor: "bg-blue-600",
    href: `tel:${contactInfo.phone}`,
    whatsappHref: `https://wa.me/60111181615?text=Hello%20JTE%20Repair%20Services,%20I%20need%20appliance%20repair%20service`,
  },
  {
    id: "address",
    title: "Service Location",
    value: contactInfo.address,
    Icon: LocationIcon,
    bgColor: "bg-orange-600",
    href: "https://www.google.com/maps/place/Javed+Tohedi+Enterprise/@2.991085,101.7800797,15z/data=!4m6!3m5!1s0x31cdcb9987b9911f:0x2b510ca57f2000e1!8m2!3d2.99281!4d101.786753",
  },
  {
    id: "hours",
    title: "Operating Hours",
    value: contactInfo.hours,
    Icon: ClockIcon,
    bgColor: "bg-green-600",
  },
];

export const ChooseStats = [
  {
    icon: "👨‍🔧",
    value: "15+",
    color: "text-blue-600",
    bg: "bg-blue-100",
    label: "Years in Malaysia",
    description: "Serving Malaysian customers since 2008",
  },
  {
    icon: "😊",
    value: "12K+",
    color: "text-green-600",
    bg: "bg-green-100",
    label: "Happy Customers",
    description: "Satisfied customers across KL & Selangor",
  },
  {
    icon: "🚨",
    value: "24/7",
    color: "text-purple-600",
    bg: "bg-purple-100",
    label: "Emergency Service",
    description: "Round-the-clock emergency support",
  },
  {
    icon: "⭐",
    value: "99%",
    color: "text-orange-600",
    bg: "bg-orange-100",
    label: "Success Rate",
    description: "First-time fix success rate",
  },
];

// SEO-specific data for schema markup and meta tags
export const seoData = {
  businessName: "Javed Tohedi Enterprise (JTE Repair Services)",
  description:
    "Professional appliance repair services in Malaysia specializing in washing machine repair, refrigerator repair, TV repair, dishwasher repair, and dryer repair throughout Kuala Lumpur, Shah Alam, and Selangor.",
  keywords: [
    "appliance repair Malaysia",
    "washing machine repair KL",
    "refrigerator repair Shah Alam",
    "TV repair Selangor",
    "dishwasher repair Malaysia",
    "dryer repair service",
    "emergency appliance repair",
    "same day appliance service",
    "appliance technician Malaysia",
    "home appliance repair KL",
  ],
  serviceAreas: serviceAreas,
  coordinates: {
    latitude: "2.99281",
    longitude: "101.786753",
  },
  operatingHours: ["Mo-Su 08:00-20:00"],
  priceRange: "RM50-RM500",
  currency: "MYR",
  languages: ["English", "Bahasa Malaysia", "Chinese"],
  paymentMethods: ["Cash", "Online Banking", "Credit Card", "E-Wallet"],
  socialMedia: {
    facebook: "https://www.facebook.com/jterepairservices",
    whatsapp: "https://wa.me/60111181615",
    instagram: "https://www.instagram.com/jterepairservices",
  },
};

// Brand-specific data for SEO
export const popularBrands = {
  washingMachine: [
    "Samsung",
    "LG",
    "Panasonic",
    "Toshiba",
    "Electrolux",
    "Sharp",
    "Haier",
  ],
  refrigerator: [
    "Samsung",
    "LG",
    "Sharp",
    "Panasonic",
    "Hitachi",
    "Toshiba",
    "Electrolux",
  ],
  tv: ["Samsung", "LG", "Sony", "Panasonic", "TCL", "Hisense", "Sharp"],
  dishwasher: ["Bosch", "Miele", "Siemens", "Electrolux", "Whirlpool"],
  dryer: ["Samsung", "LG", "Electrolux", "Bosch", "Whirlpool"],
};
