'use client';

import { useEffect, useState } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { FiUpload } from 'react-icons/fi';
import axios from 'axios';

export default function AddBlog() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const blogId = searchParams.get('id');

  const [formData, setFormData] = useState({
    title: '',
    category: '',
    description: '',
    image: '',
    seoTitle: '',
    seoDescription: '',
    seoKeywords: '',
  });
  const [error, setError] = useState('');
  const [isEditMode, setIsEditMode] = useState(false);

  useEffect(() => {
    if (blogId) {
      fetchBlogData(blogId);
    }
  }, [blogId]);

  const fetchBlogData = async (id) => {
    try {
      const response = await axios.get(`/api/blogs/${id}`);
      if (response.data.success) {
        setFormData(response.data.data);
        setIsEditMode(true);
      } else {
        setError(response.data.message || 'Failed to fetch blog details.');
      }
    } catch (error) {
      setError('Error fetching blog details.');
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleImageChange = async (e) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const maxSize = 10 * 1024 * 1024; // 10MB
  
      if (file.size > maxSize) {
        setError("File size should be less than 10MB");
        return;
      }
  
      setError("");
      const formData = new FormData();
      formData.append("file", file);
  
      try {
        const response = await axios.post("/api/upload", formData);
        console.log(JSON.stringify(response))
        if (response.data.success) {
          // alert(response.data.url);
          setFormData((prevState) => ({
            ...prevState,
            image: response.data.url, // Store uploaded image URL
          }));
          console.log("Updated FormData:", formData);

        } else {
          setError("Image upload failed");
        }
      } catch (error) {
        setError("Error uploading image");
      }
    }
  };
  

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.title || !formData.category || !formData.description) {
      setError('Title, category, and description are required!');
      return;
    }

    const blogData = {
      title: formData.title,
      category: formData.category,
      description: formData.description,
      seoTitle: formData.seoTitle,
      image: formData.image,
      seoDescription: formData.seoDescription,
      seoKeywords: formData.seoKeywords,
    };

    console.log(JSON.stringify(blogData))
    try {
      if (isEditMode) {
        await axios.put(`/api/blogs/${blogId}`, blogData);
        alert('Blog updated successfully!');
      } else {
        await axios.post('/api/blogs', blogData);
        alert('Blog created successfully!');
      }
      router.push('/dashboard/blogs');
    } catch (error) {
      setError('Error during submission, please try again.');
    }
  };

  return (
    <div className="min-h-screen pt-2 px-4 sm:px-6 lg:px-2">
      <div className=" mx-auto">
        <h1 className="text-xl font-normal  text-gray-900 mb-3">
          {isEditMode ? 'Edit Blog Post' : 'Create New Blog Post'}
        </h1>
        <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-4 pt-4 pb-8 mb-4">
          {error && <div className="text-red-500 text-center mb-4">{error}</div>}
          <div className='grid grid-cols-2 gap-4'>
              <div className="">
                <label htmlFor="title" className="block text-gray-700 text-sm font-bold mb-2">
                  Blog Title
                </label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  value={formData.title}
                  onChange={handleInputChange}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Enter blog title"
                  required
                />
              </div>

              <div className="">
                <label htmlFor="category" className="block text-gray-700 text-sm font-bold mb-2">
                  Category
                </label>
                <select
                  id="category"
                  name="category"
                  value={formData.category}
                  onChange={handleInputChange}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  required
                >
                  <option value="">Select a category</option>
                  <option value="technology">Technology</option>
                  <option value="lifestyle">Lifestyle</option>
                  <option value="travel">Travel</option>
                  <option value="food">Food</option>
                </select>
              </div>

              <div className=" col-span-2">
                <label htmlFor="description" className="block text-gray-700 text-sm font-bold mb-2">
                  Blog Description
                </label>
                <textarea
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-32"
                  placeholder="Enter blog description"
                  required
                />
              </div>


              <div className="">
                <label htmlFor="seoTitle" className="block text-gray-700 text-sm font-bold mb-2">
                  SEO Title
                </label>
                <input
                  type="text"
                  id="seoTitle"
                  name="seoTitle"
                  value={formData.seoTitle}
                  onChange={handleInputChange}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Enter SEO title"
                />
              </div>
              <div className="">
                <label htmlFor="seoKeywords" className="block text-gray-700 text-sm font-bold mb-2">
                  SEO Keywords
                </label>
                <input
                  type="text"
                  id="seoKeywords"
                  name="seoKeywords"
                  value={formData.seoKeywords}
                  onChange={handleInputChange}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Enter SEO keywords (comma-separated)"
                />
              </div>
              <div className="">
                <label htmlFor="seoDescription" className="block text-gray-700 text-sm font-bold mb-2">
                  SEO Description
                </label>
                <textarea
                  id="seoDescription"
                  name="seoDescription"
                  value={formData.seoDescription}
                  onChange={handleInputChange}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-24"
                  placeholder="Enter SEO description"
                />
              </div>

             

              <div className="">
                <label htmlFor="image" className="block text-gray-700 text-sm font-bold mb-2">
                  Blog Image
                </label>
                <div className="relative border-2 border-dashed border-gray-300 rounded-lg p-4 flex flex-col items-center justify-center bg-gray-50">
                  {/* Show Preview if Image Exists */}
                  {formData.image ? (
                    <div className="relative">
                      <img
                        src={formData.image}
                        alt="Uploaded preview"
                        className="h-40 w-40 object-cover rounded-lg shadow-md"
                      />
                      <button
                        type="button"
                        onClick={() => setFormData((prev) => ({ ...prev, image: '' }))}
                        className="absolute top-0 right-0 bg-red-500 text-white rounded-full p-1 text-xs shadow-md hover:bg-red-600 transition"
                      >
                        ✕
                      </button>
                    </div>
                  ) : (
                    <>
                      <FiUpload className="text-gray-400 h-12 w-12 mb-2" />
                      <p className="text-gray-600 text-sm">Click to upload or drag & drop</p>
                      <p className="text-xs text-gray-400">PNG, JPG, GIF (Max: 10MB)</p>
                    </>
                  )}

                  {/* Hidden File Input */}
                  <input
                    id="image"
                    name="image"
                    type="file"
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                    onChange={handleImageChange}
                    accept="image/*"
                  />
                </div>

                {/* Replace Image Button */}
                {formData.image && (
                  <button
                    type="button"
                    className="mt-2 px-4 py-2 bg-blue-600 text-white text-sm rounded-md hover:bg-blue-700 transition"
                    onClick={() => document.getElementById('image').click()}
                  >
                    Replace Image
                  </button>
                )}
              </div>
          </div>
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              {isEditMode ? 'Update Post' : 'Create Post'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
