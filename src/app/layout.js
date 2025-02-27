import "./globals.css";
import AuthProvider from "@/components/AuthProvider";
import { TemplateContext } from "next/dist/shared/lib/app-router-context.shared-runtime";

export const metadata = {
  title:{
    default: "Smoking Chimney AI",
    template:" My Smoking Chimney AI"
  },
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head></head>
      <body className="antialiased bg-white">
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}
