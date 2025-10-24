import React from 'react';
import SEO from '../components/SEO';
import Hero from '../components/Hero';
import Features from '../components/Features';
import AboutUs from '../components/AboutUs';
import Services from '../components/Services';
import ChooseUs from '../components/ChooseUs';
import Projects from '../components/Projects';
import Counter from '../components/Counter';
import Testimonials from '../components/Testimonials';
import Blog from '../components/Blog';
import Brands from '../components/Brands';

const HomePage = () => {
    return (
        <>
            <SEO 
                title="Ignition Consulting Group LLC - Leading Business Consulting & Strategic Solutions"
                description="Transform your business with Ignition Consulting Group LLC's expert consulting services. We specialize in strategic planning, business development, and organizational transformation. Get a free consultation today!"
                keywords="business consulting, strategic planning, management consulting, business development, organizational transformation, consulting services, business strategy, corporate consulting, growth strategy"
                canonical="https://ignitioncg.com/"
            />
            <Hero />
            <Features />
            <AboutUs />
            <Services />
            <ChooseUs />
            <Projects />
            <Counter />
            <Testimonials />
            <Blog />
            <Brands />
        </>
    );
};

export default HomePage;
