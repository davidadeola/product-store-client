import React, { useState } from "react";
import styles from "./productForm.module.css";

const ProductForm = ({ products, setAllProducts }) => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState();

  const newId = Math.floor(Math.random() * 10000) + 1;
  // console.log(newId);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newProducts = setAllProducts([
      { id: newId, title: title, price: price },
      ...products,
    ]);
    setTitle("");
    setPrice("");
    console.log(newProducts);
  };

  // const handleTitleChange = (e) => {}

  return (
    <form onSubmit={handleSubmit} className={styles.form__container}>
      <h1>Add a New Product</h1>
      <div>
        <label className={styles.input__form} htmlFor="title">
          Title
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            type="text"
            required
          />
        </label>
        <label className={styles.input__form} htmlFor="price">
          Price
          <input
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            type="number"
            required
          />
        </label>
      </div>
      <button>ADD PRODUCT</button>
    </form>
  );
};

export default ProductForm;
