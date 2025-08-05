/** @format */
import React from "react";
import Link from "./form/Link";
import GoogleMap from "./GoogleMap";
import { contactInfo, contactItems } from "../assets/Dummy";

const ContactSection = () => {
  return (
    <section
      className='py-20 bg-gray-900 text-white'
      id='contact'>
      <div className='container mx-auto px-4'>
        {/* Section Header */}
        <div className='text-center mb-16'>
          <h2 className='text-3xl md:text-4xl font-bold mb-4'>
            Get In Touch Today
          </h2>
          <p className='text-xl text-gray-300 max-w-3xl mx-auto'>
            Ready to fix your appliances? Contact us for a free quote or
            emergency service.We&apos;re available 24/7.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto'>
          {/* Left Side - Contact Information */}
          <div className='space-y-8'>
            {/* Quick Contact */}
            <div className='bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300'>
              <h3 className='text-2xl font-bold mb-6'>Quick Contact</h3>
              <div className='space-y-4'>
                {contactItems.map(({ id, title, value, Icon, bgColor }) => (
                  <div
                    key={id}
                    className='flex items-start sm:items-center flex-col sm:flex-row gap-3 group hover:transform hover:translate-x-2 transition-all duration-200'>
                    <div
                      className={`w-12 h-12 ${bgColor} rounded-lg flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-200`}>
                      <Icon className='w-6 h-6 text-white' />
                    </div>
                    <div className='text-left'>
                      <div className='font-semibold'>{title}</div>
                      <div className='text-gray-300 break-words max-w-full'>
                        {value}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Emergency Service */}
            <div className='bg-gradient-to-br from-red-600 to-red-700 rounded-xl p-8 hover:from-red-700 hover:to-red-800 transition-all duration-300 transform hover:scale-[1.02]'>
              <h3 className='text-2xl font-bold mb-4'>Emergency Service</h3>
              <p className='text-red-100 mb-4'>
                Need immediate help? We offer 24/7 emergency repair services.
              </p>
              <Link
                href={`tel:${contactInfo.emergency}`}
                variant='secondary'
                size='lg'
                className='w-full text-center hover:scale-105 transition-transform duration-200'>
                📞 Call Emergency: {contactInfo.emergency}
              </Link>
            </div>
          </div>

          {/* Right Side - Google Map */}
          <div className='space-y-6'>
            {/* Map Section Header */}
            <div className='bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20'>
              <div className='flex items-center mb-4'>
                <div className='w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mr-4'>
                  <span className='text-white text-xl'>📍</span>
                </div>
                <div>
                  <h3 className='text-xl font-bold text-white'>Our Location</h3>
                  <p className='text-gray-300'>Find us on the map</p>
                </div>
              </div>
              <div className='text-gray-300 text-sm'>
                <p>We serve the entire area and surrounding regions.</p>
                <p>Click the map for directions to our location.</p>
              </div>
            </div>

            {/* Google Map Component */}
            <div className='transform hover:scale-[1.01] transition-transform duration-300'>
              <GoogleMap />
            </div>

            {/* Service Area Info */}
            <div className='bg-gradient-to-r from-blue-600/20 to-indigo-600/20 backdrop-blur-sm rounded-xl p-6 border border-blue-400/30'>
              <h4 className='text-lg font-bold text-white mb-3'>Service Coverage</h4>
              <div className='grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm'>
                <div className='flex items-center text-gray-300'>
                  <span className='w-2 h-2 bg-blue-400 rounded-full mr-2'></span>
                  Within 20km radius
                </div>
                <div className='flex items-center text-gray-300'>
                  <span className='w-2 h-2 bg-green-400 rounded-full mr-2'></span>
                  Same-day service
                </div>
                <div className='flex items-center text-gray-300'>
                  <span className='w-2 h-2 bg-yellow-400 rounded-full mr-2'></span>
                  Free estimates
                </div>
                <div className='flex items-center text-gray-300'>
                  <span className='w-2 h-2 bg-purple-400 rounded-full mr-2'></span>
                  Emergency calls
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
