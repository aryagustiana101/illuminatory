const t3Env = await import("./src/env.js");

const cspHeader = `
    default-src *;
    script-src * 'unsafe-eval' 'unsafe-inline';
    child-src *;
    style-src * 'unsafe-inline';
    img-src * blob: data:;
    font-src *;
    frame-src *;
    object-src *;
    base-uri *;
    form-action *;
    frame-ancestors *;
    block-all-mixed-content;
    ${t3Env?.env?.NEXT_PUBLIC_APP_URL?.startsWith("http://") ? "" : "upgrade-insecure-requests;"}
`;

const securityHeaders = [
  {
    key: "Content-Security-Policy",
    value: cspHeader.replace(/\n/g, ""),
  },
  {
    key: "X-DNS-Prefetch-Control",
    value: "on",
  },
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
  {
    key: "X-Frame-Options",
    value: "SAMEORIGIN",
  },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), browsing-topics=()",
  },
  {
    key: "X-Content-Type-Options",
    value: "nosniff",
  },
  {
    key: "Referrer-Policy",
    value: "origin-when-cross-origin",
  },
  {
    key: "X-XSS-Protection",
    value: "1; mode=block",
  },
];

/** @type {import('next').NextConfig} */
const nextConfig = {
  headers: async () => [{ source: "/(.*)", headers: securityHeaders }],
};

export default nextConfig;
