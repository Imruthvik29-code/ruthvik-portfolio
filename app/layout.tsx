import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: {
    default: 'Ruthvik Varma Dendukuri',
    template: '%s | Ruthvik Varma',
  },

  description:
    'Ruthvik Varma Dendukuri works across AI, data, computer vision, and software development.',

  authors: [
    {
      name: 'Ruthvik Varma Dendukuri',
    },
  ],

  creator: 'Ruthvik Varma Dendukuri',

  metadataBase: new URL('https://ruthvik-varma.vercel.app'),

  openGraph: {
    title: 'Ruthvik Varma Dendukuri',
    description:
      'Work across AI, data, computer vision, and software development.',
    url: 'https://ruthvik-varma.vercel.app',
    siteName: 'Ruthvik Varma Dendukuri',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/opengraph-image',
        width: 1200,
        height: 630,
        alt: 'Ruthvik Varma Dendukuri Portfolio',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Ruthvik Varma Dendukuri',
    description:
      'Work across AI, data, computer vision, and software development.',
    images: ['/opengraph-image'],
  },

  robots: {
    index: true,
    follow: true,
  },

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
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
