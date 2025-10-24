import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { ChevronRightIcon, CheckIcon } from './icons';
import { servicesData } from '../data/servicesData';

const ServiceSidebar = ({ activeServiceId }: { activeServiceId?: string }) => {
    return (
        <div className="bg-gray-50 p-8">
            <h3 className="text-2xl font-bold font-exo mb-6">All Services</h3>
            <ul className="space-y-1">
                {servicesData.map(service => (
                    <li key={service.id}>
                        <Link 
                            to={`/service-details/${service.id}`} 
                            className={`flex justify-between items-center p-4 font-semibold transition-all ${
                                activeServiceId === service.id 
                                ? 'bg-primary text-white' 
                                : 'bg-white text-dark-blue hover:bg-primary hover:text-white'
                            }`}
                        >
                            <span>{service.title}</span>
                            <ChevronRightIcon />
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

const ServiceDetails = () => {
    const { serviceId } = useParams<{ serviceId: string }>();
    const service = servicesData.find(s => s.id === serviceId);

    // The page component should handle the not found case.
    if (!service) {
        return null;
    }

    return (
        <section className="py-24">
            <div className="container mx-auto px-4">
                <div className="grid lg:grid-cols-3 gap-12">
                    <div className="lg:col-span-2">
                        <img src={service.image} alt={service.title} className="rounded-lg mb-8 w-full"/>
                        <h2 className="text-4xl font-bold font-exo mb-4">{service.title}</h2>
                        {service.longDescription.map((paragraph, index) => (
                            <p key={index} className={`mb-6 ${index === 0 ? 'text-lg' : ''}`}>{paragraph}</p>
                        ))}
                        
                        <div className="grid md:grid-cols-2 gap-8 mb-8">
                            <div>
                                <h3 className="text-2xl font-bold font-exo mb-4">Our Approach</h3>
                                <p>{service.approach}</p>
                            </div>
                             <div>
                                <h3 className="text-2xl font-bold font-exo mb-4">Key Benefits</h3>
                                <ul className="space-y-3">
                                    {service.keyBenefits.map((benefit, index) => (
                                         <li key={index} className="flex items-center"><CheckIcon /><span className="ml-2 text-dark-blue font-semibold">{benefit}</span></li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div>
                        <ServiceSidebar activeServiceId={service.id} />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ServiceDetails;
