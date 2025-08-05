/** @format */

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title:
    "JTE Appliance Repair Services Kuala Lumpur | Washing Machine, Refrigerator & TV Repair Malaysia",
  description:
    "Professional appliance repair services in Kuala Lumpur, Shah Alam, and Selangor. Expert washing machine repair, refrigerator repair, TV repair, dishwasher and dryer services. Same-day service available. Call 011-2118 1615 for reliable home appliance repair in Malaysia.",
  keywords: [
    "appliance repair Malaysia",
    "washing machine repair Kuala Lumpur",
    "refrigerator repair Shah Alam",
    "appliance repair Selangor",
    "TV repair Malaysia",
    "dishwasher repair KL",
    "dryer repair Malaysia",
    "home appliance repair Malaysia",
    "washing machine repair near me",
    "refrigerator repair service Malaysia",
    "appliance technician Kuala Lumpur",
    "same day appliance repair Malaysia",
    "emergency appliance repair KL",
    "fridge repair Shah Alam",
    "mesin basuh repair Malaysia",
    "peti sejuk repair KL",
    "appliance repair Subang",
    "washing machine service Malaysia",
    "Samsung appliance repair Malaysia",
    "LG appliance repair Kuala Lumpur",
    "Panasonic repair Malaysia",
    "Electrolux repair service",
    "appliance repair Petaling Jaya",
  ].join(", "),
  openGraph: {
    title:
      "JTE Appliance Repair Services | Expert Home Appliance Repair in Malaysia",
    description:
      "Professional appliance repair services in Kuala Lumpur, Shah Alam, and Selangor. Washing machines, refrigerators, TVs, dishwashers, and dryers. Same-day service available.",
    type: "website",
    locale: "en_MY",
    siteName: "JTE Repair Services Malaysia",
    images: [
      {
        url: "/images/jte-appliance-repair-malaysia.jpg", // Add your business image
        width: 1200,
        height: 630,
        alt: "JTE Appliance Repair Services Malaysia",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "JTE Appliance Repair Services | Expert Home Appliance Repair Malaysia",
    description:
      "Professional appliance repair services in Kuala Lumpur and Selangor. Same-day service for washing machines, refrigerators, TVs and more.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code", // Replace with your actual verification code
  },
  category: "Home Services",
  alternates: {
    canonical: "https://your-domain.com", // Replace with your actual domain
  },
  authors: [{ name: "Javed Tohedi Enterprise" }],
  creator: "Javed Tohedi Enterprise",
  publisher: "JTE Repair Services Malaysia",
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang='en'
      className='scroll-smooth'>
      <head>
        {/* Additional SEO Meta Tags */}
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1'
        />
        <meta
          name='theme-color'
          content='#ffffff'
        />
        <meta
          name='format-detection'
          content='telephone=yes'
        />
        <meta
          name='geo.region'
          content='MY-10'
        />
        <meta
          name='geo.placename'
          content='Kuala Lumpur'
        />
        <meta
          name='geo.position'
          content='2.99281;101.786753'
        />
        <meta
          name='ICBM'
          content='2.99281, 101.786753'
        />
        <meta
          name='language'
          content='English'
        />
        <meta
          name='revisit-after'
          content='7 days'
        />
        <meta
          name='distribution'
          content='web'
        />
        <meta
          name='rating'
          content='general'
        />

        {/* Hreflang for Malaysia */}
        <link
          rel='alternate'
          hrefLang='en-MY'
          href='https://your-domain.com'
        />
        <link
          rel='alternate'
          hrefLang='ms-MY'
          href='https://your-domain.com/ms'
        />

        {/* Schema.org structured data for Malaysian business */}
        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Javed Tohedi Enterprise (JTE Repair Services)",
              alternateName: "JTE Appliance Repair Services",
              description:
                "Professional appliance repair services in Malaysia specializing in washing machines, refrigerators, dishwashers, dryers, and TV repairs",
              url: "https://your-domain.com",
              telephone: "011-2118 1615",
              email: "info@jterepair.com", // Replace with your actual email
              address: {
                "@type": "PostalAddress",
                streetAddress: "Jalan Mendaling",
                addressLocality: "Kuala Lumpur",
                addressRegion: "Wilayah Persekutuan",
                postalCode: "52100",
                addressCountry: "MY",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: "2.99281",
                longitude: "101.786753",
              },
              openingHours: ["Mo-Su 08:00-20:00"],
              areaServed: [
                {
                  "@type": "City",
                  name: "Kuala Lumpur",
                },
                {
                  "@type": "City",
                  name: "Shah Alam",
                },
                {
                  "@type": "State",
                  name: "Selangor",
                },
                {
                  "@type": "City",
                  name: "Petaling Jaya",
                },
                {
                  "@type": "City",
                  name: "Subang",
                },
              ],
              serviceArea: {
                "@type": "GeoCircle",
                geoMidpoint: {
                  "@type": "GeoCoordinates",
                  latitude: "2.99281",
                  longitude: "101.786753",
                },
                geoRadius: "30000",
              },
              currencyAccepted: "MYR",
              paymentAccepted: "Cash, Bank Transfer, Online Payment",
              priceRange: "RM50-RM500",
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Appliance Repair Services Malaysia",
                itemListElement: [
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Washing Machine Repair Malaysia",
                      description:
                        "Expert washing machine repair for Samsung, LG, Panasonic, Toshiba, and Electrolux brands",
                      areaServed: "Kuala Lumpur, Shah Alam, Selangor",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Refrigerator Repair Malaysia",
                      description:
                        "Professional refrigerator and freezer repair services for all major brands",
                      areaServed: "Kuala Lumpur, Shah Alam, Selangor",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "TV Repair Malaysia",
                      description:
                        "Expert TV repair services for LED, LCD, Smart TVs of all brands",
                      areaServed: "Kuala Lumpur, Shah Alam, Selangor",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Dishwasher Repair Malaysia",
                      description:
                        "Professional dishwasher repair and maintenance services",
                      areaServed: "Kuala Lumpur, Shah Alam, Selangor",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Dryer Repair Malaysia",
                      description:
                        "Efficient clothes dryer repair services for all brands",
                      areaServed: "Kuala Lumpur, Shah Alam, Selangor",
                    },
                  },
                ],
              },
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.8",
                reviewCount: "125",
                bestRating: "5",
                worstRating: "1",
              },
              sameAs: [
                "https://www.facebook.com/jterepairservices", // Add your actual social media links
                "https://www.instagram.com/jterepairservices",
              ],
            }),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
