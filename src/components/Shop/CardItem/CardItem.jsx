import React from 'react'
import img from './img/item-img-1.jpg'
import style from '../Item/item.css'

const CardItem = ({ item, removeInCart }) => {
	return (
		<li className='item cardItem' >
			<img src={img} className='item-img' alt="" />
			<div className='content'>
				<h4 className="title">
					{item.title}
				</h4>
				<div className="price">
					<p className="text">
						{item.price} руб.
					</p>
					<button onClick={() => removeInCart(item)} className='button buttonRemove'></button>
				</div>
			</div>
		</li >
	)
}

export default CardItem
