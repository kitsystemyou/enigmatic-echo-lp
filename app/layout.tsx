import type React from "react"
import type { Metadata } from "next"
import { Playfair_Display, Lora } from "next/font/google"
import "./globals.css"
import Link from "next/link"

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
})

const lora = Lora({
  subsets: ["latin"],
  variable: "--font-lora",
})

export const metadata: Metadata = {
  title: "Enigmatic Echo Sister's",
  description: "AI Image Generation Bot Accounts",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ja">
      <body className={`${playfair.variable} ${lora.variable} font-serif`}>
        <header className="mansion-header p-4">
          <div className="container mx-auto flex justify-between items-center">
            <Link href="/" className="text-xl font-bold font-serif">
              Enigmatic Echo Sister's
            </Link>
            <Link href="/admin" className="hover:underline text-amber-100">
              管理者ページ
            </Link>
          </div>
        </header>
        <main className="mansion-main container mx-auto py-8 px-4">{children}</main>
        <footer className="mansion-footer py-6 mt-12">
          <div className="container mx-auto text-center text-sm text-amber-100">
            <p>© 2025 Enigmatic Echo Sister's</p>
          </div>
        </footer>
      </body>
    </html>
  )
}



import './globals.css'