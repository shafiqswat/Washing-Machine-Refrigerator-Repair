/** @format */

import { ClockIcon, LocationIcon, PhoneIcon } from "./Svg";

export const services = [
  {
    id: 1,
    title: "Washing Machine Repair",
    description: "Expert repair for all brands and models",
    icon: "washing-machine",
    image:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop",
    features: [
      "Drum replacement",
      "Motor repair",
      "Control board",
      "Drain pump",
    ],
    color: "blue",
  },
  {
    id: 2,
    title: "Refrigerator Repair",
    description: "Complete refrigerator and freezer repair services",
    icon: "refrigerator",
    image:
      "https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?w=400&h=300&fit=crop",
    features: [
      "Compressor repair",
      "Thermostat replacement",
      "Door seal repair",
      "Ice maker",
    ],
    color: "cyan",
  },
  {
    id: 3,
    title: "Dishwasher Repair",
    description: "Professional dishwasher repair and maintenance",
    icon: "dishwasher",
    image:
      "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=300&fit=crop",
    features: [
      "Pump replacement",
      "Spray arm repair",
      "Door latch",
      "Control panel",
    ],
    color: "green",
  },
  {
    id: 4,
    title: "Dryer Repair",
    description: "Efficient dryer repair services",
    icon: "dryer",
    image: "/images/hero3.png",
    features: [
      "Heating element",
      "Belt replacement",
      "Thermostat",
      "Motor repair",
    ],
    color: "orange",
  },
  {
    id: 5,
    title: "Oven & Range Repair",
    description: "Complete oven and range repair services",
    icon: "oven",
    image:
      "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=300&fit=crop",
    features: [
      "Heating element",
      "Igniter replacement",
      "Control board",
      "Door repair",
    ],
    color: "red",
  },
  {
    id: 6,
    title: "Emergency Repairs",
    description: "24/7 emergency repair services",
    icon: "emergency",
    image:
      "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=400&h=300&fit=crop",
    features: [
      "Same day service",
      "Emergency calls",
      "Weekend service",
      "Holiday availability",
    ],
    color: "purple",
  },
];

export const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    location: "Downtown",
    rating: 5,
    text: "Amazing service! They fixed my washing machine in under an hour. The technician was professional and explained everything clearly.",
    appliance: "Washing Machine",
    date: "2 days ago",
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
  },
  {
    id: 2,
    name: "Mike Chen",
    location: "Westside",
    rating: 5,
    text: "Emergency repair on a Sunday! They came within 2 hours and fixed my refrigerator. Saved all my food.",
    appliance: "Refrigerator",
    date: "1 week ago",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    location: "North District",
    rating: 5,
    text: "Very professional team. They diagnosed the issue over the phone and had the right parts. Fixed my dryer same day.",
    appliance: "Dryer",
    date: "3 days ago",
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
  },
  {
    id: 4,
    name: "David Thompson",
    location: "Eastside",
    rating: 5,
    text: "Outstanding work! They repaired my dishwasher and it's working better than new. The warranty gives me peace of mind.",
    appliance: "Dishwasher",
    date: "1 week ago",
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
  },
  {
    id: 5,
    name: "Lisa Wang",
    location: "South District",
    rating: 5,
    text: "Fast, reliable, and honest. They could have charged me for unnecessary parts but didn't. Fixed the real issue quickly.",
    appliance: "Oven",
    date: "5 days ago",
    avatar:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=face",
  },
  {
    id: 6,
    name: "Robert Davis",
    location: "Central",
    rating: 5,
    text: "Best appliance repair service I've ever used. Professional, on time, and reasonably priced.",
    appliance: "Multiple Appliances",
    date: "2 weeks ago",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face",
  },
];

export const stats = [
  { id: 1, number: "15+", label: "Years Experience", color: "blue" },
  { id: 2, number: "10K+", label: "Happy Customers", color: "green" },
  { id: 3, number: "24/7", label: "Emergency Service", color: "purple" },
  { id: 4, number: "100%", label: "Satisfaction Rate", color: "orange" },
];

