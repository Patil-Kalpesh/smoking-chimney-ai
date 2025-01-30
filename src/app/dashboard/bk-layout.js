
import React from 'react';

export default function DashboardLayout({ children }) {
  return (
    // <html lang="en">
    //   <body>
        <div className="dashboard-container">
          {/* Custom dashboard-specific structure */}
          {children}
        </div>
    //   </body>
    // </html>
  );
}
