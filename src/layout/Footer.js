/** @format */

import React from "react";
import Link from "../components/form/Link";
import { PhoneIcon, EmailIcon, LocationIcon, ClockIcon } from "../assets/Svg";

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
          <div>
            <h4 className='text-lg font-semibold mb-4'>Services</h4>
            <ul className='space-y-2'>
              <li>
                <Link
                  href='/services'
                  variant='ghost'
                  size='sm'>
                  Washing Machine Repair
                </Link>
              </li>
              <li>
                <Link
                  href='/services'
                  variant='ghost'
                  size='sm'>
                  Refrigerator Repair
                </Link>
              </li>
              <li>
                <Link
                  href='/services'
                  variant='ghost'
                  size='sm'>
                  Dishwasher Repair
                </Link>
              </li>
              <li>
                <Link
                  href='/services'
                  variant='ghost'
                  size='sm'>
                  Dryer Repair
                </Link>
              </li>
              <li>
                <Link
                  href='/services'
                  variant='ghost'
                  size='sm'>
                  Emergency Repairs
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className='text-lg font-semibold mb-4'>Contact</h4>
            <div className='space-y-3'>
              <div className='flex items-center'>
                <PhoneIcon className='w-4 h-4 mr-2 text-blue-400' />
                <span className='text-sm text-gray-300'>(555) 123-4567</span>
              </div>
              <div className='flex items-center'>
                <EmailIcon className='w-4 h-4 mr-2 text-blue-400' />
                <span className='text-sm text-gray-300'>
                  info@appliancerepair.com
                </span>
              </div>
              <div className='flex items-center'>
                <LocationIcon className='w-4 h-4 mr-2 text-blue-400' />
                <span className='text-sm text-gray-300'>123 Repair Street</span>
              </div>
              <div className='flex items-center'>
                <ClockIcon className='w-4 h-4 mr-2 text-blue-400' />
                <span className='text-sm text-gray-300'>
                  24/7 Emergency Service
                </span>
              </div>
            </div>
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
