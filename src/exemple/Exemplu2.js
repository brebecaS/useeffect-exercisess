import "./style.css";
import useQuotes from "./hooks/useQuotes";

// "https://type.fit/api/quotes"
// GET POST PUT DELETE

function Example2() {
  const { quotes, setLoadQuotes } = useQuotes();

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
