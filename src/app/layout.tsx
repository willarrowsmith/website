import './globals.css'

import { Inter } from 'next/font/google'
import type { PropsWithChildren } from 'react'
import PlayerControl from './spotify/_components/PlayerControl'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Will Arrowsmith Portfolio',
  description: 'A simple portfolio built with Next.js',
}

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
