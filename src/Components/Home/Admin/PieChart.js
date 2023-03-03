import React from "react";
import { Pie, PieChart, Cell, Legend } from "recharts";
import useFetch from "../../useFetch";

const StatisticChart = () => {
  const [products] = useFetch(
    "https://ebeautyapp-55c72-default-rtdb.firebaseio.com/products.json"
  );
  const [users] = useFetch(
    "https://ebeautyapp-55c72-default-rtdb.firebaseio.com/users.json"
  );
  const [orders] = useFetch(
    "https://ebeautyapp-55c72-default-rtdb.firebaseio.com/orders.json"
  );
  const totalProducts = products.length;
  const totalUsers=users.length;
  const totalOrders=orders.length;
  
  const colors = ["#0088FE", "#00C49F", "#FFBB28"];
  const data = [
    { name: "orders", value: totalOrders },
    { name: "Customers", value: totalUsers },
    { name: "Products", value: totalProducts },
  ];
  return (
    <PieChart width={500} height={500}>
    
      <Pie
        data={data}
        dataKey="value"
        cx="50%"
        cy="50%"
        outerRadius={120}
        fill="#8884d8"
        color="#000000"
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
        ))}
      </Pie>
      <Legend />
    </PieChart>
  );
};


export default StatisticChart;
