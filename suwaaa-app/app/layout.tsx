import './globals.css'
import styled from './layout.module.css'
import type { Metadata } from 'next'
import { Noto_Sans_JP } from "next/font/google"

export const metadata: Metadata = {
  title: 'Suwaaa',
  description: '諏訪のお店を再発見',
}

const font = Noto_Sans_JP({
  weight: ["400", "500"],
  subsets: ["latin"],
  display: "swap"
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <body className={font.className}>
        <main className={styled.container}>
          { children }
        </main>
      </body>
    </html>
  )
}
