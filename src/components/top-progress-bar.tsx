"use client";

import * as React from "react";
import { type NavigateOptions } from "next/dist/shared/lib/app-router-context.shared-runtime";
import {
  useRouter as useNextRouter,
  usePathname,
  useSearchParams,
} from "next/navigation";
import NProgress from "nprogress";

export interface TopProgressBarProps {
  color?: string;
  startPosition?: number;
  delay?: number;
  stopDelayMs?: number;
  height?: number | string;
  showOnShallow?: boolean;
  options?: Partial<NProgress.NProgressOptions>;
  nonce?: string;
  transformCSS?: (css: string) => JSX.Element;
  style?: string;
}

export const TopProgressBar = React.memo(
  ({
    style,
    options,
    delay = 0,
    height = "3px",
    showOnShallow = false,
    color = "hsl(var(--primary))",
  }: TopProgressBarProps) => {
    const styles = (
      <style>
        {style ??
          `
          #nprogress {
            pointer-events: none;
          }
          
          #nprogress .bar {          
            position: fixed;
            z-index: 999999;
            top: 0;
            left: 0;
          
            width: 100%;
            height: ${height};

            background: ${color};
          }
          
          /* Fancy blur effect */
          #nprogress .peg {
            display: block;
            position: absolute;
            right: 0px;
            width: 100px;
            height: 100%;
            opacity: 1.0;

            box-shadow: 0 0 10px ${color}, 0 0 5px ${color} !important;

            -webkit-transform: rotate(3deg) translate(0px, -4px);
                -ms-transform: rotate(3deg) translate(0px, -4px);
                    transform: rotate(3deg) translate(0px, -4px);
          }
          
          /* Remove these to get rid of the spinner */
          #nprogress .spinner {
            display: block;
            position: fixed;
            z-index: 1031;
            top: 15px;
            right: 15px;
          }
          
          #nprogress .spinner-icon {
            width: 18px;
            height: 18px;
            box-sizing: border-box;

            border-top-color: ${color} !important;
            border-left-color: ${color} !important;
          
            border: solid 2px transparent;
            border-radius: 50%;
          
            -webkit-animation: nprogress-spinner 400ms linear infinite;
                    animation: nprogress-spinner 400ms linear infinite;
          }
          
          .nprogress-custom-parent {
            overflow: hidden;
            position: relative;
          }
          
          .nprogress-custom-parent #nprogress .spinner,
          .nprogress-custom-parent #nprogress .bar {
            position: absolute;
          }
          
          @-webkit-keyframes nprogress-spinner {
            0%   { -webkit-transform: rotate(0deg); }
            100% { -webkit-transform: rotate(360deg); }
          }
          @keyframes nprogress-spinner {
            0%   { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `}
      </style>
    );

    NProgress.configure(options ?? {});

    const pathname = usePathname();
    const searchParams = useSearchParams();

    React.useEffect(() => {
      NProgress.done();
    }, [pathname, searchParams]);

    React.useEffect(() => {
      let timer: NodeJS.Timeout;

      const startProgress = () => {
        // eslint-disable-next-line @typescript-eslint/unbound-method
        timer = setTimeout(NProgress.start, delay);
      };

      const stopProgress = () => {
        clearTimeout(timer);
        NProgress.done();
      };

      const handleAnchorClick = (event: MouseEvent) => {
        const anchorElement = event.currentTarget as HTMLAnchorElement;

        // Skip anchors with target="_blank" | "_top" | "_parent" | "_self"
        if (
          anchorElement.target === "_blank" ||
          anchorElement.target === "_top" ||
          anchorElement.target === "_parent"
        ) {
          return;
        }

        // Skip anchors with download attribute
        if (anchorElement.hasAttribute("download")) {
          return;
        }

        // target url without hash removed
        const targetUrl = new URL(anchorElement.href);
        const currentUrl = new URL(location.href);

        // check if search params changed
        const hasSearchParams =
          targetUrl?.searchParams?.toString() !==
          currentUrl?.searchParams?.toString();
        const paramsChanged =
          hasSearchParams && targetUrl?.search !== currentUrl?.search;
        const isSameUrl =
          targetUrl?.pathname === currentUrl?.pathname && !paramsChanged;

        // detect ctrl/cmd option/alt shift click
        if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) {
          return;
        }

        if (showOnShallow && isSameUrl) {
          return;
        }

        if (isSameUrl) {
          return;
        }

        startProgress();
      };

      const handleMutation: MutationCallback = () => {
        const anchorElements = document.querySelectorAll("a");

        const validAnchorELes = Array.from(anchorElements).filter((anchor) => {
          if (
            anchor.href.startsWith("tel:+") ||
            anchor.href.startsWith("mailto:")
          )
            return false;
          return anchor.href && anchor.target !== "_blank";
        });

        validAnchorELes.forEach((anchor) =>
          anchor.addEventListener("click", handleAnchorClick)
        );
      };

      const mutationObserver = new MutationObserver(handleMutation);
      mutationObserver.observe(document, { childList: true, subtree: true });

      // eslint-disable-next-line @typescript-eslint/unbound-method
      window.history.pushState = new Proxy(window.history.pushState, {
        apply: (
          target,
          thisArg,
          argArray: [
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            data: any,
            unused: string,
            url?: string | URL | null | undefined,
          ]
        ) => {
          stopProgress();
          return target.apply(thisArg, argArray);
        },
      });

      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return styles;
  },
  () => true
);

TopProgressBar.displayName = "TopProgressBar";

export function useRouter() {
  const router = useNextRouter();
  const pathname = usePathname();

  function push(href: string, options?: NavigateOptions) {
    const targetUrl = new URL(href, location.href);
    const currentUrl = new URL(location.href);

    const hasSearchParams =
      targetUrl?.searchParams?.toString() !==
      currentUrl?.searchParams?.toString();

    const paramsChanged =
      hasSearchParams && targetUrl?.search !== currentUrl?.search;

    if (targetUrl.pathname === pathname && !paramsChanged) {
      return void Promise.resolve(true);
    }

    NProgress.start();

    return void router.push(href, options);
  }

  function replace(href: string, options?: NavigateOptions) {
    const targetUrl = new URL(href, location.href);

    if (targetUrl.pathname === pathname) {
      return void Promise.resolve(true);
    }

    NProgress.start();

    return void router.replace(href, options);
  }

  return { ...router, push, replace };
}
