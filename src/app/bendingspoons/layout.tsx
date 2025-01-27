

import type { PropsWithChildren } from 'react'
import PlayerControl from './_components/PlayerControl'



export const metadata = {
  title: 'Will Arrowsmith Portfolio',
  description: 'A simple portfolio built with Next.js',
}

export default function RootLayout({
  children
}: PropsWithChildren) {
  return (
    <div className="flex flex-col h-screen bg-black text-white">
          <main className="flex flex-1 overflow-hidden">
            {children}
          </main>
        </div>
  );
}
