import React from 'react';
import banner from '../assets/banner.svg';
import Image from 'next/image';

const Banner: React.FC = () => {
    return (
        <>
            <div className='container mx-auto px-4'>
                <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-[300px] bg-black text-white p-8 rounded-lg shadow-lg">
                    <div className="flex flex-col space-y-4 mt-2 text-center lg:text-left">
                        <span className="text-green-500 text-lg">Categories</span>
                        <h1 className="text-4xl lg:text-6xl font-bold">Enhance Your <br /> Music Experience</h1>
                        <div className="flex justify-center lg:justify-start space-x-4">
                            <div className="text-center bg-white text-black rounded-full w-16 h-16 lg:w-20 lg:h-20 flex flex-col justify-center items-center">
                                <span className="block text-xl lg:text-2xl font-bold">23</span>
                                <span className="text-xs lg:text-sm">Hours</span>
                            </div>
                            <div className="text-center bg-white text-black rounded-full w-16 h-16 lg:w-20 lg:h-20 flex flex-col justify-center items-center">
                                <span className="block text-xl lg:text-2xl font-bold">05</span>
                                <span className="text-xs lg:text-sm">Days</span>
                            </div>
                            <div className="text-center bg-white text-black rounded-full w-16 h-16 lg:w-20 lg:h-20 flex flex-col justify-center items-center">
                                <span className="block text-xl lg:text-2xl font-bold">59</span>
                                <span className="text-xs lg:text-sm">Minutes</span>
                            </div>
                            <div className="text-center bg-white text-black rounded-full w-16 h-16 lg:w-20 lg:h-20 flex flex-col justify-center items-center">
                                <span className="block text-xl lg:text-2xl font-bold">35</span>
                                <span className="text-xs lg:text-sm">Seconds</span>
                            </div>
                        </div>
                        <button className="bg-green-500 w-[120px] lg:w-[150px] mt-[20px] text-white rounded-[10px] hover:bg-green-600 transition p-3 lg:p-4">
                            Buy Now!
                        </button>
                    </div>
                    <div className="mt-4 lg:mt-0">
                        <Image src={banner} alt="Speaker" />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Banner;