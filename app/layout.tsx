import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google'; // Import next/font
import { ThemeProvider } from '@/components/theme-provider';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import { Toaster } from '@/components/ui/sonner';

// Load Inter font with Next.js font optimization
const inter = Inter({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  display: 'swap',
});

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
  icons: {
    icon: '/favicon.ico', // Add favicon path
    shortcut: '/favicon-16x16.png', // Optional: smaller favicon
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.className} suppressHydrationWarning>
      <body className="font-sans antialiased bg-gradient-to-b from-background to-background/80 min-h-screen flex flex-col">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}