export const metadata = {
  title: 'FixAm - Abuja Artisans',
  description: 'Find local help in Abuja',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
