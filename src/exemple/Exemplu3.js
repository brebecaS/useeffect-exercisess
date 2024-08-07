import "./style.css";
import { useState, useEffect } from "react";
import useFirstCustomHook from "./hooks/useFristCutomHook";

// "https://fakestoreapi.com/products"
// GET POST PUT DELETE

function Example3() {
  const { loadProductFunction, products } = useFirstCustomHook();

  return (
    <main>
      <h1>Exemplul 3</h1>

      <button onClick={() => loadProductFunction(true)}>Load Products</button>

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
