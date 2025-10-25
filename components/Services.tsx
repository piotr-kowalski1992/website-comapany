import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRightIcon } from './icons';
import { servicesData } from '../data/servicesData';

const ServiceCard = ({ icon, title, description, id }: { icon: React.ReactNode, title: string, description: string, id: string }) => (
    <div className="bg-[#1a1f2e] p-8 rounded-lg shadow-md group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-800">
        <div className="text-orange-500 mb-4">{icon}</div>
        <h3 className="text-2xl font-bold mb-3 text-white">{title}</h3>
        <p className="mb-4 text-gray-400">{description}</p>
        <Link to={`/service-details/${id}`} className="font-bold text-gray-300 group-hover:text-orange-500 transition-colors flex items-center uppercase text-sm">
            Read More <ArrowRightIcon />
        </Link>
    </div>
);

const Services = () => {
    return (
        <section className="py-24 bg-[#0a0e1a] border-t border-gray-800">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-2xl mx-auto mb-12">
                    <span className="text-orange-500 font-bold uppercase">What We Do</span>
                    <h2 className="text-4xl font-bold font-exo my-4 text-white">We Provide Exclusive Consulting Services For Your Business</h2>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {servicesData.map((service) => (
                        <ServiceCard 
                            key={service.id}
                            {...service}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
