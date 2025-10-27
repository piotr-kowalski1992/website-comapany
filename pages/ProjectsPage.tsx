import React from 'react';
import SEO from '../components/SEO';
import PageHero from '../components/PageHero';
import Projects from '../components/Projects';
import Testimonials from '../components/Testimonials';
import Brands from '../components/Brands';

const ProjectsPage = () => {
    return (
        <>
            <SEO 
                title="Our Business Solutions Portfolio - Successful Projects by Ignition Consulting Group LLC"
                description="Explore Ignition Consulting Group LLC's portfolio of successful IT consulting and business transformation projects. See our expertise across various industries and client success stories."
                keywords="business portfolio, consulting projects, IT solutions portfolio, success stories, business solutions, client projects"
                canonical="https://ignitioncg.com/projects"
            />
            <PageHero title="Our Projects" breadcrumbs={[{ name: 'Home', path: '/' }, { name: 'Projects' }]} />
            <Projects />
            <Testimonials />
            <Brands />
        </>
    );
};

export default ProjectsPage;
