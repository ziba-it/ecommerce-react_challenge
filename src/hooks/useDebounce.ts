import { useEffect, useState } from "react";

export const useDebounce = (value: string, delay = 300) => {
  const [debouncedValue, setDebouncedValue] = useState("");

  useEffect(() => {
    const timeout = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);
    return () => clearTimeout(timeout);
  }, [value, delay]);

  return debouncedValue;
};
