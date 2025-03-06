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
    <div className="flex-1 min-h-screen flex flex-col justify-between">
      <div className="">
      {/* <p className="text-xl font-medium  px-4 pt-3" >Create New Category</p> */}
        <form onSubmit={handleSubmit} className=" space-y-5 px-4 pt-4 pb-8 mb-4">
          <div className="">
            <div className="flex flex-col gap-1 max-w-md mb-3">
              <label htmlFor="category"  className="text-base font-medium" >
                Category Title
              </label>
              <input
                type="text"
                id="category"
                name="category"
                value={formData.category}
                onChange={handleInputChange}
                className="outline-none md:py-2.5 py-2 px-3 rounded border border-gray-500/40"
                placeholder="Enter Category title"
              />
            </div>

            <div className="flex flex-col gap-1 max-w-md  mb-3">
              <label htmlFor="description" className="text-base font-medium">
                Category Description
              </label>
              <textarea
                id="description"
                name="description"
                value={formData.description}
                rows={4}
                onChange={handleInputChange}
                className="outline-none md:py-2.5 py-2 px-3 rounded border border-gray-500/40 resize-none"
                placeholder="Enter category description"
                required
              />
            </div>

            <div className="flex items-center justify-between">
              <button
                type="submit"
                className="px-8 py-2.5 bg-orange-600 text-white font-medium  rounded focus:outline-none focus:shadow-outline"
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
