import React from 'react';
import { useParams } from 'react-router-dom';
import SEO from '../components/SEO';
import PageHero from '../components/PageHero';
import ServiceDetails from '../components/ServiceDetails';
import Brands from '../components/Brands';
import { servicesData } from '../data/servicesData';

const ServiceDetailsPage = () => {
    const { serviceId } = useParams<{ serviceId: string }>();
    const service = servicesData.find(s => s.id === serviceId);

    if (!service) {
        return (
            <>
                <SEO 
                    title="Service Not Found | Ignition Consulting Group LLC"
                    description="The service you are looking for does not exist. Explore our other game development services including game design and mobile games."
                    canonical="https://ignitioncg.com/services"
                    noindex={true}
                />
                <div className="py-40 text-center bg-gray-50">
                    <div className="container mx-auto px-4">
                        <h1 className="text-5xl font-extrabold font-exo text-dark-blue mb-4">Service Not Found</h1>
                        <p className="text-lg text-body-color">The service you are looking for does not exist or has been moved.</p>
                    </div>
                </div>
            </>
        );
    }

    return (
        <>
            <SEO 
                title={`${service.title} Services - Expert Solutions | Ignition Consulting Group LLC`}
                description={`${service.description} Get professional ${service.title.toLowerCase()} services from Ignition Consulting Group LLC. Expert team, proven results, and cutting-edge gaming solutions.`}
                keywords={`${service.title.toLowerCase()}, ${service.title.toLowerCase()} services, game development, gaming solutions, game design`}
                canonical={`https://ignitioncg.com/service-details/${serviceId}`}
            />
            <PageHero 
                title={service.title} 
                breadcrumbs={[
                    { name: 'Home', path: '/' }, 
                    { name: 'Services', path: '/services' }, 
                    { name: service.title }
                ]} 
            />
            <ServiceDetails />
            <Brands />
        </>
    );
};

export default ServiceDetailsPage;
