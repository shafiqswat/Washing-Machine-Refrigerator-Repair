/** @format */
import React from "react";
import Header from "../layout/Header";
import HeroSection from "../components/HeroSection";
import ServicesSection from "../components/ServicesSection";
import WhyChooseUs from "../components/WhyChooseUs";
import TestimonialsSection from "../components/TestimonialsSection";
import ContactSection from "../components/ContactSection";
import Footer from "../layout/Footer";

const Home = () => {
  return (
    <div className='min-h-screen bg-white'>
            <Header />
            <HeroSection />
            <ServicesSection />
            <WhyChooseUs />
            <TestimonialsSection />
            <ContactSection />
            <Footer /> 
    </div>
  );
};

export default Home;
