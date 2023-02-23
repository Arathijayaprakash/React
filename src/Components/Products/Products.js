import * as React from "react";
import ProductItem from "./ProductItem";
import useFetch from "../useFetch";



export default function Products() {
  const [products]=useFetch("https://ebeautyapp-55c72-default-rtdb.firebaseio.com/products.json")  
  const productList = products.map((product) => (
    <ProductItem
      key={product.id}
      id={product.id}
      title={product.title}
      image={product.image}
      price={product.price}
      category={product.category}
      quantity={product.quantity}
    />
  ));
  return <div>{productList}</div>;
}


