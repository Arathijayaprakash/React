import React from 'react'
import classes from '../Products/Product.module.css'
import { Card } from '@mui/material';

const OrderItems = (props) => {
    const { user,title } = props;
    
  return (
    <div className={classes.products}>
    <ul className={classes.list}>
      <Card sx={{ maxWidth: 300 }} className={classes.item}>
        <h3>{user}</h3>
        <h3>{title}</h3>
         
      </Card>
    </ul>
  </div>
  )
}

export default OrderItems
