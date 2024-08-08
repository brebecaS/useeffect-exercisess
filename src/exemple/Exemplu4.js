import { useEffect, useState } from "react";

const Examplu4 = () => {
  const [count, setCount] = useState(0);
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

  return (
    <div>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Buton apasat de <strong>{count}</strong> ori
      </button>
      <h1>{currentWidth}</h1>
    </div>
  );
};

export default Examplu4;
