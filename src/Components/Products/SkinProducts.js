import React from "react";
import useFetch from "../useFetch";
import ProductItem from "./ProductItem";

const SkinProducts = () => {
  const [products] = useFetch(
    "https://ebeautyapp-55c72-default-rtdb.firebaseio.com/products.json"
  );
  const skinProducts = products.filter(
    (product) => product.category === "skin"
  ).map((item) => (
    <ProductItem
      key={item.id}
      category={item.category}
      image={item.image}
      price={item.price}
      title={item.title}
    />
  ));
  return <div>{skinProducts}</div>;
};

export default SkinProducts;
