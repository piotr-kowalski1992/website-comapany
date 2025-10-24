import React from 'react';
import { Link } from 'react-router-dom';
import { CalendarIcon, UserIcon, TagIcon, CommentIcon, ReplyIcon, ArrowRightIcon } from './icons';
import { blogData, BlogPost } from '../data/blogData';
import BlogSidebar from './BlogSidebar';

const BlogDetails = ({ post, prevPost, nextPost }: { post: BlogPost; prevPost?: BlogPost; nextPost?: BlogPost }) => {
    return (
        <section className="py-24 bg-[#0a0e1a]">
            <div className="container mx-auto px-4">
                <div className="grid lg:grid-cols-3 gap-12">
                    <div className="lg:col-span-2">
                        <article>
                            <img src={post.img} alt={post.title} className="rounded-lg mb-6 w-full"/>
                            <div className="flex flex-wrap items-center text-sm text-gray-400 mb-4 space-x-4">
                                <span className="flex items-center"><CalendarIcon /> {post.date}</span>
                                <span className="flex items-center"><TagIcon /> {post.category}</span>
                                <span className="flex items-center"><CommentIcon /> {post.comments.length} Comments</span>
                            </div>

                            <h1 className="text-4xl font-bold font-exo mb-6 text-white">{post.title}</h1>
                            
                            {post.fullContent.map((paragraph, index) => {
                                if(paragraph.type === 'p') {
                                    return <p key={index} className="mb-6 text-gray-300">{paragraph.content}</p>;
                                }
                                if(paragraph.type === 'quote') {
                                    return (
                                        <blockquote key={index} className="border-l-4 border-orange-500 pl-6 py-4 my-8 text-xl italic font-semibold text-gray-200 bg-[#1a1f2e]/80">
                                           "{paragraph.content}"
                                        </blockquote>
                                    );
                                }
                                return null;
                            })}
                        </article>

                        <div className="border-t border-b border-gray-700 py-4 my-8 flex justify-between items-center">
                            <div>
                                <span className="font-bold text-white mr-2">Tags:</span>
                                {post.tags.map(tag => (
                                    <a key={tag} href="#" className="inline-block bg-[#1a1f2e] text-gray-300 px-3 py-1 rounded-md text-sm mr-2 hover:bg-orange-500 hover:text-white transition-colors border border-gray-700">{tag}</a>
                                ))}
                            </div>
                        </div>

                        {/* Prev/Next Post */}
                        <div className="flex justify-between my-8">
                            {prevPost ? (
                                <Link to={`/blog/${prevPost.id}`} className="group">
                                    <p className="text-sm text-gray-400">Prev</p>
                                    <p className="font-bold text-white group-hover:text-orange-500 transition-colors text-lg">{prevPost.title}</p>
                                </Link>
                            ) : <div />}
                             {nextPost ? (
                                <Link to={`/blog/${nextPost.id}`} className="text-right group">
                                    <p className="text-sm text-gray-400">Next</p>
                                    <p className="font-bold text-white group-hover:text-orange-500 transition-colors text-lg">{nextPost.title}</p>
                                </Link>
                            ) : <div />}
                        </div>
                        
                        {/* Comments Section */}
                        <div className="my-12">
                            <h3 className="text-3xl font-bold font-exo mb-6 text-white">{post.comments.length} Comments:</h3>
                            <div className="space-y-6">
                                {post.comments.map((comment, index) => (
                                    <div key={index} className="flex items-start space-x-4">
                                        <img src={comment.avatar} alt={comment.author} className="w-16 h-16 rounded-full"/>
                                        <div className="flex-1">
                                            <p className="text-gray-300">{comment.text}</p>
                                            <div className="flex items-center justify-between mt-2">
                                                <div>
                                                    <h4 className="font-bold text-white">{comment.author}</h4>
                                                    <p className="text-sm text-gray-400">{comment.date}</p>
                                                </div>
                                                <button className="flex items-center font-semibold text-orange-500 hover:text-white">
                                                    <ReplyIcon/> Reply
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Leave a Comment Form */}
                        <div>
                            <h3 className="text-3xl font-bold font-exo mb-6 text-white">Leave a comments:</h3>
                             <form className="bg-[#1a1f2e] p-8 rounded-lg border border-gray-800">
                                <div className="grid md:grid-cols-2 gap-4 mb-4">
                                    <input type="text" placeholder="Your Name*" required className="w-full px-4 py-3 bg-[#0a0e1a] border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 text-white placeholder-gray-500" />
                                    <input type="email" placeholder="Email Address*" required className="w-full px-4 py-3 bg-[#0a0e1a] border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 text-white placeholder-gray-500" />
                                </div>
                                <div className="mb-4">
                                    <textarea placeholder="Write us your comment" required rows={5} className="w-full px-4 py-3 bg-[#0a0e1a] border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 text-white placeholder-gray-500"></textarea>
                                </div>
                                <div className="mb-4">
                                    <label className="flex items-center text-gray-300">
                                        <input type="checkbox" className="mr-2"/>
                                        <span>Save my name, email, and website in this browser for the next time I comment.</span>
                                    </label>
                                </div>
                                <button type="submit" className="bg-orange-500 text-white font-bold py-3 px-8 rounded-md hover:bg-orange-600 transition-all duration-300 inline-flex items-center">
                                    Post comment <ArrowRightIcon />
                                </button>
                            </form>
                        </div>
                    </div>
                     <div>
                        <BlogSidebar />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BlogDetails;