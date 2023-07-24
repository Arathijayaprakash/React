import React from 'react'
import StoreLocator from '../StoreLocator'
import '../StoreLocator.css'

const Stores = () => {
  return (
    <div className='store-user'>
    <div className='head'>
        <h2>Find Glammy Stores Near You</h2>
    </div>
      <StoreLocator/>
    </div>
  )
}

export default Stores
