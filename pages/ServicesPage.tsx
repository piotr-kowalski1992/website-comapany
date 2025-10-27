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
                title="IT Consulting & Business Solutions Services | Ignition Consulting Group LLC"
                description="Explore Ignition Consulting Group LLC's comprehensive IT consulting and business solutions including strategic planning, digital transformation, IT management, data security, and business reform. Get expert consultation today!"
                keywords="IT consulting services, business solutions, strategic planning, digital transformation, IT management, data security, business reform, consulting services"
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