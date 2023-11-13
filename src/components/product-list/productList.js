import React from "react";
import styles from "./productList.module.css";

const ProductList = ({ products, setAllProducts }) => {
  const handleDelete = (id) => {
    const updatedProducts = products.filter((product) => {
      return id !== product.id;
    });
    setAllProducts(updatedProducts);
  };
  return (
    <ul className={styles.all__products}>
      {products.map((product) => (
        <li key={product.id}>
          <p>{product.title}</p>
          <span>
            ${product.price}
            <button
              className={styles.delete__product}
              onClick={() => handleDelete(product.id)}
            >
              X
            </button>
          </span>
        </li>
      ))}
    </ul>
  );
};

export default ProductList;
