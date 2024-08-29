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
  const [posts, setPosts] = useState([]);
  const [loadPosts, setLoadPosts] = useState(false);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts").then(
      async (response) => {
        setPosts(await response.json());
      }
    );
  }, []);

  return (
    <main>
      <h1>Exemplul 2</h1>

      <button
        onClick={() => {
          setLoadPosts(!loadPosts);
        }}
      >
        Load Posts
      </button>

      {posts.map((post) => (
        <section key={post.id}>
          <h3>
            <span>{post?.title}</span>
          </h3>
          {post?.body}
        </section>
      ))}
    </main>
  );
}

export default Example2;
