import { APP_NAME } from "~/lib/constants";
import { fullUrl } from "~/lib/utils";

export const siteConfig = {
  name: APP_NAME,
  url: fullUrl(),
  ogImage: fullUrl("/opengraph-image.png"),
  description:
    "Curated collection of articles, tips, and strategies designed to illuminate the path to success in the world of commerce.",
};
