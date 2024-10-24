import "./style.css";
import useQuotes from "./hooks/useQuotes";
import { useEffect, useState } from "react";

// "https://jsonplaceholder.typicode.com/posts"
// GET POST PUT DELETE

// fetch quotes on load
// add quotes to the state
// fetch quotes on button click
// create quotes component
function Example2() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((decodedData) => console.log(decodedData))
      .catch((error) => console.error(error));
  }, []);

  return (
    <main>
      <h1>Exemplul 2</h1>

      <button onClick={() => setCount(count + 1)}>
        Buton apasat de <strong>{count}</strong> ori
      </button>

      <button>Load Posts</button>

      <section>
        <h3>
          <span>Title</span>
        </h3>
        body
      </section>
    </main>
  );
}

export default Example2;
