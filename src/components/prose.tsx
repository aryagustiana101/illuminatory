import * as React from "react";

import { cn } from "~/lib/utils";

interface ProseProps {
  content: string;
  className?: string;
}

export default function Prose({ content, className }: ProseProps) {
  return (
    <article
      dangerouslySetInnerHTML={{ __html: content }}
      className={cn(
        "prose prose-sm prose-neutral max-w-none  dark:prose-invert",
        className
      )}
    />
  );
}
