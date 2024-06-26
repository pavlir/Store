import React from 'react'
import './ContentsView.css'
import { ShopItem } from '../../components/ShopItem/ShopItem'
import { ShopCard } from '../../components/ShopCard/ShopCard'

export const ListView = (props) => {
  return (
    <div className='list-view'>
      {
        props.items.map((item, index) => {
          return <ShopItem 
              key={index} 
              name={item.name}
              price={item.price}
              color={item.color}
              img={item.img}
          />
        })
      }
    </div>
  )
}

export const CardsView = (props) => {
    return (
      <div className='cards-view'>
        {
          props.cards.map((card, index) => {
            return <ShopCard 
                key={index} 
                name={card.name}
                price={card.price}
                color={card.color}
                img={card.img}
            />
          })
        }
      </div>
    )
}