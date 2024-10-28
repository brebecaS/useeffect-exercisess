import "./style.css";
import useExemplu3Hook from "./hooks/useExemplu3Hook";

// "https://fakestoreapi.com/products"
// GET POST PUT DELETE

// fetch quotes on load
// add quotes to the state
// fetch quotes on button click
// create product component
function Example3() {
  const { products } = useExemplu3Hook();

  return (
    <main>
      <h1>Exemplul 3</h1>
      {/* <button onClick={() => {}}>Load Products</button> */}
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
