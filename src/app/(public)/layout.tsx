import { Footer } from './Footer'

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div>
      <div className="mx-auto mb-12 mt-4 flex max-w-5xl flex-col items-center justify-center px-4">
        {children}
      </div>
      <Footer />
    </div>
  )
}
