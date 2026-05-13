import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import localFont from 'next/font/local'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const geistSans = Geist({
  subsets: ["latin"],
  variable: '--font-geist-sans',
})

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: '--font-geist-mono',
})

const underground = localFont({
  src: '../public/fonts/Underground.ttf',
  variable: '--font-underground',
  weight: '100 900',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'RODIONE — Video Editor & Creator',
  description: 'Монтаж видео, Reels, TikTok, YouTube. Работаю с блогерами, брендами, бизнесами и артистами.',
  keywords: ['video editing', 'монтаж видео', 'reels', 'tiktok', 'youtube', 'видеомонтаж', 'creator'],
  authors: [{ name: 'Rodione' }],
  creator: 'Rodione',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
  openGraph: {
    title: 'RODIONE — Video Editor & Creator',
    description: 'Монтаж видео, Reels, TikTok, YouTube. Работаю с блогерами, брендами и артистами.',
    type: 'website',
  },
}

export const viewport: Viewport = {
  themeColor: '#000000',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} ${underground.variable} bg-background`}>
      <body className="font-sans antialiased min-h-screen bg-background text-foreground">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
