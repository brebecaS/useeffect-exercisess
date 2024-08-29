import "./style.css";
import useQuotes from "./hooks/useQuotes";

// "https://type.fit/api/quotes"
// GET POST PUT DELETE

// fetch quotes on load
// add quotes to the state
// fetch quotes on button click
function Example2() {
  const quotes = [];

  return (
    <main>
      <h1>Exemplul 2</h1>

      {/* <button onClick={() => {}}>Load Quotes</button> */}

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
