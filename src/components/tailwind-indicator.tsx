import * as React from "react";

export default function TailwindIndicator() {
  return (
    <div className="fixed bottom-1 right-1 z-[999] flex h-8 w-8 items-center justify-center rounded-full bg-neutral-950 p-3 font-mono text-xs text-neutral-50 dark:bg-neutral-50 dark:text-neutral-950">
      <div className="block md:hidden lg:hidden xl:hidden 2xl:hidden">sm</div>
      <div className="hidden md:block lg:hidden xl:hidden 2xl:hidden">md</div>
      <div className="hidden lg:block xl:hidden 2xl:hidden">lg</div>
      <div className="hidden xl:block 2xl:hidden">xl</div>
      <div className="hidden 2xl:block">2xl</div>
    </div>
  );
}
