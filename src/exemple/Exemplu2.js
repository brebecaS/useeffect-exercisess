import "./style.css";
import useExemplu2Hook from "./hooks/useExemplu2Hook";

// "https://jsonplaceholder.typicode.com/posts"
// GET POST PUT DELETE

// fetch quotes on load
// add quotes to the state
// fetch quotes on button click
// create quotes component
function Example2() {
  const { setShouldLoadPosts, posts } = useExemplu2Hook();

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
