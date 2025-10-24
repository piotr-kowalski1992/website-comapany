import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import PageHero from '../components/PageHero';
import { blogData } from '../data/blogData';
import BlogSidebar from '../components/BlogSidebar';
import { ArrowRightIcon } from '../components/icons';

const BlogPage = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const postsPerPage = 5;

    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = blogData.slice(indexOfFirstPost, indexOfLastPost);

    const totalPages = Math.ceil(blogData.length / postsPerPage);

    const paginate = (pageNumber: number) => {
        setCurrentPage(pageNumber);
        window.scrollTo(0, 0);
    };

    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
    }

    return (
        <>
            <SEO 
                title="Business Consulting Blog - Latest Insights & Trends | Ignition Consulting Group LLC"
                description="Stay updated with the latest business consulting trends, strategic planning insights, and industry news from Ignition Consulting Group LLC experts. Read our blog for valuable tips and knowledge."
                keywords="business consulting blog, strategic planning insights, management consulting articles, business trends, consulting tips, industry insights"
                canonical="https://ignitioncg.com/blog"
            />
            <PageHero title="Our Blog" breadcrumbs={[{ name: 'Home', path: '/' }, { name: 'Blog' }]} />
            <section className="py-24 bg-[#0a0e1a]">
                <div className="container mx-auto px-4">
                    <div className="grid lg:grid-cols-3 gap-12">
                        <div className="lg:col-span-2">
                            <div className="space-y-10">
                                {currentPosts.map(post => (
                                    <div key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden group">
                                        <img src={post.img} alt={post.title} className="w-full h-80 object-cover"/>
                                        <div className="p-8">
                                            <div className="text-sm text-gray-600 mb-3">
                                                <span className="text-orange-500 font-semibold">{post.category}</span>
                                                <span className="mx-2">•</span>
                                                <span>{post.date}</span>
                                            </div>
                                            <h2 className="text-3xl font-bold font-exo mb-4 text-gray-900 group-hover:text-orange-500 transition-colors">
                                                <Link to={`/blog/${post.id}`}>{post.title}</Link>
                                            </h2>
                                            <p className="mb-6 text-gray-700">{post.excerpt}</p>
                                            <Link to={`/blog/${post.id}`} className="font-bold text-gray-900 group-hover:text-orange-500 transition-colors flex items-center">
                                                Read More <ArrowRightIcon />
                                            </Link>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            
                            {/* Pagination */}
                            <div className="flex justify-center items-center mt-12 space-x-2">
                                <button 
                                    onClick={() => paginate(currentPage - 1)} 
                                    disabled={currentPage === 1}
                                    className="px-4 py-2 bg-gray-200 text-gray-900 rounded-md hover:bg-orange-500 hover:text-white disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                                >
                                    Prev
                                </button>
                                {pageNumbers.map(number => (
                                     <button 
                                        key={number} 
                                        onClick={() => paginate(number)}
                                        className={`px-4 py-2 rounded-md transition-colors ${currentPage === number ? 'bg-orange-500 text-white' : 'bg-gray-200 text-gray-900 hover:bg-orange-500 hover:text-white'}`}
                                    >
                                        {number}
                                    </button>
                                ))}
                                <button 
                                    onClick={() => paginate(currentPage + 1)} 
                                    disabled={currentPage === totalPages}
                                    className="px-4 py-2 bg-gray-200 text-gray-900 rounded-md hover:bg-orange-500 hover:text-white disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                                >
                                    Next
                                </button>
                            </div>
                        </div>
                        <div>
                            <BlogSidebar />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default BlogPage;