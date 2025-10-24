import React from 'react';
import { LocationIcon, ClockIcon, MailIconV2 } from './icons';

// FIX: The type for the icon prop was too generic for React.cloneElement.
// It is now specified to accept a className prop, which resolves the TypeScript error.
const InfoCard = ({ icon, title, line1, line2 }: { icon: React.ReactElement<{ className?: string }>, title: string, line1: string, line2?: string }) => (
    <div className="text-center text-white">
        <div className="w-24 h-24 bg-secondary rounded-full flex items-center justify-center mx-auto mb-6">
            {React.cloneElement(icon, { className: "h-10 w-10 text-white" })}
        </div>
        <h3 className="text-2xl font-bold font-exo mb-2">{title}</h3>
        <p>{line1}</p>
        {line2 && <p>{line2}</p>}
    </div>
);

const ContactInfo = () => {
    const contactData = [
        {
            icon: <LocationIcon />,
            title: 'Office Address',
            line1: '30 N Gould St Ste R',
            line2: 'Sheridan, WY 82801'
        },
        {
            icon: <ClockIcon />,
            title: 'Working Hours',
            line1: 'Monday to Friday 09:00 to 18:00',
            line2: 'Saturday 10:00 to 15:00'
        },
        {
            icon: <MailIconV2 />,
            title: 'Message Us',
            line1: 'info@ignitioncg.com',
            line2: 'contact@ignitioncg.com'
        },
    ];

    return (
        <section className="bg-[#1a1f2e] py-24 border-t border-b border-gray-800">
            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-3 gap-12">
                    {contactData.map((item) => (
                        <InfoCard 
                            //key={index} 
                                  {...item} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ContactInfo;