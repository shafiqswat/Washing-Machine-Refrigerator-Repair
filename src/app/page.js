/** @format */
import React from "react";
import Head from "next/head";
import Header from "../layout/Header";
import HeroSection from "../components/HeroSection";
import ServicesSection from "../components/ServicesSection";
import WhyChooseUs from "../components/WhyChooseUs";
import TestimonialsSection from "../components/TestimonialsSection";
import ContactSection from "../components/ContactSection";
import Footer from "../layout/Footer";
import { siteConfig } from "../lib/seo-config";

const Home = () => {
  return (
    <>
      <Head>
        {/* Primary Meta Tags */}
        <title>{siteConfig.title}</title>
        <meta
          name='description'
          content={siteConfig.description}
        />
        <meta
          name='keywords'
          content={siteConfig.keywords.join(", ")}
        />
        <meta
          name='author'
          content={siteConfig.author}
        />
        <meta
          name='robots'
          content={siteConfig.robots}
        />
        <link
          rel='canonical'
          href={siteConfig.url}
        />

        {/* Open Graph / Facebook */}
        <meta
          property='og:type'
          content='website'
        />
        <meta
          property='og:url'
          content={siteConfig.url}
        />
        <meta
          property='og:title'
          content={siteConfig.title}
        />
        <meta
          property='og:description'
          content={siteConfig.description}
        />
        <meta
          property='og:image'
          content={siteConfig.ogImage}
        />

        {/* Twitter */}
        <meta
          name='twitter:card'
          content='summary_large_image'
        />
        <meta
          name='twitter:url'
          content={siteConfig.url}
        />
        <meta
          name='twitter:title'
          content={siteConfig.title}
        />
        <meta
          name='twitter:description'
          content={siteConfig.description}
        />
        <meta
          name='twitter:image'
          content={siteConfig.ogImage}
        />

        {/* Geo Tags */}
        <meta
          name='geo.region'
          content={siteConfig.geo.region}
        />
        <meta
          name='geo.placename'
          content={siteConfig.geo.placename}
        />
        <meta
          name='geo.position'
          content={siteConfig.geo.position}
        />
        <meta
          name='ICBM'
          content={siteConfig.geo.position}
        />

        {/* Mobile & PWA */}
        <meta
          name='viewport'
          content='width=device-width,initial-scale=1'
        />
        <meta
          name='theme-color'
          content='#ffffff'
        />
        <link
          rel='manifest'
          href='/manifest.json'
        />
      </Head>

      <div className='min-h-screen bg-white'>
        <Header />
        <HeroSection />
        <ServicesSection />
        <WhyChooseUs />
        <TestimonialsSection />
        <ContactSection />
        <Footer />
      </div>
    </>
  );
};

export default Home;
