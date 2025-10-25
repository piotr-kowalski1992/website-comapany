import React from 'react';
import { CheckIcon, ArrowRightIcon } from './icons';

const AboutUs = () => {
    return (
        <section className="py-24 bg-[#0a0e1a]">
            <div className="container mx-auto px-4">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div className="relative">
                        <img src="/assets/images/about_img_02.png" alt="About main" className="rounded-lg shadow-lg"/>
                        <img src="/assets/images/about_img_03.png" alt="About secondary" className="absolute -bottom-12 -right-12 border-8 border-[#0a0e1a] rounded-lg shadow-2xl hidden md:block"/>
                        <div className="absolute -bottom-8 -left-8 bg-orange-500 text-white p-6 rounded-full shadow-xl text-center w-40 h-40 flex flex-col justify-center">
                            <span className="text-5xl font-extrabold font-exo">5</span>
                            <span className="font-semibold">Years Experience</span>
                        </div>
                    </div>
                    <div className="lg:pl-8">
                        <span className="text-orange-500 font-bold uppercase">About Our Company</span>
                        <h2 className="text-4xl font-bold font-exo my-4 text-white">We Are The Best Game Development Solutions</h2>
                        <p className="mb-6 text-gray-400">
                            Ignition Consulting Group LLC delivers innovative game development services that bring your vision to life. Our expert team creates immersive gaming experiences with cutting-edge technology and creative excellence.
                        </p>
                        <ul className="space-y-3 mb-8">
                            <li className="flex items-center"><CheckIcon /><span className="ml-2 text-gray-300 font-semibold">Innovative game design and development</span></li>
                            <li className="flex items-center"><CheckIcon /><span className="ml-2 text-gray-300 font-semibold">Advanced gaming technologies and engines</span></li>
                            <li className="flex items-center"><CheckIcon /><span className="ml-2 text-gray-300 font-semibold">End-to-end game production services</span></li>
                        </ul>
                        <a href="#" className="bg-orange-500 text-white font-bold py-4 px-8 rounded-md hover:bg-orange-600 transition-all duration-300 inline-flex items-center uppercase">
                            Read More <ArrowRightIcon />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutUs;
