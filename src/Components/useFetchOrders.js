import { useState, useEffect } from "react";

const useFetchOrders = (url) => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      const response = await fetch(url);
      const data = await response.json();
      const orderData = [];
      for (const key in data) {
        const cartProducts = data[key].cartProducts;
        for (let i in cartProducts) {
          orderData.push({
            id: key,
            title: data[key].cartProducts[i].title,
            image: data[key].cartProducts[i].image,
            price: data[key].cartProducts[i].price,
            quantity:data[key].cartProducts[i].quantity,
            totalPrice: data[key].cartProducts[i].totalPrice,
            user: data[key].user,
          });
        }
      }
      setOrders(orderData);
    };
    fetchOrders();
  }, [url]);
  return [orders];
};

export default useFetchOrders;
