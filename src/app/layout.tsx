import type { Metadata, Viewport } from 'next';
import './globals.css';
import { personalInfo } from '@/data/portfolioData';

export const metadata: Metadata = {
  metadataBase: new URL('https://ghawri.github.io'),
  title: `${personalInfo.name} | Full Stack Developer & MERN Specialist`,
  description: `${personalInfo.name} is a Full Stack Web Developer specializing in MERN stack (MongoDB, Express, React, Node.js), Next.js, WebSockets, and modern responsive web applications. Explore projects and experience.`,
  keywords: [
    'Ishant Ghawri',
    'Full Stack Developer',
    'MERN Stack Developer',
    'React Developer',
    'Next.js Developer',
    'Node.js Developer',
    'Web Developer Portfolio',
    'Software Engineer India',
    'MCA Student',
  ],
  authors: [{ name: personalInfo.name, url: personalInfo.github }],
  creator: personalInfo.name,
  openGraph: {
    title: `${personalInfo.name} | Full Stack Developer Portfolio`,
    description: personalInfo.tagline,
    url: 'https://ghawri.github.io/Portfolio/',
    siteName: `${personalInfo.name} Portfolio`,
    images: [
      {
        url: '/assets/mypic.jpeg',
        width: 800,
        height: 600,
        alt: `${personalInfo.name} Portfolio Preview`,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: `${personalInfo.name} | Full Stack Developer`,
    description: personalInfo.tagline,
    images: ['/assets/mypic.jpeg'],
  },
  icons: {
    icon: '/favicon.ico',
  },
};

export const viewport: Viewport = {
  themeColor: '#080c14',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
