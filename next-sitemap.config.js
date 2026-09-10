module.exports = {
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || "https://example.com",
  generateRobotsTxt: true,
  // optional: exclude specific routes from the sitemap
  exclude: ["/api/*"],
  // optional: set the maximum number of URLs per sitemap file
  sitemapSize: 7000,
};
