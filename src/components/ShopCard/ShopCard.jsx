import React from 'react'
import './ShopCard.css'

export const ShopCard = (props) => {
  const {name, price, color, img} = props;
  return (
    <div className='shop-card'>
      <div className='shop-card-name'>{name}</div>
      <div className='shop-card-color'>{color}</div>
      <div className='shop-card-img'>
        <img src={img} alt="card image" />
      </div>
      <div className='shop-card-footer'>
        <div className='shop-card-price'>${price}</div>
        <div className='shop-card-btn'>
          <input type="button" value="Add to cart"/>
        </div>
      </div>
    </div>
  )
}
