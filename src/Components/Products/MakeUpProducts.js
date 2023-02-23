import React from "react";
import useFetch from "../useFetch";
import ProductItem from "./ProductItem";

const MakeUpProducts = () => {
  const [products] = useFetch(
    "https://ebeautyapp-55c72-default-rtdb.firebaseio.com/products.json"
  );
  const makeupProducts = products
    .filter((product) => product.category === "makeup")
    .map((item) => (
      <ProductItem
        key={item.id}
        category={item.category}
        image={item.image}
        price={item.price}
        title={item.title}
      />
    ));
  return <div>{makeupProducts}</div>;
};

export default MakeUpProducts;
