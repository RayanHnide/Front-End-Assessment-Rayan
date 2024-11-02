'use client'
import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import hero from '../assets/iphone.png';
import Image from 'next/image';
import iphone from '../assets/apple.svg';
import iphone16 from '../assets/iphone16.png';
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel';

const HeroSection: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 5;

  const handleDotClick = (index: number) => {
    setCurrentSlide(index);
  };

  const slideContents = [
    { image: hero, alt: "iPhone 14" },
    { image: iphone16, alt: "iPhone 16" },
    { image: hero, alt: "iPhone 14" },
    { image: iphone16, alt: "iPhone 16" },
    { image: hero, alt: "iPhone 14" },
  ];

  return (
    <>
      <div className="p-10">
        <div className="flex flex-col md:flex-row items-center justify-between bg-black text-white p-8">
          <div className="md:w-1/2">
            <p className="   flex items-center">
              <Image src={iphone} alt="iPhone 14" width={30} height={30} />
              <span className="ml-2">iPhone 14 Series</span>
            </p>
            <h1 className="mt-4 text-6xl font-bold">Up to 10% off Voucher</h1>
            <div className="mt-6  text-white border-b-2 border-white w-fit py-2 ">
              Shop Now <span className='text-3xl'>→</span>
            </div>
          </div>
          <div className="md:w-1/2 mt-8 md:mt-0 relative">
            <Carousel className="w-full max-w-xs border-none">
              <CarouselContent>
                {slideContents.map((content, index) => (
                  <CarouselItem key={index} className={index === currentSlide ? 'block' : 'hidden'}>
                    <div className="p-1">
                      <Card className='border-none'>
                        <CardContent className="flex aspect-square items-center justify-center">
                          <Image style={{ maxWidth: '1200px', maxHeight: '350px' }} src={content.image} alt={content.alt} />
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="flex justify-center mt-4 absolute bottom-0 left-1/2 transform -translate-x-1/2">
                {Array.from({ length: totalSlides }).map((_, index) => (
                  <button
                    key={index}
                    className={`w-2 h-2 rounded-full mx-1 ${index === currentSlide ? 'bg-white' : 'bg-gray-500'}`}
                    onClick={() => handleDotClick(index)}
                  />
                ))}
              </div>
            </Carousel>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;