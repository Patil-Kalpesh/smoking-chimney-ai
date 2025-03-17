export default function handler(req, res) {
    const baseUrl = 'http://localhost:3000'; // Change this to your actual domain

    const pages = [
        { url: '', priority: 1.0 },
        { url: 'about', priority: 0.8 },
        { url: 'contact', priority: 0.8 }
    ];

    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
        ${pages.map(page => `
            <url>
                <loc>${baseUrl}/${page.url}</loc>
                <priority>${page.priority}</priority>
            </url>
        `).join('')}
    </urlset>`;

    res.setHeader('Content-Type', 'application/xml');
    res.status(200).send(sitemap);
}
