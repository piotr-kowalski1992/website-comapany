import React from 'react';
import SEO from '../components/SEO';
import Hero from '../components/Hero';
import Features from '../components/Features';
import AboutUs from '../components/AboutUs';
import Services from '../components/Services';
import ChooseUs from '../components/ChooseUs';
import Testimonials from '../components/Testimonials';
import Brands from '../components/Brands';

const HomePage = () => {
    return (
        <>
            <SEO 
                title="Ignition Consulting Group LLC - IT Consulting & Business Solutions"
                description="Transform your business with Ignition Consulting Group LLC's expert IT consulting and business solutions. We specialize in strategic planning, business development, and management consulting. Get a free consultation today!"
                keywords="IT consulting, business solutions, strategic planning, business development, management consulting, digital transformation, business consulting, IT services"
                canonical="https://ignitioncg.com/"
            />
            <Hero />
            <Features />
            <AboutUs />
            <Services />
            <ChooseUs />
            <Testimonials />
            <Brands />
        </>
    );
};

export default HomePage;
