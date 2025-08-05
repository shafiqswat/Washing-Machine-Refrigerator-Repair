/** @format */

import React from "react";
import Header from "../../layout/Header";
import Footer from "../../layout/Footer";
import InputField from "../../components/form/InputField";
import Link from "../../components/form/Link";
import {
  PhoneIcon,
  EmailIcon,
  LocationIcon,
  ClockIcon,
} from "../../assets/Svg";
import { contactInfo, serviceAreas } from "../../assets/Dummy";

const ContactPage = () => {
  return (
    <div className='min-h-screen bg-white'>
      <Header />

      {/* Hero Section */}
      <section className='bg-gradient-to-br from-blue-50 via-white to-indigo-50 py-20'>
        <div className='container mx-auto px-4'>
          <div className='max-w-4xl mx-auto text-center'>
            <h1 className='text-4xl md:text-6xl font-bold text-gray-900 mb-6'>
              Get In <span className='text-blue-600'>Touch</span>
            </h1>
            <p className='text-xl text-gray-600 mb-8 max-w-2xl mx-auto'>
              Ready to fix your appliances? Contact us for a free quote or
              emergency service. We&apos;re here to help 24/7!
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className='py-20 bg-gray-900 text-white'>
        <div className='container mx-auto px-4'>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-12'>
            {/* Contact Form */}
            <div className='bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20'>
              <h3 className='text-2xl font-bold mb-6'>Send Us a Message</h3>
              <form className='space-y-6'>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                  <InputField
                    label='First Name'
                    placeholder='John'
                    className='text-white'
                  />
                  <InputField
                    label='Last Name'
                    placeholder='Doe'
                    className='text-white'
                  />
                </div>

                <InputField
                  label='Email'
                  type='email'
                  placeholder='john@example.com'
                  className='text-white'
                />

                <InputField
                  label='Phone'
                  type='tel'
                  placeholder='(555) 123-4567'
                  className='text-white'
                />

                <div>
                  <label className='block text-sm font-medium mb-2 text-white'>
                    Appliance Type
                  </label>
                  <select className='w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-400'>
                    <option value=''>Select Appliance</option>
                    <option value='washing-machine'>Washing Machine</option>
                    <option value='refrigerator'>Refrigerator</option>
                    <option value='dishwasher'>Dishwasher</option>
                    <option value='dryer'>Dryer</option>
                    <option value='oven'>Oven/Range</option>
                    <option value='other'>Other</option>
                  </select>
                </div>

                <div>
                  <label className='block text-sm font-medium mb-2 text-white'>
                    Message
                  </label>
                  <textarea
                    rows='4'
                    className='w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400'
                    placeholder='Describe your appliance issue...'></textarea>
                </div>

                <button className='w-full py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors'>
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className='space-y-8'>
              {/* Quick Contact */}
              <div className='bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20'>
                <h3 className='text-2xl font-bold mb-6'>Quick Contact</h3>
                <div className='space-y-4'>
                  <div className='flex items-center'>
                    <div className='w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mr-4'>
                      <PhoneIcon className='w-6 h-6 text-white' />
                    </div>
                    <div>
                      <div className='font-semibold'>Phone</div>
                      <div className='text-gray-300'>{contactInfo.phone}</div>
                    </div>
                  </div>

                  <div className='flex items-center'>
                    <div className='w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mr-4'>
                      <EmailIcon className='w-6 h-6 text-white' />
                    </div>
                    <div>
                      <div className='font-semibold'>Email</div>
                      <div className='text-gray-300'>{contactInfo.email}</div>
                    </div>
                  </div>

                  <div className='flex items-center'>
                    <div className='w-12 h-12 bg-orange-600 rounded-lg flex items-center justify-center mr-4'>
                      <LocationIcon className='w-6 h-6 text-white' />
                    </div>
                    <div>
                      <div className='font-semibold'>Address</div>
                      <div className='text-gray-300'>{contactInfo.address}</div>
                    </div>
                  </div>

                  <div className='flex items-center'>
                    <div className='w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mr-4'>
                      <ClockIcon className='w-6 h-6 text-white' />
                    </div>
                    <div>
                      <div className='font-semibold'>Hours</div>
                      <div className='text-gray-300'>{contactInfo.hours}</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Service Areas */}
              <div className='bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20'>
                <h3 className='text-2xl font-bold mb-6'>Service Areas</h3>
                <div className='grid grid-cols-2 gap-4'>
                  {serviceAreas.map((area, index) => (
                    <div
                      key={index}
                      className='flex items-center'>
                      <div className='w-3 h-3 bg-green-400 rounded-full mr-3'></div>
                      <span className='text-gray-300'>{area}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Emergency Service */}
              <div className='bg-red-600 rounded-xl p-8'>
                <h3 className='text-2xl font-bold mb-4'>Emergency Service</h3>
                <p className='text-red-100 mb-4'>
                  Need immediate help? We offer 24/7 emergency repair services.
                </p>
                <Link
                  href={`tel:${contactInfo.emergency}`}
                  variant='secondary'
                  size='lg'
                  className='w-full text-center'>
                  Call Emergency: {contactInfo.emergency}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ContactPage;
