"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function DashboardPage() {
  const router = useRouter();

  useEffect(() => {
    const token = document.cookie
      .split("; ")
      .find((row) => row.startsWith("authToken="))
      ?.split("=")[1];

    if (!token) {
      router.push("/"); // Redirect to home if no token
    }
  }, [router]);

  return (
    <div>
      <h1>Welcome to the Dashboard</h1>
    </div>
  );
}
