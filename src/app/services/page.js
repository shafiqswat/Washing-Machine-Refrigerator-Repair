/** @format */

import React from "react";
import Header from "../../layout/Header";
import Footer from "../../layout/Footer";
import ServiceCard from "../../components/cards/ServiceCard";
import Link from "../../components/form/Link";
import { services } from "../../assets/Dummy";

const ServicesPage = () => {
  return (
    <div className='min-h-screen bg-white'>
      <Header />

      {/* Hero Section */}
      <section className='bg-gradient-to-br from-blue-50 via-white to-indigo-50 py-20'>
        <div className='container mx-auto px-4'>
          <div className='max-w-4xl mx-auto text-center'>
            <h1 className='text-4xl md:text-6xl font-bold text-gray-900 mb-6'>
              Our <span className='text-blue-600'>Services</span>
            </h1>
            <p className='text-xl text-gray-600 mb-8 max-w-2xl mx-auto'>
              Professional appliance repair services with expert technicians and
              genuine parts. We fix it right the first time, guaranteed!
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className='py-20 bg-gray-50'>
        <div className='container mx-auto px-4'>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {services.map((service) => (
              <ServiceCard
                key={service.id}
                service={service}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className='py-20 bg-white'>
        <div className='container mx-auto px-4'>
          <div className='text-center mb-16'>
            <h2 className='text-3xl md:text-4xl font-bold text-gray-900 mb-4'>
              Why Choose Our Services?
            </h2>
            <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
              We provide the best appliance repair services with unmatched
              quality and reliability.
            </p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
            <div className='text-center p-6'>
              <div className='w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4'>
                <span className='text-2xl'>⚡</span>
              </div>
              <h3 className='text-xl font-semibold text-gray-900 mb-2'>
                Same Day Service
              </h3>
              <p className='text-gray-600'>
                Emergency repairs available within hours
              </p>
            </div>

            <div className='text-center p-6'>
              <div className='w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4'>
                <span className='text-2xl'>🛡️</span>
              </div>
              <h3 className='text-xl font-semibold text-gray-900 mb-2'>
                Warranty Guaranteed
              </h3>
              <p className='text-gray-600'>90-day warranty on all repairs</p>
            </div>

            <div className='text-center p-6'>
              <div className='w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4'>
                <span className='text-2xl'>💰</span>
              </div>
              <h3 className='text-xl font-semibold text-gray-900 mb-2'>
                Competitive Pricing
              </h3>
              <p className='text-gray-600'>Fair and transparent pricing</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className='py-20 bg-blue-600'>
        <div className='container mx-auto px-4 text-center'>
          <h2 className='text-3xl md:text-4xl font-bold text-white mb-4'>
            Need Emergency Repair?
          </h2>
          <p className='text-xl text-blue-100 mb-8 max-w-2xl mx-auto'>
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
              className='text-white border-white hover:bg-white hover:text-blue-600'>
              Schedule Online
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ServicesPage;
