"use client"
import { useState } from 'react';
import axios from 'axios'; 

export default function AddCategory() {
  const [formData, setFormData] = useState({
    category: '',
    description: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Make sure to hit the correct API route '/api/categories'
      const response = await axios.post('/api/categories', formData);

      if (response.status === 201) {
        alert('Category created successfully!');
        setFormData({ category: '', description: '' }); // Reset form
      } else {
        alert('Failed to create category');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('An error occurred, please try again.');
    }
  };

  return (
    <div className="min-h-screen pt-2 px-4 sm:px-6 lg:px-2">
      <div className=" mx-auto">
        <h1 className="text-xl font-normal  text-gray-900 mb-3">Create New Category</h1>
        <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-4 pt-4 pb-8 mb-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="">
              <label htmlFor="category" className="block text-gray-700 text-sm font-bold mb-2">
                Category Title
              </label>
              <input
                type="text"
                id="category"
                name="category"
                value={formData.category}
                onChange={handleInputChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Enter Category title"
              />
            </div>

            <div className="">
              <label htmlFor="description" className="block text-gray-700 text-sm font-bold mb-2">
                Category Description
              </label>
              <textarea
                id="description"
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-32"
                placeholder="Enter category description"
                required
              />
            </div>

            <div className="flex items-center justify-between">
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Create Category
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
