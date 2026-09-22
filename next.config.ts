import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  async redirects() {
    return [
      {
        source: '/journey',
        destination: '/web-creator-ai/journey',
        permanent: false,
      },
      {
        source: '/modules',
        destination: '/web-creator-ai/modules',
        permanent: false,
      },
      {
        source: '/ai-lab',
        destination: '/web-creator-ai/ai-lab',
        permanent: false,
      },
      {
        source: '/marketing-lab',
        destination: '/web-creator-ai/marketing-lab',
        permanent: false,
      },
      {
        source: '/resources',
        destination: '/web-creator-ai/resources',
        permanent: false,
      },
      {
        source: '/sessions',
        destination: '/web-creator-ai/sessions',
        permanent: false,
      },
      {
        source: '/trainer/sessions',
        destination: '/trainer',
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
