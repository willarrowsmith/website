import { Inter } from 'next/font/google'
import './globals.css'
import PlayerControl from '../components/PlayerControl'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Will Arrowsmith Portfolio',
  description: 'A simple portfolio built with Next.js',
}

export default function RootLayout({
  children
}) {
  return (
    (<html lang="en">
      <body className={inter.className}>
        <div className="flex flex-col h-screen bg-black text-white">
          <main className="flex flex-1 overflow-hidden">
            {children}
          </main>
          <PlayerControl />
        </div>
      </body>
    </html>)
  );
}

