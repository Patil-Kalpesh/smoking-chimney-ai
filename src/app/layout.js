import "./globals.css";

export const metadata = {
  title: {
    default: "Smoking Chimney | AI Development Company & AI Consulting Firm",
    template: "%s | Smoking Chimney AI",
  },
  description:
    "Smoking Chimney, an AI consulting firm & AI development company, delivers cutting-edge AI solutions & digital transformation services to elevate business performance.",
  openGraph: {
    title: "Smoking Chimney | AI Development Company & AI Consulting Firm",
    description:
      "Smoking Chimney, an AI consulting firm & AI development company, delivers cutting-edge AI solutions & digital transformation services to elevate business performance.",
    url: "https://www.smokingchimney.in",
    type: "website",
    images: [
      {
        url: "https://www.smokingchimney.in/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Smoking Chimney AI Development",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Smoking Chimney | AI Development Company & AI Consulting Firm",
    description:
      "Smoking Chimney, an AI consulting firm & AI development company, delivers cutting-edge AI solutions & digital transformation services to elevate business performance.",
    images: ["https://www.smokingchimney.in/twitter-image.jpg"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Smoking Chimney AI" />
        <meta
          name="keywords"
          content="AI development, AI consulting, digital transformation, machine learning solutions, artificial intelligence services"
        />
        <meta property="og:url" content="https://www.smokingchimney.in" />
        <meta property="og:type" content="website" />
      </head>
      <body className="antialiased bg-white">{children}</body>
    </html>
  );
}
