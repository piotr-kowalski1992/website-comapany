import React from 'react';
import { useParams } from 'react-router-dom';
import SEO from '../components/SEO';
import PageHero from '../components/PageHero';
import BlogDetails from '../components/BlogDetails';
import Brands from '../components/Brands';
import { blogData } from '../data/blogData';

const BlogDetailsPage = () => {
    const { blogId } = useParams<{ blogId: string }>();
    const postIndex = blogData.findIndex(p => p.id === blogId);
    const post = blogData[postIndex];

    const prevPost = postIndex > 0 ? blogData[postIndex - 1] : undefined;
    const nextPost = postIndex < blogData.length - 1 ? blogData[postIndex + 1] : undefined;

    if (!post) {
        return (
            <>
                <SEO 
                    title="Blog Post Not Found | Ignition Consulting Group LLC"
                    description="The blog post you are looking for does not exist. Explore our other business insights and articles."
                    canonical="https://ignitioncg.com/blog"
                    noindex={true}
                />
                <div className="py-40 text-center bg-gray-50">
                    <div className="container mx-auto px-4">
                        <h1 className="text-5xl font-extrabold font-exo text-dark-blue mb-4">Post Not Found</h1>
                        <p className="text-lg text-body-color">The blog post you are looking for does not exist or has been moved.</p>
                    </div>
                </div>
            </>
        )
    }

    return (
        <>
            <SEO 
                title={`${post.title} | Ignition Consulting Group LLC Blog`}
                description={post.excerpt}
                keywords={`${post.category.toLowerCase()}, business blog, consulting insights, ${post.title.toLowerCase()}`}
                canonical={`https://ignitioncg.com/blog/${blogId}`}
                ogType="article"
            />
            <PageHero 
                title={post.title} 
                breadcrumbs={[
                    { name: 'Home', path: '/' }, 
                    { name: 'Blog', path: '/blog' }, 
                    { name: post.title }
                ]} 
            />
            <BlogDetails post={post} prevPost={prevPost} nextPost={nextPost} />
            <Brands />
        </>
    );
};

export default BlogDetailsPage;