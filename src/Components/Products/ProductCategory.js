import React from 'react'
import { useParams } from 'react-router-dom'
import useFetch from '../useFetch'
import ProductItem from './ProductItem'

const ProductCategory = () => {
    
    const params=useParams()
    const [products]=useFetch("https://ebeautyapp-55c72-default-rtdb.firebaseio.com/products.json") 

    const filterdeProducts = products.filter(
      (product) => product.category === params.category
    ).map((item) => (
      <ProductItem
        key={item.id}
        category={item.category}
        image={item.image}
        price={item.price}
        title={item.title}
      />
    ));
  return (
    <div >
      {filterdeProducts}
    </div>
  )
}

export default ProductCategory
