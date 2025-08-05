/** @format */
"use client";
import React, { useState } from "react";
import Link from "../components/form/Link";
import { smoothScrollTo } from "@/utils/smoothScroll";
import { MenuIcon } from "@/assets/Svg";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);
  const closeMenu = () => setIsMenuOpen(false);

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

          {/* Desktop Navigation */}
          <nav className='hidden md:flex items-center space-x-8'>
            <Link
              variant='ghost'
              onClick={() => smoothScrollTo("service")}>
              Services
            </Link>
            <Link
              variant='ghost'
              onClick={() => smoothScrollTo("contact")}>
              About
            </Link>
            <Link
              variant='ghost'
              onClick={() => smoothScrollTo("contact")}>
              Contact
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className='md:hidden p-2 rounded-lg hover:bg-gray-100'>
            <MenuIcon />
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className='md:hidden mt-2 flex flex-col space-y-2 px-2 pb-4'>
            <Link
              variant='ghost'
              onClick={() => {
                smoothScrollTo("service");
                closeMenu();
              }}>
              Services
            </Link>
            <Link
              variant='ghost'
              onClick={() => {
                smoothScrollTo("contact");
                closeMenu();
              }}>
              About
            </Link>
            <Link
              variant='ghost'
              onClick={() => {
                smoothScrollTo("contact");
                closeMenu();
              }}>
              Contact
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
