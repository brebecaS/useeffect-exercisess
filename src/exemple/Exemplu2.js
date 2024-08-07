import "./style.css";
import { useState, useEffect } from "react";

// "https://type.fit/api/quotes"
// GET POST PUT DELETE

function Example2() {
  const [quotes, setQuotes] = useState([]);
  const [loadQuotes, setLoadQuotes] = useState(false);
  const [count, setCount] = useState(0);

  useEffect(() => {
    fetch("https://type.fit/api/quotes")
      .then((response) => response.json())
      .then((response2) => setQuotes(response2));
  }, []);

  return (
    <main>
      <h1>Exemplul 2</h1>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Buton apasat de <strong>{count}</strong> ori
      </button>

      <button onClick={() => setLoadQuotes(true)}>Load Quotes</button>

      {quotes.map((quote) => (
        <section key={quote.text}>
          <h3>
            <span>“</span>
            {quote?.text}
          </h3>
          <i>- {quote?.author}</i>
        </section>
      ))}
    </main>
  );
}

export default Example2;
