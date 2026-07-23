export const metadata: Metadata = {
  title: {
    default: 'Ruthvik Varma',
    template: '%s | Ruthvik Varma',
  },

  description:
    'Final Year Data Science & AI student building intelligent systems across Computer Vision, Machine Learning, Deep Learning, and Generative AI.',

  keywords: [
    'Ruthvik Varma',
    'AI Engineer',
    'Machine Learning',
    'Deep Learning',
    'Computer Vision',
    'Generative AI',
    'LLM',
    'Data Science',
    'Portfolio',
    'Next.js',
  ],

  authors: [
    {
      name: 'Ruthvik Varma',
    },
  ],

  creator: 'Ruthvik Varma',

  metadataBase: new URL('https://ruthvik-varma.vercel.app'),

  openGraph: {
    title: 'Ruthvik Varma',
    description:
      'Building Intelligent Systems with AI, Machine Learning, Computer Vision, and Generative AI.',
    url: 'https://ruthvik-varma.vercel.app',
    siteName: 'Ruthvik Varma',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Ruthvik Varma Portfolio',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Ruthvik Varma',
    description:
      'Building Intelligent Systems with AI, Machine Learning, Computer Vision, and Generative AI.',
    images: ['/og-image.png'],
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