import { Footer } from './Footer'

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className="flex min-h-screen flex-col">
      <div className="flex-grow">
        <div className="mx-auto my-20 flex max-w-5xl flex-col items-center justify-center px-4 lg:px-0">
          {children}
        </div>
      </div>
      <Footer />
    </div>
  )
}
