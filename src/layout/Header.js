/** @format */

import React from "react";
import Link from "../components/form/Link";

const Header = () => {
  return (
    <header className='bg-white shadow-sm border-b border-gray-200'>
      <div className='container mx-auto px-4'>
        <div className='flex items-center justify-between h-16'>
          {/* Logo */}
          <div className='flex items-center'>
            <div className='w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center mr-3'>
              <span className='text-white font-bold text-lg'>A</span>
            </div>
            <Link
              href='/'
              variant='ghost'
              className='text-xl font-bold text-gray-900 hover:bg-transparent'>
              AppliancePro
            </Link>
          </div>

          {/* Navigation */}
          <nav className='hidden md:flex items-center space-x-8'>
            <Link
              href='/services'
              variant='ghost'>
              Services
            </Link>
            <Link
              href='/about'
              variant='ghost'>
              About
            </Link>
            <Link
              href='/contact'
              variant='ghost'>
              Contact
            </Link>
            <Link
              href='/contact'
              variant='primary'
              size='sm'>
              Get Quote
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button className='md:hidden p-2 rounded-lg hover:bg-gray-100'>
            <svg
              className='w-6 h-6'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'>
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M4 6h16M4 12h16M4 18h16'
              />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
