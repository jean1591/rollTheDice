import './globals.css'

import { Inter } from 'next/font/google'
import { Metadata } from 'next'
import { StoreProvider } from './lib/store/storeProvider'
import { Toaster } from 'react-hot-toast'
import { classNames } from '@/utils/classNames'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    template: 'Dice - Can you beat the odds ?',
    default: 'Dice - Can you beat the odds ?',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <StoreProvider>
      <html lang="fr">
        <body
          className={classNames(
            inter.className,
            'mx-auto flex h-screen max-w-5xl flex-col items-center justify-center bg-white px-4 text-slate-800 sm:px-6 lg:px-8'
          )}
        >
          <Toaster position="bottom-right" reverseOrder={true} />
          {children}
        </body>
      </html>
    </StoreProvider>
  )
}
