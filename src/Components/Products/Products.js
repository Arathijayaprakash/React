import * as React from "react";
import ProductItem from "./ProductItem";
import { useEffect } from "react";


export default function Products() {
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


