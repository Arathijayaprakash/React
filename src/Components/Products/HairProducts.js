import React from "react";
import useFetch from "../useFetch";
import ProductItem from "./ProductItem";

const HairProducts = () => {
  const [products]=useFetch("https://ebeautyapp-55c72-default-rtdb.firebaseio.com/products.json") 
  const hairProducts = products.filter(
    (product) => product.category === "hair"
  ).map((item) => (
    <ProductItem
      key={item.id}
      category={item.category}
      image={item.image}
      price={item.price}
      title={item.title}
    />
  ));
  return <div>{hairProducts}</div>;
};

export default HairProducts;
