/** @format */

import React from "react";
import Image from "next/image";
import Link from "./form/Link";
import FeatureCard from "./cards/FeatureCard";
import { WashingMachineIcon } from "../assets/Svg";
import { features } from "@/assets/Dummy";

const HeroSection = () => {
  return (
    <section className='bg-gradient-to-br from-blue-50 via-white to-indigo-50 py-20 relative overflow-hidden'>
      {/* Background Images */}
      <div className='absolute inset-0 opacity-10'>
        <div className='absolute top-10 right-10 w-32 h-32 bg-blue-200 rounded-full blur-3xl'></div>
        <div className='absolute bottom-10 left-10 w-40 h-40 bg-indigo-200 rounded-full blur-3xl'></div>
        <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-green-200 rounded-full blur-3xl'></div>
      </div>

      <div className='container mx-auto px-4 relative z-10'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
          {/* Left Content */}
          <div className='text-left'>
            {/* Badge */}
            <div className='inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-8'>
              <WashingMachineIcon className='w-4 h-4 mr-2' />
              Professional Appliance Repair
            </div>

            {/* Main Headline */}
            <h1 className='text-4xl md:text-6xl font-bold text-gray-900 mb-6'>
              Expert
              <span className='text-blue-600'> Washing Machine </span>&
              Refrigerator
              <span className='text-indigo-600'> Repair</span>
            </h1>

            {/* Subtitle */}
            <p className='text-xl text-gray-600 mb-8'>
              Fast, reliable, and professional appliance repair services. We fix
              it right the first time, guaranteed!
            </p>

            {/* CTA Buttons */}
            <div className='flex flex-col sm:flex-row gap-4 mb-12'>
              <Link
                href='tel:+60 11-2118 1615'
                variant='outline'
                size='lg'
                className='px-8 py-4'>
                +60 11-2118 1615
              </Link>
            </div>

            {/* Features */}
            <div className='relative'>
              <div className='absolute -top-2 -left-2 w-4 h-4 bg-blue-500 rounded-full opacity-20'></div>
              <div className='absolute -bottom-2 -right-2 w-6 h-6 bg-purple-500 rounded-full opacity-20'></div>

              <div className='grid grid-cols-1 sm:grid-cols-3 gap-4 relative z-10'>
                {features.map((feature, index) => (
                  <FeatureCard
                    key={index}
                    icon={feature.icon}
                    title={feature.title}
                    description={feature.description}
                    color={feature.color}
                    size='md'
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Right Content - Images */}
          <div className='relative'>
            <div className='grid grid-cols-2 gap-4'>
              {/* Main Image */}
              <div className='col-span-2'>
                <div className='relative rounded-2xl overflow-hidden shadow-2xl'>
                  <Image
                    src='https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop'
                    alt='Professional appliance repair'
                    width={600}
                    height={400}
                    className='w-full h-64 object-cover'
                    priority
                  />
                  <div className='absolute inset-0 bg-gradient-to-t from-black/50 to-transparent'></div>
                  <div className='absolute bottom-4 left-4 text-white'>
                    <div className='bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium'>
                      Expert Technicians
                    </div>
                  </div>
                </div>
              </div>

              {/* Side Images */}
              <div className='relative rounded-xl overflow-hidden shadow-lg'>
                <Image
                  src='https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?w=300&h=200&fit=crop'
                  alt='Refrigerator repair'
                  width={300}
                  height={200}
                  className='w-full h-32 object-cover'
                />
                <div className='absolute inset-0 bg-gradient-to-t from-black/40 to-transparent'></div>
                <div className='absolute bottom-2 left-2 text-white text-xs font-medium'>
                  Refrigerator Repair
                </div>
              </div>

              <div className='relative rounded-xl overflow-hidden shadow-lg'>
                <Image
                  src='/images/hero3.png'
                  alt='Washing machine repair'
                  width={300}
                  height={200}
                  className='w-full h-32 object-cover'
                />
                <div className='absolute inset-0 bg-gradient-to-t from-black/40 to-transparent'></div>
                <div className='absolute bottom-2 left-2 text-white text-xs font-medium'>
                  Washing Machine Repair
                </div>
              </div>
            </div>

            {/* Floating Stats */}
            <div className='absolute -top-4 -right-4 bg-white rounded-xl p-4 shadow-lg border border-gray-100'>
              <div className='text-center'>
                <div className='text-2xl font-bold text-blue-600'>4.9</div>
                <div className='text-xs text-gray-600'>Average Rating</div>
                <div className='flex justify-center mt-1'>
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className='w-3 h-3 text-yellow-400 fill-current'
                      viewBox='0 0 20 20'>
                      <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z' />
                    </svg>
                  ))}
                </div>
              </div>
            </div>

            <div className='absolute -bottom-4 -left-4 bg-white rounded-xl p-4 shadow-lg border border-gray-100'>
              <div className='text-center'>
                <div className='text-2xl font-bold text-green-600'>24/7</div>
                <div className='text-xs text-gray-600'>Emergency Service</div>
                <div className='text-xs text-green-600 font-medium mt-1'>
                  Available
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
