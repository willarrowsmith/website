import './globals.css'

import { Inter } from 'next/font/google'
import type { PropsWithChildren } from 'react'
import PlayerControl from './spotify/_components/PlayerControl'
import type { Metadata } from 'next'

const inter = Inter({ subsets: ['latin'] })

const domain = "https://wilarrowsmith.vercel.app";
 
const name = "Will Arrowsmith";
const description = "Website Portfolio";
 
export const metadata: Metadata = {
  metadataBase: new URL(domain),
  title: name,
  description: description,
  authors: {
    name: name,
    url: domain,
  },
  keywords: "Will Arrowsmith, Product Manager",
  openGraph: {
    title: name,
    description: description,
    type: "website",
    url: domain,
    images: {
      url: "/will.jpg",
      alt: description,
    },
    locale: "en_GB",
  },
};

export default function RootLayout({
  children
}: PropsWithChildren) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
