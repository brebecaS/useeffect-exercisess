import "./style.css";
import useProducts from "./hooks/useProducts";

// "https://fakestoreapi.com/products"
// GET POST PUT DELETE

function Example3() {
  const { products, setLoadProducts } = useProducts();

  return (
    <main>
      <h1>Exemplul 3</h1>
      <button
        onClick={() => {
          setLoadProducts(true);
        }}
      >
        Load Products
      </button>
      {products.map((product) => {
        return (
          <section key={product.id}>
            <h3>{product.title}</h3>
            <i>{product.price}</i>
          </section>
        );
      })}
    </main>
  );
}
export default Example3;
