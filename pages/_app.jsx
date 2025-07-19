import Footer from '@/components/Footer';
import Header from '@/components/Header';
import ScrollToTop from '@/components/ScrollToTop';
import SchemaOrg from '@/components/SchemaOrg';
import '@/styles/globals.css';
import { Analytics } from '@vercel/analytics/react';
import { ThemeProvider } from 'next-themes';

export default function App({ Component, pageProps }) {
  const router = useRouter();
  return (
    <ThemeProvider enableSystem={true} attribute="class">
      <main className="land relative z-10">
        <Header />
        <Component {...pageProps} />
        <Analytics />
        <Footer />
        <ScrollToTop />
        <SchemaOrg path={router.pathname} />
      </main>
    </ThemeProvider>
  );
}
