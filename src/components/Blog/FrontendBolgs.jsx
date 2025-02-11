'use client';
import React, { useEffect, useState } from 'react'
import Image from "next/image"
import Link from "next/link"
import axios from 'axios';

export default function FrontendBlogs() {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3000/api/blogs')
          .then(response => {

            console.log("Fetched Blogs:", response.data.data);  // Log response to inspect its structure

            setBlogs(response.data.data); // Store the fetched data in state
          })
          .catch(error => {
            console.error("Error fetching blogs:", error);
          });
      }, []);

    return (
        
        <div>
            {/* ------------------------ */}
            <section className="py-16 bg-gray-50">
                <div className="container mx-auto px-4">
                    <h2 className="text-4xl font-bold text-center mb-12">Latest Blog Posts</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {Array.isArray(blogs) && blogs.length > 0 ? (
                            blogs.map((blog, index) => (
                                <article key={index} className="bg-white rounded-lg overflow-hidden shadow-sm border border-gray-200 transition-all duration-300 hover:shadow-md">
                                    <Link href={`/blog/${blog.id}`} target="_blank">
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
                                            <p className="text-gray-600 mb-4">
                                                {blog.description.split(' ').slice(0, 20).join(' ')}{blog.description.split(' ').length > 20 && '...'}
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
    )
}
