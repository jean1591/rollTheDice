export default function PublicLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className="mx-auto my-20 max-w-7xl px-4 sm:px-6 lg:px-8">
      {children}
    </div>
  )
}
