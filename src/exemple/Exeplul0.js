import { useEffect, useState } from "react";
import "./style.css";

// O componenta se rerandeaza (se reexecuta codul din componenta) de cate ori i se schimba state-ul (ex: useState) sau props-urile
function Example0() {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);

  useEffect(() => {
    console.log("fara array de dependente"); // =>  ruleaza la firecare randare
  });

  useEffect(() => {
    console.log("cu array de dependente gol"); //=> ruleaza doar la prima randare (cand se incarca componenta)
  }, []);

  //va rula ori de cate ori de schimba count
  useEffect(() => {
    console.log("dependent de count 1 ", count);
  }, [count]);

  // va rula ori de cate ori de schimba count2
  useEffect(() => {
    console.log("dependent de count 2", count2);
  }, [count2]);

  // va rula ori de cate ori de schimba count SAU count2
  useEffect(() => {
    console.log("dependent de count 1 si count 2", count, count2);
  }, [count, count2]);

  return (
    <div>
      <h1>Exemplul 0</h1>
      <button onClick={() => setCount(count + 1)}>
        Buton apasat de <strong>{count}</strong> ori
      </button>
      <button onClick={() => setCount2(count2 + 1)}>
        Buton2 apasat de <strong>{count2}</strong> ori
      </button>
    </div>
  );
}

export default Example0;
