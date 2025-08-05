/** @format */

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/lib/seo-config";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: [{ name: siteConfig.author }],
  creator: siteConfig.creator,
  publisher: siteConfig.publisher,
  category: siteConfig.category,
  classification: siteConfig.classification,
  coverage: siteConfig.coverage,
  distribution: siteConfig.distribution,
  rating: siteConfig.rating,
  copyright: siteConfig.copyright,
  robots: siteConfig.robots,
  googlebot: siteConfig.googlebot,

  openGraph: {
    type: "website",
    locale: "en_MY",
    url: siteConfig.url,
    title: siteConfig.title,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} – Professional Appliance Repair Malaysia`,
        type: "image/jpeg",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: "@jterepairmy",
    site: "@jterepairmy",
  },

  other: {
    "geo.region": siteConfig.geo.region,
    "geo.placename": siteConfig.geo.placename,
    "geo.position": siteConfig.geo.position,
    ICBM: siteConfig.geo.position,
    language: siteConfig.language,
    distribution: siteConfig.distribution,
    rating: siteConfig.rating,
    "revisit-after": "7 days",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "default",
    "apple-mobile-web-app-title": siteConfig.name,
    "application-name": siteConfig.name,
    "msapplication-TileColor": "#2563eb",
    "msapplication-config": "/browserconfig.xml",
    "theme-color": "#ffffff",
  },

  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
    yahoo: "your-yahoo-verification-code",
    other: {
      "facebook-domain-verification": "your-facebook-verification-code",
    },
  },

  manifest: "/manifest.json",

  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      { rel: "mask-icon", url: "/safari-pinned-tab.svg", color: "#2563eb" },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang='en-MY'
      className='scroll-smooth'>
      <head>
        {/* Additional manual meta tags */}
        <meta
          name='geo.region'
          content='MY'
        />
        <meta
          name='geo.placename'
          content='Kuala Lumpur, Malaysia'
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
          name='distribution'
          content='Global'
        />
        <meta
          name='rating'
          content='General'
        />
        <meta
          name='revisit-after'
          content='7 days'
        />
        <meta
          name='contact'
          content={siteConfig.contact.phone}
        />
        <meta
          name='reply-to'
          content={siteConfig.contact.email}
        />
        <meta
          name='owner'
          content={siteConfig.author}
        />
        <meta
          name='url'
          content={siteConfig.url}
        />
        <meta
          name='identifier-URL'
          content={siteConfig.url}
        />
        <meta
          name='directory'
          content='submission'
        />
        <meta
          name='category'
          content='Business and Economy > Services > Appliance Repair'
        />
        <link
          rel='manifest'
          href='/manifest.json'
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
        <script
          async
          src='https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID'></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'GA_MEASUREMENT_ID');
            `,
          }}
        />
      </body>
    </html>
  );
}
