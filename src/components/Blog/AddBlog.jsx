'use client'

import { useState } from 'react'
import { FiUpload } from 'react-icons/fi'

export default function AddBlog() {
  const [formData, setFormData] = useState({
    title: '',
    category: '',
    description: '',
    image: null,
    seoTitle: '',
    seoDescription: '',
    seoKeywords: ''
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  }
  
  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setFormData(prevState => ({
        ...prevState,
        image: e.target.files[0]
      }));
    }
  }
  

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission logic here
    console.log('Form submitted:', formData)
  }

  return (
    <div className="min-h-screen py-6 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-center text-gray-900 mb-8">Create New Blog Post</h1>
        <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div className="mb-6">
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

          <div className="mb-6">
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

          <div className="mb-6">
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

          <div className="mb-6">
            <label htmlFor="image" className="block text-gray-700 text-sm font-bold mb-2">
              Blog Image
            </label>
            <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
              <div className="space-y-1 text-center">
                <FiUpload className="mx-auto h-12 w-12 text-gray-400" />
                <div className="flex text-sm text-gray-600">
                  <label
                    htmlFor="image"
                    className="relative cursor-pointer bg-white rounded-md font-medium text-blue-600 hover:text-blue-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-blue-500"
                  >
                    <span>Upload a file</span>
                    <input id="image" name="image" type="file" className="sr-only" onChange={handleImageChange} accept="image/*" />
                  </label>
                  <p className="pl-1">or drag and drop</p>
                </div>
                <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
              </div>
            </div>
          </div>

          <div className="mb-6">
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

          <div className="mb-6">
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

          <div className="mb-6">
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

          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Create Post
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}