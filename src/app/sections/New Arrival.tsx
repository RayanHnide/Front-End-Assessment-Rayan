 import image1 from '../assets/1.svg'
import image2 from '../assets/2.svg'
import image3 from '../assets/3.svg'
import image4 from '../assets/4.svg'
import f1 from '../assets/Services (1).svg'
import f2 from '../assets/Services (2).svg'
import f3 from '../assets/Services.svg'
import React from 'react';
import HeaderSection from '../components/HeaderSection';
import Image from 'next/image';
import Feature from '../components/FeatureCard';

const ProductShowcase = () => {

    const features = [
        { icon: f1, title: "FREE AND FAST DELIVERY", description: "Free delivery for all orders over $140" },
        { icon: f2, title: "24/7 CUSTOMER SERVICE", description: "Friendly 24/7 customer support" },
        { icon: f3, title: "MONEY BACK GUARANTEE", description: "We return money within 30 days" },
    ]
    return (
        <>
            <div className='container mx-auto'>
                <HeaderSection title="Featured" subTitle="New Arrival" />
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4">
                    <div className="relative bg-black ">
                        <div className='flex justify-center items-center h-full'>
                            <Image src={image1} alt="PlayStation 5" width={500} height={500} />
                        </div>
                        <div className="absolute bottom-0 left-0 p-4 bg-black bg-opacity-50 text-white">
                            <h2 className='text-lg font-bold'>PlayStation 5</h2>
                            <p className='text-sm '>Black and White version of the PS5 coming out on sale.</p>
                            <button className="mt-2  w-fit py-2 border-b border-white bg-transparent  text-white">Shop Now</button>
                        </div>
                    </div>
                    <div>
                        <div className="relative bg-black ">
                            <div className='flex justify-center items-center h-full'>
                                <Image src={image2} alt="PlayStation 5" width={500} height={500} />
                            </div>
                            <div className="absolute bottom-0 left-0 p-4 bg-black bg-opacity-50 text-white">
                                <h2 className='text-lg font-bold'>PlayStation 5</h2>
                                <p className='text-sm '>Black and White version of the PS5 coming out on sale.</p>
                                <button className="mt-2  w-fit py-2 border-b border-white bg-transparent  text-white">Shop Now</button>
                            </div>
                        </div>

                        <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4'>
                            <div className="relative bg-black ">
                                <div className='flex justify-center items-center h-full'>
                                    <Image src={image3} alt="PlayStation 5" width={200} height={200} />
                                </div>
                                <div className="absolute bottom-0 left-0 p-4 bg-black bg-opacity-50 text-white">
                                    <h2 className='text-lg font-bold'>PlayStation 5</h2>
                                    <p className='text-sm '>Black and White version of the PS5 coming out on sale.</p>
                                    <button className="mt-2  w-fit py-2 border-b border-white bg-transparent  text-white">Shop Now</button>
                                </div>
                            </div>
                            <div className="relative bg-black ">
                                <div className='flex justify-center items-center h-full'>
                                    <Image src={image4} alt="PlayStation 5" width={200} height={200} />
                                </div>
                                <div className="absolute bottom-0 left-0 p-4 bg-black bg-opacity-50 text-white">
                                    <h2 className='text-lg font-bold'>PlayStation 5</h2>
                                    <p className='text-sm '>Black and White version of the PS5 coming out on sale.</p>
                                    <button className="mt-2  w-fit py-2 border-b border-white bg-transparent  text-white">Shop Now</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="flex flex-col sm:flex-row justify-around py-8 bg-white mt-20 mb-20">
                    {
                        features.map((feature, index) => (
                            <Feature key={index} icon={feature.icon} title={feature.title} description={feature.description} />
                        ))
                    }

                </div>
            </div>
        </>
    );
};

export default ProductShowcase;