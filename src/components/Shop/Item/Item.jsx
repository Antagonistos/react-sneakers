import React, { useState } from 'react'
import fav from './img/fav.svg'
import favActive from './img/favActive.svg'

import './item.css'


import img from './img/item-img-1.jpg'

console.log(img)
const Item = ({ item, inCart, removeCard, inFav, removeFav }) => {

	const [addFav, setAddFav] = useState(false)
	const [addCart, setAddCart] = useState(false)

	function addInCart() {
		addCart ? setAddCart(false) : setAddCart(true)
		item.CartOn ? removeCard(item, addCart) : inCart(item, addCart)
	}

	function addInFav() {
		addFav ? setAddFav(false) : setAddFav(true)
		item.FavOn ? removeFav(item, addFav) : inFav(item, addFav)
	}


	return (
		<li className='item' >
			<div className='content'>
				<button onClick={addInFav} className={item.FavOn ? `btn btn-fav-active` : 'btn'} id='fav'><img src={item.FavOn ? favActive : fav} alt="" /></button>
				<img src={img} className='item-img' alt="" />
				<h4 className="title">
					{item.title}
				</h4>
				<div className="price">
					<p className="text">
						<span>Цена:</span>
						<br />
						{item.price} руб.
					</p>
					<button className={item.CartOn ? 'button buttonOn' : 'button'} onClick={addInCart}></button>
				</div>
			</div>
		</li >
	)
}

export default Item
