import './globals.css'
import React from 'react'
import styled from './layout.module.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Suwaaa',
  description: '諏訪のお店を再発見',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <body className={inter.className}>
        <main className={styled.container}>
          { children }
        </main>
      </body>
    </html>
  )
}
