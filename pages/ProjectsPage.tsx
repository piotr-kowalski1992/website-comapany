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
                title="Our Game Portfolio - Successful Games by Ignition Consulting Group LLC"
                description="Explore Ignition Consulting Group LLC's portfolio of successful game development projects including mobile games, indie games, and innovative gaming experiences. See our work and client success stories."
                keywords="game portfolio, game projects, game development portfolio, success stories, gaming solutions, client games"
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
