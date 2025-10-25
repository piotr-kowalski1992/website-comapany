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
                title="Game Development Services - Game Design & Production | Ignition Consulting Group LLC"
                description="Explore Ignition Consulting Group LLC's comprehensive game development services including game design, mobile games, 3D modeling, multiplayer systems, and game production. Get expert consultation today!"
                keywords="game development services, game design, mobile game development, 3D modeling, multiplayer games, game production, gaming solutions"
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