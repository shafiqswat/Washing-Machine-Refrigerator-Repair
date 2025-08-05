/** @format */

import { reasons } from "@/assets/Dummy";
import React from "react";
import Image from "next/image";

const WhyChooseUs = () => {
  return (
    <section className='py-20 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden'>
      {/* Background Elements */}
      <div className='absolute inset-0 opacity-5'>
        <div className='absolute top-20 left-10 w-64 h-64 bg-blue-200 rounded-full blur-3xl'></div>
        <div className='absolute bottom-20 right-10 w-80 h-80 bg-purple-200 rounded-full blur-3xl'></div>
      </div>

      <div className='container mx-auto px-4 relative z-10'>
        {/* Section Header */}
        <div className='text-center mb-16'>
          <div className='inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-4'>
            🏆 Why Choose Us
          </div>
          <h2 className='text-4xl md:text-5xl font-bold text-gray-900 mb-6'>
            The
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600'>
              {" "}
              Trusted Choice{" "}
            </span>
            for Appliance Repair
          </h2>
          <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
            With over 15 years of experience and thousands of satisfied
            customers, we're the most trusted appliance repair service in the
            area.
          </p>
        </div>

        {/* Stats with Images */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16'>
          <div className='bg-white rounded-2xl p-6 shadow-lg border border-gray-100 text-center hover:shadow-xl transition-shadow'>
            <div className='w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4'>
              <span className='text-2xl'>👨‍🔧</span>
            </div>
            <div className='text-3xl font-bold text-blue-600 mb-2'>15+</div>
            <div className='text-gray-600 font-medium'>Years Experience</div>
          </div>
          <div className='bg-white rounded-2xl p-6 shadow-lg border border-gray-100 text-center hover:shadow-xl transition-shadow'>
            <div className='w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4'>
              <span className='text-2xl'>😊</span>
            </div>
            <div className='text-3xl font-bold text-green-600 mb-2'>10K+</div>
            <div className='text-gray-600 font-medium'>Happy Customers</div>
          </div>
          <div className='bg-white rounded-2xl p-6 shadow-lg border border-gray-100 text-center hover:shadow-xl transition-shadow'>
            <div className='w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4'>
              <span className='text-2xl'>🚨</span>
            </div>
            <div className='text-3xl font-bold text-purple-600 mb-2'>24/7</div>
            <div className='text-gray-600 font-medium'>Emergency Service</div>
          </div>
          <div className='bg-white rounded-2xl p-6 shadow-lg border border-gray-100 text-center hover:shadow-xl transition-shadow'>
            <div className='w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4'>
              <span className='text-2xl'>⭐</span>
            </div>
            <div className='text-3xl font-bold text-orange-600 mb-2'>100%</div>
            <div className='text-gray-600 font-medium'>Satisfaction Rate</div>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16'>
          {/* Left - Reasons */}
          <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
            {reasons.slice(0, 4).map((reason, index) => (
              <div
                key={index}
                className={`${reason.bgColor} rounded-2xl p-6 border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group`}>
                {/* Icon */}
                <div
                  className={`w-12 h-12 bg-gradient-to-r ${reason.color} rounded-xl flex items-center justify-center text-xl mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  {reason.icon}
                </div>

                {/* Title */}
                <h3 className='text-lg font-bold text-gray-900 mb-3 group-hover:text-gray-700 transition-colors'>
                  {reason.title}
                </h3>

                {/* Description */}
                <p className='text-gray-600 text-sm leading-relaxed'>
                  {reason.description}
                </p>
              </div>
            ))}
          </div>

          {/* Right - Image */}
          <div className='relative'>
            <div className='relative rounded-3xl overflow-hidden shadow-2xl'>
              <Image
                src='https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=600&h=500&fit=crop'
                alt='Professional appliance repair technician'
                width={600}
                height={500}
                className='w-full h-96 object-cover'
              />
              <div className='absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent'></div>

              {/* Floating Elements */}
              <div className='absolute top-6 left-6 bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-lg'>
                <div className='flex items-center'>
                  <div className='w-10 h-10 bg-green-500 rounded-full flex items-center justify-center mr-3'>
                    <span className='text-white text-lg'>✓</span>
                  </div>
                  <div>
                    <div className='font-bold text-gray-900'>Certified</div>
                    <div className='text-xs text-gray-600'>Technician</div>
                  </div>
                </div>
              </div>

              <div className='absolute bottom-6 right-6 bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-lg'>
                <div className='flex items-center'>
                  <div className='w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center mr-3'>
                    <span className='text-white text-lg'>⚡</span>
                  </div>
                  <div>
                    <div className='font-bold text-gray-900'>Same Day</div>
                    <div className='text-xs text-gray-600'>Service</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Additional Small Images */}
            <div className='absolute -bottom-6 -left-6 w-32 h-32 rounded-2xl overflow-hidden shadow-lg border-4 border-white'>
              <Image
                src='https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=200&h=200&fit=crop'
                alt='Washing machine repair'
                width={200}
                height={200}
                className='w-full h-full object-cover'
              />
            </div>

            <div className='absolute -top-6 -right-6 w-24 h-24 rounded-2xl overflow-hidden shadow-lg border-4 border-white'>
              <Image
                src='https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?w=150&h=150&fit=crop'
                alt='Refrigerator repair'
                width={150}
                height={150}
                className='w-full h-full object-cover'
              />
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className='text-center'>
          <div className='bg-white rounded-3xl p-8 shadow-xl border border-gray-100'>
            <h3 className='text-3xl font-bold text-gray-900 mb-4'>
              Ready to Get Started?
            </h3>
            <p className='text-xl text-gray-600 mb-8'>
              Join thousands of satisfied customers who trust us with their
              appliance repairs.
            </p>
            <div className='flex flex-col sm:flex-row gap-4 justify-center'>
              <button className='px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full hover:shadow-lg transition-all duration-300 transform hover:scale-105'>
                🚀 Get Free Quote
              </button>
              <button className='px-8 py-4 bg-gray-100 text-gray-700 font-semibold rounded-full hover:bg-gray-200 transition-colors'>
                📞 Call (555) 123-4567
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
