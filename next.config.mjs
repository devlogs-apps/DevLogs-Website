/** @type {import('next').NextConfig} */
const nextConfig = {
  serverExternalPackages: ["google-play-scraper"],
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "play-lh.googleusercontent.com" },
      { protocol: "https", hostname: "*.googleusercontent.com" },
      { protocol: "https", hostname: "play.google.com" },
      { protocol: "https", hostname: "*.ggpht.com" },
    ],
  },
}

export default nextConfig
