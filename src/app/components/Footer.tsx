import React from 'react';
import Image from 'next/image';
import footer from '../assets/footer.svg'
import { Input } from '@/components/ui/input';
import send from '../assets/icon-send.svg'

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white py-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-5 gap-8 px-4">
        <div>
          <h3 className="font-bold text-lg mb-4">Exclusive</h3>
          <p>Subscribe</p>
          <p>Get 10% off your first order</p>
          <div className="relative mt-4">
            <Input className="border border-gray-100 rounded-[7px] bg-transparent px-3 w-[240px] py-1 text-sm text-white"
              type="email" placeholder="What are you looking for?" />
            <button className="absolute right-[10px] top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700">
              <Image src={send} alt="Search" width={20} height={20} />
            </button>
          </div>
        </div>
        <div>
          <h3 className="font-bold text-lg mb-4">Support</h3>
          <p>21st Floor, The Binary Tower, Marasi Drive, Business bay, Dubai</p>
          <p>info@royalclass.group</p>
          <p>+971 42 408 999</p>
        </div>
        <div>
          <h3 className="font-bold text-lg mb-4">Account</h3>
          <ul>
            <li>My Account</li>
            <li>Login / Register</li>
            <li>Cart</li>
            <li>Wishlist</li>
            <li>Shop</li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold text-lg mb-4">Quick Link</h3>
          <ul>
            <li>Privacy Policy</li>
            <li>Terms Of Use</li>
            <li>FAQ</li>
            <li>Contact</li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold text-lg mb-4">Download App</h3>
          <div className="flex space-x-2">
            <Image src={footer} alt="Google Play" width={200} height={200} />
          </div>
          <div className="flex space-x-4 mt-4">
            <a href="#"><i className="fab fa-facebook-f"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
            <a href="#"><i className="fab fa-linkedin-in"></i></a>
          </div>
        </div>
      </div>
      <div className="text-center mt-8">
        <p>© Copyright <a href="#" className="underline">Royal Class Group</a> 2022. All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;