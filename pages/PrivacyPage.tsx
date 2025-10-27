import React from 'react';
import SEO from '../components/SEO';
import PageHero from '../components/PageHero';

const PrivacyPage = () => {
    return (
        <>
            <SEO
                title="Privacy Policy - Ignition Consulting Group LLC"
                description="Privacy Policy for Ignition Consulting Group LLC. Learn how we collect, use, and protect your personal information."
                keywords="privacy policy, data protection, personal information, privacy rights"
            />
            <PageHero title="Privacy Policy" breadcrumbs={[{ name: 'Home', path: '/' }, { name: 'Privacy Policy' }]} />

            <section className="py-24 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <div className="prose prose-lg max-w-none">
                            <p className="text-gray-600 mb-8">
                                <strong>Last Updated:</strong> October 25, 2025
                            </p>

                            <h2 className="text-3xl font-bold font-exo text-gray-900 mt-12 mb-4">1. Introduction</h2>
                            <p className="text-gray-600 mb-6">
                                Ignition Consulting Group LLC ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our IT consulting and business solutions services.
                            </p>

                            <h2 className="text-3xl font-bold font-exo text-gray-900 mt-12 mb-4">2. Information We Collect</h2>
                            <h3 className="text-2xl font-bold text-gray-800 mt-8 mb-3">2.1 Personal Information</h3>
                            <p className="text-gray-600 mb-4">We may collect personal information that you voluntarily provide to us when you:</p>
                            <ul className="list-disc pl-6 mb-6 text-gray-600">
                                <li>Register on our website</li>
                                <li>Contact us via email or contact forms</li>
                                <li>Subscribe to our newsletter</li>
                                <li>Request information about our services</li>
                                <li>Participate in surveys or promotions</li>
                            </ul>
                            <p className="text-gray-600 mb-6">
                                This information may include: name, email address, phone number, company name, job title, and any other information you choose to provide.
                            </p>

                            <h3 className="text-2xl font-bold text-gray-800 mt-8 mb-3">2.2 Automatically Collected Information</h3>
                            <p className="text-gray-600 mb-4">When you visit our website, we automatically collect certain information about your device, including:</p>
                            <ul className="list-disc pl-6 mb-6 text-gray-600">
                                <li>IP address</li>
                                <li>Browser type and version</li>
                                <li>Operating system</li>
                                <li>Pages visited and time spent on pages</li>
                                <li>Referring website addresses</li>
                                <li>Device identifiers</li>
                            </ul>

                            <h2 className="text-3xl font-bold font-exo text-gray-900 mt-12 mb-4">3. How We Use Your Information</h2>
                            <p className="text-gray-600 mb-4">We use the information we collect to:</p>
                            <ul className="list-disc pl-6 mb-6 text-gray-600">
                                <li>Provide, maintain, and improve our services</li>
                                <li>Respond to your inquiries and provide customer support</li>
                                <li>Send you marketing communications (with your consent)</li>
                                <li>Process transactions and send related information</li>
                                <li>Monitor and analyze usage patterns and trends</li>
                                <li>Detect, prevent, and address technical issues and security threats</li>
                                <li>Comply with legal obligations</li>
                            </ul>

                            <h2 className="text-3xl font-bold font-exo text-gray-900 mt-12 mb-4">4. Information Sharing and Disclosure</h2>
                            <p className="text-gray-600 mb-6">
                                We do not sell, trade, or rent your personal information to third parties. We may share your information in the following circumstances:
                            </p>
                            <ul className="list-disc pl-6 mb-6 text-gray-600">
                                <li><strong>Service Providers:</strong> With third-party vendors who perform services on our behalf</li>
                                <li><strong>Legal Requirements:</strong> When required by law or to protect our rights</li>
                                <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets</li>
                                <li><strong>With Your Consent:</strong> When you have given us explicit permission</li>
                            </ul>

                            <h2 className="text-3xl font-bold font-exo text-gray-900 mt-12 mb-4">5. Data Security</h2>
                            <p className="text-gray-600 mb-6">
                                We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet or electronic storage is 100% secure.
                            </p>

                            <h2 className="text-3xl font-bold font-exo text-gray-900 mt-12 mb-4">6. Cookies and Tracking Technologies</h2>
                            <p className="text-gray-600 mb-6">
                                We use cookies and similar tracking technologies to track activity on our website and hold certain information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.
                            </p>

                            <h2 className="text-3xl font-bold font-exo text-gray-900 mt-12 mb-4">7. Your Privacy Rights</h2>
                            <p className="text-gray-600 mb-4">Depending on your location, you may have the following rights:</p>
                            <ul className="list-disc pl-6 mb-6 text-gray-600">
                                <li>Access to your personal information</li>
                                <li>Correction of inaccurate data</li>
                                <li>Deletion of your personal information</li>
                                <li>Opt-out of marketing communications</li>
                                <li>Data portability</li>
                                <li>Restriction of processing</li>
                            </ul>

                            <h2 className="text-3xl font-bold font-exo text-gray-900 mt-12 mb-4">8. Children's Privacy</h2>
                            <p className="text-gray-600 mb-6">
                                Our services are not directed to children under 13 years of age. We do not knowingly collect personal information from children under 13. If we learn that we have collected such information, we will take steps to delete it.
                            </p>

                            <h2 className="text-3xl font-bold font-exo text-gray-900 mt-12 mb-4">9. International Data Transfers</h2>
                            <p className="text-gray-600 mb-6">
                                Your information may be transferred to and maintained on computers located outside of your state, province, country, or other governmental jurisdiction where data protection laws may differ.
                            </p>

                            <h2 className="text-3xl font-bold font-exo text-gray-900 mt-12 mb-4">10. Changes to This Privacy Policy</h2>
                            <p className="text-gray-600 mb-6">
                                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date.
                            </p>

                            <h2 className="text-3xl font-bold font-exo text-gray-900 mt-12 mb-4">11. Contact Us</h2>
                            <p className="text-gray-600 mb-4">
                                If you have any questions about this Privacy Policy, please contact us:
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

export default PrivacyPage;