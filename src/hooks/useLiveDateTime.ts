import { useState, useEffect } from "react";

export function useLiveDateTime() {
  const [timeStr, setTimeStr] = useState<string>("");
  const [dateStr, setDateStr] = useState<string>("");

  useEffect(() => {
    const updateDateTime = () => {
      const now = new Date();
      
      // Formatted Time (e.g., 10:15 PM)
      const hours = now.getHours();
      const minutes = now.getMinutes();
      const ampm = hours >= 12 ? "PM" : "AM";
      const formattedHours = hours % 12 || 12;
      const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
      setTimeStr(`${formattedHours}:${formattedMinutes} ${ampm}`);

      // Formatted Date (e.g., Jul 28)
      const monthStr = now.toLocaleDateString("en-US", { month: "short" });
      const dayNum = now.getDate();
      setDateStr(`${monthStr} ${dayNum}`);
    };

    updateDateTime();
    const timer = setInterval(updateDateTime, 10000);
    return () => clearInterval(timer);
  }, []);

  return { timeStr, dateStr };
}
