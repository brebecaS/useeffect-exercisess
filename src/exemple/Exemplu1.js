import { useEffect, useState } from "react";
import "./style.css";

function Example1() {
  const [count, setCount] = useState(0);
  const [isDisabled, setIsDisabled] = useState(false);

  useEffect(() => {
    if (count === 5) alert("count a ajuns la 5");

    if (count === 10) {
      setIsDisabled(true);
    }
  }, [count]);

  return (
    <div>
      <h1>Exemplul 1</h1>
      <button onClick={() => setCount(count + 1)} disabled={isDisabled}>
        Buton apasat de <strong>{count}</strong> ori
      </button>
    </div>
  );
}

export default Example1;
