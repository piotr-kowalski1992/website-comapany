import React from 'react';
import { FacebookIcon, TwitterIcon, LinkedinIcon } from './icons';

const teamMembers = [
    { name: 'Piotr Kowalski', role: 'Chief Executive Officer', img: '/assets/images/WhatsApp Piotrc.jpg' },
    { name: 'Tomasz Woźniak', role: 'Senior Developer', img: '/assets/images/WhatsApp Tomasz.jpg' },
];

const SocialLink = ({ href, children }: { href: string, children: React.ReactNode }) => (
    <a href={href} className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center hover:bg-secondary transition-colors">
        {children}
    </a>
);

const TeamMemberCard = ({ name, role, img }: { name: string, role: string, img: string }) => (
    <div className="group text-center">
        <div className="relative overflow-hidden rounded-lg h-80">
            <img src={img} alt={name} className="w-full h-full object-cover"/>
            <div className="absolute inset-0 bg-dark-blue bg-opacity-0 group-hover:bg-opacity-60 transition-all duration-300 flex items-center justify-center">
                <div className="flex space-x-2 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                    <SocialLink href="#"><FacebookIcon /></SocialLink>
                    <SocialLink href="#"><TwitterIcon /></SocialLink>
                    <SocialLink href="#"><LinkedinIcon /></SocialLink>
                </div>
            </div>
        </div>
        <div className="mt-4">
            <h3 className="text-xl font-bold text-dark-blue">{name}</h3>
            <p className="text-primary">{role}</p>
        </div>
    </div>
);

const Team = () => {
    return (
        <section className="py-24 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-2xl mx-auto mb-12">
                    <span className="text-primary font-bold">OUR TEAM</span>
                    <h2 className="text-4xl font-bold font-exo my-4">Best Expert Team</h2>
                </div>
                <div className="grid sm:grid-cols-2 gap-8 max-w-3xl mx-auto">
                    {teamMembers.map((member, index) => (
                        <TeamMemberCard key={index} {...member} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Team;
