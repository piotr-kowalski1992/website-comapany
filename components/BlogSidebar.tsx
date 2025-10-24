import React from 'react';
import { Link } from 'react-router-dom';
import { CalendarIcon, ChevronRightIcon } from './icons';
import { servicesData } from '../data/servicesData';
import { blogData } from '../data/blogData';

const BlogSidebar = () => {
    const recentPosts = blogData.slice(0, 3);

    return (
        <aside>
            <div className="bg-[#1a1f2e] p-8 mb-8 border border-gray-800">
                <h3 className="text-2xl font-bold font-exo mb-6 text-white">Recent Posts</h3>
                <div className="space-y-4">
                    {recentPosts.map(post => (
                        <div key={post.id} className="flex items-center space-x-4">
                             <img src={post.img} alt="Blog post" className="rounded-md w-20 h-20 object-cover" />
                             <div>
                                <div className="flex items-center text-sm text-gray-400 mb-1">
                                    <span className="text-orange-500 mr-1"><CalendarIcon/></span>
                                    <span>{post.date}</span>
                                 </div>
                                <h4 className="font-semibold leading-tight text-white hover:text-orange-500 transition-colors"><Link to={`/blog/${post.id}`}>{post.title}</Link></h4>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
             <div className="bg-[#1a1f2e] p-8 border border-gray-800">
                <h3 className="text-2xl font-bold font-exo mb-6 text-white">Categories</h3>
                <ul className="space-y-1">
                    {servicesData.map(service => (
                        <li key={service.id}>
                             <Link to={`/service-details/${service.id}`} className="flex justify-between items-center p-4 bg-[#0a0e1a] text-white font-semibold hover:bg-orange-500 hover:text-white transition-all border border-gray-800">
                                <span>{service.title}</span>
                                <ChevronRightIcon />
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </aside>
    );
};

export default BlogSidebar;
