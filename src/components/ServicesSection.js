/** @format */

import React from "react";
import ServiceCard from "./cards/ServiceCard";
import { services } from "../assets/Dummy";
import Link from "./form/Link";

const ServicesSection = () => {
  return (
    <section className='py-20 bg-gray-50'>
      <div className='container mx-auto px-4'>
        {/* Section Header */}
        <div className='text-center mb-16'>
          <h2 className='text-3xl md:text-4xl font-bold text-gray-900 mb-4'>
            Our Services
          </h2>
          <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
            We specialize in repairing all major household appliances with
            expert technicians and genuine parts. Fast, reliable, and
            guaranteed.
          </p>
        </div>

        {/* Services Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {services.map((service) => (
            <ServiceCard
              key={service.id}
              service={service}
            />
          ))}
        </div>

        {/* Bottom CTA with Image */}
        <div className='text-center mt-16'>
          <div className='bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 text-white relative overflow-hidden'>
            {/* Background Decorative Elements */}
            <div className='absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16'></div>
            <div className='absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-16 -translate-x-16'></div>

            <div className='relative z-10'>
              <h3 className='text-2xl font-bold mb-4'>
                Need Emergency Repair?
              </h3>
              <p className='text-xl mb-6 text-blue-100'>
                We offer 24/7 emergency repair services. Call us anytime!
              </p>
              <div className='flex flex-col sm:flex-row gap-4 justify-center'>
                <Link
                  href='tel:5551234567'
                  variant='secondary'
                  size='lg'>
                  Call Now: (555) 123-4567
                </Link>
                <Link
                  href='/contact'
                  variant='outline'
                  size='lg'
                  className='text-white border-white'>
                  Schedule Online
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
