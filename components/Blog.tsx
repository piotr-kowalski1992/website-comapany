import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRightIcon } from './icons';
import { blogData } from '../data/blogData';

const Blog = () => {
    const blogPosts = blogData.slice(0, 3);
    return (
        <section className="py-24 bg-[#0a0e1a] border-t border-gray-800">
             <div className="container mx-auto px-4">
                <div className="text-center max-w-2xl mx-auto mb-12">
                    <span className="text-orange-500 font-bold uppercase">Our Blog Posts</span>
                    <h2 className="text-4xl font-bold font-exo my-4 text-white">Read Our Latest News & Blog For Daily Updates</h2>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {blogPosts.map((post) => (
                        <div key={post.id} className="bg-[#1a1f2e] rounded-lg shadow-md overflow-hidden group border border-gray-800">
                            <img src={post.img} alt={post.title} className="w-full h-56 object-cover"/>
                            <div className="p-6">
                                <div className="text-sm text-gray-400 mb-2">
                                    <span>{post.date}</span> by <span>{post.author}</span>
                                </div>
                                <h3 className="text-xl font-bold mb-4 h-16 group-hover:text-orange-500 transition-colors text-white">{post.title}</h3>
                                <Link to={`/blog/${post.id}`} className="font-bold text-gray-300 group-hover:text-orange-500 transition-colors flex items-center uppercase text-sm">Read More <ArrowRightIcon/></Link>
                            </div>
                        </div>
                    ))}
                </div>
             </div>
        </section>
    );
};

export default Blog;