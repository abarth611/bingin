import ColorThief, { RGBColor } from "colorthief";
import { useEffect, useState } from "react";

export const useGetColorPalette = (url: string) => {
  const [palette, setPalette] = useState<RGBColor[] | null>(null);

  const getPalette = (url: string) =>
    new Promise((resolve) => {
      const img = new Image();
      img.crossOrigin = "Anonymous";
      img.onload = () => {
        let colorThief = new ColorThief();
        setPalette(colorThief.getPalette(img));
        resolve(colorThief.getPalette(img));
      };
      img.src = url;
    });

  useEffect(() => {
    getPalette(url);
  }, [url]);

  return palette;
};
