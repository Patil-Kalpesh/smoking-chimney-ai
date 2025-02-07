"use client"
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import DashboardLayout from "@/components/Dashboard/DashboardLayout";

export default function Page() {
  const [blogs, setBlogs] = useState([]);
  const [error, setError] = useState("");
  const router = useRouter();

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    try {
      const response = await axios.get("/api/blogs");
      if (response.data.success) {
        setBlogs(response.data.data);
      } else {
        setError(response.data.message || "Failed to fetch blogs.");
      }
    } catch (err) {
      setError("Error fetching blogs. Please try again later.");
    }
  };

  const handleDelete = async (id) => {
    if (!confirm("Are you sure you want to delete this blog?")) return;

    try {
      await axios.delete(`/api/blogs/${id}`);
      setBlogs(blogs.filter((blog) => blog._id !== id));
      alert("Blog deleted successfully.");
    } catch (error) {
      alert("Error deleting the blog.");
    }
  };

  const handleEdit = (id) => {
    router.push(`/dashboard/blogs/add?id=${id}`);
  };

  return (
    <DashboardLayout title="Blog">
      <h1 className="text-2xl font-bold mb-4">Blog List</h1>
      {error && <p className="text-red-500">{error}</p>}

      {blogs.length > 0 ? (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-200">
            <thead>
              <tr className="bg-gray-100">
                <th className="text-left p-2 border">Title</th>
                <th className="text-left p-2 border">Category</th>
                <th className="text-left p-2 border">Actions</th>
              </tr>
            </thead>
            <tbody>
              {blogs.map((blog) => (
                <tr key={blog._id} className="border-b hover:bg-gray-50">
                  <td className="p-2 border">{blog.title}</td>
                  <td className="p-2 border">{blog.category}</td>
                  <td className="p-2 border">
                    <button
                      className="bg-blue-500 text-white px-3 py-1 rounded mr-2 hover:bg-blue-700"
                      onClick={() => handleEdit(blog._id)}
                    >
                      Edit
                    </button>
                    <button
                      className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-700"
                      onClick={() => handleDelete(blog._id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p>No blogs found.</p>
      )}
    </DashboardLayout>
  );
}
