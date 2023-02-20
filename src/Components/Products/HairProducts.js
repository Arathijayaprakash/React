import React from "react";
import { useEffect } from "react";
import ProductItem from "./ProductItem";

const HairProducts = () => {
  const [products, setProducts] = React.useState([]);
  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch(
        "https://ebeautyapp-55c72-default-rtdb.firebaseio.com/products.json"
      );
      const data=await response.json()
      const loadedProducts=[]
      for(const key in data){
        loadedProducts.push({
          id:key,
          title:data[key].title,
          price:data[key].price,
          category:data[key].category,
          image:data[key].image
        })
      }
      setProducts(loadedProducts)
    };
    fetchProducts()
  }, []);
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
