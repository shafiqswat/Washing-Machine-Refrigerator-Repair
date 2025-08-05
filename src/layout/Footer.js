/** @format */
"use client";
import React from "react";
import Link from "../components/form/Link";
import Image from "next/image";
import dynamic from "next/dynamic";

// Dynamically import LeafletMapComponent with no SSR
const LeafletMapComponent = dynamic(
  () => import("../components/LeafletMapComponent"),
  {
    ssr: false,
    loading: () => (
      <div className='w-full h-[220px] bg-gray-200 rounded-xl animate-pulse flex items-center justify-center'>
        Loading Map...
      </div>
    ),
  }
);

const Footer = () => {
  return (
    <footer className='bg-gray-900 text-white'>
      <div className='container mx-auto px-4 py-12'>
        <div className='grid grid-cols-1 md:grid-cols-4 gap-8'>
          {/* Company Info */}
          <div className='md:col-span-2'>
            <div className='flex items-center mb-4'>
              <Image
                src='/images/logo.png'
                alt='JTE Repair Services Logo'
                width={250}
                height={150}
                className='object-contain w-[120px] h-[96px]'
              />
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

        {/* Google Maps Embed */}
        <div className='w-full my-8 flex justify-center'>
          <div className='w-full md:w-2/3 lg:w-1/2'>
            <LeafletMapComponent />
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
