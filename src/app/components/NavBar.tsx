'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import search from '../assets/search.svg';
import heart from '../assets/heart.svg';
import cart from '../assets/cart.svg';
import { Input } from '@/components/ui/input';

const NavBar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="container mx-auto">
        <nav className="bg-white">
          <div className="mx-auto px-2 sm:px-6 lg:px-0">
            <div className="flex justify-between items-center h-16">
              <div className="flex items-center">
                <span className="font-bold text-xl">Royal Class</span>
              </div>
              <div className="hidden md:flex md:space-x-8">
                <a href="#" className="text-gray-900 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 border-transparent hover:border-black text-sm font-medium">
                  Home
                </a>
                <a href="#" className="text-gray-500 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 border-transparent hover:border-black text-sm font-medium">
                  Contact
                </a>
                <a href="#" className="text-gray-500 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 border-transparent hover:border-black text-sm font-medium">
                  About
                </a>
                <a href="#" className="text-gray-500 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 border-transparent hover:border-black text-sm font-medium">
                  Sign Up
                </a>
              </div>
              <div className="flex items-center space-x-4">
                <div className="relative">
                  <Input className="border border-gray-100 rounded-[7px] bg-gray-100 px-3 w-[240px] py-1 text-sm text-gray-700"
                    type="email" placeholder="What are you looking for?" />
                  <button className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700">
                    <Image src={search} alt="Search" width={20} height={20} />
                  </button>
                </div>
                <button className="text-gray-500 hover:text-gray-700">
                  <Image src={heart} alt="Heart" width={20} height={20} />
                </button>
                <button className="text-gray-500 hover:text-gray-700">
                  <Image src={cart} alt="Cart" width={20} height={20} />
                </button>
                <button className="md:hidden text-gray-500 hover:text-gray-700" onClick={() => setIsOpen(!isOpen)}>
                  <span className="sr-only">Open main menu</span>
                  <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
          {isOpen && (
            <div className="md:hidden">
              <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Home</a>
              <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Contact</a>
              <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">About</a>
              <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Sign Up</a>
            </div>
          )}
          <hr />
        </nav>
      </div>
    </>
  );
};

export default NavBar;