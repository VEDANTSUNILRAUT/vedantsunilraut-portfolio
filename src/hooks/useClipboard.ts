"use client";

import { useState, useCallback } from "react";
import { copyToClipboard } from "@/utils/clipboard";

export function useClipboard(timeout = 2000) {
  const [copied, setCopied] = useState(false);

  const copy = useCallback(
    async (text: string) => {
      const success = await copyToClipboard(text);
      if (success) {
        setCopied(true);
        setTimeout(() => setCopied(false), timeout);
      }
      return success;
    },
    [timeout]
  );

  return { copied, copy };
}
