import './globals.css'

import { Inter } from 'next/font/google'
import { Metadata } from 'next'
import Script from 'next/script'
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
        <Script
          defer
          src="https://umami-xowcgw8c84gcsskogkkg40cc.rb2.fr/script.js"
          data-website-id="7411a5b9-e579-462f-a64b-e1cacc1a4c30"
        />
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
