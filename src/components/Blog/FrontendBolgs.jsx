 'use client';
import React,{useEffect,useState} from 'react'
import Image from "next/image"
import Link from "next/link"
import axios from 'axios';

export default function FrontendBolgs() {
   
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3000/api/blogs')
          .then(response => {
            console.log("Fetched Blogs:", response.data);  // Log response to inspect its structure
            setBlogs(response.data); // Store the fetched data in state
          })
          .catch(error => {
            console.error("Error fetching blogs:", error);
          });
      }, []);
      console.log("test blog", blogs)
    const blogPosts= [
        {
          id: "1",
          title: "The Future of Web Development",
          excerpt: "Exploring the latest trends and technologies shaping the web development landscape.",
          imageUrl: "/placeholder.svg?height=400&width=600",
          author: "Jane Doe",
          date: "May 15, 2023",
        },
        {
          id: "2",
          title: "Mastering Tailwind CSS",
          excerpt: "Tips and tricks to leverage the full power of Tailwind CSS in your projects.",
          imageUrl: "/placeholder.svg?height=400&width=600",
          author: "John Smith",
          date: "June 2, 2023",
        },
        {
          id: "3",
          title: "Next.js 13: A Game Changer",
          excerpt: "Diving deep into the new features and improvements in Next.js 13.",
          imageUrl: "/placeholder.svg?height=400&width=600",
          author: "Alice Johnson",
          date: "June 20, 2023",
        },
        // Add more blog posts as needed
      ]

  return (
    <div>
        <div className='mt-20'>
            <h2>Blogs Sorted by Category</h2>

            <ul>      
            {Array.isArray(blogs) && blogs.length > 0 ? (
                blogs.map((blogs, index) => (
                <li key={index}>
                    <h2>{blogs.title}</h2>
                    <p>{blogs.description}</p>
                </li>
                ))
            ) : (
                <p>No blogs available</p>
            )}
    </ul>
      </div>
    {/* ------------------------ */}
        <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold text-center mb-12">Latest Blog Posts</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {blogPosts.map((post) => (
                    <Link href={`/blog/${post.id}`} key={post.id} className="group">
                    <article className="bg-white rounded-lg overflow-hidden shadow-sm border border-gray-200 transition-all duration-300 hover:shadow-md">
                        <div className="relative h-64 overflow-hidden">
                        <Image
                            src={post.imageUrl || "/placeholder.svg"}
                            alt={post.title}
                            fill
                            className="object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                        </div>
                        <div className="p-6">
                        <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-600 transition-colors duration-300">
                            {post.title}
                        </h3>
                        <p className="text-gray-600 mb-4">{post.excerpt}</p>
                        <div className="flex items-center justify-between text-sm text-gray-500">
                            <span>{post.author}</span>
                            <span>{post.date}</span>
                        </div>
                        </div>
                    </article>
                    </Link>
                ))}
                </div>
            </div>
        </section>
    </div>
  )
}
