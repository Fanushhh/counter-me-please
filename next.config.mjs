/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          hostname: "ddragon.leagueoflegends.com",
        },
        {
          hostname: "raw.communitydragon.org",
        },
        {
          hostname: "cdn.communitydragon.org",
        },
      ],
    },
  };
  
  export default nextConfig;
  