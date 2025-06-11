import { useEffect } from "react";

export const useScroll = (
  cb: () => Promise<void>,
  percentPositionToExecuteCallback: number = 95
) => {
  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    const totalPosition =
      document.documentElement.scrollHeight - window.innerHeight;

    const percentPosition = (100 * scrollPosition) / totalPosition;

    if (percentPosition > percentPositionToExecuteCallback) {
      cb();
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
};
