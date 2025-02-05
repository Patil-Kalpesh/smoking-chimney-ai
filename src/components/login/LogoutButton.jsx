"use client";

import { useRouter } from "next/navigation";
import Cookies from "js-cookie";

export default function LogoutButton() {
  const router = useRouter();

  const handleLogout = () => {
    Cookies.remove("auth_token");
    router.push("/login");
  };

  return (
    <button onClick={handleLogout}  className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 focus:bg-gray-100">
      Logout
    </button>
  );
}
