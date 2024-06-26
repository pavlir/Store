import React from 'react'
import './ShopItem.css'

export const ShopItem = (props) => {
  const {name, price, color, img} = props;
  return (
    <div className='shop-item'>
      <div className='shop-item-img'>
        <img src={img} alt="item image" />
      </div>
      <div className='shop-item-name'>{name}</div>
      <div className='shop-item-color'>{color}</div>
      <div className='shop-item-price'>${price}</div>

      <div className='shop-item-btn'>
        <input type="button" value="Add to cart"/>
      </div>
    </div>
  )
}
