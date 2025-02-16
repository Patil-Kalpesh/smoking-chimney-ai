'use client';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from "next/navigation";

const SingleBlog = () => {
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const { slug } = useParams(); // Extract the dynamic id (or slug)

  useEffect(() => {
    if (slug) {
        console.log('Fetching blog with ID:', slug);
      // Fetch the blog data based on the id
      axios.get(`/api/blogs/${slug}`)
        .then(response => {
          setBlog(response.data.data); // Set the blog data
          setLoading(false);
        })
        .catch(err => {
          setError('Failed to load the blog.');
          setLoading(false);
        });
    }
  }, [slug]);

  if (loading) return <p className='mt-24'>Loading...</p>;
  if (error) return <p>{error}</p>;

  if (!blog) return <p>No blog found!</p>;

  return (
    <>
    <div className="container max-w-6xl mx-auto px-4 py-16 mt-16">
      <article className="bg-white rounded-lg overflow-hidden shadow-sm border border-gray-200">
        <div className="relative h-64 overflow-hidden">
          <img src={blog.image || '/placeholder.svg'} alt={blog.title} className="object-cover w-full h-full" />
        </div>
        <div className="p-6">
          <h1 className="text-3xl font-bold mb-4">{blog.title}</h1>
          <div className="text-sm text-gray-500 mb-4">
            <span>{blog.author || 'Vinayak V.'}</span>
            <span className="mx-2">|</span>
            <span>{new Date(blog.createdAt).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
          </div>
          <p className="text-gray-700" dangerouslySetInnerHTML={{ __html: blog.description }}></p>

        </div>
      </article>
    </div>
    </>
  );
};

export default SingleBlog;
