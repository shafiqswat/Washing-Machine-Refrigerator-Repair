/** @format */

import React from "react";
import Link from "../components/form/Link";
import GoogleMapCompact from "../components/GoogleMapCompact";

const Footer = () => {
  return (
    <footer className='bg-gray-900 text-white'>
      <div className='container mx-auto px-4 py-12'>
        <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8'>
          {/* Company Info */}
          <div className='md:col-span-2'>
            <div className='flex items-center mb-4'>
              <div className='w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center mr-3'>
                <span className='text-white font-bold'>A</span>
              </div>
              <Link
                href='/'
                variant='ghost'
                className='text-xl font-bold text-white hover:bg-transparent'>
                AppliancePro
              </Link>
            </div>
            <p className='text-gray-300 mb-6'>
              Professional appliance repair services with 15+ years of
              experience. Fast, reliable, and guaranteed workmanship.
            </p>
            <div className='flex space-x-4 mb-6'>
              <Link
                href='#'
                variant='secondary'
                size='sm'>
                Facebook
              </Link>
              <Link
                href='#'
                variant='secondary'
                size='sm'>
                Twitter
              </Link>
              <Link
                href='#'
                variant='secondary'
                size='sm'>
                Instagram
              </Link>
            </div>
            
            {/* Contact Info */}
            <div className='space-y-2 text-gray-300 text-sm'>
              <div className='flex items-center'>
                <span className='w-4 h-4 bg-blue-600 rounded-full mr-2 flex items-center justify-center text-xs'>📞</span>
                +60 11-2118 1615
              </div>
              <div className='flex items-center'>
                <span className='w-4 h-4 bg-green-600 rounded-full mr-2 flex items-center justify-center text-xs'>🕒</span>
                24/7 Emergency Service
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className='text-white font-semibold mb-4'>Quick Links</h4>
            <div className='space-y-2'>
              <Link href='#service' variant='ghost' size='sm' className='block text-gray-300 hover:text-white'>
                Our Services
              </Link>
              <Link href='#contact' variant='ghost' size='sm' className='block text-gray-300 hover:text-white'>
                Contact Us
              </Link>
              <Link href='tel:+601121181615' variant='ghost' size='sm' className='block text-gray-300 hover:text-white'>
                Emergency Call
              </Link>
              <Link href='#' variant='ghost' size='sm' className='block text-gray-300 hover:text-white'>
                Get Quote
              </Link>
            </div>
          </div>

          {/* Service Area Map */}
          <div>
            <h4 className='text-white font-semibold mb-4'>Service Area</h4>
            <div className='mb-4'>
              <GoogleMapCompact height="h-32" />
            </div>
            <p className='text-gray-300 text-xs'>
              We serve the entire region and surrounding areas with fast, reliable repair services.
            </p>
          </div>
        </div>

        {/* Bottom */}
        <div className='border-t border-gray-800 mt-8 pt-8'>
          <div className='flex flex-col md:flex-row justify-between items-center'>
            <p className='text-gray-400 text-sm'>
              © 2024 AppliancePro. All rights reserved.
            </p>
            <div className='flex space-x-6 mt-4 md:mt-0'>
              <Link
                href='#'
                variant='ghost'
                size='sm'>
                Privacy Policy
              </Link>
              <Link
                href='#'
                variant='ghost'
                size='sm'>
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
