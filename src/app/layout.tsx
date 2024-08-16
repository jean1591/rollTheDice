import './globals.css'

import { Inter } from 'next/font/google'
import { Metadata } from 'next'
import { StoreProvider } from './lib/store/storeProvider'
import { Toaster } from 'react-hot-toast'
import { classNames } from '@/utils/classNames'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    template: 'Race to 100 - Will you be the first to reach a 100 points ?',
    default: 'Race to 100 - Will you be the first to reach a 100 points ?',
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
          className={classNames(inter.className, 'bg-white text-slate-800')}
        >
          <Toaster position="bottom-right" reverseOrder={true} />
          {children}
        </body>
      </html>
    </StoreProvider>
  )
}
