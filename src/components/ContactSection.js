/** @format */
import React from "react";
import Link from "./form/Link";
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
            emergency service. We're here to help 24/7!
          </p>
        </div>

        <div className='w-[70%] mx-auto'>
          {/* Contact Information */}
          <div className='space-y-8'>
            {/* Quick Contact */}
            <div className='bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20'>
              <h3 className='text-2xl font-bold mb-6'>Quick Contact</h3>
              <div className='space-y-4'>
                {contactItems.map(({ id, title, value, Icon, bgColor }) => (
                  <div
                    key={id}
                    className='flex items-center'>
                    <div
                      className={`w-12 h-12 ${bgColor} rounded-lg flex items-center justify-center mr-4`}>
                      <Icon className='w-6 h-6 text-white' />
                    </div>
                    <div>
                      <div className='font-semibold'>{title}</div>
                      <div className='text-gray-300'>{value}</div>
                    </div>
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
                📞 Call Emergency: {contactInfo.emergency}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
