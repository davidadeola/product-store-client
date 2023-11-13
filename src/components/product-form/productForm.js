import React, { useState } from "react";
import styles from "./productForm.module.css";

const ProductForm = ({ products, setAllProducts }) => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState();

  const newId = Math.floor(Math.random() * 10000) + 1;
  // console.log(newId);

  const handleSubmit = (e) => {
    e.preventDefault();
    setAllProducts([{ id: newId, title: title, price: price }, ...products]);
    setTitle("");
    setPrice("");
  };

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };
  const handlePriceChange = (e) => {
    setPrice(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form__container}>
      <h1>Add a New Product</h1>
      <div>
        <label className={styles.input__form} htmlFor="title">
          Title
          <input
            value={title}
            onChange={handleTitleChange}
            type="text"
            required
          />
        </label>
        <label className={styles.input__form} htmlFor="price">
          Price
          <input
            value={price}
            onChange={handlePriceChange}
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
