"use client";

import { useEffect, useState } from "react";

const BASE_VISITOR_COUNT = 1428;
const STORAGE_KEY = "vr_portfolio_visitor_count";
const VISITED_SESSION_KEY = "vr_portfolio_visited_session";

export function useVisitorCount() {
  const [count, setCount] = useState<number>(BASE_VISITOR_COUNT);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    let isMounted = true;

    async function initVisitorCount() {
      let currentCount = BASE_VISITOR_COUNT;

      // Read from local storage if available
      try {
        const savedCount = localStorage.getItem(STORAGE_KEY);
        if (savedCount) {
          const parsed = parseInt(savedCount, 10);
          if (!isNaN(parsed) && parsed > currentCount) {
            currentCount = parsed;
          }
        }

        // Increment count once per session
        const hasVisited = sessionStorage.getItem(VISITED_SESSION_KEY);
        if (!hasVisited) {
          currentCount += 1;
          sessionStorage.setItem(VISITED_SESSION_KEY, "true");
          localStorage.setItem(STORAGE_KEY, currentCount.toString());
        }
      } catch {
        // Fallback for SSR / restricted storage environments
      }

      // Try external hit counter API (fails gracefully if blocked by adblockers/CORS)
      try {
        const res = await fetch(
          "https://api.counterapi.dev/v1/vedantsunilraut-portfolio/visits/up",
          { cache: "no-store" }
        );
        if (res.ok) {
          const data = await res.json();
          if (data && typeof data.count === "number" && data.count > 0) {
            currentCount = Math.max(currentCount, BASE_VISITOR_COUNT + data.count);
            try {
              localStorage.setItem(STORAGE_KEY, currentCount.toString());
            } catch {
              // Ignore storage write errors
            }
          }
        }
      } catch {
        // Fallback gracefully to local stored count
      }

      if (isMounted) {
        setCount(currentCount);
        setIsLoading(false);
      }
    }

    initVisitorCount();

    return () => {
      isMounted = false;
    };
  }, []);

  const formattedCount = count.toLocaleString();

  return { count, formattedCount, isLoading };
}
