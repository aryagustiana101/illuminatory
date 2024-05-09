import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
  emptyStringAsUndefined: true,
  skipValidation: !!process.env.SKIP_ENV_VALIDATION,
  client: {
    NEXT_PUBLIC_APP_URL: z.string().url(),
    NEXT_PUBLIC_APP_NAME: z.string().min(1),
    NEXT_PUBLIC_APP_DEVELOPER: z.string().min(1),
    NEXT_PUBLIC_APP_GITHUB_REPO_URL: z.string().url(),
    NEXT_PUBLIC_APP_ENV: z.enum(["development", "production"]),
  },
  server: {},
  runtimeEnv: {
    NEXT_PUBLIC_APP_URL: process.env.NEXT_PUBLIC_APP_URL,
    NEXT_PUBLIC_APP_ENV: process.env.NEXT_PUBLIC_APP_ENV,
    NEXT_PUBLIC_APP_NAME: process.env.NEXT_PUBLIC_APP_NAME,
    NEXT_PUBLIC_APP_DEVELOPER: process.env.NEXT_PUBLIC_APP_DEVELOPER,
    NEXT_PUBLIC_APP_GITHUB_REPO_URL:
      process.env.NEXT_PUBLIC_APP_GITHUB_REPO_URL,
  },
});
