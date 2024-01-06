import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import UiProvider from '@/lib/UiProvider'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title:
    'GLOBAL CITIZEN & ENTREPRENEUR COMMUNITY - CỘNG ĐỒNG CÔNG DÂN VÀ DOANH NHÂN TOÀN CẦU',
  description:
    'GLOBAL CITIZEN & ENTREPRENEUR COMMUNITY - CỘNG ĐỒNG CÔNG DÂN VÀ DOANH NHÂN TOÀN CẦU',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <UiProvider>
          <Navbar />
          <main className="">{children}</main>
          <Footer />
        </UiProvider>
      </body>
    </html>
  )
}
