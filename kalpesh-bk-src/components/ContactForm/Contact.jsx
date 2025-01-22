'use client'

import { useState } from 'react'

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        number: '',
        email: '',
        message: ''
      });
      
      const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission
        console.log('Form submitted:', formData);
      };
      
      const handleChange = (e) => {
        setFormData({
          ...formData,
          [e.target.name]: e.target.value
        });
      };
    
  return (
    <div>
          <div>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Name"
                className="w-full px-4 py-3 border-b border-gray-600 focus:border-orange-500 outline-none transition-colors"
                required
              />
            </div>

            <div>
              <input
                type="number"
                name="number"
                value={formData.number}
                onChange={handleChange}
                placeholder="Number"
                className="w-full px-4 py-3 border-b border-gray-600 focus:border-orange-500 outline-none transition-colors"
                required
              />
            </div>

            <div>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                className="w-full px-4 py-3 border-b border-gray-600 focus:border-orange-500 outline-none transition-colors"
                required
              />
            </div>

            <div>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Message"
                rows={1}
                className="w-full px-4 py-3 border-b border-gray-600 focus:border-orange-500 outline-none transition-colors resize-none"
                required
              />
            </div>

            <button
              type="submit"
              className="btn-lightup"
            > Let us level up in tandem!
            </button>
          </form>
        </div>
    </div>
  )
}
