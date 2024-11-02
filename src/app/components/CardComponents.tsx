 import React from 'react';
import Image from 'next/image';
import heart from '../assets/heart.svg';
import eye from '../assets/eye.svg';
import { CardComponentsProps } from '../types/types';


const CardComponents: React.FC<CardComponentsProps> = ({ src, title, price, originalPrice }) => {
  return (
    <>
      <div className="relative p-10 w-70  mt-10">
        <div className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 rounded text-xs">
          -40%
        </div>
        <div className=' bg-red-500 '>
          <Image
            src={src}
            width={1000}
            height={1000}
            alt="HAVIT HV-G92 Gamepad"
            className="w-full rounded-lg object-contain"
          />
        </div>
        <div className="absolute top-2 right-2 flex flex-col space-y-2">
          <button className="bg-transparent border-none cursor-pointer text-lg">
            <Image src={heart} width={30} height={30} alt='heart' />
          </button>
          <button className="bg-transparent border-none cursor-pointer text-lg">
            <Image src={eye} width={30} height={30} alt='eye' />
          </button>
        </div>
        <div className="mt-4 bg-white p-2 rounded-lg " >
          <p className="text-sm  mb-2">{title}</p>
          <div className="flex items-center space-x-2">
            <span className="text-red-500 font-bold">{price}</span>
            <span className="line-through text-gray-500">{originalPrice}</span>
          </div>
          <div className="flex items-center space-x-1 mt-2">
            <span className="text-yellow-500">⭐⭐⭐⭐⭐</span>
            <span className="text-gray-500 text-sm">(88)</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardComponents;