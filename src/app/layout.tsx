import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/ui/Navbar";
import { Footer } from "@/components/ui/Footer";
import { ToastProvider } from "@/components/ui/Toast";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0b1220" },
  ],
}

export const metadata: Metadata = {
  title: "OG Studio — Social preview images",
  description: "Design beautiful social preview images and generate them on the fly with a simple API. Fast, customizable, and developer-friendly.",
  keywords: ["og images", "social preview", "meta tags", "open graph", "twitter cards", "social media"],
  authors: [{ name: "OG Studio" }],
  creator: "OG Studio",
  metadataBase: new URL(process.env.NEXT_PUBLIC_URL || 'http://localhost:3000'),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    title: "OG Studio — Social preview images",
    description: "Design beautiful social preview images and generate them on the fly with a simple API.",
    siteName: "OG Studio",
    images: [
      {
        url: "/api/og?title=OG%20Studio&subtitle=Fast%20OG%20images",
        width: 1200,
        height: 630,
        alt: "OG Studio - Fast OG images",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "OG Studio — Social preview images",
    description: "Design beautiful social preview images and generate them on the fly with a simple API.",
    images: ["/api/og?title=OG%20Studio&subtitle=Fast%20OG%20images"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ToastProvider>
          <Navbar />
          <main id="main-content">
            {children}
          </main>
          <Footer />
        </ToastProvider>
      </body>
    </html>
  );
}
