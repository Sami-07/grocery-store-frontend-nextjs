import Navbar from '@/components/Navbar'
import './globals.css'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Qidmat Kirana Store',
  description: 'Qidmat Kirana & General Store. Wholesale & Retail',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">

      <body>
        {/* <link href="https://fonts.googleapis.com/css2?family=Work+Sans:wght@600&display=swap" rel="stylesheet"></link> */}
        <link href="https://fonts.googleapis.com/css2?family=Work+Sans&display=swap" rel="stylesheet"></link>

        <Navbar />
        {children}
        <Footer /></body>
    </html>
  )
}
