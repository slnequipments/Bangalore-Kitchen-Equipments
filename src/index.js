import { generateSitemap } from './sitemap.js';
import { renderPage, render404, render500 } from './templates/pages.js';

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    let path = url.pathname;

    // 1. WWW Redirect (SEO Fix)
    if (url.hostname === 'bangalorekitchenequipments.in') {
      return Response.redirect(`https://www.bangalorekitchenequipments.in${path}`, 301);
    }

    // 2. Trailing Slash Redirect (SEO Fix)
    if (path !== '/' && path.endsWith('/')) {
      const cleanPath = path.replace(/\/+$/, '');
      return Response.redirect(`https://${url.hostname}${cleanPath}`, 301);
    }

    // 3. robots.txt Routing
    if (path === '/robots.txt') {
      const robotsTxt = `User-agent: *
Allow: /
Disallow: /404

Sitemap: https://www.bangalorekitchenequipments.in/sitemap.xml`;
      return new Response(robotsTxt, {
        headers: {
          'Content-Type': 'text/plain; charset=utf-8',
          'Cache-Control': 'public, max-age=86400'
        }
      });
    }

    // 4. sitemap.xml Routing
    if (path === '/sitemap.xml') {
      const sitemapXml = generateSitemap();
      return new Response(sitemapXml, {
        headers: {
          'Content-Type': 'application/xml; charset=utf-8',
          'Cache-Control': 'public, max-age=86400'
        }
      });
    }

    // 5. Static Assets Routing (CSS, JS, Images)
    const staticExts = ['.css', '.js', '.png', '.jpg', '.svg', '.webmanifest', '.ico', '.txt'];
    if (staticExts.some(ext => path.endsWith(ext))) {
      return env.ASSETS.fetch(request);
    }

    // 6. Dynamic Page Routing
    try {
      const html = renderPage(path);
      if (html) {
        return new Response(html, {
          headers: {
            'Content-Type': 'text/html; charset=utf-8',
            'Cache-Control': 'public, max-age=3600, s-maxage=3600, stale-while-revalidate=86400',
            'X-Content-Type-Options': 'nosniff',
            'Strict-Transport-Security': 'max-age=31536000; includeSubDomains; preload'
          }
        });
      } else {
        // 404 Not Found Handling
        return new Response(render404(), {
          status: 404,
          headers: { 'Content-Type': 'text/html; charset=utf-8' }
        });
      }
    } catch (error) {
      console.error(error);
      return new Response(render500(), {
        status: 500,
        headers: { 'Content-Type': 'text/html; charset=utf-8' }
      });
    }
  }
};
