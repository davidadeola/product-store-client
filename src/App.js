import { useState } from "react";
import ProductForm from "./components/product-form/productForm";
import ProductList from "./components/product-list/productList";

const DUMMY_PRODUCTS = [
  {
    id: 1,
    title: "This is the first Title",
    price: 400,
  },
  {
    id: 2,
    title: "This is the second Title",
    price: 450,
  },
  {
    id: 3,
    title: "This is the third Title",
    price: 700,
  },
  {
    id: 4,
    title: "This is the fourth Title",
    price: 390,
  },
];

function App() {
  const [allProducts, setAllProducts] = useState(DUMMY_PRODUCTS);
  return (
    <div className="app">
      <ProductForm products={allProducts} setAllProducts={setAllProducts} />
      <ProductList products={allProducts} setAllProducts={setAllProducts} />
    </div>
  );
}

export default App;
