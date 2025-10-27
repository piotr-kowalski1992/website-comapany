import React from 'react';
import { Link } from 'react-router-dom';
import { FacebookIcon, TwitterIcon, LinkedinIcon, InstagramIcon, YoutubeIcon, PhoneIconV2, MailIconV2, LocationIcon, ChevronRightIcon, CalendarIcon, ArrowUpIcon } from './icons';

const Footer = () => {
  const quickLinks = [
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Blog', path: '/blog' },
    { name: 'Projects', path: '/projects' },
    { name: 'Contact us', path: '/contact' }
  ];
  
  return (
    <footer className="bg-[#0a0e1a] font-roboto relative border-t border-gray-800">
      {/* Top Contact Bar */}
      <div className="bg-orange-500 text-white">
        <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 items-center">
                 <div className="py-8 lg:py-0">
                    <h3 className="text-3xl font-bold font-exo uppercase">
                        Ignition <span className="text-white">Consulting</span>
                    </h3>
                </div>
                <div className="flex items-center space-x-4 py-4 md:py-8 lg:py-0">
                    <div className="bg-white p-4 rounded-md">
                        <PhoneIconV2 />
                    </div>
                    <div>
                        <p className="font-semibold">Quick Call Us:</p>
                        <p>+1 (940) 625-7018</p>
                    </div>
                </div>
                 <div className="flex items-center space-x-4 py-4 md:py-8 lg:py-0">
                    <div className="bg-white p-4 rounded-md">
                        <MailIconV2 />
                    </div>
                    <div>
                        <p className="font-semibold">Mail Us On:</p>
                        <p>office@ignitionglobal.net</p>
                    </div>
                </div>
                 <div className="flex items-center space-x-4 py-4 md:py-8 lg:py-0">
                    <div className="bg-white p-4 rounded-md">
                        <LocationIcon />
                    </div>
                    <div>
                        <p className="font-semibold">Visit Location:</p>
                        <p>30 N Gould St Ste R, Sheridan, WY 82801</p>
                    </div>
                </div>
            </div>
        </div>
      </div>
      
      {/* Main Footer */}
      <div className="container mx-auto px-4 pt-20 pb-12 text-gray-400 relative">
        <div
          className="absolute inset-0 bg-no-repeat bg-left-top opacity-5"
          style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='600' height='600' viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M100 141.421c-22.86 0-41.42-18.56-41.42-41.42 0-22.86 18.56-41.42 41.42-41.42 22.86 0 41.42 18.56 41.42 41.42 0 22.86-18.56 41.42-41.42 41.42zM100 50c-27.61 0-50 22.39-50 50s22.39 50 50 50 50-22.39 50-50-22.39-50-50-50z' fill='%23f97316' fill-rule='evenodd'/%3E%3C/svg%3E")`}}
        ></div>
        <div
          className="absolute bottom-0 right-0 h-48 w-48 bg-no-repeat bg-center"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Cdefs%3E%3Cstyle%3E.cls-1%7Bfill:none;stroke:%23f97316;stroke-miterlimit:10;stroke-width:1px;opacity:0.2;%7D%3C/style%3E%3C/defs%3E%3Ccircle class='cls-1' cx='35.59' cy='83.65' r='2.23'/%3E%3Ccircle class='cls-1' cx='49.03' cy='74.8' r='2.23'/%3E%3Ccircle class='cls-1' cx='62.47' cy='83.65' r='2.23'/%3E%3Ccircle class='cls-1' cx='35.59' cy='57.1' r='2.23'/%3E%3Ccircle class='cls-1' cx='22.15' cy='48.25' r='2.23'/%3E%3Ccircle class='cls-1' cx='49.03' cy='48.25' r='2.23'/%3E%3Ccircle class='cls-1' cx='75.91' cy='48.25' r='2.23'/%3E%3Ccircle class='cls-1' cx='62.47' cy='57.1' r='2.23'/%3E%3Ccircle class='cls-1' cx='35.59' cy='31.39' r='2.23'/%3E%3Ccircle class='cls-1' cx='49.03' cy='22.54' r='2.23'/%3E%3Ccircle class='cls-1' cx='62.47' cy='31.39' r='2.23'/%3E%3Cline class='cls-1' x1='35.59' y1='83.65' x2='22.15' y2='48.25'/%3E%3Cline class='cls-1' x1='35.59' y1='83.65' x2='49.03' y2='74.8'/%3E%3Cline class='cls-1' x1='49.03' y1='74.8' x2='62.47' y2='83.65'/%3E%3Cline class='cls-1' x1='49.03' y1='74.8' x2='35.59' y2='57.1'/%3E%3Cline class='cls-1' x1='35.59' y1='57.1' x2='22.15' y2='48.25'/%3E%3Cline class='cls-1' x1='22.15' y1='48.25' x2='35.59' y2='31.39'/%3E%3Cline class='cls-1' x1='35.59' y1='31.39' x2='49.03' y2='22.54'/%3E%3Cline class='cls-1' x1='49.03' y1='22.54' x2='62.47' y2='31.39'/%3E%3Cline class='cls-1' x1='62.47' y1='31.39' x2='75.91' y2='48.25'/%3E%3Cline class='cls-1' x1='75.91' y1='48.25' x2='62.47' y2='57.1'/%3E%3Cline class='cls-1' x1='62.47' y1='57.1' x2='49.03' y2='48.25'/%3E%3Cline class='cls-1' x1='49.03' y1='48.25' x2='35.59' y2='57.1'/%3E%3Cline class='cls-1' x1='62.47' y1='83.65' x2='75.91' y2='48.25'/%3E%3C/svg%3E")`,
          }}
        ></div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 relative z-10">
          {/* About Company */}
          <div>
            <h4 className="text-white text-lg font-bold font-exo mb-4 relative uppercase">
              About Company
              <span className="absolute left-0 -bottom-2 h-0.5 w-16 bg-orange-500">
                <span className="absolute -right-1 -top-1 h-2 w-2 rounded-full bg-white"></span>
              </span>
            </h4>
            <p className="my-6">Ignition Consulting Group LLC delivers innovative IT consulting and business solutions, empowering companies with strategic guidance and cutting-edge technology.</p>
            <div className="flex items-start space-x-3 mb-6">
              <span className="flex-shrink-0 mt-1 w-5 h-5 border-2 border-orange-500 rounded-full flex items-center justify-center">
                 <svg className="w-3 h-3 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
              </span>
              <p>Expert IT consulting and strategic business transformation solutions.</p>
            </div>
            <div className="flex space-x-2">
              {[<FacebookIcon/>, <TwitterIcon/>, <LinkedinIcon/>, <InstagramIcon/>, <YoutubeIcon/>].map((icon, i) => (
                <div key={i} className="w-10 h-10 border border-gray-700 rounded-full flex items-center justify-center text-gray-400">
                  {icon}
                </div>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white text-lg font-bold font-exo mb-4 relative uppercase">
              Quick Links
              <span className="absolute left-0 -bottom-2 h-0.5 w-16 bg-orange-500">
                <span className="absolute -right-1 -top-1 h-2 w-2 rounded-full bg-white"></span>
              </span>
            </h4>
            <ul className="space-y-3 mt-6">
              {quickLinks.map(link => (
                <li key={link.name}>
                  <Link to={link.path} className="flex items-center hover:text-white transition-colors">
                    <ChevronRightIcon /> <span className="ml-2">{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* IT Services */}
          <div>
            <h4 className="text-white text-lg font-bold font-exo mb-4 relative uppercase">
              IT SERVICES
               <span className="absolute left-0 -bottom-2 h-0.5 w-16 bg-orange-500">
                <span className="absolute -right-1 -top-1 h-2 w-2 rounded-full bg-white"></span>
              </span>
            </h4>
            <ul className="space-y-3 mt-6">
              {['Business Consulting', 'Digital Transformation', 'IT Strategy', 'Process Optimization', 'Technology Solutions'].map(link => (
                <li key={link}>
                  <Link to="/services" className="flex items-center hover:text-white transition-colors">
                    <ChevronRightIcon /> <span className="ml-2">{link}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Recent Posts */}
          <div>
            <h4 className="text-white text-lg font-bold font-exo mb-4 relative uppercase">
              RECENT POSTS
               <span className="absolute left-0 -bottom-2 h-0.5 w-16 bg-orange-500">
                <span className="absolute -right-1 -top-1 h-2 w-2 rounded-full bg-white"></span>
              </span>
            </h4>
            <div className="space-y-4 mt-6">
              <div className="flex items-center space-x-4">
                <img src="/assets/images/b_details04.jpg" alt="Blog post" className="rounded-md w-20 h-20 object-cover" />
                <div>
                  <h5 className="text-white font-semibold hover:text-orange-500 transition-colors leading-tight">
                    <Link to="/blog/the-power-of-ui-ux">Why Great UI/UX is More Than Just a Pretty Face</Link>
                  </h5>
                  <div className="flex items-center text-sm mt-1">
                    <CalendarIcon />
                    <span className="ml-2">Sep 05 2024</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <img src="/assets/images/b_details03.jpg" alt="Blog post" className="rounded-md w-20 h-20 object-cover" />
                <div>
                  <h5 className="text-white font-semibold hover:text-orange-500 transition-colors leading-tight">
                    <Link to="/blog/agile-project-management">Mastering Agile for Efficient Project Management</Link>
                  </h5>
                  <div className="flex items-center text-sm mt-1">
                    <CalendarIcon />
                    <span className="ml-2">Sep 02 2024</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom Bar */}
      <div className="bg-[#0a0d1f] border-t border-gray-800">
        <div className="container mx-auto px-4 py-6 text-gray-400 flex flex-col md:flex-row justify-between items-center text-center md:text-left">
          <p className="text-sm">Copyright © 2024 <Link to="/" className="text-white hover:text-orange-500">Ignition Consulting Group LLC</Link>. All Rights Reserved.</p>
          <div className="mt-4 md:mt-0 text-sm">
            <Link to="/terms" className="hover:text-white transition-colors">Terms of Use</Link>
            <span className="mx-2">|</span>
            <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
          </div>
        </div>
      </div>

      {/* Scroll to top button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-8 right-8 w-12 h-12 bg-orange-500 text-white rounded-full flex items-center justify-center shadow-lg hover:bg-orange-600 transition-all duration-300 z-50"
        aria-label="Scroll to top"
      >
        <ArrowUpIcon />
      </button>
    </footer>
  );
};

export default Footer;