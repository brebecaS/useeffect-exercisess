import "./style.css";
import useExemplu2hook from "./hooks/useExemplu2hook";
import { useState, useEffect } from "react";

// "https://type.fit/api/quotes"
// GET POST PUT DELETE

function Example2() {
  const [quotes, setQuotes] = useState([]);
  const [loadQuotes, setLoadQuotes] = useState(false);

  useEffect(() => {
    if (loadQuotes === true)
      fetch("https://type.fit/api/quotes")
        .then(async (response) => {
          const quotesResponse = await response.json();
          setQuotes(quotesResponse);
        })
        .catch((err) => console.log(err));
  }, [loadQuotes]);

  return (
    <main>
      <h1>Exemplul 2</h1>

      <button
        onClick={() => {
          setLoadQuotes(true);
        }}
      >
        Load Quotes
      </button>

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
