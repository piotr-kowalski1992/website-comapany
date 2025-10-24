import React from 'react';
import { WattseLogo, NextechLogo, MuastLogo, ChatbotLogo, SoluckLogo } from './icons';

const brandData = [
    { component: <WattseLogo /> },
    { component: <NextechLogo /> },
    { component: <MuastLogo /> },
    { component: <ChatbotLogo /> },
    { component: <SoluckLogo /> },
];

const Brands = () => {
    return (
        <div className="py-16 bg-white">
            <div className="container mx-auto px-4">
                <h2 className="text-center text-xl font-semibold text-dark-blue mb-8">
                    Trusted by big companies
                </h2>
                <div 
                    className="w-full inline-flex flex-nowrap overflow-hidden"
                    style={{ 
                        WebkitMaskImage: 'linear-gradient(to right, transparent 0, black 128px, black calc(100% - 128px), transparent 100%)',
                        maskImage: 'linear-gradient(to right, transparent 0, black 128px, black calc(100% - 128px), transparent 100%)' 
                    }}
                >
                    <ul className="flex items-center justify-center md:justify-start animate-infinite-scroll hover:[animation-play-state:paused]">
                        {brandData.map((brand, index) => (
                            <li key={index} className="mx-4 flex-shrink-0">
                                <div className="bg-gray-50 rounded-xl px-10 py-5 w-[200px] h-[90px] flex items-center justify-center shadow-sm border border-gray-100">
                                    {brand.component}
                                </div>
                            </li>
                        ))}
                        {/* Duplicate for seamless scroll */}
                        {brandData.map((brand, index) => (
                            <li key={`duplicate-${index}`} className="mx-4 flex-shrink-0" aria-hidden="true">
                                <div className="bg-gray-50 rounded-xl px-10 py-5 w-[200px] h-[90px] flex items-center justify-center shadow-sm border border-gray-100">
                                    {brand.component}
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Brands;
