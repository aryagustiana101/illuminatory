import { type MetadataRoute } from "next";

import { fullUrl } from "~/lib/utils";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: fullUrl(),
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
