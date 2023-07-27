export const metadata = {
  title: 'Weather',
  description: 'Weather',
}
 
export default function RootLayout({ children }) {
 return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
