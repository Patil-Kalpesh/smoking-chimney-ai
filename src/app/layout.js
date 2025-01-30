import "./globals.css";
import AuthProvider from "@/components/AuthProvider";

export const metadata = {
  title: "Smoking Chimney AI",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased bg-white">
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}
