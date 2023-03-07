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
            user: data[key].user,
           
          });
        }
        setOrders(orderData);
        
      };
      fetchOrders();
    }, [url]);
    return [orders];
}

export default useFetchOrders
