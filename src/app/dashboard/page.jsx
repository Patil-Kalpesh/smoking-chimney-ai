"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Loading from "@/components/Loading";
import DashboardLayout from "@/components/Dashboard/DashboardLayout";

export default function DashboardPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("auth_token");

    if (!token) {
      router.replace("/login"); // Redirect to login if not authenticated
    } else {
      setLoading(false);
    }
  }, []);

  if (loading) {
    return <Loading />; // Show loading screen while checking authentication
  }

  return (
    <DashboardLayout title="Dashboard">
      <h1 className="text-2xl font-bold">Welcome to the Dashboard!</h1>
    </DashboardLayout>
  );
}
