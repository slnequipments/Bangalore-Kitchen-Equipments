# Bangalore Kitchen Equipments Website

Static SEO website for `https://www.bangalorekitchenequipments.in/`.

## What is included

- `index.html` - main landing page
- `products.html` - full product range and equipment photo gallery
- `services.html` - kitchen planning, fabrication, installation and exhaust services
- `about.html` - company overview
- `contact.html` - quote and contact page
- `assets/products/` - optimized commercial kitchen equipment photos
- `robots.txt` and `sitemap.xml` - search engine files
- `wrangler.jsonc` and `src/worker.js` - Cloudflare Workers static-assets deployment

## Local Build

```sh
npm install
npm run build
```

The build output is written to `dist/`.

## Cloudflare Deployment

This project is configured for Cloudflare Workers Static Assets because the domain already has a Worker named `bangalore-kitchen`.

```sh
npm run deploy:dry-run
npm run deploy
```

The enquiry forms open WhatsApp with the customer's message, so no backend key is required.
