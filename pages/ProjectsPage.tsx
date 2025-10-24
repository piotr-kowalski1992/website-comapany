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
                title="Our Projects Portfolio - Successful Business Solutions by Ignition Consulting Group LLC"
                description="Explore Ignition Consulting Group LLC's portfolio of successful business consulting projects including strategic transformations, business development initiatives, and organizational improvements. See our work and client success stories."
                keywords="consulting projects, business transformation portfolio, success stories, case studies, consulting solutions, client results"
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
