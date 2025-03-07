"use client";

import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import Cookies from "js-cookie";
import Header from '@/components/Header/index';
import Footer from '@/components/Footer/index';
import Loading from "@/components/Loading";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false); // Page & transition loading state
<<<<<<< HEAD
  const [isAuthenticated, setIsAuthenticated] = useState(false);
=======

  useEffect(() => {
    // Check if already logged in
    const token = Cookies.get("auth_token");
    if (token) {
      router.push("/dashboard"); // Redirect if already logged in
    }
  }, []);
>>>>>>> 0bcab5fa2136ebed1a5a1e8173dc98605db9ab6d

  useEffect(() => {
    const token = Cookies.get("auth_token");

    if (!token) {
      router.replace("/"); // Redirect to login if not authenticated
    } else {
      setIsAuthenticated(true);
    }

    setLoading(false);
  }, []);

  if (loading) {
    return <p>Loading...</p>; // Prevent UI flash while checking authentication
  }

  if (!isAuthenticated) {
    return null; // Avoid rendering sensitive content before redirecting
  }
  
  const handleLogin = (e) => {
    e.preventDefault();
    setLoading(true); // Show loading before redirecting

    setTimeout(() => {
      if (email === "admin@gmail.com" && password === "123456") {
        Cookies.set("auth_token", "your_auth_token", { expires: 5 });
        router.push("/dashboard");
      } else {
        alert("Invalid credentials");
        setLoading(false); // Stop loading if failed
      }
    }, 2000);
  };

  return (
    <>
      <Header />

      {loading ? (
        // Full Page Loader During Login & Redirect
        <Loading/>
      ) : (
        // Login Form
<<<<<<< HEAD
        <div className="pt-16 flex items-center justify-center bg-gray-100 min-h-[96vh]">
=======
        <div className="flex items-center justify-center bg-gray-100 min-h-[70vh]">
>>>>>>> 0bcab5fa2136ebed1a5a1e8173dc98605db9ab6d
          <div className="bg-white p-8 rounded-lg shadow-lg w-96">
            <h1 className="text-2xl font-semibold text-center mb-6">Admin Login</h1>
            <form onSubmit={handleLogin}>
              <div className="mb-4">
                <input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  disabled={loading}
                />
              </div>
              <div className="mb-6">
                <input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  disabled={loading}
                />
              </div>
              <button
                type="submit"
                className="w-full btn-lightup py-2 focus:outline-none disabled:opacity-50"
                disabled={loading}
              >
                {loading ? "Logging in..." : "Login"}
              </button>
            </form>
          </div>
        </div>
      )}

      <Footer />
    </>
  );
}
