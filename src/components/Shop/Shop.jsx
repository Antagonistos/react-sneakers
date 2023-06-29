import React from 'react'
import './shop.css'
import Item from './Item/Item'
const Shop = ({ shop, title, inCart, removeCard, addInFav, removeInFav }) => {
	const sum = 5
	return (
		<div className='shop'>
			<h1>{title}</h1>
			<ul className='items'>
				{shop.map((item) =>
					<Item key={item.id} removeFav={removeInFav} inFav={addInFav} removeCard={removeCard} inCart={inCart} item={item} />
				)}
			</ul>
		</div>
	)
}

export default Shop
