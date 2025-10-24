import React from 'react';
import SEO from '../components/SEO';
import PageHero from '../components/PageHero';
import Services from '../components/Services';
import ChooseUs from '../components/ChooseUs';
import Brands from '../components/Brands';

const ServicesPage = () => {
    return (
        <>
            <SEO 
                title="Business Consulting Services - Strategic Planning & Development | Ignition Consulting Group LLC"
                description="Explore Ignition Consulting Group LLC's comprehensive business consulting services including strategic planning, business development, organizational transformation, and management consulting. Get expert consultation today!"
                keywords="business consulting services, strategic planning, management consulting, business development, organizational transformation, consulting solutions, business strategy services"
                canonical="https://ignitioncg.com/services"
            />
            <PageHero title="Our Services" breadcrumbs={[{ name: 'Home', path: '/' }, { name: 'Services' }]} />
            <Services />
            <ChooseUs />
            <Brands />
        </>
    );
};

export default ServicesPage;