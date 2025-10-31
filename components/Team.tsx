import React from 'react';

const Team = () => {
    return (
        <section className="py-24">
            <div className="container mx-auto px-4">
                <div className="text-center mb-8">
                    <span className="text-blue-500 font-bold uppercase text-sm tracking-wider">MESSAGE FROM OUR CEO</span>
                    <h2 className="text-4xl font-bold font-exo mt-4 text-white">Leadership & Vision</h2>
                </div>
                
                <div className="max-w-6xl mx-auto bg-[#1a1f2e] rounded-lg shadow-lg overflow-hidden">
                    <div className="grid md:grid-cols-[400px,1fr] gap-8 p-8 md:p-12">
                        {/* CEO Image */}
                        <div className="flex flex-col items-center">
                            <div className="w-full max-w-[350px] mb-6">
                                <img 
                                    src="/assets/images/CEO.jpg"
                                    alt="Piotr Kowalski" 
                                    className="w-full h-auto rounded-lg shadow-md"
                                />
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-1">Piotr Kowalski</h3>
                            <p className="text-blue-600 font-semibold">Founder & CEO, Ignition</p>
                        </div>

                        {/* CEO Message */}
                        <div className="text-white-700 leading-relaxed space-y-4 text-justify">
                            <p>
                                My name is Piotr Kowalski, and I am the founder and CEO of Ignition. With more than 20 years of experience in software development, I've had the privilege of working on a wide range of projects — from small innovative startups to large-scale enterprise systems. Over the years, I have collaborated with talented professionals across Europe, the UK, and North America, building reliable, efficient, and creative digital solutions.
                            </p>
                            <p>
                                Ignition was born out of a simple yet powerful idea — to bring together a team of professionals who share the same passion for technology, innovation, and quality. Each member of our team has a deep technical background and a long history of delivering exceptional results for international clients.
                            </p>
                            <p>
                                Our mission is to transform ideas into digital reality through intelligent design, AI-driven solutions, and cutting-edge technologies. We approach every project with the mindset of long-term partnership — because we believe that true success is built on trust, transparency, and consistent excellence.
                            </p>
                            <p>
                                Although Ignition was officially registered recently, our roots run deep. Our collective experience, professional reputation, and dedication to innovation have been growing for many years.
                            </p>
                            <p>
                                Thank you for your trust and interest in our company. We look forward to continuing our journey — creating technology that inspires, empowers, and connects people around the world.
                            </p>
                            <p className="italic mt-6">
                                With respect,<br />
                                <span className="font-semibold">Piotr Kowalski</span><br />
                                <span className="text-sm">Founder & CEO, Ignition</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Team;
