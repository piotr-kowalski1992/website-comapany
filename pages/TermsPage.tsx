import React from 'react';
import SEO from '../components/SEO';
import PageHero from '../components/PageHero';

const TermsPage = () => {
    return (
        <>
            <SEO 
                title="Terms of Use - Ignition Consulting Group LLC"
                description="Terms of Use for Ignition Consulting Group LLC. Read our terms and conditions for using our website and services."
                keywords="terms of use, terms and conditions, legal agreement, website terms"
            />
            <PageHero title="Terms of Use" breadcrumbs={[{ name: 'Home', path: '/' }, { name: 'Terms of Use' }]} />
            
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <div className="prose prose-lg max-w-none">
                            <p className="text-gray-600 mb-8">
                                <strong>Last Updated:</strong> October 25, 2025
                            </p>

                            <h2 className="text-3xl font-bold font-exo text-gray-900 mt-12 mb-4">1. Acceptance of Terms</h2>
                            <p className="text-gray-600 mb-6">
                                Welcome to Ignition Consulting Group LLC. By accessing or using our website and services, you agree to be bound by these Terms of Use ("Terms"). If you do not agree to these Terms, please do not use our website or services.
                            </p>

                            <h2 className="text-3xl font-bold font-exo text-gray-900 mt-12 mb-4">2. Description of Services</h2>
                            <p className="text-gray-600 mb-6">
                                Ignition Consulting Group LLC provides game development services, including but not limited to game design, development, consulting, and related technology solutions. We reserve the right to modify, suspend, or discontinue any aspect of our services at any time.
                            </p>

                            <h2 className="text-3xl font-bold font-exo text-gray-900 mt-12 mb-4">3. User Accounts and Registration</h2>
                            <p className="text-gray-600 mb-4">To access certain features of our services, you may be required to register for an account. You agree to:</p>
                            <ul className="list-disc pl-6 mb-6 text-gray-600">
                                <li>Provide accurate, current, and complete information</li>
                                <li>Maintain and promptly update your account information</li>
                                <li>Maintain the security of your password and account</li>
                                <li>Accept responsibility for all activities under your account</li>
                                <li>Notify us immediately of any unauthorized use</li>
                            </ul>

                            <h2 className="text-3xl font-bold font-exo text-gray-900 mt-12 mb-4">4. Intellectual Property Rights</h2>
                            <h3 className="text-2xl font-bold text-gray-800 mt-8 mb-3">4.1 Our Content</h3>
                            <p className="text-gray-600 mb-6">
                                All content on our website, including text, graphics, logos, images, software, and other materials, is the property of Ignition Consulting Group LLC or its licensors and is protected by copyright, trademark, and other intellectual property laws.
                            </p>
                            <h3 className="text-2xl font-bold text-gray-800 mt-8 mb-3">4.2 Your Content</h3>
                            <p className="text-gray-600 mb-6">
                                By submitting content to us, you grant us a worldwide, non-exclusive, royalty-free license to use, reproduce, modify, and display such content in connection with our services.
                            </p>

                            <h2 className="text-3xl font-bold font-exo text-gray-900 mt-12 mb-4">5. Prohibited Uses</h2>
                            <p className="text-gray-600 mb-4">You agree not to:</p>
                            <ul className="list-disc pl-6 mb-6 text-gray-600">
                                <li>Use our services for any illegal or unauthorized purpose</li>
                                <li>Violate any laws or regulations</li>
                                <li>Infringe upon intellectual property rights</li>
                                <li>Transmit viruses, malware, or other harmful code</li>
                                <li>Attempt to gain unauthorized access to our systems</li>
                                <li>Interfere with or disrupt our services</li>
                                <li>Collect or harvest user information</li>
                                <li>Impersonate any person or entity</li>
                                <li>Engage in any fraudulent activity</li>
                            </ul>

                            <h2 className="text-3xl font-bold font-exo text-gray-900 mt-12 mb-4">6. Service Agreements and Projects</h2>
                            <p className="text-gray-600 mb-6">
                                Specific game development projects and consulting engagements will be governed by separate written agreements. These Terms apply to general website use and are supplemented by project-specific terms.
                            </p>

                            <h2 className="text-3xl font-bold font-exo text-gray-900 mt-12 mb-4">7. Payment and Fees</h2>
                            <p className="text-gray-600 mb-6">
                                Payment terms for our services will be specified in individual service agreements. All fees are non-refundable unless otherwise stated in writing. We reserve the right to change our pricing at any time.
                            </p>

                            <h2 className="text-3xl font-bold font-exo text-gray-900 mt-12 mb-4">8. Disclaimers and Warranties</h2>
                            <p className="text-gray-600 mb-6">
                                OUR SERVICES ARE PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED. WE DO NOT WARRANT THAT OUR SERVICES WILL BE UNINTERRUPTED, SECURE, OR ERROR-FREE.
                            </p>

                            <h2 className="text-3xl font-bold font-exo text-gray-900 mt-12 mb-4">9. Limitation of Liability</h2>
                            <p className="text-gray-600 mb-6">
                                TO THE MAXIMUM EXTENT PERMITTED BY LAW, IGNITION CONSULTING GROUP LLC SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING LOST PROFITS, DATA LOSS, OR BUSINESS INTERRUPTION.
                            </p>

                            <h2 className="text-3xl font-bold font-exo text-gray-900 mt-12 mb-4">10. Indemnification</h2>
                            <p className="text-gray-600 mb-6">
                                You agree to indemnify and hold harmless Ignition Consulting Group LLC and its officers, directors, employees, and agents from any claims, damages, losses, or expenses arising from your use of our services or violation of these Terms.
                            </p>

                            <h2 className="text-3xl font-bold font-exo text-gray-900 mt-12 mb-4">11. Third-Party Links</h2>
                            <p className="text-gray-600 mb-6">
                                Our website may contain links to third-party websites. We are not responsible for the content, privacy practices, or terms of use of any third-party sites.
                            </p>

                            <h2 className="text-3xl font-bold font-exo text-gray-900 mt-12 mb-4">12. Termination</h2>
                            <p className="text-gray-600 mb-6">
                                We reserve the right to terminate or suspend your access to our services at any time, without notice, for conduct that we believe violates these Terms or is harmful to other users, us, or third parties.
                            </p>

                            <h2 className="text-3xl font-bold font-exo text-gray-900 mt-12 mb-4">13. Governing Law and Dispute Resolution</h2>
                            <p className="text-gray-600 mb-6">
                                These Terms shall be governed by the laws of the State of Wyoming, United States, without regard to its conflict of law provisions. Any disputes shall be resolved in the courts located in Sheridan County, Wyoming.
                            </p>

                            <h2 className="text-3xl font-bold font-exo text-gray-900 mt-12 mb-4">14. Changes to Terms</h2>
                            <p className="text-gray-600 mb-6">
                                We reserve the right to modify these Terms at any time. Changes will be effective immediately upon posting on our website. Your continued use of our services after changes constitutes acceptance of the modified Terms.
                            </p>

                            <h2 className="text-3xl font-bold font-exo text-gray-900 mt-12 mb-4">15. Severability</h2>
                            <p className="text-gray-600 mb-6">
                                If any provision of these Terms is found to be unenforceable, the remaining provisions will continue in full force and effect.
                            </p>

                            <h2 className="text-3xl font-bold font-exo text-gray-900 mt-12 mb-4">16. Entire Agreement</h2>
                            <p className="text-gray-600 mb-6">
                                These Terms constitute the entire agreement between you and Ignition Consulting Group LLC regarding the use of our website and services.
                            </p>

                            <h2 className="text-3xl font-bold font-exo text-gray-900 mt-12 mb-4">17. Contact Information</h2>
                            <p className="text-gray-600 mb-4">
                                For questions about these Terms, please contact us:
                            </p>
                            <ul className="list-none mb-6 text-gray-600">
                                <li><strong>Email:</strong> office@ignitionglobal.net</li>
                                <li><strong>Phone:</strong> +1 (940) 625-7018</li>
                                <li><strong>Address:</strong> 30 N Gould St Ste R, Sheridan, WY 82801</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default TermsPage;
