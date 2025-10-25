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
                title="Ignition Consulting Group LLC - Leading Game Development & Gaming Solutions"
                description="Transform your gaming vision with Ignition Consulting Group LLC's expert game development services. We specialize in game design, mobile games, and immersive gaming experiences. Get a free consultation today!"
                keywords="game development, game design, gaming solutions, mobile games, game production, indie games, gaming technology, game studio, interactive games"
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
