import React from 'react'
import './ProductCard.css'

export default function Product_Card({image, title, rarity}) {
  return (
    <div className='card'>
      <img src={image} style={{width:150, height:160, borderTopLeftRadius:5, borderTopRightRadius:5}}/>
      <div className='desc'>
        <div className='titletext'>
          {title}
        </div>
        <div className='raritytext'>
          Rarity: {rarity}
        </div>
        <div className='stakebutton'>
          <div className='staketext'>
            Stake
          </div>

        </div>
      </div>
      
    </div>
  )
}
