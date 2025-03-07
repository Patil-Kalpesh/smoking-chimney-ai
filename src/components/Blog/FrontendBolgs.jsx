'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import axios from 'axios';

export default function FrontendBlogs() {
    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(true); // Track loading state

    useEffect(() => {
        axios.get('api/blogs')
            .then(response => {
                console.log("Fetched Blogs:", response.data.data);
                setBlogs(response.data.data);
            })
            .catch(error => {
                console.error("Error fetching blogs:", error);
            })
            .finally(() => {
                setLoading(false); // Stop loading after data fetch
            });
    }, []);

    return (
        <div>
<<<<<<< HEAD
            <section className="lg:pt-28 pt-28 lg:pb-16 bg-gray-50">
=======
            <section className="py-16 bg-gray-50">
>>>>>>> 0bcab5fa2136ebed1a5a1e8173dc98605db9ab6d
                <div className="container mx-auto px-8">
                    <h2 className="text-4xl font-bold text-center mb-12">Latest Blog Posts</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {loading ? (
                            // Skeleton Loader (3 placeholder cards)
                            [...Array(3)].map((_, index) => (
<<<<<<< HEAD
                                <div key={index} className="bg-white rounded-lg shadow-sm border border-gray-200 p-1 animate-pulse">
=======
                                <div key={index} className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 animate-pulse">
>>>>>>> 0bcab5fa2136ebed1a5a1e8173dc98605db9ab6d
                                    <div className="h-64 bg-gray-300 rounded-lg w-full"></div>
                                    <div className="mt-4 h-6 bg-gray-300 rounded w-3/4"></div>
                                    <div className="mt-2 h-4 bg-gray-300 rounded w-full"></div>
                                    <div className="mt-2 h-4 bg-gray-300 rounded w-5/6"></div>
                                    <div className="mt-4 flex justify-between text-sm text-gray-400">
                                        <div className="h-4 bg-gray-300 w-1/4 rounded"></div>
                                        <div className="h-4 bg-gray-300 w-1/4 rounded"></div>
                                    </div>
                                </div>
                            ))
                        ) : blogs.length > 0 ? (
                            blogs.map((blog, index) => (
                                <article key={index} className="bg-white rounded-lg overflow-hidden shadow-sm border border-gray-200 transition-all duration-300 hover:shadow-md">
                                    <Link href={`/blog/${blog.slug}`} target="_blank">
                                        <div className="relative h-64 overflow-hidden">
                                            <Image
                                                src={blog.image || "/placeholder.svg"}
                                                alt={blog.title}
                                                fill
                                                className="object-cover transition-transform duration-300 group-hover:scale-105"
                                            />
                                        </div>
                                        <div className="p-6">
                                            <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-600 transition-colors duration-300">
                                                {blog.title}
                                            </h3>
                                            <p className="text-gray-600 mb-4" 
                                            dangerouslySetInnerHTML={{ __html: `${blog.description.substr(0,100)}...` }}
                                            >
                                            </p>
                                            <div className="flex items-center justify-between text-sm text-gray-500">
                                                <span>{blog.author || 'Vinayak V.'}</span>
                                                <span>{new Date(blog.createdAt).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                                            </div>
                                        </div>
                                    </Link>
                                </article>
                            ))
                        ) : (
                            <p>No blogs available</p>
                        )}
                    </div>
                </div>
            </section>
        </div>
    );
}
