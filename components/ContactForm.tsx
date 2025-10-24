import React, { useState } from 'react';

const InputField = ({ type = 'text', placeholder, name, value, onChange, required = true }: { type?: string, placeholder: string, name: string, value: string, onChange: (e: React.ChangeEvent<HTMLInputElement>) => void, required?: boolean }) => (
    <input
        type={type}
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
    />
);

const ContactForm = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        subject: '',
        comments: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // Here you would typically send the form data to a server or email service.
        // For this example, we'll just log it to the console.
        console.log('Form submitted:', formData);
        alert('Thank you for your message! We will get back to you shortly.');
        setFormData({
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
            subject: '',
            comments: ''
        });
    };

    return (
        <section id="get-a-quote" className="py-24 bg-gray-50/50 scroll-mt-24">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-2xl mx-auto mb-12">
                    <span className="text-primary font-bold">CONTACT FORM</span>
                    <h2 className="text-4xl font-bold font-exo my-4">Get A Quote</h2>
                </div>
                <div className="max-w-4xl mx-auto bg-white p-8 md:p-12 shadow-lg rounded-lg">
                    <form onSubmit={handleSubmit}>
                        <div className="grid md:grid-cols-2 gap-6 mb-6">
                            <InputField placeholder="First Name" name="firstName" value={formData.firstName} onChange={e => handleChange(e as React.ChangeEvent<HTMLInputElement>)} />
                            <InputField placeholder="Last Name" name="lastName" value={formData.lastName} onChange={e => handleChange(e as React.ChangeEvent<HTMLInputElement>)} />
                            <InputField type="email" placeholder="Email" name="email" value={formData.email} onChange={e => handleChange(e as React.ChangeEvent<HTMLInputElement>)} />
                            <InputField type="tel" placeholder="Phone No." name="phone" value={formData.phone} onChange={e => handleChange(e as React.ChangeEvent<HTMLInputElement>)} />
                        </div>
                        <div className="mb-6">
                            <InputField placeholder="Subject" name="subject" value={formData.subject} onChange={e => handleChange(e as React.ChangeEvent<HTMLInputElement>)} />
                        </div>
                        <div className="mb-6">
                            <textarea
                                placeholder="Write comments"
                                name="comments"
                                value={formData.comments}
                                onChange={handleChange}
                                required
                                rows={5}
                                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                            ></textarea>
                        </div>
                        <div className="text-center">
                            <button
                                type="submit"
                                className="bg-primary text-white font-bold py-4 px-12 rounded-md hover:bg-secondary transition-all duration-300"
                            >
                                Submit Now
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default ContactForm;
