import { SitemapStream, streamToPromise } from 'sitemap';
import { Readable } from 'stream';

const sitemapHandler = async (req, res) => {
  const pages = [
    { url: '/', changefreq: 'daily', priority: 1.0 },
    { url: '/about', changefreq: 'weekly', priority: 0.8 },
    { url: '/tech', changefreq: 'weekly', priority: 0.8 },
    { url: '/work', changefreq: 'weekly', priority: 0.8 },
    { url: '/timeline', changefreq: 'weekly', priority: 0.7 },
  ];

  const stream = new SitemapStream({
    hostname: 'https://vominhkhang.vercel.app',
  });

  res.writeHead(200, {
    'Content-Type': 'application/xml',
  });

  const xmlString = await streamToPromise(
    Readable.from(pages).pipe(stream)
  ).then((data) => data.toString());

  res.end(xmlString);
};

export default sitemapHandler;
