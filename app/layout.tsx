import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import UmamiAnalytics from '@/components/UmamiAnalytics';
import { authorConfig } from '@/lib/author';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const directusUrl = process.env.DIRECTUS_URL;
const authorName = authorConfig.name;
const authorFullName = authorConfig.fullName;
const authorTitle = authorConfig.title;
const authorBio = authorConfig.bio;
const authorAvatar = authorConfig.avatar;

const title = `${authorFullName} — ${authorTitle}`;

export const metadata: Metadata = {
  title,
  description: authorBio,
  openGraph: {
    title,
    description: authorBio,
    url: 'https://hongcheung.com',
    siteName: authorFullName,
    images: authorAvatar
      ? [{ url: authorAvatar, width: 800, height: 800 }]
      : [],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description: authorBio,
    images: authorAvatar ? [authorAvatar] : [],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <meta name="theme-color" content="#ffffff" media="(prefers-color-scheme: light)" />
        <meta name="theme-color" content="#0a0a0a" media="(prefers-color-scheme: dark)" />
        <link rel="preconnect" href={directusUrl} />
        <link rel="dns-prefetch" href={directusUrl} />
        <UmamiAnalytics />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}