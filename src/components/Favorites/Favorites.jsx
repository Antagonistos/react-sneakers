import React from 'react'
import Item from '../Shop/Item/Item'
import style from './Favorites.module.css'
import emj from './img/emoj.jpg'

const Favorites = ({ fav, inCart, removeCard, inFav, removeFav, handlerSubmit }) => {

	return (
		<div className={style.wrapper}>
			<div>
				<a data-name='home' onClick={event => handlerSubmit(event)} className={style.button} > &lt;</a>
				<h1 className={style.title}>Мои закладки</h1>
			</div>
			{
				fav.length >= 1 ? <ul className={style.items}>
					{fav.map((item) =>
						<Item removeFav={removeFav} inFav={inFav} inCart={inCart} removeCard={removeCard} item={item} />
					)}
				</ul>
					:
					<div className={style.content} >
						<img src={emj} alt="" />
						<h1 className={style.title}>Закладок нет :(</h1>
						<p>Вы ничего не добавляли в закладки</p>
					</div>
			}

		</div >
	)
}

export default Favorites
