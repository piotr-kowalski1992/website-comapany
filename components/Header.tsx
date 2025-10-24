import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [openDropdown, setOpenDropdown] = useState<string | null>(null);

    const navLinks = [
        { name: 'Home', href: '/' },
        { 
            name: 'Services', 
            href: '/services',
            children: [
                { name: 'Services', href: '/services' },
                { name: 'Service Details', href: '/service-details/web-development' },
            ]
        },
        { name: 'About Us', href: '/about' },
        { name: 'Projects', href: '/projects' },
        { 
            name: 'Blog', 
            href: '/blog'
        },
        { name: 'Contact', href: '/contact' },
    ];

    const handleMobileDropdown = (name: string) => {
        setOpenDropdown(openDropdown === name ? null : name);
    };

    return (
        <header className="bg-[#0a0e1a] border-b border-gray-800 font-exo fixed top-0 left-0 right-0 z-50">
            {/* Main Navigation */}
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-center py-4">
                    <Link to="/" className="text-2xl font-bold text-white uppercase tracking-wider">
                        Ignition <span className="text-orange-500">Consulting</span>
                    </Link>
                    <nav className="hidden lg:flex items-center space-x-8">
                        {navLinks.map((link) => (
                            <div key={link.name} className="relative group">
                                <Link to={link.href} className="text-gray-300 font-semibold hover:text-orange-500 transition-colors flex items-center uppercase text-sm">
                                    {link.name}
                                    {link.children && (
                                        <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
                                    )}
                                </Link>
                                {link.children && (
                                    <div className="absolute top-full left-0 mt-2 w-48 bg-[#1a1f2e] rounded-md shadow-lg py-2 opacity-0 group-hover:opacity-100 transform -translate-y-2 group-hover:translate-y-0 transition-all duration-300 invisible group-hover:visible z-10 border border-gray-800">
                                        {link.children.map(child => (
                                            <Link key={child.name} to={child.href} className="block px-4 py-2 text-gray-300 hover:bg-gray-800 hover:text-orange-500">
                                                {child.name}
                                            </Link>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}
                    </nav>
                    <div className="hidden lg:flex items-center space-x-4">
                         <Link to="/contact#get-a-quote" className="bg-orange-500 text-white font-bold py-3 px-6 rounded-md hover:bg-orange-600 transition-all duration-300 uppercase text-sm">Connect</Link>
                    </div>
                    <div className="lg:hidden">
                        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-300">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <div className={`lg:hidden bg-[#1a1f2e] py-4 transition-all duration-300 ${isMenuOpen ? 'block' : 'hidden'}`}>
                <nav className="flex flex-col px-4">
                     {navLinks.map((link) => (
                        <div key={link.name} className="py-2 border-b border-gray-800">
                            {link.children ? (
                                <>
                                    <button onClick={() => handleMobileDropdown(link.name)} className="w-full text-left font-semibold text-gray-300 flex justify-between items-center uppercase text-sm">
                                        {link.name}
                                        <svg className={`w-4 h-4 transform transition-transform ${openDropdown === link.name ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
                                    </button>
                                    <div className={`pl-4 pt-2 overflow-hidden transition-all duration-300 ${openDropdown === link.name ? 'max-h-40' : 'max-h-0'}`}>
                                        {link.children.map(child => (
                                             <Link key={child.name} to={child.href} onClick={() => setIsMenuOpen(false)} className="block py-2 text-gray-400 hover:text-orange-500 transition-colors">{child.name}</Link>
                                        ))}
                                    </div>
                                </>
                            ) : (
                                <Link to={link.href} onClick={() => setIsMenuOpen(false)} className="font-semibold text-gray-300 hover:text-orange-500 transition-colors uppercase text-sm">{link.name}</Link>
                            )}
                        </div>
                    ))}
                    <div className="mt-4 px-4">
                        <Link to="/contact#get-a-quote" onClick={() => setIsMenuOpen(false)} className="bg-orange-500 text-white font-bold py-3 px-6 rounded-md hover:bg-orange-600 transition-all duration-300 w-full block text-center uppercase text-sm">Connect</Link>
                    </div>
                </nav>
            </div>
        </header>
    );
};

export default Header;