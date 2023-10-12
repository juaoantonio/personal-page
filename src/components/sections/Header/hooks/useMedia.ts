import { useEffect, useState } from "react";

export const useMedia = (media: string) => {
  const [match, setMatch] = useState<null | Boolean>(null);

  useEffect(() => {
    function changeMatch() {
      const { matches } = window.matchMedia(media);
      setMatch(matches);
    }

    changeMatch();

    window.addEventListener("resize", changeMatch);
    return () => {
      window.removeEventListener("resize", changeMatch);
    };
  }, [media]);

  return match;
};
