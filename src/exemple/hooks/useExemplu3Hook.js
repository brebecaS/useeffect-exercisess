import { useState, useEffect } from "react";
import useResize from "./useResize";

const useExemplu3Hook = () => {
  const [products, setProduct] = useState([]);
  const currentWidth = useResize();

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("https://fakestoreapi.com/products");

      const decodeData = await response.json();
      setProduct(decodeData);
    };

    fetchData();
  }, []);

  return { products };
};

export default useExemplu3Hook;
