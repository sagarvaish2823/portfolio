export default function manifest() {
  return {
    name: "Sagar Vaish Portfolio",
    short_name: "websitesbysagar",
    description: "This is Sagar's portfolio website.",
    start_url: "/",
    display: "standalone",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
