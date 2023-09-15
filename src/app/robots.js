export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/private/",
    },
    sitemap: "https://websitesbysagar.vercel.app/sitemap.xml",
  };
}
