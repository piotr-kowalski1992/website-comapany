import React from 'react';

const Projects = () => {
    const projectData = [
        { img: '/assets/images/b_details01.jpg', title: 'Business Strategy', category: 'Consulting' },
        { img: '/assets/images/b_details02.jpg', title: 'Digital Transformation', category: 'Consultancy' },
        { img: '/assets/images/blog2.png', title: 'Process Optimization', category: 'Development' },
        { img: '/assets/images/b_details03.jpg', title: 'Market Analysis', category: 'Research' },
        { img: '/assets/images/b_details04.jpg', title: 'Growth Strategy', category: 'Planning' },
        { img: '/assets/images/p_details.png', title: 'Change Management', category: 'Consulting' },
    ];

    return (
        <section className="py-24 bg-[#0a0e1a]">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-2xl mx-auto mb-12">
                    <span className="text-orange-500 font-bold uppercase">Our Latest Projects</span>
                    <h2 className="text-4xl font-bold font-exo my-4 text-white">Explore Our Best Recently Completed Projects</h2>
                </div>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projectData.map((project, index) => (
                         <div key={index} className="relative group overflow-hidden rounded-lg">
                            <img src={project.img} alt={project.title} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500" />
                            <div className="absolute inset-0 bg-[#0a0e1a] bg-opacity-0 group-hover:bg-opacity-70 transition-all duration-500"></div>
                            <div className="absolute bottom-0 left-0 p-6 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                                <span className="text-orange-500 text-sm font-bold uppercase">{project.category}</span>
                                <h3 className="text-white text-2xl font-bold">{project.title}</h3>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
