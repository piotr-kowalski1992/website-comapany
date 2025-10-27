import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRightIcon, PlayIcon } from './icons';

const Hero = () => {
    return (
        <section className="relative bg-cover bg-center pt-48 pb-32 text-white" style={{ backgroundImage: "url('/assets/images/bdrc-bg.jpg')" }}>
            <div className="absolute inset-0 bg-[#0a0e1a] opacity-90"></div>
            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-3xl">
                    <h1 className="text-4xl md:text-6xl font-extrabold font-exo text-white leading-tight mb-4 uppercase">IT Consulting & Business Solutions</h1>
                    <p className="text-lg mb-8 text-gray-300">
                        Transform your business with innovative IT consulting and strategic business solutions. We deliver comprehensive services that drive growth and operational excellence.
                    </p>
                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                        <Link to="/services" className="bg-orange-500 text-white font-bold py-4 px-8 rounded-md hover:bg-orange-600 transition-all duration-300 inline-flex items-center uppercase">
                            Discover More <ArrowRightIcon />
                        </Link>
                        <button className="flex items-center space-x-3 text-white font-bold group">
                            <div className="relative">
                                <div className="w-16 h-16 bg-orange-600/30 rounded-full group-hover:animate-ping absolute"></div>
                                <div className="w-16 h-16 bg-gradient-to-br from-orange-600 to-orange-700 rounded-full flex items-center justify-center shadow-lg">
                                    <PlayIcon />
                                </div>
                            </div>
                            <span>Watch Our Video</span>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
