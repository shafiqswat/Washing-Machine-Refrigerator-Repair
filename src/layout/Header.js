/** @format */
"use client";
import React, { useState } from "react";
import Link from "../components/form/Link";
import { smoothScrollTo } from "@/utils/smoothScroll";
import { MenuIcon } from "@/assets/Svg";
import Image from "next/image";

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
            <Image
              src='/images/logo.png'
              alt='JTE Repair Services Logo'
              width={120}
              height={100}
              className='object-contain w-[120px] h-[96px] '
            />
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
