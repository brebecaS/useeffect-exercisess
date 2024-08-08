import "./style.css";
import { useState, useEffect } from "react";
// "https://fakestoreapi.com/products"
// GET POST PUT DELETE
function Example3() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products").then(async (response) => {
      const productsResponse = await response.json();
      setProducts(productsResponse);
      console.log(productsResponse);
    });
  }, []);

  return (
    <main>
      <h1>Exemplul 3</h1>
      <button onClick={() => {}}>Load Products</button>
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
