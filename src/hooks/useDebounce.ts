import { useEffect, useState } from "react";

export const useDebounce = (value: string, delay: number = 500) => {
  let timeout: number;
  const [debouncedValue, setDebouncedValue] = useState("");

  useEffect(() => {
    timeout = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => clearTimeout(timeout);
  }, [value, delay]);

  return debouncedValue;
};
