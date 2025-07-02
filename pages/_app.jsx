import Footer from '@/components/Footer';
import Header from '@/components/Header';
import ScrollToTop from '@/components/ScrollToTop';
import '@/styles/globals.css';
import { Analytics } from '@vercel/analytics/react';
import { ThemeProvider } from 'next-themes';

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider enableSystem={true} attribute="class">
      <main className="land relative z-10">
        <Header />
        <Component {...pageProps} />
        <Analytics />
        <Footer />
        <ScrollToTop />
      </main>
    </ThemeProvider>
  );
}
