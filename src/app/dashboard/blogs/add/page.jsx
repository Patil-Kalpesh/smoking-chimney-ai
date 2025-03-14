"use client";
import AddBlog from "@/components/Blog/AddBlog";
import DashboardLayout from "@/components/Dashboard/DashboardLayout";

export default function Page() {
  return (
    <DashboardLayout >
       <AddBlog/>
    </DashboardLayout>
  );
}