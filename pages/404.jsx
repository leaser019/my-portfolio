import PageTransition from '@/components/PageTransition';
import Head from 'next/head';
import Link from 'next/link';

export default function NotFound() {
  return (
    <PageTransition>
      <Head>
        <title>404 ✦ Lost in Space</title>
        <link rel="icon" href="/khang-logo.webp" />
      </Head>
      <div className="flex flex-col items-center justify-center min-h-screen px-6">
        <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-pink-500 to-blue-500 bg-clip-text text-transparent mb-4">
          404 - Lost and adrift, bro!
        </h1>
        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 text-center">
          Oops, this page does not exist. Maybe you took a wrong turn?
        </p>
        <Link
          href="/"
          className="px-6 py-3 rounded-full bg-gradient-to-r from-blue-500 to-pink-500 text-white font-semibold hover:scale-105 transition-all"
        >
          Back To Home Page
        </Link>
      </div>
    </PageTransition>
  );
}