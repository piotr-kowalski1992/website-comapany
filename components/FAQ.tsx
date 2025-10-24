import React, { useState } from 'react';

const AccordionItem = ({ title, content, isOpen, onClick }: { title: string, content: string, isOpen: boolean, onClick: () => void }) => (
    <div className="border rounded-md mb-2 overflow-hidden">
        <button className={`w-full text-left py-4 px-5 flex justify-between items-center transition-colors ${isOpen ? 'bg-primary text-white' : 'bg-gray-50 text-dark-blue hover:bg-gray-100'}`} onClick={onClick}>
            <span className="font-semibold text-lg">{title}</span>
            <span className={`transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
            </span>
        </button>
        <div className={`transition-all duration-500 ease-in-out overflow-hidden ${isOpen ? 'max-h-96' : 'max-h-0'}`}>
            <div className="p-5 text-body-color border-t">
                {content}
            </div>
        </div>
    </div>
);

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const handleToggle = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const faqData = [
        { title: 'What kind of IT services do you provide?', content: 'We offer a comprehensive range of IT services, including web development, UI/UX design, IT management, data security, business process reform, and infrastructure management. Our solutions are tailored to meet the unique needs of each client.' },
        { title: 'How do you ensure the security of my data?', content: 'Data security is our top priority. We implement robust security measures, including data encryption, threat prevention protocols, and regular security audits to ensure your data is always protected and compliant with industry standards.' },
        { title: 'What is your process for starting a new project?', content: 'Our process begins with a detailed consultation to understand your goals. We then move to planning, design, development, and testing, keeping you involved at every stage to ensure the final product meets your expectations.' },
        { title: 'Do you offer ongoing support after project completion?', content: 'Yes, we provide ongoing support and maintenance to ensure your systems run smoothly long after the initial project is complete. We offer various support packages to fit your needs, including 24/7 monitoring and helpdesk services.' },
    ];

    return (
        <section className="py-24">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-2xl mx-auto mb-12">
                    <span className="text-primary font-bold">FAQ</span>
                    <h2 className="text-4xl font-bold font-exo my-4">Frequently Asked Question</h2>
                </div>
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div>
                        {faqData.map((item, index) => (
                            <AccordionItem
                                //key={index}
                                title={item.title}
                                content={item.content}
                                isOpen={openIndex === index}
                                onClick={() => handleToggle(index)}
                            />
                        ))}
                    </div>
                    <div>
                       <img src="/assets/images/about_img_02.png" alt="FAQ illustration" className="rounded-lg shadow-lg w-full h-full object-cover"/>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FAQ;