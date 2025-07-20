import { Head, Html, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html
      className="scroll-smooth"
      prefix="https://ogp.me/ns/website#"
      lang="en"
    >
      <Head>
        <meta name="title" content="Vo Minh Khang ✦ developer" />
        <meta name="description" content="Developer // Web" />

        {/* <!-- Open Graph / Facebook --> */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://vominhkhang.vercel.app/" />
        <meta property="og:title" content="Vo Minh Khang ✦ developer" />
        <meta property="og:description" content="Developer // Web" />
        <meta
          property="og:image"
          content="https://github.com/user-attachments/assets/55c12d18-f0aa-4717-877a-b5ee889a2e20"
        />

        {/* <!-- Twitter --> */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content="https://vominhkhang.vercel.app/"
        />
        <meta property="twitter:title" content="Vo Minh Khang ✦ developer" />
        <meta property="twitter:description" content="Developer // Web" />
        <meta
          property="twitter:image"
          content="https://github.com/user-attachments/assets/55c12d18-f0aa-4717-877a-b5ee889a2e20"
        />

        {/* whatsapp */}
        <meta property="og:site_name" content="Vo Minh Khang ✦ developer" />
        <meta property="og:title" content="Vo Minh Khang ✦ developer" />
        <meta property="og:description" content="Developer // Web" />
        <meta
          property="og:image"
          itemprop="image"
          content="https://github.com/user-attachments/assets/55c12d18-f0aa-4717-877a-b5ee889a2e20"
        />
        <meta property="og:type" content="website" />

        {/* <!-- Facebook --> */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://vominhkhang.vercel.app/" />
        <meta property="og:title" content="Vo Minh Khang ✦ developer" />
        <meta property="og:description" content="Developer // Web" />
        <meta
          property="og:image"
          content="https://github.com/user-attachments/assets/55c12d18-f0aa-4717-877a-b5ee889a2e20"
        />

        {/* <!-- Zalo --> */}
        <meta property="zalo:card" content="summary_large_image" />
        <meta property="zalo:url" content="https://vominhkhang.vercel.app/" />
        <meta property="zalo:title" content="Vo Minh Khang ✦ developer" />
        <meta property="zalo:description" content="Developer // Web" />
        <meta
          property="zalo:image"
          content="https://github.com/user-attachments/assets/55c12d18-f0aa-4717-877a-b5ee889a2e20"
        />

        {/* <!-- Instagram --> */}
        <meta property="insta:card" content="summary_large_image" />
        <meta property="insta:url" content="https://vominhkhang.vercel.app/" />
        <meta property="insta:title" content="Vo Minh Khang ✦ developer" />
        <meta property="insta:description" content="Developer // Web" />
        <meta
          property="insta:image"
          content="https://github.com/user-attachments/assets/55c12d18-f0aa-4717-877a-b5ee889a2e20"
        />

        {/* <!-- LinkedIn --> */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://vominhkhang.vercel.app/" />
        <meta property="og:title" content="Vo Minh Khang ✦ developer" />
        <meta property="og:description" content="Developer // Web" />
        <meta
          property="og:image"
          content="https://github.com/user-attachments/assets/55c12d18-f0aa-4717-877a-b5ee889a2e20"
        />

        <link
          rel="search"
          href="/opensearch.xml"
          type="application/opensearchdescription+xml"
          title="Vo Minh Khang ✦ developer"
        />
        {/* Font loading is now handled by next/font in _app.jsx */}
      </Head>
      <body className="back font-out mx-auto bg-[#fffdfd] dark:bg-[#000000] overflow-x-hidden lg:transform-gpu">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
