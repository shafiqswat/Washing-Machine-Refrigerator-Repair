/** @format */

import React from "react";
import Header from "../../layout/Header";
import Footer from "../../layout/Footer";
import Link from "../../components/form/Link";
import { stats } from "../../assets/Dummy";

const AboutPage = () => {
  return (
    <div className='min-h-screen bg-white'>
      <Header />

      {/* Hero Section */}
      <section className='bg-gradient-to-br from-blue-50 via-white to-indigo-50 py-20'>
        <div className='container mx-auto px-4'>
          <div className='max-w-4xl mx-auto text-center'>
            <h1 className='text-4xl md:text-6xl font-bold text-gray-900 mb-6'>
              About <span className='text-blue-600'>AppliancePro</span>
            </h1>
            <p className='text-xl text-gray-600 mb-8 max-w-3xl mx-auto'>
              We are a trusted appliance repair company with over 15 years of
              experience. Our mission is to provide fast, reliable, and
              professional repair services.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className='py-20 bg-white'>
        <div className='container mx-auto px-4'>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
            <div>
              <h2 className='text-3xl md:text-4xl font-bold text-gray-900 mb-6'>
                Our Story
              </h2>
              <p className='text-lg text-gray-600 mb-6'>
                Founded in 2009, AppliancePro has been serving the community
                with exceptional appliance repair services. We started with a
                simple mission: to provide honest, reliable, and affordable
                repair services.
              </p>
              <p className='text-lg text-gray-600 mb-8'>
                Today, we&apos;re proud to be the most trusted appliance repair
                company in the region, with thousands of satisfied customers and
                a team of certified technicians.
              </p>
              <Link
                href='/contact'
                variant='primary'
                size='lg'>
                Get Free Quote
              </Link>
            </div>
            <div className='relative'>
              <div className='bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl p-8 text-white'>
                <div className='text-center'>
                  <div className='w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4'>
                    <span className='text-2xl'>🏆</span>
                  </div>
                  <h3 className='text-2xl font-bold mb-2'>
                    15+ Years Experience
                  </h3>
                  <p className='text-blue-100'>
                    Trusted by thousands of customers
                  </p>
                </div>
              </div>
              {/* Floating Elements */}
              <div className='absolute -top-4 -right-4 bg-white rounded-xl shadow-lg p-4'>
                <div className='flex items-center space-x-3'>
                  <div className='w-10 h-10 bg-green-100 rounded-full flex items-center justify-center'>
                    <span className='text-green-600 text-lg'>✓</span>
                  </div>
                  <div>
                    <div className='font-semibold text-gray-900'>Certified</div>
                    <div className='text-sm text-gray-600'>Technicians</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className='py-20 bg-gray-50'>
        <div className='container mx-auto px-4'>
          <div className='text-center mb-16'>
            <h2 className='text-3xl md:text-4xl font-bold text-gray-900 mb-4'>
              Why Choose Us?
            </h2>
            <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
              We provide the best appliance repair services with unmatched
              quality and reliability.
            </p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
            {stats.map((stat) => (
              <div
                key={stat.id}
                className='text-center p-6 bg-white rounded-xl shadow-sm border border-gray-100'>
                <div
                  className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 ${
                    stat.color === "blue"
                      ? "bg-blue-100"
                      : stat.color === "green"
                      ? "bg-green-100"
                      : stat.color === "purple"
                      ? "bg-purple-100"
                      : "bg-orange-100"
                  }`}>
                  <span className='text-2xl'>
                    {stat.color === "blue"
                      ? "📈"
                      : stat.color === "green"
                      ? "👥"
                      : stat.color === "purple"
                      ? "🆘"
                      : "⭐"}
                  </span>
                </div>
                <div
                  className={`text-3xl font-bold mb-2 ${
                    stat.color === "blue"
                      ? "text-blue-600"
                      : stat.color === "green"
                      ? "text-green-600"
                      : stat.color === "purple"
                      ? "text-purple-600"
                      : "text-orange-600"
                  }`}>
                  {stat.number}
                </div>
                <div className='text-gray-600'>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className='py-20 bg-white'>
        <div className='container mx-auto px-4'>
          <div className='text-center mb-16'>
            <h2 className='text-3xl md:text-4xl font-bold text-gray-900 mb-4'>
              Our Expert Team
            </h2>
            <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
              Meet our certified technicians who are experts in all major
              appliance brands.
            </p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
            <div className='text-center p-6 bg-gray-50 rounded-xl'>
              <div className='w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4'>
                <span className='text-2xl'>👨‍🔧</span>
              </div>
              <h3 className='text-xl font-semibold text-gray-900 mb-2'>
                John Smith
              </h3>
              <p className='text-gray-600 mb-2'>Lead Technician</p>
              <p className='text-sm text-gray-500'>
                15+ years experience in appliance repair
              </p>
            </div>

            <div className='text-center p-6 bg-gray-50 rounded-xl'>
              <div className='w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4'>
                <span className='text-2xl'>👩‍🔧</span>
              </div>
              <h3 className='text-xl font-semibold text-gray-900 mb-2'>
                Sarah Johnson
              </h3>
              <p className='text-gray-600 mb-2'>Senior Technician</p>
              <p className='text-sm text-gray-500'>
                Expert in refrigerator and freezer repair
              </p>
            </div>

            <div className='text-center p-6 bg-gray-50 rounded-xl'>
              <div className='w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4'>
                <span className='text-2xl'>👨‍🔧</span>
              </div>
              <h3 className='text-xl font-semibold text-gray-900 mb-2'>
                Mike Davis
              </h3>
              <p className='text-gray-600 mb-2'>Emergency Technician</p>
              <p className='text-sm text-gray-500'>
                24/7 emergency repair specialist
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className='py-20 bg-blue-600'>
        <div className='container mx-auto px-4 text-center'>
          <h2 className='text-3xl md:text-4xl font-bold text-white mb-4'>
            Ready to Fix Your Appliances?
          </h2>
          <p className='text-xl text-blue-100 mb-8 max-w-2xl mx-auto'>
            Contact us today for professional, reliable appliance repair
            services.
          </p>
          <div className='flex flex-col sm:flex-row gap-4 justify-center'>
            <Link
              href='/contact'
              variant='secondary'
              size='lg'>
              Get Free Quote
            </Link>
            <Link
              href='tel:5551234567'
              variant='outline'
              size='lg'
              className='text-white border-white hover:bg-white hover:text-blue-600'>
              Call Now: (555) 123-4567
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutPage;
