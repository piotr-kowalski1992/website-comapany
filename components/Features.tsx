import React from 'react';

const FeatureCard = ({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) => (
    <div className="bg-[#1a1f2e] group p-8 rounded-lg shadow-lg hover:bg-orange-500 transition-all duration-300 transform hover:-translate-y-2 border border-gray-800">
        <div className="text-orange-500 group-hover:text-white mb-4">{icon}</div>
        <h3 className="text-2xl font-bold mb-3 group-hover:text-white text-white">{title}</h3>
        <p className="group-hover:text-white/80 text-gray-400">{description}</p>
    </div>
);

const Features = () => {
    const featureData = [
        { title: 'Strategic Planning', description: 'Quickly pursue granular interfaces with cross-platform solutions.' },
        { title: 'Business Development', description: 'Compellingly actualize multifunctional growth potentialities.' },
        { title: 'Management Consulting', description: 'Dramatically enable progressive schemas via innovative strategies.' },
    ];
    
    const iconStyle = {width: "60px", height: "60px"};

    return (
        <section className="py-24 bg-[#0a0e1a]">
            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <FeatureCard icon={<svg style={iconStyle} viewBox="0 0 24 24"><path fill="currentColor" d="M4,7V19H20V7H4M13,9H15V11H13V9M13,12H15V14H13V12M9,9H11V11H9V9M9,12H11V14H9V12M5,9H7V11H5V9M5,12H7V14H5V12M17,9H19V11H17V9M17,12H19V14H17V12M8,18H6V16H8V18M12,18H10V16H12V18M16,18H14V16H16V18M3,21H21V5H3V21M5,3H19V1H5V3Z" /></svg>} title={featureData[0].title} description={featureData[0].description} />
                    <FeatureCard icon={<svg style={iconStyle} viewBox="0 0 24 24"><path fill="currentColor" d="M12,1L3,5V11C3,16.55 6.84,21.74 12,23C17.16,21.74 21,16.55 21,11V5L12,1M12,7C13.4,7 14.8,8.1 14.8,9.5C14.8,10.9 13.4,12 12,12C10.6,12 9.2,10.9 9.2,9.5C9.2,8.1 10.6,7 12,7M17,17H7V15.8C7,13.8 12,12.9 12,12.9C12,12.9 17,13.8 17,15.8V17Z" /></svg>} title={featureData[1].title} description={featureData[1].description} />
                    <FeatureCard icon={<svg style={iconStyle} viewBox="0 0 24 24"><path fill="currentColor" d="M6.5,20Q4.22,20 2.61,18.43Q1,16.85 1,14.58Q1,12.62 2.08,11.1Q3.15,9.57 5.25,9.15Q5.88,6.85 7.75,5.43Q9.63,4 12,4Q14.93,4 16.96,6.04Q19,8.07 19,11Q20.73,11.2 21.86,12.5Q23,13.78 23,15.5Q23,17.38 21.69,18.69Q20.38,20 18.5,20Z" /></svg>} title={featureData[2].title} description={featureData[2].description} />
                </div>
            </div>
        </section>
    );
};

export default Features;
