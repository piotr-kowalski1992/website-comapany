import React from 'react';
import SEO from '../components/SEO';
import PageHero from '../components/PageHero';
import AboutUs from '../components/AboutUs';
import Team from '../components/Team';
import FAQ from '../components/FAQ';
import Counter from '../components/Counter';
import Brands from '../components/Brands';

const AboutPage = () => {
    return (
        <>
            <SEO 
                title="About Ignition Consulting Group LLC - Expert Consulting Team & Company History"
                description="Learn about Ignition Consulting Group LLC's expert team, company history, and mission to deliver innovative business consulting solutions. Discover our values, expertise, and commitment to excellence."
                keywords="about us, consulting team, business consulting company, management consultants, strategic advisors, company history, consulting expertise"
                canonical="https://ignitioncg.com/about"
            />
            <PageHero title="About Us" breadcrumbs={[{ name: 'Home', path: '/' }, { name: 'About Us' }]} />
            <AboutUs />
            <Team />
            <FAQ />
            <Counter />
            <Brands />
        </>
    );
};

export default AboutPage;
