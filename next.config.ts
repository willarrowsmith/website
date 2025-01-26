import type { NextConfig } from "next";
 
export default {
  redirects: async () => {
    return [
      {
        source: "/linkedin",
        destination: "https://linkedin.com/will-arrowsmith-",
        permanent: true,
      },
    ];
  },
} satisfies NextConfig;
 
 
