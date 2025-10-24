import React, { useState } from 'react';

const AccordionItem = ({ title, content, isOpen, onClick }: { title: string, content: string, isOpen: boolean, onClick: () => void }) => (
    <div className="border-b border-gray-700">
        <button className="w-full text-left py-4 px-2 flex justify-between items-center" onClick={onClick}>
            <span className={`font-semibold text-lg ${isOpen ? 'text-orange-500' : 'text-white'}`}>{title}</span>
            <span className={`transform transition-transform ${isOpen ? 'rotate-180' : ''} text-gray-400`}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
            </span>
        </button>
        {isOpen && <div className="pb-4 px-2 text-gray-400">{content}</div>}
    </div>
);


const ChooseUs = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const handleToggle = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const accordionData = [
        { title: 'Strategic Business Planning', content: 'Globally foster emerging imperatives through extensible intellectual capital. Collaboratively pursue resource-leveling sources and leverage.' },
        { title: 'Best Quality Consulting', content: 'Credibly grow premier ideas rather than ubiquitous leadership. Compellingly syndicate team building technologies rather than B2C solutions.' },
        { title: '24/7 Support Team', content: 'Quickly pursue granular interfaces with cross-platform. Compellingly actualize multifunctional potentialities.' },
    ];

    // @ts-ignore
    return (
        <section className="py-24 bg-[#1a1f2e]">
            <div className="container mx-auto px-4">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div>
                        <span className="text-orange-500 font-bold uppercase">Why Choose Us</span>
                        <h2 className="text-4xl font-bold font-exo my-4 text-white">We Provide Truly Prominent Business Solutions</h2>
                        <p className="mb-8 text-gray-400">
                           Completely scale friction less platforms rather than visionary systems. Rapidiously predominate 24/365 products via cooperative manufactured products.
                        </p>
                        <div>
                            {accordionData.map((item, index) => (
                                <AccordionItem
                                    //key={index}
                                    title={item.title}
                                    content={item.content}
                                    isOpen={openIndex === index}
                                    onClick={() => handleToggle(index)}
                                />
                            ))}
                        </div>
                    </div>
                    <div className="relative h-full min-h-[400px]">
                       <img src="/assets/images/thumb1.png" alt="Business Professional" className="rounded-lg shadow-lg w-full h-full object-cover"/>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ChooseUs;
