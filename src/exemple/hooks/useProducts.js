import { useState, useEffect } from "react";

const useProducts = () => {
  const [products, setProducts] = useState([]);
  const [loadProducts, setLoadProducts] = useState(false);

  useEffect(() => {
    if (loadProducts === true)
      fetch("https://fakestoreapi.com/products").then(async (response) => {
        const productsResponse = await response.json();
        setProducts(productsResponse);
      });
  }, [loadProducts]);

  return { products: products, setLoadProducts: setLoadProducts };
};

export default useProducts;
