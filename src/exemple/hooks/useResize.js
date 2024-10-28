import { useEffect, useState } from "react";

const useResize = () => {
  const [currentWidth, setCurrentWidth] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", (e) => {
      setCurrentWidth(window.innerWidth);
    });

    return () => {
      window.removeEventListener("resize", (e) => {
        setCurrentWidth(window.innerWidth);
      });
    };
  }, []);

  return currentWidth;
};

export default useResize;
