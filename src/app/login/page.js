"use client";

import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import Header from "@/components/Header/index";
import Footer from "@/components/Footer/index";
import Loading from "@/components/Loading";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("auth_token");

    if (token) {
      setIsAuthenticated(true);
      router.replace("/dashboard"); // Redirect to dashboard if already logged in
    } else {
      setIsAuthenticated(false);
    }
  }, []);

  if (isAuthenticated === null) {
    return <Loading />;
  }

  if (isAuthenticated) {
    return null; // Prevent login page from rendering if already logged in
  }

  const handleLogin = (e) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      if (email === "admin@gmail.com" && password === "123456") {
        localStorage.setItem("auth_token", "your_auth_token");
        router.push("/dashboard"); // Redirect to dashboard after login
      } else {
        alert("Invalid credentials");
        setLoading(false);
      }
    }, 2000);
  };

  return (
    <>
      <Header />
      {loading ? (
        <Loading />
      ) : (
        <div className="pt-16 flex items-center justify-center bg-gray-100 min-h-[96vh]">
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
