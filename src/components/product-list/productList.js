import React from "react";
import styles from "./productList.module.css";

const ProductList = ({ products }) => {
  return (
    <ul className={styles.all__products}>
      {products.map((product) => (
        <li key={product.id}>
          <p>{product.title}</p>
          <span>${product.price}</span>
        </li>
      ))}
    </ul>
  );
};

export default ProductList;
