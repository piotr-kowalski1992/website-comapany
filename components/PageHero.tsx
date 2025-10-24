import React from 'react';
import { Link } from 'react-router-dom';

interface Breadcrumb {
    name: string;
    path?: string;
}

interface PageHeroProps {
    title: string;
    breadcrumbs: Breadcrumb[];
}

const PageHero: React.FC<PageHeroProps> = ({ title, breadcrumbs }) => {
    return (
        <section className="relative bg-cover bg-center py-32 text-white" style={{ backgroundImage: "url('/assets/images/bdrc-bg.jpg')" }}>
            <div className="absolute inset-0 bg-[#0a0e1a] opacity-90"></div>
            <div className="container mx-auto px-4 relative z-10 text-center">
                <h1 className="text-5xl font-extrabold font-exo text-white mb-4 uppercase">{title}</h1>
                <div className="flex justify-center items-center space-x-2 text-lg">
                    {breadcrumbs.map((crumb, index) => (
                        <React.Fragment key={index}>
                            {crumb.path ? (
                                <Link to={crumb.path} className="hover:text-orange-500">{crumb.name}</Link>
                            ) : (
                                <span className="text-orange-500">{crumb.name}</span>
                            )}
                            {index < breadcrumbs.length - 1 && <span>/</span>}
                        </React.Fragment>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PageHero;
