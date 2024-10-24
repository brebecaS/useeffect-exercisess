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
  const [posts, setPosts] = useState([]);
  const [shouldLoadPosts, setShouldLoadPosts] = useState(false);

  useEffect(() => {
    if (shouldLoadPosts === true)
      fetch("https://jsonplaceholder.typicode.com/posts")
        .then((response) => response.json())
        .then((decodedData) => setPosts(decodedData))
        .catch((error) => console.error(error));
  }, [shouldLoadPosts]);

  return (
    <main>
      <h1>Exemplul 2</h1>

      {/* <button onClick={() => setCount(count + 1)}>
        Buton apasat de <strong>{count}</strong> ori
      </button> */}

      <button
        onClick={() => {
          setShouldLoadPosts(true);
        }}
      >
        Load Posts
      </button>
      {posts.map((post) => (
        <section key={post.id}>
          <h3>
            <span>{post.title}</span>
          </h3>
          {post.body}
        </section>
      ))}
    </main>
  );
}

export default Example2;
