'use client'
import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify'; // Import ToastContainer and toast
import 'react-toastify/dist/ReactToastify.css'; // Import the CSS for Toastify

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    number: '',
    email: '',
    message: ''
  });

  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    console.log(formData);
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (data.success) {
        toast.success('Email sent successfully!'); // Toast for success
        setFormData({ name: '', number: '', email: '', message: '' }); // Reset form
      } else {
        toast.error('Failed to send email.'); // Toast for failure
      }
    } catch (error) {
      toast.error('Something went wrong!'); // Toast for error
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
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

        <button type="submit" className="btn-lightup" disabled={loading}>
          {loading ? "Sending..." : "Let us level up in tandem!"}
        </button>
      </form>

      {/* ToastContainer to display toasts */}
      <ToastContainer position="top-center" autoClose={5000} hideProgressBar newestOnTop />
    </div>
  );
}
