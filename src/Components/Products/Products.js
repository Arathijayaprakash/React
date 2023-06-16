import * as React from "react";
import ProductItem from "./ProductItem";
import useFetch from "../useFetch";
import Pagination from "./Pagination";


export default function Products() {
  const [currentPage, setCurrentPage] = React.useState(1);
  const productsPerPage = 3;

  const [products] = useFetch(
    "https://ebeautyapp-55c72-default-rtdb.firebaseio.com/products.json"
  );
  console.log(products);
  const indexOfLast = currentPage * productsPerPage;
  const indexOfFirst = indexOfLast - productsPerPage;
  const currentProducts = products.slice(indexOfFirst, indexOfLast);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  

  const productList = currentProducts.map((product) => (
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
  return (
    <div>
      {productList}
      <Pagination
        productsPerPage={productsPerPage}
        totalProducts={products.length}
        paginate={paginate}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
}
