import "./style.css";
import useQuotes from "./hooks/useQuotes";

// "https://jsonplaceholder.typicode.com/posts"
// GET POST PUT DELETE

// fetch quotes on load
// add quotes to the state
// fetch quotes on button click
// create quotes component
function Example2() {
  const posts = [{ title: "Title", body: "Body" }];

  return (
    <main>
      <h1>Exemplul 2</h1>

      {/* <button onClick={() => {}}>Load Quotes</button> */}

      {posts.map((post) => (
        <section key={post.text}>
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
