/** @format */

import React from "react";
import Link from "../components/form/Link";

const Footer = () => {
  return (
    <footer className='bg-gray-900 text-white'>
      <div className='container mx-auto px-4 py-12'>
        <div className='grid grid-cols-1 md:grid-cols-4 gap-8'>
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
            <div className='flex space-x-4'>
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
          </div>

          {/* Services */}
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
