import React from 'react';
import { Link } from 'react-router-dom';
import { CheckIcon, ArrowRightIcon } from './icons';

const AboutUs = () => {
    return (
        <section className="py-24 bg-[#0a0e1a]">
            <div className="container mx-auto px-4">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div className="relative">
                        <img src="/assets/images/about_img_02.png" alt="About main" className="rounded-lg shadow-lg"/>
                        <img src="/assets/images/about_img_03.png" alt="About secondary" className="absolute -bottom-12 -right-12 border-8 border-[#0a0e1a] rounded-lg shadow-2xl hidden md:block"/>
                    </div>
                    <div className="lg:pl-8">
                        <span className="text-orange-500 font-bold uppercase">About Our Company</span>
                        <h2 className="text-4xl font-bold font-exo my-4 text-white">We Are The Best IT Consulting & Business Solutions Provider</h2>
                        <p className="mb-6 text-gray-400">
                            Ignition Consulting Group LLC delivers innovative IT consulting and business solutions that transform your organization. Our expert team provides strategic guidance and cutting-edge technology implementation to drive your business success.
                        </p>
                        <ul className="space-y-3 mb-8">
                            <li className="flex items-center"><CheckIcon /><span className="ml-2 text-gray-300 font-semibold">Strategic business planning and development</span></li>
                            <li className="flex items-center"><CheckIcon /><span className="ml-2 text-gray-300 font-semibold">Advanced IT management and consulting</span></li>
                            <li className="flex items-center"><CheckIcon /><span className="ml-2 text-gray-300 font-semibold">End-to-end business transformation services</span></li>
                        </ul>
                        <Link to="/about" className="bg-orange-500 text-white font-bold py-4 px-8 rounded-md hover:bg-orange-600 transition-all duration-300 inline-flex items-center uppercase">
                            Read More <ArrowRightIcon />
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutUs;
