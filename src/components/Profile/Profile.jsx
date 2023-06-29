import React from 'react'
import Item from '../Shop/Item/Item'
import style from './Profile.module.css'

import emj from './img/emoj.jpg'

const Profile = ({ purchases, removeCard, removeInFav, inCart, inFav, handlerSubmit }) => {
	return (
		<div className={style.wrapper}>
			<div>
				<a data-name='home' onClick={event => handlerSubmit(event)} className={style.button} > &lt;</a>
				<h1 className={style.title}>Мои покупки</h1>
			</div>
			{
				purchases.length >= 1 ? <ul className={style.items}>
					{purchases.map((item) =>
						<Item removeFav={removeInFav} inFav={inFav} inCart={inCart} removeCard={removeCard} item={item} />
					)}
				</ul>
					:
					<div className={style.content} >
						<img src={emj} alt="" />
						<h1 className={style.title}>У вас нет заказов</h1>
						<p>Вы нищеброд? Оформите хотя бы один заказ.</p>
					</div>
			}

		</div >
	)
}

export default Profile
