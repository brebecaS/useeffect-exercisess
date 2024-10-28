import { useState } from "react";
import useResize from "./hooks/useResize";

const Examplu4 = () => {
  const [count, setCount] = useState(0);
  const windowWidth = useResize();

  return (
    <div>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Buton apasat de <strong>{count}</strong> ori
      </button>
      <h1>{windowWidth}</h1>
    </div>
  );
};

export default Examplu4;
