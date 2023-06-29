import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Modal from '../../Modal/Modal'
import navStyle from './navigator.module.css'
const Navigator = ({ cart, totalPrice, removeInCart, handlerSubmit, addInPurchases }) => {

	const [modal, setModal] = useState(false)



	return (
		<>
			<ul className={navStyle.nav}>
				<a href='#' onClick={() => setModal(true)} className={navStyle.item} id={navStyle.cart}>{totalPrice} руб.</a>
				<a data-name='fav' onClick={event => handlerSubmit(event)} className={navStyle.item} id={navStyle.fav}></a>
				<a data-name='profile' onClick={event => handlerSubmit(event)} className={navStyle.item} id={navStyle.profile}></a>
			</ul>
			{
				modal ? <Modal addInPurchases={addInPurchases} removeInCart={removeInCart} totalPrice={totalPrice} cart={cart} setModal={setModal} /> : ''
			}

		</>
	)
}

export default Navigator
