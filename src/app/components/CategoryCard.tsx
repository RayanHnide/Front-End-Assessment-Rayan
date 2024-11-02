import React from 'react';
import Image from 'next/image';
import { CategoryCardProps } from '../types/types';

const CategoryCard = ({ src, title }: CategoryCardProps) => {
    return (
        <div className=" hover:bg-red-500 hover:text-red-50 flex flex-col items-center justify-center w-36 h-36 border border-gray-300  rounded-[10px] shadow-md transition-shadow duration-300  mb-20 ">
            <Image src={src} width={100} height={100} alt="logo" />
            <div className="text-lg  ">{title}</div>
        </div>
    );
};

export default CategoryCard;