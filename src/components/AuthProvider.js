"use client";

import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import Cookies from "js-cookie";
import Header from "@/app/header/page";
import Footer from "@/app/footer/page";

export default function AuthProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const authToken = Cookies.get("auth_token");
    setIsAuthenticated(!!authToken);
  }, []);

  useEffect(() => {
    if (!isAuthenticated && pathname.startsWith("/dashboard")) {
      router.push("/login");
    }
  }, [isAuthenticated, pathname]);

  if (!isAuthenticated && pathname.startsWith("/dashboard")) {
    return null; // Prevents flickering during redirect
  }

  return (
    <>
      {/* Show Header & Footer only on Landing Pages */}
      {!pathname.startsWith("/dashboard") && (
        <>
          <Header />
          {children}
          <Footer />
        </>
      )}

      {/* Dashboard View without Header & Footer */}
      {pathname.startsWith("/dashboard") && <div className="dashboard-container">{children}</div>}
    </>
  );
}
