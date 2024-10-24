import { useState, useEffect } from "react";
import "./style.css";

// O componenta se rerandeaza (se reexecuta codul din componenta) de cate ori i se schimba state-ul (ex: useState) sau props-urile
function Example0() {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);

  // va rula de fiecare data cand count isi schimba valoarea
  useEffect(() => {
    console.log("Efect dependent de count 1 => ", count);
  }, [count]);

  //   // va rula de fiecare data cand count2 isi schimba valoarea
  useEffect(() => {
    console.log("Efect dependent de count2 => ", count2);
    // setCount2(count2 + 1); => will cause infinite loop
  }, [count2]);

  //   // va rula de fiecare data cand count SAU count2 isi schimba valoarea
  useEffect(() => {
    console.log("Efect dependent si de count si de count 2 =>", count, count2);
  }, [count, count2]);

  //   // va rula la fiecare randare
  useEffect(() => {
    console.log("fara array de dependente");
  });

  //   // va rula doar la prima randare (cand se incarca componenta)
  useEffect(() => {
    console.log("cu array de dependente gol");
  }, []);

  // 1. se schimba stae-ul => se rerandeaza => se executa effectul
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
