import Footer from '@/components/Footer';
import Header from '@/components/Header';
import ScrollToTop from '@/components/ScrollToTop';
import {
  inter,
  lexendDeca,
  nunito,
  outfit,
  quicksand,
  spaceMono,
} from '@/lib/fonts';
import '@/styles/globals.css';
import { Analytics } from '@vercel/analytics/react';
import { ThemeProvider } from 'next-themes';
import Head from 'next/head';
import { useRouter } from 'next/router';

export default function App({ Component, pageProps }) {
  const router = useRouter();
  const canonicalUrl = `https://vominhkhang.vercel.app${router.asPath === '/' ? '' : router.asPath}`;

  return (
    <ThemeProvider enableSystem={true} attribute="class">
      <Head>
        <link rel="canonical" href={canonicalUrl} />
      </Head>
      <main
        className={`land relative z-10 ${inter.variable} ${outfit.variable} ${lexendDeca.variable} ${spaceMono.variable} ${nunito.variable} ${quicksand.variable}`}
      >
        <Header />
        <Component {...pageProps} />
        <Analytics />
        <Footer />
        <ScrollToTop />
      </main>
    </ThemeProvider>
  );
}
