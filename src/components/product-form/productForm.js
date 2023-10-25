import React from "react";
import styles from "./productForm.module.css";

const ProductForm = () => {
  return (
    <div className={styles.form__container}>
      <h1>Add a New Product</h1>
      <div>
        <label className={styles.input__form} htmlFor="title">
          Title
          <input type="text" />
        </label>
        <label className={styles.input__form} htmlFor="price">
          Price
          <input type="number" />
        </label>
      </div>
      <button>ADD PRODUCT</button>
    </div>
  );
};

export default ProductForm;
