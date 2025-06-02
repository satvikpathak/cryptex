import './globals.css';
import type { Metadata } from 'next';
import { ThemeProvider } from '@/components/theme-provider';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import { Toaster } from '@/components/ui/sonner';

export const metadata: Metadata = {
  title: 'Cryptex | Your AI Twin on the Blockchain',
  description: 'Train, tokenize, and own your digital identity powered by AI and stored immutably on the blockchain.',
  keywords: ['AI', 'blockchain', 'NFT', 'digital identity', 'web3', 'GPT'],
  authors: [{ name: 'Cryptex Team' }],
  openGraph: {
    title: 'Cryptex | Your AI Twin on the Blockchain',
    description: 'Train, tokenize, and own your digital identity powered by AI and stored immutably on the blockchain.',
    url: 'https://cryptex.ai',
    siteName: 'Cryptex',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Cryptex - Your AI Twin on the Blockchain',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cryptex | Your AI Twin on the Blockchain',
    description: 'Train, tokenize, and own your digital identity powered by AI and stored immutably on the blockchain.',
    images: ['/og-image.png'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-sans antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex min-h-screen flex-col bg-gradient-to-b from-background to-background/80">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}