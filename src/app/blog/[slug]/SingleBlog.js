'use client';

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Header from '@/components/Header/index'
import Footer from '@/components/Footer/index'

const SingleBlog = ({ slug }) => {
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (slug) {
      axios.get(`/api/blogs/${slug}`)
        .then(response => {
          setBlog(response.data.data);
          setLoading(false);
        })
        .catch(() => {
          setError('Failed to load the blog.');
          setLoading(false);
        });
    }
  }, [slug]);

  if (loading) return <p className='my-24 text-center'>Loading...</p>;
  if (error) return <p>{error}</p>;
  if (!blog) return <p>No blog found!</p>;

  return (
    <>
    <Header/>
    <div className="container max-w-5xl mx-auto px-4 py-16 mt-16">
      <article className="bg-white rounded-lg overflow-hidden shadow-sm border border-gray-200">
        <div className="relative h-64 overflow-hidden">
          <img src={blog.image || '/placeholder.svg'} alt={blog.title} className="object-cover w-full h-full" />
        </div>
        <div className="p-6">
          <h1 className="text-3xl font-bold mb-4">{blog.title}</h1>
          <div className="text-sm text-gray-500 mb-4">
            <span>{blog.author || 'Anonymous'}</span>
            <span className="mx-2">|</span>
            <span>{new Date(blog.createdAt).toLocaleDateString()}</span>
          </div>
          <p className="text-gray-700" dangerouslySetInnerHTML={{ __html: blog.description }}></p>
        </div>
      </article>
    </div>
    <Footer/>
    </>
  );
};

export default SingleBlog;
