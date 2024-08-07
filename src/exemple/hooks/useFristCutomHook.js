import { useState, useEffect } from "react";

const useFirstCustomHook = () => {
  const [loadProducts, setLoadProducts] = useState(false);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    if (loadProducts)
      fetch("https://fakestoreapi.com/products")
        .then((response) => response.json())
        .then((response2) => {
          setProducts(response2);
        });
  }, [loadProducts]);

  return { products: products, loadProductFunction: setLoadProducts };
};

export default useFirstCustomHook;
