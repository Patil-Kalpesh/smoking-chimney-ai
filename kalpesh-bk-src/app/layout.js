
// import localFont from "next/font/local";
import "./globals.css";
import React from 'react';
import Header from '@/app/header/page';
import Footer from '@/components/Footer/index';
// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });



export const metadata = {
  title: "Smoking-chimney-ai",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  

  return (
    <html lang="en">
      <body className={` antialiased bg-white`} >
   
        <Header />
        <div className="mt-20">  {children}</div>
        <Footer />
      </body>
    </html>
  );
}
