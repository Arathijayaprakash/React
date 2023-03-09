import { useState, useEffect } from "react";

const useFetchOrders = (url) => {
    const [orders, setOrders] = useState([]);
 
    useEffect(() => {
      const fetchOrders = async () => {
        
        const response = await fetch(url);
        const data = await response.json();
        const orderData = [];
        for (const key in data) {
         
          orderData.push({
            id: key,
            title:data[key].cartProducts[0].title,
            image:data[key].cartProducts[0].image,
            user: data[key].user,
            price:data[key].cartProducts[0].price,
            totalPrice:data[key].cartProducts[0].totalPrice
           
          });
        }
        setOrders(orderData);
        
      };
      fetchOrders();
    }, [url]);
    return [orders];
}

export default useFetchOrders
