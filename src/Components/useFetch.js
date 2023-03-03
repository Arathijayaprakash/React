import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [products, setProducts] = useState([]);
 
  useEffect(() => {
    const fetchProducts = async () => {
      
      const response = await fetch(url);
      const data = await response.json();
      const loadedProducts = [];
      for (const key in data) {
        loadedProducts.push({
          id: key,
          title: data[key].title,
          price: data[key].price,
          category: data[key].category,
          image: data[key].image,
        });
      }
      setProducts(loadedProducts);
      
    };
    fetchProducts();
  }, [url]);
  return [products];
};

export default useFetch;
