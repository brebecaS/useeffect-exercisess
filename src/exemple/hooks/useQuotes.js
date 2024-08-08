import { useState, useEffect } from "react";

const useQuotes = () => {
  const [quotes, setQuotes] = useState([]);
  const [loadQuotes, setLoadQuotes] = useState(false);

  useEffect(() => {
    if (loadQuotes) {
      fetch("https://type.fit/api/quotes")
        .then((response) => response.json())
        .then((response2) => setQuotes(response2));
    }
  }, [loadQuotes]);
  return { quotes, setLoadQuotes };
};

export default useQuotes;
