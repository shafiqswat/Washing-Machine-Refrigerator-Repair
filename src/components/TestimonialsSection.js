/** @format */

import { testimonials } from "../assets/Dummy";
import React from "react";
import TestimonialCard from "./cards/TestimonialCard";

const TestimonialsSection = () => {
  return (
    <section className='py-20 bg-white'>
      <div className='container mx-auto px-4'>
        {/* Section Header */}
        <div className='text-center mb-16'>
          <div className='inline-flex items-center px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium mb-4'>
            ⭐ Customer Reviews
          </div>
          <h2 className='text-4xl md:text-5xl font-bold text-gray-900 mb-6'>
            What Our
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-600'>
              {" "}
              Customers Say{" "}
            </span>
          </h2>
          <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
            Don&apos;t just take our word for it. Here&apos;s what our satisfied customers
            have to say about our appliance repair services.
          </p>
        </div>

        {/* Overall Rating */}
        <div className='text-center mb-12'>
          <div className='inline-flex items-center bg-gradient-to-r from-green-500 to-blue-500 text-white px-8 py-4 rounded-full'>
            <span className='text-2xl mr-2'>⭐</span>
            <span className='text-xl font-bold'>4.9/5</span>
            <span className='ml-2 text-sm'>Average Rating</span>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={testimonial.id}
              testimonial={testimonial}
            />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className='text-center mt-16'>
          <div className='bg-gradient-to-r from-green-600 to-blue-600 rounded-3xl p-8 text-white'>
            <h3 className='text-3xl font-bold mb-4'>
              Join Our Happy Customers!
            </h3>
            <p className='text-xl mb-6 text-green-100'>
              Experience the same excellent service that our customers rave
              about.
            </p>
            <div className='flex flex-col sm:flex-row gap-4 justify-center'>
              <button className='px-8 py-4 bg-white text-green-600 font-semibold rounded-full hover:bg-gray-100 transition-colors'>
                🚀 Get Free Quote
              </button>
              <button className='px-8 py-4 bg-white/20 backdrop-blur-sm text-white font-semibold rounded-full hover:bg-white/30 transition-colors border border-white/30'>
                📞 Call Now: (555) 123-4567
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
