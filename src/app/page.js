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

const Home = () => {
  return (
    <>
      <Head>
        {/* Additional page-specific meta tags */}
        <meta
          name='description'
          content='JTE Appliance Repair Services - Your trusted partner for washing machine repair, refrigerator repair, TV repair in Kuala Lumpur, Shah Alam, and Selangor. Same-day service available. Call 011-2118 1615.'
        />
        <meta
          name='keywords'
          content='appliance repair Malaysia, washing machine repair KL, refrigerator repair Shah Alam, TV repair Selangor, home appliance service Malaysia'
        />
        <link
          rel='canonical'
          href='https://your-domain.com/'
        />

        {/* Open Graph tags for social sharing */}
        <meta
          property='og:title'
          content='JTE Appliance Repair Services Malaysia | Expert Home Appliance Repair'
        />
        <meta
          property='og:description'
          content='Professional appliance repair services in Kuala Lumpur and Selangor. Same-day service for washing machines, refrigerators, TVs and more.'
        />
        <meta
          property='og:image'
          content='/images/jte-appliance-repair-og.jpg'
        />
        <meta
          property='og:url'
          content='https://your-domain.com/'
        />
        <meta
          property='og:type'
          content='website'
        />
        <meta
          property='og:locale'
          content='en_MY'
        />

        {/* Twitter Card tags */}
        <meta
          name='twitter:card'
          content='summary_large_image'
        />
        <meta
          name='twitter:title'
          content='JTE Appliance Repair Services Malaysia'
        />
        <meta
          name='twitter:description'
          content='Professional appliance repair services in Kuala Lumpur and Selangor. Same-day service available.'
        />
        <meta
          name='twitter:image'
          content='/images/jte-appliance-repair-twitter.jpg'
        />
      </Head>

      <div className='min-h-screen bg-white'>
        {/* Main content with proper semantic HTML structure for SEO */}
        <Header />
        <main>
          <HeroSection />
          <ServicesSection />
          <WhyChooseUs />
          <TestimonialsSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Home;
