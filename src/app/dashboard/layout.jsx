
import React from 'react';
import { Outfit } from "next/font/google";

const outfit = Outfit({ subsets: ['latin'], weight: ["300", "400", "500"] })

export default function DashboardLayout({ children }) {
  return (
    // <html lang="en">
    //   <body>
        <div className={`${outfit.className} antialiased text-gray-700 dashboard-container`}>
          {/* Custom dashboard-specific structure */}
          {children}
        </div>
    //   </body>
    // </html>
  );
}
