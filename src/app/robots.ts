import { fullUrl } from "~/lib/utils";

export default function robots() {
  return {
    host: fullUrl(),
    rules: [{ userAgent: "*" }],
    sitemap: fullUrl("/sitemap.xml"),
  };
}