export const contactInfo = {
  phone: "+60 11-2118 1615",
  emergency: "+60 11-2118 1615 -REPAIR",
  email: "info@appliancerepair.com",
  address:
    "1, Jalan Mendaling, Bandar Kajang, 43000 Kajang, Selangor, Malaysia",
  hours: "Mon-Sat: 10AM-10PM, 24/7 Emergency Service",
};

export const serviceAreas = [
  "Downtown",
  "Westside",
  "North District",
  "Eastside",
  "South District",
  "Central",
];

export const reasons = [
  {
    icon: "⭐",
    title: "Expert Technicians",
    description:
      "Our certified technicians have 10+ years of experience and are trained on all major brands.",
    color: "from-yellow-400 to-orange-500",
    bgColor: "bg-gradient-to-br from-yellow-50 to-orange-50",
  },
  {
    icon: "⚡",
    title: "Same Day Service",
    description:
      "Most repairs completed the same day. Emergency service available 24/7.",
    color: "from-blue-500 to-cyan-500",
    bgColor: "bg-gradient-to-br from-blue-50 to-cyan-50",
  },
  {
    icon: "🛡️",
    title: "90-Day Warranty",
    description:
      "All repairs come with a 90-day warranty. We stand behind our work.",
    color: "from-green-500 to-emerald-500",
    bgColor: "bg-gradient-to-br from-green-50 to-emerald-50",
  },
  {
    icon: "💰",
    title: "Transparent Pricing",
    description: "No hidden fees. Get a clear quote before we start any work.",
    color: "from-purple-500 to-pink-500",
    bgColor: "bg-gradient-to-br from-purple-50 to-pink-50",
  },
  {
    icon: "🔧",
    title: "Genuine Parts",
    description:
      "We use only genuine OEM parts to ensure quality and longevity.",
    color: "from-indigo-500 to-blue-500",
    bgColor: "bg-gradient-to-br from-indigo-50 to-blue-50",
  },
  {
    icon: "📱",
    title: "Easy Scheduling",
    description: "Book online or call us. We'll work around your schedule.",
    color: "from-red-500 to-orange-500",
    bgColor: "bg-gradient-to-br from-red-50 to-orange-50",
  },
];

export const ApplianceOptions = [
  { value: "washing-machine", label: "Washing Machine" },
  { value: "refrigerator", label: "Refrigerator" },
  { value: "dishwasher", label: "Dishwasher" },
  { value: "dryer", label: "Dryer" },
  { value: "oven", label: "Oven/Range" },
  { value: "other", label: "Other" },
];

export const features = [
  {
    icon: "⚡",
    title: "Same Day Service",
    description: "Emergency repairs available within hours",
    color: "blue",
  },
  {
    icon: "🛡️",
    title: "Warranty Guaranteed",
    description: "90-day warranty on all repairs",
    color: "green",
  },
  {
    icon: "💰",
    title: "Competitive Pricing",
    description: "Fair and transparent pricing",
    color: "purple",
  },
];

export const contactItems = [
  {
    id: "phone",
    title: "Phone",
    value: contactInfo.phone,
    Icon: PhoneIcon,
    bgColor: "bg-blue-600",
  },
  {
    id: "address",
    title: "Address",
    value: contactInfo.address,
    Icon: LocationIcon,
    bgColor: "bg-orange-600",
  },
  {
    id: "hours",
    title: "Hours",
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
    label: "Years Experience",
  },
  {
    icon: "😊",
    value: "10K+",
    color: "text-green-600",
    bg: "bg-green-100",
    label: "Happy Customers",
  },
  {
    icon: "🚨",
    value: "24/7",
    color: "text-purple-600",
    bg: "bg-purple-100",
    label: "Emergency Service",
  },
  {
    icon: "⭐",
    value: "100%",
    color: "text-orange-600",
    bg: "bg-orange-100",
    label: "Satisfaction Rate",
  },
];
