import React from 'react'
import { DUMMY_PRODUCTS } from './Products/DUMMYPRODUCTS'
import classes from './ProductDetail.module.css'

const ProductDetail = () => {
  return (
    <div className={classes.products}>
      <h2>Product Details</h2>
      {DUMMY_PRODUCTS.map((product)=>{
        return (
            <div className={classes.product} key={product.id}>
                <p>{product.title}</p>
                <img src={product.image} alt={product.title}></img>
                {product.price}
            </div>
        )
      })}
    </div>
  )
}

export default ProductDetail
