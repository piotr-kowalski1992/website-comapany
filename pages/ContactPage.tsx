import React, { useEffect, useState } from 'react';
import SEO from '../components/SEO';
import PageHero from '../components/PageHero';
import ContactForm from '../components/ContactForm';
import ContactInfo from '../components/ContactInfo';
import Map from '../components/Map';
import { useLocation } from 'react-router-dom';

const ContactPage = () => {
    const location = useLocation();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
    });

    useEffect(() => {
        if (location.hash) {
            const id = decodeURIComponent(location.hash.replace('#', ''));
            const el = document.getElementById(id);
            if (el) {
                el.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        } else {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    }, [location]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        // Here you would typically send the form data to a server
        alert('Thank you for your message! We will contact you soon.');
        setFormData({
            name: '',
            email: '',
            phone: '',
            subject: '',
            message: ''
        });
    };

    return (
        <>
            <SEO 
                title="Contact Ignition Consulting Group LLC - Get Your Free Consultation & Quote"
                description="Contact Ignition Consulting Group LLC for professional business consulting services. Get a free consultation and quote for strategic planning, business development, and transformation services. Reach out to our expert team today!"
                keywords="contact us, business consulting contact, free consultation, get a quote, consulting services inquiry, business advisory contact"
                canonical="https://ignitioncg.com/contact"
            />
            <PageHero title="Contact Us" breadcrumbs={[{ name: 'Home', path: '/' }, { name: 'Contact Us' }]} />
            <Map />
            <ContactInfo />
            <ContactForm 
                formData={formData}
                handleChange={handleChange}
                handleSubmit={handleSubmit}
            />
        </>
    );
};

export default ContactPage;