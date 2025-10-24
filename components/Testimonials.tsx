import React from 'react';
import { QuoteIcon } from './icons';

const Testimonials = () => {
    const testimonialData = [
        { quote: "Compellingly syndicate team building technologies rather than B2C solutions. Credibly grow premier ideas rather than ubiquitous leadership.", name: 'Jone Walker', title: 'CEO', img: '/assets/images/testi_avatar_02.png' },
        { quote: "Quickly pursue granular interfaces with cross-platform. Compellingly actualize multifunctional potentialities. Dramatically enable progressive schemas.", name: 'Jackline Techie', title: 'Business Owner', img: '/assets/images/testi_avatar_03.png' },
    ];
    return (
        <section className="py-24 bg-[#1a1f2e]">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-2xl mx-auto mb-12">
                    <span className="text-orange-500 font-bold uppercase">Testimonials</span>
                    <h2 className="text-4xl font-bold font-exo my-4 text-white">What Our Customers Say About Our Company</h2>
                </div>
                <div className="grid lg:grid-cols-2 gap-8">
                    {testimonialData.map((item, index) => (
                        <div key={index} className="bg-[#0a0e1a] p-8 rounded-lg relative border border-gray-800">
                            <QuoteIcon/>
                            <p className="text-lg italic mb-6 text-gray-300">"{item.quote}"</p>
                            <div className="flex items-center">
                                <img src={item.img} alt={item.name} className="w-16 h-16 rounded-full mr-4"/>
                                <div>
                                    <h4 className="text-xl font-bold text-white">{item.name}</h4>
                                    <p className="text-orange-500">{item.title}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
